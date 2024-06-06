import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loggedIn: false
  }),
  getters: {
    isLoggedIn() {
      return this.loggedIn
    }
  },
  actions: {
    logIn({ user, password }) {
      this.loggedIn = true
    },
    logOut() {
      this.loggedIn = false
    }
  }
})
