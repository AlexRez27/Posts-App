<template>
  <div class="table">
    <table class="table__content">
      <tbody>
        <tr>
          <th>username</th>
          <th>phone</th>
          <th>email</th>
          <th>website</th>
          <th>info</th>
        </tr>
        <tr v-for="user of allUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
          <td class="table__btn">
            <button
              class="table__getinfo table__getinfo--center"
              @click="open(user.id - 1)"
            >
              User Info
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalInfo v-if="isModal" :user="user" />
    <router-link to="/">
      <button class="post__link">Back to home</button>
    </router-link>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import ModalInfo from "@/components/ModalInfo";
import { PUSH } from "vuex-modal";

export default {
  data() {
    return {
      user: {
        name: "",
        id: 0,
      },
      isModal: false,
    };
  },
  components: {
    ModalInfo,
  },
  computed: mapGetters(["allUsers"]),
  methods: {
    ...mapActions(["getUsers", "getUserInfo"]),
    ...mapMutations(["showUsers"]),
    open(id) {
      this.$store.dispatch(PUSH, { name: "userinfo" });
      this.user.name = this.allUsers[id].name;
      this.user.id = this.allUsers[id].id;
      this.isModal = true;
    },
  },
  mounted() {
    this.getUsers();
    // this.username.push(this.allUsers.username);
    // this.id.push(this.allUsers.id);
  },
};
</script>

<style >
@import "~materialize-css/dist/css/materialize.min.css";
</style>