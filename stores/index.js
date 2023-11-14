
import { defineStore } from 'pinia'
// import { useLocalStorage }   from '@vueuse/core'
// import {piniaPluginPersistedstate} from 'pinia-plugin-persistedstate'

export const useStore = defineStore('user',()=> {
    // other options...
    const user = ref({})

   const packages = ref([])
    
    const menuOverlay =ref(false)
    // const isAdmin = computed(()=>{
    //     user.status = "admin"
    // })

    // pinia.use(piniaPluginPersistedstate)

    const storeUser = (payload)=>{
        user.value = payload;
        console.log(user.value)
    }

    const storePackage = (payload)=>{
        packages.value = payload;
        console.log(packages.value)
    }

    const signOut = ()=>{
        user.value = {};
        window.location = "/login";
    }
    
   
   


    return {
        user,
        packages,
        storeUser,
        storePackage,
        signOut,
    }
    // const  (true),
},
{persist: {
  storage: persistedState.localStorage,
}},
  )
  

