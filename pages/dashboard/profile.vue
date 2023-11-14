<template>

    <div>
        <!-- Loader -->
        <!-- <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div> -->
        <!-- Loader -->

        <div class="page-wrapper toggled">
           <sidebar/>

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <topheader/>
                <!-- Top Header -->

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Account</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Account Details</li>
                                </ul>
                            </nav>
                        </div>

                        <div class="row mt-4">
                            <div class="col-12">
                                <div class="">
                                    <div class="row ">
                                        
                                        <div class="col-lg-7 col-md-6  order-md-2 order-lg-1 order-2">
                                            <div class="card border-0 rounded shadow p-4">
                                                <div class=" text-center p-4 ">
                                                    <img :src="store.user.image" class="rounded-circle shadow avatar avatar-md-md mx-auto" alt="">
                                                    <h5 class="mt-3 mb-0">Cristina Julia</h5>
                                                    <div class="mt-4">
                                                        <button  @click="navigateTo('/dashboard/editProfile')" class="btn btn-primary">Update Account</button>
                                                    </div><!--end col-->
                                                </div>
                                                <h5 class="mb-0">Personal Details :</h5>
                                                <div class="mt-4">
                                                    <div class="d-flex align-items-center">
                                                        <i data-feather="mail" class="fea icon-ex-md text-muted me-3"></i>
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Email :</h6>
                                                            <a href="javascript:void(0)" class="text-muted">cristinajulia@mail.com</a>
                                                        </div>
                                                    </div>
                                                 
                                                  
                                                    <div class="d-flex align-items-center mt-3">
                                                        <i data-feather="gift" class="fea icon-ex-md text-muted me-3"></i>
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Birthday :</h6>
                                                            <p class="text-muted mb-0">2nd March, 1996</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-3">
                                                        <i data-feather="map-pin" class="fea icon-ex-md text-muted me-3"></i>
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Location :</h6>
                                                            <a href="javascript:void(0)" class="text-muted">Beijing, China</a>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-3">
                                                        <i data-feather="phone" class="fea icon-ex-md text-muted me-3"></i>
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Cell No :</h6>
                                                            <a href="javascript:void(0)" class="text-muted">(+12) 1254-56-4896</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            
            
                                                    
                                                    
                                                    
                                        </div><!--end col-->
                                    </div>
                                </div>
                            </div><!--end col-->
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

definePageMeta({
    layout:"custom"
})

import {useStore} from '@/stores/index'

const store = useStore()
</script>