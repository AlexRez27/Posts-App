<template>
  <div class="container">
    <div>
      <router-link to="/PostForm">
        <button class="post__link">Create Post</button>
      </router-link>
      <router-link to="/UserTable">
        <button class="post__link">Table of users</button>
      </router-link>
    </div>
    <Loader v-if="loading" />
    <div v-else class="post">
      <Posts v-for="(post, i) in Posts" :key="i + 1" :post="Posts[i]" />
    </div>
    <sliding-pagination
      :current="currentPage"
      :total="totalPages"
      @page-change="pageChangeHandler"
    ></sliding-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import SlidingPagination from "vue-sliding-pagination";
import Loader from "@/components/Loader";
import Posts from "@/components/Posts";

export default {
  name: "Home",
  components: {
    SlidingPagination,
    Loader,
    Posts,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
      loading: true,
      postsCount: 0,
      isMobile: false,
      BreakPoint: 768,
      Posts: [],
    };
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations(["showPosts"]),
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
      const params = {
        pageNumber: (this.currentPage - 1) * 10,
      };
      this.getPosts(params);
      this.Posts = this.allPosts;
      this.loading = false;
      console.log(this.Posts);
    },
    async setPosts(params) {
      await this.getPosts(params);
      for (let i = 0; i < this.allPosts.length; i++) {
        this.Posts.unshift(this.allPosts[i]);
      }
    },
    lazyLoad() {
      window.onscroll = () => {
        if (
          document.documentElement.scrollTop + window.innerHeight >=
            document.body.scrollHeight &&
          this.isMobile
        ) {
          const params = {
            pageNumber: 0,
            limit: this.allPosts.length + 10,
          };
          this.setPosts(params);
        }
      };
    },
    onResize() {
      window.onresize = () => {
        if (window.innerWidth < this.BreakPoint) {
          this.isMobile = true;
          this.lazyLoad();
        } else {
          this.isMobile = false;
        }
      };
    },
  },
  mounted() {
    this.setPosts({});
    this.loading = false;
    this.onResize();
    if (window.innerWidth < this.BreakPoint) {
      this.isMobile = true;
      this.lazyLoad();
    }
    if (this.$route.params.value) {
      console.log(this.Posts);
      this.Posts.push(this.$route.params.value);
    }
  },
};
</script>