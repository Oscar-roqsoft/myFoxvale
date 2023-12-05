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

                        <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" >Foxvale</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/users" >Users</nuxt-link></li>
                                <li class="breadcrumb-item text-capitalize active" aria-current="page"> Verify User</li>
                            </ul>
                            
                        </nav>

                    </div>
                    
                    <Loaders v-if="isloading"/>

                    <div class="card mb-3" v-if="selectedPackage">
                        <div class="card-header">
                           <h5 class="card-title">{{selectedPackage.name }}</h5>
                        </div>
                        <div class="card-body">
                            <img :src="selectedPackage.profileImage? selectedPackage.profileImage : 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'" alt="User Avatar" style="height: 100px; width: 100px;" class="rounded-circle img-thumbnail" />
                            <p class="mt-3"><strong>Email:</strong> <br> {{ selectedPackage.email }}</p>
                            <p><strong>Phone:</strong> <br> {{ selectedPackage.phoneNumber?selectedPackage.phoneNumber:'Not Yet Uploaded' }}</p>
                            <p><strong>Address:</strong><br>  {{ selectedPackage.country?selectedPackage.country:'Not Yet Uploaded' }}</p>
                            <p><strong>Document:</strong> </p>
                            <div class="border rounded" style="height: 200px; width: 300px;" >
                                <img :src="selectedPackage.idFile"  style="height: 200px; width: 300px;">
                            </div>

                            <button class="btn mt-3  btn-primary" @click.prevent="verifyUser">Verify user</button>
                        </div>
                    </div>
                    
                </div>
            </div><!--end container-->

            <!-- End -->
        </main>
        <!--End page-content" -->
    </div>
    <!-- page-wrapper -->
    



  
</template>

<script setup>
import {useStore} from '@/stores/index'
import {baseURL} from '@/composables/mixins'
definePageMeta({
    layout:"custom"
})

const pinia = useStore()

const isloading = ref(false)
const users = pinia.userList;
 

const router = useRouter();


const usersName = router.currentRoute.value.params.id;
// console.log(usersName);

const selectedPackage = users.find(pkg => pkg._id == usersName)
console.log(selectedPackage);


const verifyUser = async()=>{
    isloading.value = true
    if(!selectedPackage.idFile) return;
    try{
       const data = await fetch(`${baseURL}/user/admin-verify-user/${selectedPackage._id}`,{
       method: "PATCH",
       headers: {
            "Content-Type":"application/json",
            "token": `Bearer ${adtoken}`
        },
       }).then(res=>res.json())

       isloading.value = false
       console.log(data)
     }catch(e){
       console.log(e)
     }
}



</script>