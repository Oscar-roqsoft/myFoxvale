<template>
    

    <div>

        <!-- Hero Start -->
        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="me-lg-5">   
                            <img src="/p6.jpg" class="img-fluid  d-block mx-auto" alt="">
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-6">
                        <div class="card login-page shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center">Login</h4>  
                                <form class="login-form mt-4" @submit.prevent="null">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Your Email <span 
                                                    class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="email" class="form-control ps-5" v-model.trim="email"
                                                    placeholder="Email" name="email" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <input type="password" class="form-control ps-5" v-model.trim="password"
                                                    placeholder="Password" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12">
                                            <div class="d-flex justify-content-between">
                                                <div class="mb-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                        <label class="form-check-label" 
                                                        for="flexCheckDefault">Remember me</label>
                                                    </div>
                                                </div>
                                                <p class="forgot-pass mb-0">
                                                    <nuxt-link to="/recoverPassword"  
                                                    class="text-dark fw-bold">Forgot password ?</nuxt-link></p>
                                             </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12 mb-0">
                                            <div class="d-grid">
                                                <div class="text-danger text-center mb-4" 
                                                v-if="message.length">{{ message }}</div>
                                                <button @click.prevent="login()" :disabled="isLoading" 
                                                class="btn btn-primary" type="button">
                                                    <span v-if="!isLoading">Sign in</span>
                                                    <btnLoader v-else/>
                                                </button>
                                            </div>
                                        </div><!--end col-->

                                       

                                        <div class="col-12 text-center">
                                            <p class="mb-0 mt-3"><small class="text-dark me-2">
                                                Don't have an account ?</small> <nuxt-link to="/signup" 
                                                 class="text-dark fw-bold">Sign Up</nuxt-link></p>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form>
                            </div>
                        </div><!---->
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

    const pinia = useStore();
    const message = ref("");
    // get user input to model
    const email = ref("");
    const password = ref("");
   
    const isLoading = ref(false);

    const login = async()=>{
        
        // validate if the email is valid
        if(!validateEmail(email.value)) return message.value = "Invalid email address";

        // validate password
        if(password.value.length < 6) return message.value = "Password must be atleast 6 characters long!";

        const userLoginInfo = {
            email: email.value,
            password: password.value
        }

        // login the user
        try{ 
            console.log(userLoginInfo)
            message.value = "";
            isLoading.value = true;
            // fetch the data
            const data = await fetch(`${baseURL}/auth/login`,{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(userLoginInfo)
            }).then(res=>res.json());

            isLoading.value = false;
             
            // return error or success message 
            console.log(data)

            // check if the status is true  (if its true you be login  using router.push to the user dashboard)
            if(!data.status) return message.value = data.message;


            // store user login data to pina
            const userInfo = data.data;
            pinia.storeUser(userInfo);

            // take the user to the dashboard
            const router = useRouter();
            router.push("/dashboard");
        }catch(e){
            message.value = e.message;
        }
    }
    
 
</script>

