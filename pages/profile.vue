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
    created() {
      if (this.$cookies.get('profile')) {
        this.profile = this.$cookies.get('profile')
      }
    },
    beforeRouteLeave(to, from, next) {
      if (!utilities.compareObjects(this.$cookies.get('profile'), JSON.stringify(this.profile))) {
        let conf = confirm('Данные не сохранены, хотите покинуть страницу?')

        if (!conf) {
          next(false)
        } else {
          this.profile = this.$cookies.get('profile')

          next()
        }
      } else {
        next()
      }
    },
    computed: {
      ...mapState('profile', ['profileInfo']),

      profile: {
        get() {
          return this.profileInfo
        },
        set(val) {
          this.setProfile(val)
        }
      }
    },
    methods: {
      ...mapActions('profile', ['saveProfile']),

      ...mapMutations('profile', ['setProfile'])
    }
  }
</script>
