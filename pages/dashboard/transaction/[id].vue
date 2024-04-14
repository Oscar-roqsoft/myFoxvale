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
                                            <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/subscription">Assets Plans</nuxt-link></li>
                                            <li class="breadcrumb-item text-capitalize active" aria-current="page">
                                            name</li>
                                        </ul>
                                     </nav>


                                     <Loaders v-if="isloading"/>

                                    <div  class="body mt-5">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h5 class="text-warning">Plan Details</h5>
                           


                                                
  
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                        <span >Package name: {{ selectedPackage?.package.name }}</span> 
                                                        <span class="mx-2">
                                                            <!-- ${{selectedPackage.maxPrice}} / ${{selectedPackage.minPrice}} -->
                                                        </span>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <span >Package Price :</span> 
                                                        <span class="mx-2">
                                                            ${{selectedPackage?.amount}}
                                                        </span>
                                                    </li>

                                                    <!-- <li class="list-group-item">
                                                        <span >Pricing Range:</span> 
                                                        <span class="mx-2">
                                                        </span>
                                                    </li> -->
                                                   
                                            
                                                 </ul>
                                            </div>

                                            
                                    <div class="col-md-6 mt-3">
                                        <h5 class="text-warning">Upgrade Plan</h5>

                                        <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <div class="form-icon position-relative">
                                                            <label for="selectOptions" class="form-label">Select Package</label>
                                                        
                                                            <select @change="show_expected_bal"  v-model="selected" class="form-select mb-3">
                                                            <option  v-for="option in options" 
                                                            :key="option.name" :value="option._id">
                                                                {{ option.name }}
                                                            </option>

                                                            </select>
                                                            
                                                    </div>
                                                </div>
                                         </div><!--end col-->


                                        
                                        
                                        <div v-if="amount" class="mb-3">
                                            <!-- <label class="form-label">Enter Amount</label>
                                            <div class="form-icon position-relative">
                                                <input  id="occupation" type="number" v-model.trim="amount"
                                                class="form-control"  placeholder="Enter Amount">
                                            </div> -->
                                            <h5  class="text-warning">Expected upgrade balance </h5>
                                            <p >${{ amount }}</p>

                                        </div> 
                                        
                                    </div>
            
            
                                </div>
  
          
                            </div>
          
                        <div  class="modal-footer">
                            <button @click.prevent="navigateTo('/dashboard/subscription')" type="button" class="btn btn-secondary">Cancel</button>
                            <button @click.prevent="upgradePlan"  class="btn btn-primary">Upgrade</button>
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
import {} from '@/composables/mixins'
import {useStore} from '@/stores/index'
definePageMeta({
    layout:'custom'
})

const isloading = ref(false)
const amount = ref('')

const pinia = useStore()

const router = useRouter();

const transaction = pinia.getUserTransactions
const packageName = router.currentRoute.value.params.id;
const selectedPackage = transaction.find(pkg => pkg._id == packageName )

const options = pinia.packages.filter(p => p.name != selectedPackage.package.name);


const selected = ref(`${selectedPackage.package.name}`)

    const show_expected_bal = () =>{
        const packageselect = pinia.packages.find(p => p._id == selected.value)
        amount.value = packageselect.minPrice - selectedPackage.amount;
    }


    onMounted(async()=>{
        if(pinia.packages.length ==0){
            return pinia.packages
        }else{
        
            const data = await fetch(`${baseURL}/package/packages-list`,{
            method: "GET",
            headers: {
                    "Content-Type":"application/json",
                    "token": `Bearer ${adtoken}`
                },
            }).then(res=>res.json());
            
            const packageInfo =  data.data.packages;
            pinia.storePackage(packageInfo);
        }
    })


    const upgradePlan = async()=>{
        isloading.value = true
        // let userbal = pinia.userBalance?.usdtWallet?.balance + pinia.userBalance?.btcWallet?.balance + pinia.userBalance?.ethWallet?.balance


        const details = {
            subscriptionId:selectedPackage._id,
            packageId:selected.value,
            amount: amount.value,

        }
        try{
           const data = await fetch(`${baseURL}/subscription/user-upgrade-subscription/${selectedPackage.tag}`,{
           method: "PATCH",
           headers: {
                "Content-Type":"application/json",
                "token": `Bearer ${pinia.user.accessToken}`
            },

            body: JSON.stringify(details)
           }).then(res=>res.json())

           isloading.value = false

              if(data.status){

                     let subinfo = {...pinia.getUserTransactions,
                      ...data.data.subscription}
            
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
                    
                
                
                    const usertransactions = [...btcdata.data.subscriptions,...usdtdata.data.subscriptions,...ethdata.data.subscriptions]
                    pinia.storeGetUserTransactions(usertransactions)
                
                  navigateTo('/dashboard/transaction')
                  push.success(`${data.message}`)
              }else{
                push.error(`${data.message}`)
              }

         }catch(e){
           console.log(e)
         }
    }

</script>