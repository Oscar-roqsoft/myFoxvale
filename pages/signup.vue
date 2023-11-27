<template>
      
    <div>
        <!-- Hero Start -->
        <section class="bg-auth-home d-table w-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="me-lg-5">   
                            <img src="/images/user/signup.svg" class="img-fluid d-block mx-auto" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="card shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center">Signup</h4>  
                                <form class="login-form mt-4" @submit.prevent="null">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">First name <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="text" class="form-control ps-5" v-model.trim="firstName"
                                                    placeholder="First Name" name="s" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-6">
                                            <div class="mb-3"> 
                                                <label class="form-label">Last name <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="text" class="form-control ps-5" v-model.trim="lastName"
                                                    placeholder="Last Name" name="s" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="email" class="form-control ps-5" v-model.trim="email"
                                                    placeholder="Email" name="email" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="password" class="form-control ps-5" v-model.trim="password"
                                                    placeholder="Password" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">I Accept <a href="#" class="text-primary">Terms And Condition</a></label>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="d-grid">
                                                <div class="text-center text-danger" v-if="message.length">{{ message }}</div>
                                                <button  @click.prevent="signup()" class="btn btn-primary" :disabled="isLoading">
                                                    <span v-if="!isLoading">Register</span>
                                                    <btnLoader v-else/>
                                                </button>
                                            </div>
                                        </div><!--end col-->

                                       

                                        <div class="mx-auto">
                                            <p class="mb-0 mt-3"><small class="text-dark me-2">
                                                Already have an account ?</small> 
                                                <button @click="navigateTo('/login')" class=" btn text-primary" type="button">Sign in</button></p>
                                        </div>
                                    </div><!--end row-->
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
    import {useStore}  from "@/stores/index";
    import {validateEmail,baseURL} from "@/composables/mixins";

    const message =ref("")
       const pinia = useStore()
    // get user input values
    const firstName = ref("")
    const lastName = ref("")
    const email = ref("")
    const password = ref("")

    const isLoading =ref(false)


    const signup =async()=>{
        //  validate if the email is valid
        if(!validateEmail(email.value)) return message.value = "Invalid email address";
        
        if(password.length < 6) return message.value ="password length must be more than 6 values";

        const userSignupInfo ={
           name:firstName.value +' '+ lastName.value,
           email:email.value,
           password:password.value,

        }
        
        try{
            // fetch 
            console.log(userSignupInfo)
             message.value = "";
            isLoading.value = true
            const data = await fetch(`${baseURL}/auth/register`,{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                }, 
                body: JSON.stringify(userSignupInfo)  //we use JSON.stringify to convert to display the values of userSignupInfo as strings
            }).then(res=>res.json())

            isLoading.value   = false
           console.log(data)

            if(!data.status) return message.value = data.message;

            const userInfo = ref(data);
          
              console.log(userInfo)
              pinia.storeUser(userInfo);


            const router = useRouter();
            router.push("/dashboard");

        }catch(e){
           message.value = e.message 
        }

    }
    
 </script>
