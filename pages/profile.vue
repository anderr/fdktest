<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="profile.country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn @click="saveProfile(profile)" variant="primary">Save</b-btn>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import utilities from '~/assets/js/utilities'

  export default {
    name: 'page-profile',
    data() {
      return {
        profile: {
          country: ''
        }
      }
    },
    created() {
      this.profile = Object.assign({}, this.profileInfo)
    },
    beforeRouteLeave(to, from, next) {
      if (!utilities.compareObjects(this.profile, this.profileInfo)) {
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
      ...mapState('profile', ['profileInfo'])
    },
    methods: {
      ...mapActions('profile', ['saveProfile'])
    }
  }
</script>
