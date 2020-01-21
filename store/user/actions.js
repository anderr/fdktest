// Сделал через отдельный файл с методами для помощи, но в зависимости от задачи может лучше даже глобальный миксин подойдет, чтобы не импортировать каждый раз
import utilities from '~/assets/js/utilities'

export default {
  saveUserInfo({ commit }, userInfo) {
    // запись в файл через браузер для клиента не очень идея, поднимать свой бэк не стал тратить время
    // здесь запись в api — axios
    // Пока запишем просто в файл
    utilities.downloadFile('user.json', userInfo)
    document.cookie = `user=${JSON.stringify(userInfo)}`

    // если успешно в axios, то в then() записали в store
    commit('setUserInfo', userInfo)
  }
}
