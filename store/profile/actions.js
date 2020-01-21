import utilities from '~/assets/js/utilities'

export default {
  saveProfile({ commit }, profile) {
    utilities.downloadFile('profile.json', profile)

    commit('setProfile', profile)
  }
}
