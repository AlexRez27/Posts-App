<template>
  <div >
    <modal name="userinfo">
      <div class="basic-modal">
        <h2 class="title"> {{user.name}} </h2>
        <p><b>Company Name:</b> {{allInfo.name}}  </p>
        <p><b>Company catch phrase:</b> {{ allInfo.catchPhrase }} </p>
        <button class="button post__link" type="button" @click="close">Close Modal</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { Modal, POP } from 'vuex-modal'
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  props:{
      user:{
        type: Object,
        required: true
      }
  },
  computed: mapGetters(["allInfo"]),
  methods: {
    close () {
      this.$store.dispatch(POP)
      this.$parent.isModal = false
    },
     ...mapMutations(["showUserInfo"]),
     ...mapActions(["getUserInfo"])
  },
  mounted(){
    this.getUserInfo(this.user.id)
    console.log(this.allInfo)   
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
@import "~vuex-modal/dist/vuex-modal.css";
</style>

