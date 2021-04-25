<template>
  <form @submit.prevent="submit">
    <input value="111" type="text" placeholder="title" v-model="title" />
    <input value="222" type="text" placeholder="body" v-model="body" />
    <button class="post__link" type="submit">Create Post</button>
    <hr />
  </form>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  name: "postForm",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      const post = {
        title: this.title,
        body: this.body,
        id: Date.now(),
        userId: 0,
      };
      this.createPost(post);
      this.title = this.body = "";
      this.$router.push({ name: "Home", params: { value: post } });
    },
  },
};
</script>
