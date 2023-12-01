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
                                                    <img  :src="image?`${image}`:'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'"
                                                     class="rounded-circle shadow avatar avatar-md-md mx-auto">
                                                    <h5 class="mt-3 mb-0">{{ store.user.name }}</h5>
                                                    <div>
                                                        <span v-if="!store.user.isVerified"  class="text-danger mb-0 fs-6">Not Yet Verified</span>
                                                        <span v-else  class="text-primary mb-0 fs-6">Verified
                                                        </span>
                                                    </div>
                                                    <div class="mt-2">
                                                        <button  @click="navigateTo('/dashboard/editProfile')" class="btn btn-primary">Update Account</button>
                                                    </div><!--end col-->
                                                </div>
                                                <h5 class="mb-0">Personal Details :</h5>
                                                <div class="mt-4">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Name :</h6>
                                                            <input name="name"  type="text" class="form-control ps-2"  
                                                            :placeholder="name?`${name}`: 'No name Uploded Yet'" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Email :</h6>
                                                            <input name="email" type="text" class="form-control ps-2" 
                                                             :placeholder="email ?`${email}`: 'No email Uploded Yet'" disabled>
                                                        </div>
                                                    </div>
                                                 
                                                  
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Birthday :</h6>
                                                            <input name="birthday" type="text" class="form-control ps-2"  
                                                            :placeholder="birthday?`${birthday}`: 'No Date Of Birth Uploded Yet'" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Address :</h6>
                                                            <input name="address" type="text" class="form-control ps-2"  
                                                            :placeholder="address?`${address}`: 'No Address Uploded Yet'" disabled>

                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Phone No :</h6>
                                                            <input name="number"  type="text" class="form-control ps-2"  
                                                            :placeholder="number?`${number}`: 'No PhoneNumber Uploded Yet'" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-1">
                                                            <h6 class="text-primary mb-0">Document No:</h6>
                                                            <input name="file" id="file" type="text" class="form-control ps-2"  
                                                            :placeholder="document?`${document}`: 'No Document Uploded Yet'" disabled>
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

import {useStore} from '@/stores/index'
definePageMeta({
    layout:"custom"
})


const store = useStore()

const image = ref('')
const name = ref('')
const email = ref('')
const birthday = ref('')
const address = ref('')
const number = ref('')
const document = ref('');

onMounted(()=>{
    image.value = store.user.profileImage
    name.value = store.user.name
    email.value = store.user.email
    birthday.value = store.user.birthday
    address.value = store.user.country
    number.value = store.user.phoneNumber
    document.value = store.user.idFile
})




 

</script>