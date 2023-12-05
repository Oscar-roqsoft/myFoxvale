

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
                                             My Wallet   </li>
                                        </ul>
                                     </nav>     

                                    <div  class="body mt-5">
                                    <div class="row">
                                            
                                            <h5 class="text-dark">My Assets</h5>
                                            
                                            <div class="col-md-6">
                                                
                                                <ul class="list-group fs-4 text-white">
                                                    
                                                    <li class="list-group-item bg-warning text-white">
                                                       <span> <span>BTC:</span>{{ pinia.userBalance.btcWallet.balance }}</span>
                                                    </li>
                                                    <li class="list-group-item bg-primary text-white">
                                                        <span><span>USDT:</span>{{ pinia.userBalance.usdtWallet.balance }}</span>
                                                    </li>
                                                    <li class="list-group-item bg-success text-white">
                                                        <span><span>ETH:</span>{{ pinia.userBalance.ethWallet.balance }}</span>
                                                    </li>
                                            
                                                </ul>

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

const pinia = useStore()



// How to format a number with commas as thousands separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
 




console.log(pinia.userBalance)


</script>