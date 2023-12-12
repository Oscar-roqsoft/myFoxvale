<template>
     
    <div>
      

        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
           <sidebar/>
            <!-- sidebar-wrapper  -->

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <topheader/>
                <!-- Top Header -->

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Pricing</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Pricing</li>
                                </ul>
                                <span v-if="pinia.user.isVerified" class="text-sm text-size text-danger">Please Verify Your Account To Get Started</span>
                            </nav>
                        </div>
                        
                        
                          
                        <!-- Price start -->
                        <section class="section">
                            <div class="container place-items-center" >
                               

                                <div class="row ">
                   
                    
                                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2" v-for="item in pinia.subpackages">
                                        <div 
                                        class="card pricing pricing-primary business-rate shadow border-0 rounded">
                                            <div  v-if="item.name==='Premium'"
                                            class="ribbon ribbon-right ribbon-warning overflow-hidden"><span class="text-center d-block shadow small h6">Best</span></div>
                                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                                <h6 class="title name  text-uppercase mb-4">{{item.name}}</h6>
                                                
                                                <div  class="d-flex mb-4">
                                                        <span v-for="i in item.rating" class="h1 mb-0 text-color">
                                                            <!-- <i  class="uil uil-star"></i> -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                                        </span>
                                                </div>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>${{item.minPrice}}</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>-</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>${{item.maxPrice}}</li>
                                                </ul>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>{{item.returnOfInvestment}}%</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>ROI</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>(weekly)</li>
                                                </ul>
                
                                                 <div class="mt-4">
                                                     <button v-if="!item.comingSoon" @click.prevent="navigateTo(`/dashboard/subscription/${item._id}`)" 
                                                     class="btn btn-primary mt-2" :disabled="pinia.user.isVerified">
                                                     Get Started
                                                    </button>
                                                    <span v-else class="fs-5 rounded shadow text-warning border  p-2">Coming Soon</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                    
                                    
                                   
                                </div><!--end row-->


                            </div><!--end container-->
                            
                          

                        </section><!--end section-->
                        <!-- Price End -->

                    </div>
                </div><!--end container-->

                <!-- <footer2/> -->
                <!-- End -->
            </main>
            <!--End page-content" -->
        </div>
        <!-- page-wrapper -->
        
       
    </div>
    
</template>

<script setup>
import {baseURL} from '@/composables/mixins'
import {useStore} from '@/stores/index'
import { storeToRefs } from 'pinia';
definePageMeta({
    layout:"custom"
})
const message = ref("")
const isVisible = ref(true)
const pinia = useStore()

const data = await fetch(`${baseURL}/package/packages-list`,{
   method: "GET",
   headers: {
        "Content-Type":"application/json",
        "token": `Bearer ${pinia.user.accessToken}`
    },
}).then(res=>res.json());

const packageInfo =  data.data.packages;
pinia.storesubPackage(packageInfo);




</script>


<style scoped>
.text-color{
    color:darkorange
}
.text-size{
    font-size: small;
}

</style>