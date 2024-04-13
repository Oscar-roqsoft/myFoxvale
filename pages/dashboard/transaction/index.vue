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
                                <h5 class="mb-0">My Subscriptions</h5>
    
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                        <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                        <li class="breadcrumb-item text-capitalize active" aria-current="page">List Of Transactions</li>
                                    </ul>
                                </nav>
                            </div>
    
                            <div class="row">
                                <div class="col-12 mt-4">
                                    <div class="table-responsive shadow rounded">
                                        <table class="table table-center bg-white mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="border-bottom p-3" style="min-width: 150px;">Name</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 100px;">Amount</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">date</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 200px;">Investment Capital</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 200px;" >Weekily ROI</th>
                                                    <!-- <th class="text-center border-bottom p-3">Actions</th> -->
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Start -->
                                                <tr v-for="(userr,id) in paginatedUsers " :key="id">
                                                   <td class="p-3">
                                                        <a href="#" class="text-primary">
                                                            <div class="d-flex align-items-center">
                                                                <span class="ms-2">{{ userr.package.name}}</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td class="text-center p-3">{{ userr.amount }}</td>
                                                    <td class="text-center p-3">{{ formatDateOfBirth(userr.createdAt) }}</td>
                                                    <td class="text-center p-3"
                                                    :class="!userr.isApproved?'text-danger':'text-primary'">
                                                        <span v-if="!userr.isApproved">locked</span>
                                                        <span v-else >unlocked</span>
                                                    </td>
                                                    <td class="text-center p-3" :class="!userr.isFinalized?'text-danger':'text-primary'">
                                                        <span v-if="!userr.isFinalized">Unpaid</span>
                                                        <span v-else >paid</span>
                                                    </td>
                                                    <td class="text-center p-3">
                                                        <button :disabled="userr.isFinalized" @click.prevent="navigateTo(`/dashboard/transaction/${userr._id}`)" 
                                                        class="badge btn btn-sm bg-primary rounded text-white">
                                                         upgrade
                                                        </button>
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
definePageMeta({
    layout:"custom"  
})
const pinia = useStore()

onMounted(async()=>{

    if(pinia.getUserTransactions.length == 0){
    
         pinia.getUserTransactions
    }   

    try{
        const btcdata = await fetch(`${baseURL}/subscription/get-user-subscriptions/btc`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                    "token": `Bearer ${pinia.user.accessToken}`
            },
        }).then(res=>res.json());
    
        const usdtdata = await fetch(`${baseURL}/subscription/get-user-subscriptions/usdt`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                    "token": `Bearer ${pinia.user.accessToken}`
            },
        }).then(res=>res.json());
    
        const ethdata = await fetch(`${baseURL}/subscription/get-user-subscriptions/eth`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "token": `Bearer ${pinia.user.accessToken}`
            },
        }).then(res=>res.json());
        
        console.log(btcdata.message)
    
        // const usertransactions = btcdata.data.subscriptions
        // console.log(usertransactions)
        // pinia.storeGetUserTransactions(usertransactions)
        
        // const usertransactions = btcdata.data.subscriptions
        const usertransactions = [...btcdata.data.subscriptions,...usdtdata.data.subscriptions,...ethdata.data.subscriptions]
        console.log(usertransactions)
        pinia.storeGetUserTransactions(usertransactions)
    
    }catch(err){
        console.log(err)
    }
})




    







//pagination setup
const userr = pinia.getUserTransactions
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