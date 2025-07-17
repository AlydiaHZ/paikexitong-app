import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    role: '', // 'teacher' | 'student'
    token: '',
  }),
  getters: {
    isLoggedIn: state => !!state.token,
  },
  actions: {
    login({ id, name, role, token }: { id: string, name: string, role: string, token: string }) {
      this.id = id
      this.name = name
      this.role = role
      this.token = token
    },
    logout() {
      this.id = ''
      this.name = ''
      this.role = ''
      this.token = ''
    },
  },
})
