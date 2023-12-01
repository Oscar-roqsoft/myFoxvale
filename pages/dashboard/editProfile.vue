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

                        <Loaders v-if="isloading"/>
                        
                    
                        <div class="row">
                            <div class="col-lg-5 mt-4">
                                <div class="card border-0 rounded shadow">
                                    <div class="card-body">
                                        <h5 class="text-md-start text-center mb-0">Personal Detail :</h5>
        
                                        <div class="mt-4 text-md-start text-center d-sm-flex">
                                            <img  :src="store.user.imageProfile? store.user.imageProfile : 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'"
                                             ref="profileImg" class="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" alt="">
                                            <input @input="handleImgChange($event)"  type="file" 
                                            ref="profileImage" accept="image/jpeg,.webp,.png,.jpg,.gif,.svg,.jfif,.pjpeg,.pjp" hidden/>
                                        </div>
                                        <div class=" mt-2 mb-0">
                                            <button @click="handleImageClick()" class="btn btn-primary">Edit profile picture
                                                
                                            </button>
                                        </div><!--end col-->
        
                                        <form @submit.prevent="null">
                                            <div class="row mt-4">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Name</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="first" type="text"
                                                             class="form-control ps-5"  :placeholder="store.user.name">
                                                        </div>
                                                    </div>
                                                </div><!--end col-->
                                               
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Your Email</label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="mail" class="fea icon-sm icons"></i>
                                                            <input name="email" id="email" type="email" 
                                                            class="form-control ps-5"  :placeholder="store.user.email">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Birthday</label>
                                                        <div class="form-icon position-relative">
                                                            <input  id="occupation" type="date" 
                                                            class="form-control ps-5" v-model.trim="birthday" placeholder="DD/MM/YY">
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
                                                            <input  name="number" id="number" type="number" class="form-control ps-5" 
                                                            v-model.trim="phoneNo" placeholder="Phone No :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Upload Document</label>
                                                        <div class="form-icon position-relative">
                                                            <!-- <i data-feather="" class="fea icon-sm icons"></i> -->
                                                            <input @input="handleDocumentChange($event)" type="file" class=" form-control"
                                                            placeholder="upload document" 
                                                            accept="image/jpeg,.webp,.png,.jpg,.pdf">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                               
                                            </div><!--end row-->
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <input type="submit" @click.prevent="submitUserUpdate()" id="submit" name="send" class="btn btn-primary" value="Save Changes">
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

import {validateEmail,baseURL,handleFileChange,uploadFile,formatDateOfBirth} from "@/composables/mixins";

definePageMeta({
    layout:"custom"
})

const store = useStore()
const isloading = ref(false)

const profileImage = ref()
const selectedImage = ref("")
const message = ref("")

const selectedfile = ref("");
const profileImg = ref(null);


const birthday = ref("") 


const address = ref("")
const phoneNo = ref("")

const handleImageClick = ()=>{
    profileImage.value.click()
}

const handleImgChange = async(event)=> await handleFileChange(event,selectedImage,profileImg);
const handleDocumentChange = async(event)=> await handleFileChange(event,selectedfile);

const submitUserUpdate = async()=>{
    isloading.value = true

    // upload profile image
    const image_url = await uploadFile(selectedImage.value);
    if(!image_url){
        alert('profile image failed to upload')
        isloading.value = false
        return
    }
    
    // upload document
    const document_url = await uploadFile(selectedfile.value);
    if(!document_url){
        alert('document failed to upload')
        isloading.value = false
        return
    }

    const profileUserUpdateInfo = {
        profileImage: image_url,
        birthday: birthday.value,
        country: address.value,
        phoneNumber: phoneNo.value,
        idFile : document_url,
    }


    console.log(profileUserUpdateInfo)
    try{
       const data = await fetch(`${baseURL}/user/update-user`,{
        method:'PATCH',
        headers:{
            "Content-Type":"application/json",
            "token": `Bearer ${store.user.accessToken}`
        },
        body:JSON.stringify(profileUserUpdateInfo)
       }).then(res =>res.json())

        console.log(data.message)
        console.log(data.data)

        let updatedUserInfo = data.data.updatedUser
        store.storeUser(updatedUserInfo);
      
       isloading.value = false

       navigateTo('/dashboard/profile')
    }catch(e){
        console.log(e)
    }
}













</script>