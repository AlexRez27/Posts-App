<template>
  <form @submit.prevent="submit">
    <input value="111" type="text" placeholder="title" v-model="title" />
    <input value="222" type="text" placeholder="body" v-model="body" />
    <button class="post__link" type="submit">Create Post</button>
  </form>
</template>

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
      this.title = this.body = "";
      this.$router.push({ name: "Home", params: { value: post } });
    },
  },
};
</script>

<style lang="scss">
form input {
  padding-left: 10px !important;
  &::placeholder {
    color: #000;
  }
}
</style>
