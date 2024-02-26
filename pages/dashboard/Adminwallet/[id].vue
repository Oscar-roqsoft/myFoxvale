

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
                                <li class="breadcrumb-item text-capitalize active" aria-current="page">Edit Wallet</li>
                            </ul>
                            
                        </nav>

                    </div>
                    
                    <Loaders v-if="isloading"/> 

                    <div class="card mb-3 mt-3">
                        <div class="card-header">
                           <h5 class="card-title">My wallet</h5>
                        </div>
                        <div class="card-body">
                           
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Wallet Address</label>
                                    <div class="form-icon position-relative">
                                        <input  id="occupation" type="text" v-model.trim="selectedWalletDetail.value"
                                        class="form-control"  placeholder="Enter Your Wallet Address">
                                    </div>
                                </div> 
                            </div><!--end col-->
                            <button @click.prevent="updateWallet" class="btn mt-3  btn-primary">Update Wallet</button>
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
const walletList = pinia.walletDetails
const router = useRouter();
const walletName = router.currentRoute.value.params.id;
const selectedWalletDetail = walletList.find(pkg => pkg._id == walletName)

const isloading = ref(false)

const updateWallet =async()=>{
   

    try{
        isloading.value = true
        const {value} = await fetch(`${baseURL}/edit-account-details/${selectedWalletDetail._id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json",
                    "token": `Bearer ${pinia.user.accessToken}`
                },
                body:JSON.stringify(selectedWalletDetail)
        }).then(res=>res.json());
        isloading.value = true
        console.log(value)
        navigateTo('/dashboard/Adminwallet')
    }catch(e){
        console.log(e)
    }
}
</script>