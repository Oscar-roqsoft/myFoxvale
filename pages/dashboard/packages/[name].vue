 

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
                        <h5 class=" mb-0">Pricing</h5>

                        <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" >Foxvale</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/packages" >My Packages</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize active" aria-current="page">Edit Package</li>
                            </ul>
                            
                        </nav>

                    </div>
                
                    <form class="border  p-3 mt-4 rounded" @submit.prevent="null">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Package name</label>
                                    <div class="form-icon position-relative">
                                        <input name="name" id="first" type="text" class="form-control ps-5" v-model.trim="selectedPackage.name"  
                                        placeholder="">
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                        <div class="row ">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Minimum Package value</label>
                                    <div class="form-icon position-relative">
                                        <input id="first" type="number" class="form-control ps-5" v-model.trim="selectedPackage.minPrice"  placeholder="Enter Minimum Package value">
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Maximum Package value</label>
                                    <div class="form-icon position-relative">
                                        <input  id="first" type="number" class="form-control ps-5" v-model.trim="selectedPackage.maxPrice"   placeholder="Enter Maximum Package value">
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Interest percentage value</label>
                                    <div class="form-icon position-relative">
                                        <input id="first" type="number" class="form-control ps-5" v-model="selectedPackage.returnOfInvestment"  placeholder="Enter Interest percentage value">
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Rating</label>
                                    <div class="form-icon position-relative">
                                        <input id="first" type="number" class="form-control ps-5" v-model="selectedPackage.rating"  placeholder="Enter Number Of Rating Star">
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->

                        <div class="row">
                            <div class="col-sm-12">
                            <span class="text-center text-danger">{{ message }}</span>
                                <!-- <input type="submit" id="submit" name="send" class="btn btn-primary" value="Edit Package"> -->
                                <button @click="updatePackage()"  class="btn btn-primary" type="button">
                                    Update Package
                                    <!-- <btnLoader v-else/> -->
                                </button>
                            </div><!--end col-->
                        </div><!--end row-->
                    </form><!--end form-->
                   
                </div>
            </div><!--end container-->

            <!-- <footer2/> -->
            <!-- End -->
        </main>
        <!--End page-content" -->
    </div>
    <!-- page-wrapper -->
    
   

</template>


<script setup>

import {useStore}  from "@/stores/index";
import {baseURL} from "@/composables/mixins";
// import { useRouter } from 'vue'
definePageMeta({
layout:"custom"
})

 
const pinia = useStore()

const packages = pinia.packages;
 
console.log(packages)

const router = useRouter();


const packageName = router.currentRoute.value.params.name;
console.log(packageName);

const selectedPackage = packages.find(pkg => pkg.name == packageName)
console.log(selectedPackage);


const isLoading = ref(false)
const message = ref("")

const updatePackage = async()=>{

    try{
    console.log(selectedPackage)
    const data = await fetch(`${baseURL}/package/update-package/${selectedPackage._id}`,{
    method: "PATCH",
    headers: {
        "Content-Type":"application/json",
        "token": `Bearer ${adtoken}`,
    },

    body: JSON.stringify(selectedPackage)
   }).then(res=>res.json());

   console.log(data)
    
//    const packageInfo =  data;
//    pinia.storePackage(packageInfo);

   if(!data.status) return message.value = data.message;

   navigateTo('/dashboard/packages')

    }catch(err){
        console.log(err)
    }
}


 
</script> 