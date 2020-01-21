import utilities from '~/assets/js/utilities'

export default {
  saveProfile({ commit }, profile) {
    utilities.downloadFile('profile.json', profile)
    document.cookie = `profile=${JSON.stringify(profile)}`

    commit('setProfile', profile)
  }
}
