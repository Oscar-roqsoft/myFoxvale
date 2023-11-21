
import { defineStore } from 'pinia'
// import { useLocalStorage }   from '@vueuse/core'
// import {piniaPluginPersistedstate} from 'pinia-plugin-persistedstate'

export const useStore = defineStore('user',()=> {
    // other options...
    const user = ref({})


    const userList = ref([])

    const orderList = ref([])

   const packages = ref([])

   const navigateBackAndFrontVal = ref(true)

   const isverified = ref(true)
    
    const menuOverlay =ref(false)

    const withdrawalDetails = ref({})

    // const isAdmin = computed(()=>{
    //     user.isAdmin = "true"
    // })

    // pinia.use(piniaPluginPersistedstate)

    const storeUser = (payload)=>{
        user.value = payload;
        console.log(user.value)
    }
    const storeUserList = (payload)=>{
        userList.value = [...payload];
        userList.value.reverse(...userList.value)
        console.log(userList.value)
    }
    



    const storewithdrawalDetails = (payload)=>{
        withdrawalDetails.value = payload;
        console.log(withdrawalDetails.value)
    }

    const storePackage = (payload)=>{
        packages.value = payload;
        console.log(packages.value)
    }

    const signOut = ()=>{
        user.value = {};
        userList.value = []
        packages.value = []
        withdrawalDetails.value = null
        navigateTo('/login')
    }

    const goFront = ()=>{
        navigateBackAndFrontVal.value = false;
    }
    const goBack = ()=>{
        navigateBackAndFrontVal.value = true;
    }
    
   
   


    return {
        user,
        packages,
        storeUser,
        storePackage,
        signOut,
        goFront ,
        navigateBackAndFrontVal ,
        goBack,
        withdrawalDetails,
        storewithdrawalDetails,
        userList,
        storeUserList,
        orderList
    }
    // const  (true),
},
{persist: {
  storage: persistedState.localStorage,
}},
  )
  

