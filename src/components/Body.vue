<template>
  <div class="min-h-screen bg-gray-100">
    <Header v-if="showNav"></Header>
    <div v-bind:class="{'py-0': !showNav, 'py-10': showNav}">
      <router-view/>
    </div>
    <FlashMessage></FlashMessage>
  </div>
</template>

<script>
import Header from "@/components/Header";
import FlashMessage from "@/components/FlashMessage"
import {mapState} from "vuex";

export default {
name: "Body",
  components: {Header,FlashMessage},
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>

<style scoped>

</style>