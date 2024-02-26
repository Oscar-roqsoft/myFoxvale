

<template>
   
                   
    <div class="page-wrapper toggled ">
        <!-- sidebar-wrapper -->
       <sidebar/>
        <!-- sidebar-wrapper  -->

        <!-- Start Page Content -->
        <main class="page-content bg-light">
            <!-- Top Header -->
           <topheader/>
            <!-- Top Header -->

            <div class="container-fluid"  >
                <div class="layout-specing">
                    <div class="d-md-flex justify-content-between align-items-center">

                        <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" >Foxvale</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/Adminwallet" >Wallet</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize active" aria-current="page">Create Wallet</li>
                            </ul>
                            
                        </nav>

                    </div>
                    
                    <Loaders v-if="isloading"/> 

                    <div class="card mb-3 mt-3">
                        <div class="card-header">
                           <h5 class="card-title">My wallet</h5>
                        </div>
                        <div class="card-body">
                           
                            
                            
                            <!-- <label for="selectOptions" class="form-label">Wallet Name</label>
                            <select class="form-select mb-3" id="selectOptions" aria-label="Default select example">
                                <option selected>Select Wallet Type</option>
                                <option value="1">USDT</option>
                                <option value="2">BTC</option>
                                <option value="3">ETH</option>
                            </select>
                             -->
                             
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Wallet Name</label>
                                    <div class="form-icon position-relative">
                                        <input  id="occupation" type="text" v-model.trim="walletName"
                                        class="form-control"  placeholder="Enter Your Wallet Name">
                                    </div>
                                </div> 
                            </div><!--end col-->
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Wallet Address</label>
                                    <div class="form-icon position-relative">
                                        <input  id="occupation" type="text" v-model.trim="walletAddress"
                                        class="form-control"  placeholder="Enter Your Wallet Address">
                                    </div>
                                </div> 
                            </div><!--end col-->
                            <button @click.prevent="createWallet" class="btn mt-3  btn-primary" :disabled="isloading">
                                <span v-if="!isLoading"> Add Wallet</span>
                                <btnLoader v-else/>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div><!--end container-->

            <!-- End -->
        </main>
        <!--End page-content" -->
    </div>
    <!-- page-wrapper -->
    



  
</template>

<script setup>
import {useStore} from '@/stores/index'
import {baseURL} from '@/composables/mixins'
import {adtoken} from '@/composables/config'


definePageMeta({
    layout:"custom"
})

const pinia = useStore()
const isloading = ref(false)

const walletName = ref("")
const walletAddress = ref("")

const createWallet =async()=>{
    const walletInfo = {
      name: walletName.value,
      value: walletAddress.value
    }
    try{
        const message = ref('')
        isloading.value =true
        const data = await fetch(`${baseURL}/add-account-details`,{
                method: "POST",
                headers: {
                "Content-Type":"application/json",
                 "token": `Bearer ${pinia.user.accessToken}`
                },
                body: JSON.stringify(walletInfo)
        }).then(res=>res.json());

        console.log(data.data.accountDetails)
        isloading.value = false 
        
        message.value = data.message
        if(!data.status) return;
        const userAccountDetails = data.data.accountDetails
        pinia.storeWalletDetails(userAccountDetails)
        walletName.value = ""
        walletAddress.value = ""
    }catch(e){
        console.log(e)
    }
}
</script>