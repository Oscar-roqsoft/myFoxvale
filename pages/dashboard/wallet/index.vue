

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

                                    <div  class=" mt-5">
                                    <div class="row">
                                            
                                            <h5 class="text-dark">My Assets</h5>
                                            
                                                
                                                <ul class=" fs-4 text-white">
                                                    
                                                    <!-- <li class="card p-3 text-white rounded shadow-md mb-4">
                                                        <span style="font-size: 13px;color:black;font-style:italic">BTC Balance</span>
                                                        <div >
                                                            <img style="width: 24px;" src="/btc2.png"/>
                                                            <span class="ms-2" style="font-size: 20px;color:black;font-weight: bolder;
                                                            font-style:italic"> 
                                                             {{ pinia.userBalance?.btcWallet?.balance }}.00
                                                            </span>
                                                        </div>
                                                    </li> -->
                                                    <li class="card p-3 text-white rounded shadow-md mb-4">
                                                        <span style="font-size: 13px;color:black;font-style:italic">USDT Balance</span>
                                                        <div >
                                                            <img style="width: 24px;" src="/usdt.png"/>
                                                            <span class="ms-2" style="font-size: 20px;color:black;font-weight: bolder;
                                                            font-style:italic"> 
                                                             {{ pinia.userBalance?.usdtWallet?.balance + pinia.userBalance?.btcWallet?.balance + pinia.userBalance?.ethWallet?.balance}}.00
                                                            
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <!-- <li class="card p-3 text-white rounded shadow-md mb-4">
                                                        <span style="font-size: 13px;color:black;font-style:italic">ETH Balance</span>
                                                        <div >
                                                            <img style="width: 24px;" src="/eth2.png"/>
                                                            <span class="ms-2" style="font-size: 20px;color:black;font-weight: bolder;
                                                            font-style:italic"> 
                                                                 {{ pinia.userBalance?.ethWallet?.balance }}.00
                                                            </span>
                                                        </div>
                                                    </li> -->
                                                  
                                            
                                                </ul>

            
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
 

// try{
//     const data = await fetch(`${baseURL}/user/get-user-balance/${pinia.user.id}`,{
//        method: "GET",
//        headers: {
//             "Content-Type":"application/json",
//             "token": `Bearer ${pinia.user.accessToken}`
//         },
//     }).then(res=>res.json());
   
//     const balanceInfo =  data.data;

//     console.log(data.data)

//   pinia.storeUserBalance(balanceInfo);
// }catch(e){
//     console.log(e)
// }



console.log(pinia.userBalance)


</script>