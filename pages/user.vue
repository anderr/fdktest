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
  import { mapState, mapMutations, mapActions } from 'vuex'
  import utilities from '~/assets/js/utilities'

  export default {
    name: 'page-userinfo',
    created() {
      if (this.$cookies.get('user')) {
        this.user = this.$cookies.get('user')
      }
    },
    beforeRouteLeave(to, from, next) {
      if (!utilities.compareObjects(this.$cookies.get('user'), JSON.stringify(this.user))) {
        let conf = confirm('Данные не сохранены, хотите покинуть страницу?')

        if (!conf) {
          next(false)
        } else {
          this.user = this.$cookies.get('user')

          next()
        }
      } else {
        next()
      }
    },
    computed: {
      ...mapState('user', ['userInfo']),

      user: {
        get() {
          return this.userInfo
        },
        set(val) {
          this.setUserInfo(val)
        }
      }
    },
    methods: {
      ...mapActions('user', ['saveUserInfo']),

      ...mapMutations('user', ['setUserInfo'])
    }
  }
</script>
