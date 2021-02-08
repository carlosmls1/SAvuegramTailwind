<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <SideBar></SideBar>
    <main class="lg:col-span-9 xl:col-span-6">
      <Create></Create>
      <div class="mt-4" v-if="posts.length">
        <h1 class="sr-only">Recent Expenses</h1>
        <ul class="space-y-4" >
          <li class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
              v-for="post in posts"
              :key="post.id">
            <article aria-labelledby="question-title-81614">
              <div>
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">{{ post.userName }}</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#" class="hover:underline">{{ post.createdOn | formatDate }}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-2 text-sm text-gray-700 space-y-4">
                {{ post.content | trimLength }}
              </div>
              <div class="mt-6 flex justify-between space-x-8">
                <div class="flex space-x-6">
                    <span class="inline-flex items-center text-sm">
                      <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500" @click="likePost(post.id, post.likes)">
                        <!-- Heroicon name: solid/thumb-up -->
                        <ThumbUpIcon class="h-5 w-5"></ThumbUpIcon>
                        <span class="font-medium text-gray-900">{{ post.likes }}</span>
                        <span class="sr-only">likes</span>
                      </button>
                    </span>
                  <span class="inline-flex items-center text-sm">
                      <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500" @click="toggleCommentModal(post)">
                        <!-- Heroicon name: solid/chat-alt -->
                        <ChatAltIcon class="h-5 w-5"></ChatAltIcon>
                        <span class="font-medium text-gray-900">{{ post.comments }}</span>
                        <span class="sr-only">replies</span>
                      </button>
                    </span>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="no-results">There are currently no posts</p>
      </div>
    </main>
    <aside class="hidden xl:block xl:col-span-4">
      <div class="sticky top-4 space-y-4">
        <section aria-labelledby="trending-heading">
          <div class="bg-white rounded-lg shadow">
            <div class="p-6">
              <h2 id="trending-heading" class="text-base font-medium text-gray-900">
                Trending
              </h2>
              <div class="mt-6 flow-root">
                <ul class="-my-4 divide-y divide-gray-200">
                  <li class="flex py-4 space-x-3">
                    <div class="flex-shrink-0">
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">What books do you have on your bookshelf just to look smarter than you actually are?</p>
                      <div class="mt-2 flex">
                          <span class="inline-flex items-center text-sm">
                            <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <!-- Heroicon name: solid/chat-alt -->
                              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                              <span class="font-medium text-gray-900">291</span>
                            </button>
                          </span>
                      </div>
                    </div>
                  </li>

                  <li class="flex py-4 space-x-3">
                    <div class="flex-shrink-0">
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">Have you ever lied about your age to buy a kid&#039;s meal at a restaurant?</p>
                      <div class="mt-2 flex">
                          <span class="inline-flex items-center text-sm">
                            <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <!-- Heroicon name: solid/chat-alt -->
                              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                              <span class="font-medium text-gray-900">164</span>
                            </button>
                          </span>
                      </div>
                    </div>
                  </li>

                  <li class="flex py-4 space-x-3">
                    <div class="flex-shrink-0">
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">Does Santa Claus pay property taxes for his workshop at the North Pole?</p>
                      <div class="mt-2 flex">
                          <span class="inline-flex items-center text-sm">
                            <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <!-- Heroicon name: solid/chat-alt -->
                              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                              <span class="font-medium text-gray-900">133</span>
                            </button>
                          </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <a href="#" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  </div>
</template>

<script>
import { commentsCollection } from '@/firebase'
import { mapState } from 'vuex'
import moment from 'moment'
import {
  ThumbUpIcon,
  ChatAltIcon,
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  TrendingUpIcon
} from '@vue-hero-icons/outline'
import SideBar from "@/components/SideBar";
import Create from "@/components/Create";

export default {
  components: {
    Create,
    SideBar,
    ThumbUpIcon,
    ChatAltIcon,
  },
  data() {
    return {
      post: {
        content: ''
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: []
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
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal

      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post
      } else {
        this.selectedPost = {}
      }
    },
    likePost(id, likesCount) {
      this.$store.dispatch('likePost', { id, likesCount })
    },
    async viewPost(post) {
      const docs = await commentsCollection.where('postId', '==', post.id).get()

      docs.forEach(doc => {
        let comment = doc.data()
        comment.id = doc.id
        this.postComments.push(comment)
      })

      this.fullPost = post
      this.showPostModal = true
    },
    closePostModal() {
      this.postComments = []
      this.showPostModal = false
    }
  },
  filters: {
    formatDate(val) {
      if (!val) { return '-' }

      let date = val.toDate()
      return moment(date).fromNow()
    },
    ShowUser(){

    },
    trimLength(val) {
      if (val.length < 200) { return val }
      return `${val.substring(0, 200)}...`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
