
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

    const userWithdrawalRequest = ref([])

    const userFundings = ref([])

    const userRecoverycode = ref('')

    const userBalance = ref([])

    const adminGetUserFunding = ref([])
    const adminGetSubscribers = ref([])

    const getUserTransactions = ref([])

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
    const storeAdminGetUserFunding = (payload)=>{
        adminGetUserFunding.value = payload;
        adminGetUserFunding.value.reverse(...adminGetUserFunding.value)
    }
    const storeuserWithdrawalRequest = (payload)=>{
        userWithdrawalRequest.value = payload;
        userWithdrawalRequest.value.reverse(...userWithdrawalRequest.value)
    }
    const storeGetUserTransactions = (payload)=>{
        getUserTransactions.value = payload;
        getUserTransactions.value.reverse(...getUserTransactions.value)
    }
    const storeadminGetSubscribers = (payload)=>{
        adminGetSubscribers.value = payload;
        adminGetSubscribers.value.reverse(...adminGetSubscribers.value)
    }

    const signOut = ()=>{
        user.value = [];
        userList.value = []
        packages.value = []
        withdrawalDetails.value = []
         userBalance.value = []
         adminGetUserFunding.value = []
         walletDetails.value = []
         userFundings.value = []
         subpackages.value = []
         userPackages.value = []
         getUserTransactions.value = []
         adminGetSubscribers.value = []
         selectedWalletName.value = []
        navigateTo('/login')
    }

    const goFront = ()=>{
        if(withdrawalDetails.value.amountToWithdraw < 1){
            return navigateBackAndFrontVal.value = true;  
        }
        if(withdrawalDetails.value.walletAddress ===""){
           return navigateBackAndFrontVal.value = true; 
        }
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
        storeUserBalance,
        adminGetUserFunding,
        storeAdminGetUserFunding,
        userWithdrawalRequest,
        storeuserWithdrawalRequest,
        getUserTransactions,
        storeGetUserTransactions,
        adminGetSubscribers,
        storeadminGetSubscribers
    }
    // const  (true),
},
{persist: {
  storage: persistedState.localStorage,
}},
  )
  

