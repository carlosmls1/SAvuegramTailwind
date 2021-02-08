<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <SideBar></SideBar>
    <main class="lg:col-span-10 xl:col-span-10">
      <div class="">
        <h1 class="sr-only">Settings</h1>
        <div class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
          <form @submit.prevent>

            <button class=""
                    @click="click1">
              Upload
            </button>
            <input type="file" ref="input1"
                   style="display: none"
                   @change="previewImage" accept="image/*" >
            <div v-if="imageData!=null">
              <img class="preview" height="268" width="356" :src="avatar"/>
              <br>
            </div>

            <label for="name">Name</label>
            <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />

            <label for="title">Job Title</label>
            <input v-model.trim="title" type="text" :placeholder="userProfile.title" id="title" />

            <button @click="updateProfile()" class="button">Update Profile</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import SideBar from "@/components/SideBar";
import { Bus } from '../main';

export default {
  components: {SideBar},
  data() {
    return {
      name: '',
      title: '',
      showSuccess: false,
      avatar: '',
      imageData: null
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    click1() {
      this.$refs.input1.click()
    },

    previewImage(event) {
      this.uploadValue=0;
      this.avatar=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },

    onUpload(){
      this.avatar=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.avatar =url;
              console.log(this.avatar)
            });
          }
      );
    },
    sendMessage() {
      Bus.$emit('flash-message', this.message);

      this.message = {
        text: null,
        type: 'success',
      }
    },
    updateProfile() {
      console.log(this.avatar)
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        title: this.title !== '' ? this.title : this.userProfile.title,
        avatar: this.avatar !== '' ? this.avatar : this.userProfile.avatar,
      })

      this.name = ''
      this.title = ''

      this.showSuccess = true
      this.message={
        text: 'Perfil Actualizado',
        type: 'success',
      }
      this.sendMessage()

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    }
  }
}
</script>
