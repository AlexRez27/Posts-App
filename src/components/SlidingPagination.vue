<template>
  <sliding-pagination
    :current="currentPage"
    :total="totalPages"
    @page-change="pageChangeHandler"
  ></sliding-pagination>
</template>

<script>
import SlidingPagination from "vue-sliding-pagination";

export default {
  name: "SlidingPagination",
  components: {
    SlidingPagination,
  },
  data() {
    return {
      // ...
      currentPage: 1,
      totalPages: 10,
    };
  },
  methods: {
    // ...
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
    },
  },
};
</script> 
 
<style lang="css">
.pagination {
}
.page-item {
}
</style> 

