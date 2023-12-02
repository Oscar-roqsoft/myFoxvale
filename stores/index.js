
import { defineStore } from 'pinia'
// import { useLocalStorage }   from '@vueuse/core'
// import {piniaPluginPersistedstate} from 'pinia-plugin-persistedstate'


export const useStore = defineStore('user',()=> {
    // other options...
    const user = ref([])

    const userList = ref([])

    const orderList = ref([])

   const packages = ref([])

   const subpackages = ref([])

   const userSubscription = ref([])

   const userPackages = ref([])

   const walletDetails = ref([])

   const selectedWalletName = ref([])

   const navigateBackAndFrontVal = ref(true)

   const isverified = ref(true)
    
    const menuOverlay =ref(false)

    const withdrawalDetails = ref([])

    const userFundings = ref([])

    const userRecoverycode = ref('')

    const userBalance = ref([])

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
    const storesubPackage = (payload)=>{
        subpackages.value = payload;
        console.log(subpackages.value)
    }
    const storeUserPackages = (payload)=>{
        userPackages.value = payload;
        console.log(userPackages.value)
    }
    const storeuserSubscription = (payload)=>{
        userSubscription.value = payload;
        console.log(userSubscription.value)
    }

    const storeWalletDetails = (payload)=>{
        walletDetails.value = payload;
        console.log(walletDetails.value)
    }
    const storeUserFundings = (payload)=>{
        userFundings.value = payload;
    }

    const storeUserRecoverycode = (payload)=>{
        userRecoverycode.value = payload;
    }
    const clearUserRecoverycode = ()=>{
        userRecoverycode.value = '';
    }
    const storeselectedWalletName = (payload)=>{
        selectedWalletName.value = payload;
    }
    const storeUserBalance = (payload)=>{
        userBalance.value = payload;
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
        navigateTo('/dashboard')
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
        orderList,
        walletDetails,
        storeWalletDetails,
        userPackages,
        storeUserPackages,
        subpackages,
        storesubPackage,
        userSubscription,
        storeuserSubscription,
        userRecoverycode,
        storeUserRecoverycode,
        clearUserRecoverycode,
        selectedWalletName,
        storeselectedWalletName,
        userFundings,
        storeUserFundings,
        userBalance,
        storeUserBalance
    }
    // const  (true),
},
{persist: {
  storage: persistedState.localStorage,
}},
  )
  

