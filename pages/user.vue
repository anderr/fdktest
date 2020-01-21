<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        v-model="user.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="user.surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>

    <b-btn @click="saveUserInfo(user)" variant="primary">Save</b-btn>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import utilities from '~/assets/js/utilities'

  export default {
    name: 'page-userinfo',
    data() {
      return {
        user: {
          name: '',
          surname: ''
        }
      }
    },
    created() {
      this.user = Object.assign({}, this.userInfo)
    },
    beforeRouteLeave(to, from, next) {
      if (!utilities.compareObjects(this.user, this.userInfo)) {
        let conf = confirm('Данные не сохранены, хотите покинуть страницу?')

        if (!conf) {
          next(false)
        } else {
          next()
        }
      } else {
        next()
      }
    },
    computed: {
      ...mapState('user', ['userInfo'])
    },
    methods: {
      ...mapActions('user', ['saveUserInfo'])
    }
  }
</script>
