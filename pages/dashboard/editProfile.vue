<template>

    <div>

        <div class="page-wrapper toggled">
          <sidebar/>

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <Topheader/>

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Account Setting</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/profile">Account Details</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Account Settings</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div class="row">
                            <div class="col-lg-5 mt-4">
                                <div class="card border-0 rounded shadow">
                                    <div class="card-body">
                                        <h5 class="text-md-start text-center mb-0">Personal Detail :</h5>
        
                                        <div class="mt-4 text-md-start text-center d-sm-flex">
                                            <img :src="store.user.image" class="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" alt="">
                                            <input @click="handleImageChange()"  type="file" ref="profileImage" accept="image/png , image/jpeg" hidden/>
                                        </div>
                                        <div class=" mt-2 mb-0">
                                            <button @click="handleImageClick()" class="btn btn-primary">Edit profile picture
                                                
                                            </button>
                                        </div><!--end col-->
        
                                        <form @submit.prevent="null">
                                            <div class="row mt-4">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">First Name</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="first" type="text" class="form-control ps-5" v-model.trim="firstname" placeholder="First Name :">
                                                        </div>
                                                    </div>
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Last Name</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="last" type="text" class="form-control ps-5" v-model.trim="lastname" placeholder="Last Name :">
                                                        </div>
                                                    </div>
                                                </div><!--en'.d col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Your Email</label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="mail" class="fea icon-sm icons"></i>
                                                            <input name="email" id="email" type="email" class="form-control ps-5"  :placeholder="store.user.email">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Birthday</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="occupation" type="text" class="form-control ps-5" v-model.trim="birthday" placeholder="Birthday :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="address" type="text" class="form-control ps-5" v-model.trim="address" placeholder="Address :">
                                                        </div>
                                                    </div> 
                                                </div><!--en d col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Phone No</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="number" id="number" type="number" class="form-control ps-5" v-model.trim="phoneNo" placeholder="Phone No :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Upload Document</label>
                                                        <div class="form-icon position-relative">
                                                            <!-- <i data-feather="" class="fea icon-sm icons"></i> -->
                                                            <input name="document" id="document" type="file" class=" form-control"
                                                            placeholder="upload document">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                               
                                            </div><!--end row-->
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <input type="submit" @click.prevent="submitForm()" id="submit" name="send" class="btn btn-primary" value="Save Changes">
                                                </div><!--end col-->
                                            </div><!--end row-->
                                        </form><!--end form-->
                                    </div>
                                </div>

                               
                            </div><!--end col-->

                           

                        </div><!--end row-->
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


import {useStore}  from "@/stores/index"

import {validateEmail,baseURL} from "@/composables/mixins";
definePageMeta({
    layout:"custom"
})

const store = useStore()

const profileImage = ref()
const selectedImage = ref("")
const message = ref("")


const firstname = ref("")
const lastname = ref("")
const birthday = ref("") 
const address = ref("")
const phoneNo = ref("")
const document = ref("")



const submitForm = async()=>{ 
    const form = new FormData()
    // const fileStream = fs.createReadStream(address.value);
    
    // form.append('profileImage',selectedImage.value)
    // form.append('name', firstname.value +" "+lastname.value)
    // form.append('birthday',birthday.value)
    form.append('location',address.value)
    // form.append('phone_number',phoneNo.value)
    // form.append("file",document.value)
    const options = {
    method: 'POST',
    headers: {
        // 'content-type': 'application/json',
        Authorization: '0c7dbb8e-77dc-4ba2-b988-e190673339ca'
    },
    body: form,
    };

    fetch('https://api.nftport.xyz/v0/files', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(err => console.error(err));
}

// handling form image upload
const handleImageClick = ()=>{
    profileImage.value.click()
}

const handleImageChange =(event)=>{
//    const file = event.target.file
//    selectedImage.value = file
   console.log(event)
}


</script>