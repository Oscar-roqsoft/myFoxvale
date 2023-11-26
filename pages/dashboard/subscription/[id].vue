
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
                                                {{ selectedPackage.name }}</li>
                                        </ul>
                                     </nav>


                                     <Loaders v-if="isloading"/>

                                    <div  class="body mt-5">
                                        <div class="row">
                                            <h5 class="text-warning">Plan Highlights</h5>
                                            <div class="col-md-6">
                           
  
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                        <span >Pricing Range:</span> 
                                                        <span class="mx-2">
                                                            ${{selectedPackage.maxPrice}} / ${{selectedPackage.minPrice}}
                                                        </span>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <span>Return:</span> {{ selectedPackage.returnOfInvestment }}%  Weekily
                                                    </li>
                                            
                                                 </ul>
                                            </div>
  
                                    <div class="col-md-6 mt-3">
                                        
                                        <div class="mb-3">
                                            <label class="form-label">Enter Amount</label>
                                            <div class="form-icon position-relative">
                                                <input  id="occupation" type="number" v-model.trim="amountVal"
                                                class="form-control"  placeholder="Enter Amount">
                                            </div>
                                        </div> 
                                        
                                    </div>
            
            
                                </div>
  
          
                            </div>
          
                        <div  class="modal-footer">
                            <button @click.prevent="navigateTo('/dashboard/subscription')" type="button" class="btn btn-secondary">Cancel</button>
                            <button @click.prevent="subscribe()"  class="btn btn-primary">Subscribe</button>
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
const amountVal = ref('')
const pinia = useStore()

const packages = pinia.subpackages;
 
console.log(packages)

const router = useRouter();


const packageName = router.currentRoute.value.params.id;
console.log(packageName);

const selectedPackage = packages.find(pkg => pkg._id == packageName)
console.log(selectedPackage);


const subscribe = async()=>{
    isloading.value = true
    if(selectedPackage.name =='Premium' ){
        if(amountVal.value > 50000){
            return console.log('Premium successful')
        }
        return
    }
    if(selectedPackage.name =='Deluxe' ){
        if(amountVal.value > 10000 && amountVal.value < 49999){
            return console.log('Deluxe successful')
        }
        return
    }
    if(selectedPackage.name =='Standard' ){
        if(amountVal.value > 100 && amountVal.value < 9999){
            return console.log('Standard successful')
        }
        return
    }

    const subinfo = {
        packageId:selectedPackage._id,
        amount:amountVal.value
    }

    // try{
    //    const data = await fetch(`${baseURL}/subscription/subscribe-user`,{
    //       method:"POST",
    //       headers: {
    //         "Content-Type":"application/json",
    //         "token": `Bearer ${pinia.user.accessToken}`
    //        },
    //        body:JSON.stringify(subinfo)
    //    }).then(res=>res.json());
      
    //     isloading.value = false
    //     console.log('successful')

    //     const mysub = data.data.subscription
    //     pinia.storeuserSubscription(mysub)

    //     navigateTo('/dashboard/subscription')
    // }catch(e){
    //     console.log(e)
    // }
}
</script>