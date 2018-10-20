import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import api from '@/api'

Vue.use(Vuex)

const state = {
  items: [{
    name: 'test',
    price: 3000,
    description: 'barang mahal'
  }],
  menuItems: []
}

const mutations = {
  addStorageItem (state, value) {
    state.items.push(value)
  },
  setStorageItems (state, value) {
    state.items = value
  },
  setMenuItems (state, value) {
    state.menuItems = value
  }
}

const actions = {
  addStorageItem ({commit}, data) {
    commit('addStorageItem', data)
  },
  getStorageItems ({commit}) {
    api.getStorageItems((res) => {
      commit('setStorageItems', res.body.data)
    }, (err) => {
      console.log(err)
      alert('error fetching data')
    })
  },
  getUsers ({commit}) {
    api.getUsers((res) => {
      if (res.body.code !== 200) {
        router.push('/')
      }
    }, (err) => {
      console.log(err)
      alert('error fetching data')
    })
  },
  getMenuItems ({commit}) {
    api.getMenuItems((res) => {
      commit('setMenuItems', res.body.data)
    }, (err) => {
      console.log(err)
      alert('error when get menu items')
    })
  }
}

const getters = {
  storageItems (state) {
    return state.items
  },
  menuItems (state) {
    return state.menuItems
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
