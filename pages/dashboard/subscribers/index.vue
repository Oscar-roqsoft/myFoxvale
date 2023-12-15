

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
                                <h5 class="mb-0">Subscribers</h5>
    
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                        <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                        <li class="breadcrumb-item text-capitalize active" aria-current="page">List Of subscribers</li>
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
                                                    <th class="border-bottom p-3" style="min-width: 150px;">Package Name</th>
                                                    <th class="border-bottom p-3" style="min-width: 80px;">Amount</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">date</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">Transaction ID</th>
                                                    <th class="text-center border-bottom p-3">Actions</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Start -->
                                                <tr v-for="(userr,id) in paginatedUsers " :key="id">
                                                    <td v-if="userr.user" class="text-center p-3">{{ userr.user.name}}</td>
                                                    <td v-else class="text-center p-3">{{ userr.user}}</td>
                                                    <td class="text-center p-3">{{ userr.package.name}}</td>
                                                   <td class="p-3">
                                                        <a href="#" class="text-primary">
                                                            <div class="d-flex align-items-center">
                                                                <span class="ms-2">{{ userr.amount }}</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td class="text-center p-3">{{ formatDateOfBirth(userr.createdAt)}}</td>
                                                    <td class="text-center p-3">{{ userr._id }}</td>
                                                    <td class="text-center p-3">
                                                        <a @click.prevent="approveFunding(userr._id,userr.tag,userr.isApproved)" 
                                                        class="badge btn btn-sm  rounded " 
                                                        :class="!userr.isApproved? ' bg-primary':'bg-warning'">
                                                         
                                                        <span   v-if="!userr.isApproved">
                                                            approve
                                                        </span>
                                                         <span v-else>approved !!</span>
                                                        </a>
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

const isApproved = ref(false)
const pinia = useStore()
const isloading = ref(false)




const btcdata = await fetch(`${baseURL}/subscription/get-subscriptions/btc`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${adtoken}`
    },

}).then(res=>res.json());

const usdtdata = await fetch(`${baseURL}/subscription/get-subscriptions/usdt`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${adtoken}`
    },

}).then(res=>res.json());
const ethdata = await fetch(`${baseURL}/subscription/get-subscriptions/eth`,{
    method: "GET",
    headers: {
        "Content-Type":"application/json",
        "token":`Bearer ${adtoken}`
    },

}).then(res=>res.json());


console.log(btcdata.data.subscriptions)
const subscribers = [...btcdata.data.subscriptions,...usdtdata.data.subscriptions,...ethdata.data.subscriptions]
console.log(subscribers)
pinia.storeadminGetSubscribers(subscribers)







const selectedname =  ref(null)

// const userFunding = {
//     transactionId:selectedWalletName._id
// }

const approveFunding = async(userr,walletType,isUserApproved)=>{
    // if(isUserApproved) return console.log('user already approved')
    isloading.value = true

    const subscriber_id = {
        subscriptionId: userr
    }
    console.log(subscriber_id)
    console.log(isUserApproved);

    try{
        
      const data = await fetch(`${baseURL}/subscription/approve-subscription/${walletType}`,{
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
            "token":`Bearer ${adtoken}`
        },
        body:JSON.stringify(subscriber_id)
      }).then(res=>res.json())
      isloading.value = false
      reloadNuxtApp()
      console.log(data.message)
      console.log([data.data.subscription])
      pinia.storeadminGetSubscribers([data.data.subscription,...pinia.adminGetSubscribers ]);
      
      
    }catch(e){
        console.log(e)
    }
// Insert your edited code here
// Please fix
}

//pagination setup

const userr = ref(pinia.adminGetSubscribers)
// Define per-page display
const perPage = 10;

// Define current page state using ref
const currentPage = ref(1);


const paginatedUsers = computed(() => {
  return userr.value.slice(((currentPage.value - 1) * perPage), currentPage.value * perPage);
});

const totalPages = ref(Math.ceil(userr.value.length / perPage));
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


<style scoped>
.btn-size{
    margin: 2px 0px !important;
    height: 10px !important;
    font-size: 11px !important;
}
</style>