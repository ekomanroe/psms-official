import Vue from 'vue'
import VueResource from 'vue-resource'

// only on non testing mode
Vue.use(VueResource)

function getDataViaApi (path, callback, errorHandler) {
  Vue.http.get(path, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }).then((response) => {
    callback(response)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

export default {
  getStorageItems: (cb, errHandler) => {
    getDataViaApi('/api/storage/items', cb, errHandler)
  },
  getUsers: (cb, errHandler) => {
    getDataViaApi('/api/users', cb, errHandler)
  },
  getMenuItems: (cb, errHandler) => {
    getDataViaApi('/backend/config/menus', cb, errHandler)
  }
}
