<template>
  <div>
    <!-- <router-link to="/PostDetail"> -->
    <Loader v-if="loading" />
    <div v-else class="post">
      <Posts v-for="(post, i) in allPosts" :key="i + 1" :post="allPosts[i]" />
    </div>
    <sliding-pagination
      :current="currentPage"
      :total="totalPages"
      @page-change="pageChangeHandler"
    ></sliding-pagination>
    <router-link to="/PostForm"> <button class="post__link">Create Post</button> </router-link>
    <router-link to="/UserTable"> <button class="post__link">Table of users</button> </router-link>
    <!-- <router-view /> -->
    <!-- </router-link> -->
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
      // ...
      currentPage: 1,
      totalPages: 10,
      loading: true,
      postsCount: 0,
      isMobile: false,
    };
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations(["createPost"]),
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
      const params = {
        pageNumber: (this.currentPage - 1) * 10,
      };
      this.getPosts(params);
      this.loading = false;
    },
    lazyLoad() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow && this.isMobile) {
          const params = {
            pageNumber: 0,
            limit: this.allPosts.length + 10,
          };
          this.getPosts(params);
        }
      };
    },
    onResize() {
      window.onresize = () => {
        if (window.innerWidth < 768) {
          this.isMobile = true;
          this.lazyLoad();
        } else {
          this.isMobile = false;
        }
        if (this.$route.params.value) {
          this.createPost(this.$route.params.value);
        }
      };
    },
  },
  mounted() {
    this.loading = false;
    this.onResize();
    //console.log(this.allPosts);

    this.getPosts({});
    // if (this.$route.params.value) {
    //   this.createPost(this.$route.params.value);
    // }
    if (window.innerWidth < 768) {
      this.isMobile = true;
      this.lazyLoad();
    }
    console.log(this.allPosts);
  },
};
</script>