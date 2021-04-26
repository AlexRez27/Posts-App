<template>
  <div class="post__detail">
    <h2 class="post__title">Post Info</h2>
    <h3>{{ postInfo.title }}</h3>
    <p>{{ postInfo.body }}</p>
    <h4>Comments:</h4>
    <ul>
      <li v-for="comment of allComments" :key="comment.id">
        <b>{{ comment.name }}</b>
        - {{ comment.body }}<br />
        (<em>{{ comment.email }}</em
        >)
      </li>
    </ul>
    <router-link to="/">
      <button class="post__link">Back to home</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "PostDetail",
  data() {
    return {
      postInfo: {},
    };
  },
  computed: mapGetters(["allDetails", "allComments"]),
  created() {
    this.showDetails(this.$route.params.value);

    this.postInfo.userId = this.allDetails[
      this.allDetails.findIndex((x) => x.name == "userId")
    ].value;
    this.postInfo.id = this.allDetails[
      this.allDetails.findIndex((x) => x.name == "id")
    ].value;
    this.postInfo.title = this.allDetails[
      this.allDetails.findIndex((x) => x.name == "title")
    ].value;
    this.postInfo.body = this.allDetails[
      this.allDetails.findIndex((x) => x.name == "body")
    ].value;
    this.getPostDetail(this.postInfo.id);
  },
  methods: {
    ...mapMutations(["showDetails"]),
    ...mapActions(["getPostDetail"]),
  },
};
</script>