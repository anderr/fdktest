// В обновленной версии nuxt классическая расстановка модулей устарела, надо будет в скором времени делать только так.
export const strict = false

export const state  = () => {}
export const getters  = () => {}
export const mutations  = () => {}
export const actions = {
  nuxtServerInit({ rootState }, { res }) {
    // Это для сверки записанных данных и измененных в формах. Когда будет норм апи, то естественно можно обойтись без этого
    const userInfo = rootState.user.userInfo
    const profileInfo = rootState.profile.profileInfo

    res.setHeader('Set-Cookie', ["profile=" + JSON.stringify(profileInfo), "user=" + JSON.stringify(userInfo)])
  }
}
