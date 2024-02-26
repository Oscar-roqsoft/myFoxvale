
<template>
     
    <div>
        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
           <Sidebar/>
            <!-- sidebar-wrapper  -->
    
            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
                <Topheader/>
                <!-- Top Header -->
    
                    <div class="container-fluid">
                        <div class="layout-specing">
                            <div class="d-md-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Orders</h5>
    
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                        <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                        <li class="breadcrumb-item text-capitalize active" aria-current="page">List Of Pending Withdrawals</li>
                                    </ul>
                                </nav>
                            </div>
    
                            <div class="row">
                                <div class="col-12 mt-4">

                                    <div class="table-responsive shadow rounded">
                                        <table class="table table-center bg-white mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="border-bottom p-3" style="min-width: 80px;">Amount</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">date</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">wallet type</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">Transaction ID</th>
                                                    <th class="text-center border-bottom p-3">Actions</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Start -->
                                                <tr v-for="(userr,id) in paginatedUsers " :key="id">
                                                   <td class="p-3">
                                                        <a href="#" class="text-primary">
                                                            <div class="d-flex align-items-center">
                                                                <span class="ms-2">{{ userr.amount }}</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td class="text-center p-3">{{ formatDateOfBirth(userr.createdAt)}}</td>
                                                    <td class="text-center p-3">{{ userr.walletType}}</td>
                                                    <td class="text-center p-3">{{ userr._id }}</td>
                                                    <td class="text-center p-3">
                                                        <div @click.prevent="approvedwithdrawal(userr._id,userr.walletType)" class="badge btn btn-sm bg-primary rounded " 
                                                        :class="!userr.isApproved? ' bg-primary':'bg-warning'">
                                                         <span  v-if="!userr.isApproved">approve</span>
                                                         <span v-else>approved !!</span>
                                                        </div>
                                                    </td>
                                                    <td class="text-center p-3">
                                                        <div @click.prevent="rejectwithdrawal(userr._id,userr.walletType)" class="badge btn btn-sm bg-danger rounded ">
                                                          reject
                                                        </div>
                                                    </td>
                                                </tr>
                                                <!-- End -->
    
                                            </tbody>
                                        </table>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->

                          
    
                            <div class="row text-center">
                                <!-- PAGINATION START -->
                                <div class="col-12 mt-4">
                                    <div class="d-md-flex align-items-center text-center justify-content-between">
                                        <span class="text-muted me-3">Showing 1 - 10 out of {{ userr.length + 1  }}</span>
                                        <ul class="pagination mb-0 justify-content-center mt-4 mt-sm-0">
                                            <li class="page-item"><a @click.prevent="handlePagePrevChange()" class="page-link"  aria-label="Previous">Prev</a></li>
                                            <li @click.prevent="currentPage=i" v-for="i in totalPages" :key="i" class="page-item" :class="i==currentPage?'active':''">
                                                <a  class="page-link">{{ i }}</a></li>
                                           
                                            <li class="page-item"><a @click.prevent="handlePageNextChange()" class="page-link"  aria-label="Next">Next</a></li>
                                         </ul>
                                    </div>
                                </div>
                                <!--end col-->
                                <!-- PAGINATION END -->

                               
                            </div><!--end row-->
                        </div>
                    </div><!--end container-->
    
                 
                    <!-- End -->
                </main>
                <!--End page-content" -->
            </div>
            <!-- page-wrapper -->
    
           
    </div>

</template>

<script setup>
import {useStore}  from "@/stores/index";
import {baseURL,formatDateOfBirth} from "@/composables/mixins";
import {adtoken} from '@/composables/config'
definePageMeta({
    layout:"custom"
})

const pinia = useStore()


try{
    const btcdata = await fetch(`${baseURL}/user/get-pending-withdrawal-requests/btc`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${pinia.user.accessToken}`
    },
   }).then(res=>res.json())

    const usdtdata = await fetch(`${baseURL}/user/get-pending-withdrawal-requests/usdt`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${pinia.user.accessToken}`
    },
   }).then(res=>res.json())

    const ethdata = await fetch(`${baseURL}/user/get-pending-withdrawal-requests/eth`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${pinia.user.accessToken}`
    },
   }).then(res=>res.json())

   console.log(btcdata.data.withdrawals)
   const requestwithdrawalinfo = [...btcdata.data.withdrawals,...usdtdata.data.withdrawals,...ethdata.data.withdrawals]
   pinia.storeuserWithdrawalRequest(requestwithdrawalinfo)
}catch(e){
    console.log(e)
}


const approvedwithdrawal = async(userr,walletType)=>{
    const info1 = {
        withdrawalId: userr
    }
    console.log(walletType)
    try{
      const btcdata = await fetch(`${baseURL}/user/approve-withdrawal-request/${walletType}`,{
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
            "token":`Bearer ${adtoken}`
        },
        body:JSON.stringify(info1)
      })
      
      console.log('approved')
      reloadNuxtApp()

    }catch(e){
        console.log(e)
    }

}


const rejectwithdrawal = async(userr,walletType)=>{
    const info2 = {
        withdrawalId: userr
    }
    console.log(info2)
    try{
      const btcdata = await fetch(`${baseURL}/user/reject-withdrawal-request/${walletType}`,{
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
            "token":`Bearer ${adtoken}`
        },
        body:JSON.stringify(info2)
      })

      console.log(btcdata.data.withdrawal.isApproved)
      reloadNuxtApp()

    }catch(e){
        console.log(e)
    }

}


//pagination setup
const userr = pinia.userWithdrawalRequest

// Define per-page display
const perPage = 10;

// Define current page state using ref
const currentPage = ref(1);


const paginatedUsers = computed(() => {
  return userr.slice(((currentPage.value - 1) * perPage), currentPage.value * perPage);
});

const totalPages = ref(Math.ceil(userr.length / perPage));
const handlePageNextChange = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const handlePagePrevChange = () => {
    if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>