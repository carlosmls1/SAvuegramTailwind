<template>
  <Body></Body>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'
import Header from '@/components/Header'
import Body from "@/components/Body";

export default {
  components: {
    Body,
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>
