<template>
  <div @click="openDetails(post)" class="post__item">
    <h2>{{ post.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      id: Number,
      title: String,
      body: String,
      userId: Number,
    },
  },
  mounted() {},
  methods: {
    openDetails(e) {
      this.$router.push({ name: "PostDetail", params: { value: e } });
    },
  },
};
</script>
