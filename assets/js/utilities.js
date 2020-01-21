// Если методы будут использоваться часто в компонентах, то можно их вывести в миксин, чтобы каждый раз не импортировать файл в этих компонентах

const utilities = {
  downloadFile(filename, text) {
    let pom = document.createElement('a')

    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + JSON.stringify(text))
    pom.setAttribute('download', filename)

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents')

      event.initEvent('click', true, true)
      pom.dispatchEvent(event)
    } else {
      pom.click()
    }
  },

  compareObjects(oldVal, newVal) {
    return JSON.stringify(oldVal) === JSON.stringify(newVal)
  }
}

export default utilities
