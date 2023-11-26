<template>
      
    <div>
        <div class="back-to-home">
            <a href="" class="back-button btn btn-icon btn-primary"><i data-feather="arrow-left" class="icons"></i></a>
        </div>
        <!-- Hero Start -->
        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center">
                   
                    <div class="col-lg-5 col-md-6">
                        <div class="card shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center">Recover Account</h4>  

                                <form class="login-form mt-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p class="text-muted">Please enter your email address, verification code and new password </p>
                                            <div class="mb-3">
                                                <label class="form-label">Email address <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="email" v-model.trim="recoveryEmailVal"
                                                    class="form-control ps-3" 
                                                    placeholder="Enter Your Email Address" name="email" required>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Verification Code <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="number" v-model.trim="verificationCode"
                                                    class="form-control ps-3" 
                                                    placeholder="Enter Your Verification Code " name="Verification Code " required>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Email New Password <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="text" v-model.trim="newPassword"
                                                    class="form-control ps-3" 
                                                    placeholder="Enter Your Email Address" name="newPassword" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12 mb-0">
                                            <div class="d-grid">
                                                <div class="text-danger text-center mb-4" 
                                                v-if="message.length">{{ message }}</div>
                                                <button @click.prevent="change()" :disabled="isLoading" 
                                                class="btn btn-primary" type="button">
                                                    <span v-if="!isLoading">Send</span>
                                                    <btnLoader v-else/>
                                                </button>
                                            </div>
                                        </div><!--end col-->

                                        <div class="mx-auto">
                                            <p class="mb-0 mt-3">
                                                <small class="text-dark me-2">
                                                    Remember your password ?</small> 
                                                    <nuxt-link to="/login"  class="text-dark fw-bold">
                                                        Sign in</nuxt-link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> <!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- Hero End -->
        
    </div>

</template>



<script setup>


import {baseURL,validateEmail} from '@/composables/mixins'
import {useStore} from '@/stores/index'


const store = useStore()
const isloading = ref(false)
const message = ref('')
const recoveryEmailVal = ref('')
const verificationCode = ref('')
const newPassword = ref('')


const change = async()=>{
      // validate if the email is valid
    if(!validateEmail(recoveryEmailVal.value)) return message.value = "Invalid email address";

    if(!(verificationCode.verificationCode == store.storeUserRecoverycode )) return message.value = "Invalid verification code";

    isloading.value = true

    userNewInfo = {
     email:recoveryEmailVal.value,
     verificationCode: verificationCode.value,
     newPassword: newPassword.value
    }
    
    try{
        message.value = ''
        const data = await fetch(`${baseURL}/auth/change-password`,{
            method:"PATCH",
            headers: {
                    "Content-Type":"application/json",
                    "token": `Bearer ${store.user.accessToken}`
            },
            body: JSON.stringify(userNewInfo)
        }).then(res=>res.json());

        isloading.value = false
         
        console.log(data.data)
        if(!data.status) return message.value = data.message;

        alert('password successfully changed')
        
        // store.storeUserRecoverycode(data.data)
        
        navigateTo('/dashboard')


    }catch(e){
        console.log(e)
    }
}


</script>