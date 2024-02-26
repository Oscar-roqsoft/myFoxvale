
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
                     
                      
                        <div class=" " >
                            <div class="">
                                <div class="content">
                                    <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                        <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                            <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                            <li class="breadcrumb-item text-capitalize active">
                                            Legal documentation  </li>
                                        </ul>
                                     </nav>     

                                    <div  class="body mt-5">
                                    <div class="row">
                                            
                                            <h5 class="text-dark">Legal documentation</h5>

                                            
                                            <div class="card shadow border-0 rounded">
                            <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
                                <!-- <div class="text-primary border m-2 p-2">
                                    <a href="/REFUND AND RETURN POLICY.pdf" > Download No-Refund-Policy PDF</a>
                                </div> -->
                                <div class="text-primary border m-2 p-2">
                                    <a href="/CONTRACT-AGREEMENT-NEW.pdf" > Download Contract-Agreement PDF</a>
                                </div>
                            </div>
                        
                        </div>     
            
                                </div>
          
                            </div>
          
                       
                    </div>
               </div>
            </div> 
                      

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

definePageMeta({
    layout:'custom'
})




 






</script>