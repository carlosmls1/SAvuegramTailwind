<template>
  <div class="px-4 sm:px-0">
    <div>

      <form @submit.prevent>
        <t-textarea v-model.trim="post.content" name="my-textarea" />
        <button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      post: {
        content: ''
      },
    }
  },
  computed: {
    ...mapState(['userProfile', 'posts'])
  },
  methods: {
    createPost() {
      this.$store.dispatch('createPost', { content: this.post.content })
      this.post.content = ''
    },
  },
  filters: {
    trimLength(val) {
      if (val.length < 200) { return val }
      return `${val.substring(0, 200)}...`
    }
  }
}
</script>

<style scoped>

</style>