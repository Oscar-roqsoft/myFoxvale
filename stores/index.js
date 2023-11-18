
import { defineStore } from 'pinia'
// import { useLocalStorage }   from '@vueuse/core'
// import {piniaPluginPersistedstate} from 'pinia-plugin-persistedstate'

export const useStore = defineStore('user',()=> {
    // other options...
    const user = ref({
        idFile: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768",
    })


    const userList = ref([])

   const packages = ref([])

   const navigateBackAndFrontVal = ref(true)

   const isverified = ref(true)
    
    const menuOverlay =ref(false)

    const withdrawalDetails = ref({})
    // const isAdmin = computed(()=>{
    //     user.status = "admin"
    // })

    // pinia.use(piniaPluginPersistedstate)

    const storeUser = (payload)=>{
        user.value = payload;
        console.log(user.value)
    }
    const storeUserList = (payload)=>{
        userList.value = payload;
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
        window.location = "/login";
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
        storeUserList
    }
    // const  (true),
},
{persist: {
  storage: persistedState.localStorage,
}},
  )
  

