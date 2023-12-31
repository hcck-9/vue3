import { defineStore } from 'pinia'
import { getUserInfor } from '../api/userinfo'
export const useUserInfoStore = defineStore(
  'UserInfo',
  {
    state: () => {
      return {
        imageUrl: localStorage.getItem('imageUrl'),
        name: localStorage.getItem('name'),
        sex: '',
        department: localStorage.getItem('department'),
        identity: localStorage.getItem('identity'),
        account: '',
        email: ''
      }
    },

    actions: {
      async userInfor(id) {
        const res = await getUserInfor(id)
        // console.log(res)
        this.imageUrl = res.data.image_url
        this.name = res.data.name
        this.sex = res.data.sex
        this.department = res.data.department
        this.identity = res.data.identity
        this.account = res.data.account
        this.email = res.data.email
      }
    },
    getters: {}
  },
  {
    persist: {
      // 存储全部数据
      enabled: true,
      // 关键字
      key: 'userInfor',
      Storage: localStorage
    }
  }
)
