  <template>

    <div>
       

        <div class="page-wrapper toggled">
            <!-- @@include("partials/sidebar-dark.html") -->
            <Sidebar/>  

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <Topheader/>

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex  align-items-center justify-content-between">
                            <div class="">
                                <h6 class="mb-1">Hello {{ store.user.name }},</h6>
                                <h6 class="text-muted mb-0">Welcome!!! Let's keep winning with Foxvale Broker Inc.</h6>
                            </div>

                            <div class="d-flex align-items-start rounded mt-2 mt-md-0" v-if="!store.user.isAdmin">
                                <div @click.prevent="navigateTo('/dashboard/wallet')" class="bg-warning text-white p-2 rounded shadow">
                                    <span class="h6 ms-1 fs-5">Check Balance</span>
                                </div>   
                            </div>
                        </div>
                         

                        
                        <div class="row  align-items-center mx-1 mt-4 ">
                                <div v-if="kycVisible && !store.user.isAdmin && !store.user.isVerified" class="d-flex justify-content-between align-items-start rounded  rounded shadow
                                 p-3" >
                                    <div>
                                        <div class="icon-d bg-warning text-white" >
                                            <i class="uil uil-exclamation fs-4"></i>  
                                        </div>
                                        
        
                                        <span class="text-dark h6 ms-2 ">KYC is required : 
                                            <span @click.prevent="navigateTo('/dashboard/editProfile')" class="text-primary">VERIFY YOUR ACCOUNT</span></span>
                                    </div>
    
                                    <i @click.prevent="closeKYC" class="uil uil-times  fs-4 text-primary"></i>
        
                                </div>
                           
                            
                            <div  class=" mt-4 align-items-center" v-if="!store.user.isAdmin">
                                <div class=" row align-items-center  rounded shadow  p-3">
                                    <div v-for="item in btnLinkItems" :key="item" class="d-flex align-items-center justify-content-center col">
                                      
                                        <nuxt-link :to="`/dashboard/${item.link}`" class=" d-flex flex-column  
                                        align-items-center justify-content-center">
                                            <div  class="icon text-center text-white bg-warning dim  rounded-pill">
                                                <i :class="item.icon"></i>
                                            </div>
                                            <h6 class=" text-dark  mb-0 ">{{ item.title }}</h6>
                                        </nuxt-link>
                                    </div>
                                   
                                </div>
                            </div><!--end col-->
                           
                        </div><!--end row-->


                        <ChartsWidgets/>

 
                        <!-- <UsersList v-if="store.user.isAdmin" /> -->

                        <div class="row  align-items-center mx-1" v-if="!store.user.isAdmin">
                           
                            
                            <div  class=" mt-4 align-items-center bg-color rounded">
                                <a class=" row align-items-center   rounded shadow  p-3">
                                   
                                   
                                    <div class="" v-if="isSupported" >
                                        <h6 class="text-white">Referral Link</h6>

                                          <div class="form-icon position-relative">
                                            <input name="name" id="occupation" v-model.trim="referralLinkVal" type="text" class="form-control ps-5 "  disabled>
                                          </div>
                                          <button @click.prevent="copy(referralLinkVal)" class="btn btn-sm btn-warning mt-3">
                                            <span v-if='!copied'>Copy</span>
                                            <span v-else>Copied!</span>
                                          </button>
                                          <p class="text-success mt-2">Get a bonus when someone registers <span class="text-white">Foxvale Broker Inc.</span> with the referral link.</p>
                                    </div>
                                </a>
                            </div><!--end col-->
                           
                        </div><!--end row-->

                       
                    </div>


                </div><!--end container-->

                <!-- @@include("partials/footer.html") -->
            </main>
            <!--End page-content" -->
        </div>
        <!-- page-wrapper -->


    </div>
</template>





<script setup>
// import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets'
import {useStore}  from "@/stores/index"
import {baseURL} from '@/composables/mixins'
// import { useClipboard }   from '@vueuse/core'
definePageMeta({
    layout:"custom",
})

// defineComponent({
//     Chart,
//     CryptoMarket,
//     Screener,
//     Snaps, 
// })




const kycVisible = ref(true)
const store = useStore()
const referralLinkVal = ref('swxdtufycivughb;jn;ojo')
const { copy,copied, isSupported } = useClipboard({ referralLinkVal })

const closeKYC = ()=>{
    kycVisible.value = false
}
const btnLinkItems = [
    {id:1,title:"deposit",icon:"uil uil-usd-circle fs-4 mb-0",link:"deposit"},
    {id:2,title:"withdraw",icon:"uil uil-shopping-bag fs-4 mb-0",link:"withdraw"},
    {id:3,title:"invest",icon:"uil uil-chart fs-4 mb-0",link:"subscription"},
   ]






</script>


<style scoped>


.icon-d{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: green;
    height: 20px !important;
    width: 20px  !important;
    border-radius: 999px  !important;
}

.dim{
    height:40px;
    width:40px;
    display: inline-flex;
    justify-content:center;
    align-items:center;
}

.bg-color{
    background: rgb(6, 6, 32);
}
</style>

