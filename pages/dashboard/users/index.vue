<template>
     
    <div>
        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
           <Sidebar/>
            <!-- sidebar-wrapper  -->
    
            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
                <Topheader/>
                <!-- Top Header -->
    
                    <div class="container-fluid">
                        <div class="layout-specing">
                            <div class="d-md-flex justify-content-between align-items-center">
                                <h5 class="mb-0">All users</h5>
    
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                        <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                        <li class="breadcrumb-item text-capitalize active" aria-current="page">Users</li>
                                    </ul>
                                </nav>
                            </div>
    
                            <div class="row">
                                <div class="col-12 mt-4">
                                    <div class="table-responsive shadow rounded">
                                        <table class="table table-center bg-white mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="border-bottom p-3" style="min-width: 220px;">Client Name</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 200px;">Email</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">Country</th>
                                                    <th class="text-center border-bottom p-3">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Start -->
                                                <tr v-for="(userr,id) in paginatedUsers " :key="id">
                                                   <td class="p-3">
                                                        <a href="#" class="text-primary">
                                                            <div class="d-flex align-items-center">
                                                                <img src="/images/client/01.jpg" class="avatar avatar-ex-small rounded-circle shadow" alt="">
                                                                <span class="ms-2">{{ userr.name }}</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td class="text-center p-3">{{ userr.email }}</td>
                                                    <td class="text-center p-3">{{ userr.Country?userr.Country:'No Country Uploaded Yet' }}</td>
                                                    <td class="text-center p-3">
                                                        <a @click="navigateTo(`/dashboard/users/${userr._id}`)" class="badge btn btn-sm bg-primary rounded ">
                                                         approve
                                                        </a>
                                                    </td>
                                                   
                                                </tr>
                                                <!-- End -->
    
                                            </tbody>
                                        </table>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
    
                            <div class="row text-center">
                                <!-- PAGINATION START -->
                                <div class="col-12 mt-4">
                                    <div class="d-md-flex align-items-center text-center justify-content-between">
                                        <span class="text-muted me-3">Showing 1 - 10 out of {{ userr.length + 1  }}</span>
                                        <ul class="pagination mb-0 justify-content-center mt-4 mt-sm-0">
                                            <li class="page-item"><a @click.prevent="handlePagePrevChange()" class="page-link"  aria-label="Previous">Prev</a></li>
                                            <li @click.prevent="currentPage=i" v-for="i in totalPages" :key="i" class="page-item" :class="i==currentPage?'active':''">
                                                <a  class="page-link" href="#">{{ i }}</a></li>
                                           
                                            <li class="page-item"><a @click.prevent="handlePageNextChange()" class="page-link" href="#" aria-label="Next">Next</a></li>
                                         </ul>
                                    </div>
                                </div>
                                <!--end col-->
                                <!-- PAGINATION END -->

                               
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
import {useStore}  from "@/stores/index";
import {baseURL} from "@/composables/mixins";
definePageMeta({
    layout:"custom"  
})

const pinia = useStore()

try{
    const data = await fetch(`${baseURL}/user/users-list`,{
       method: "GET",
       headers: {
            "Content-Type":"application/json",
            "token": `Bearer ${adtoken}`
        },
    }).then(res=>res.json());
    
    const userslist = data.data.users
    console.log(userslist)
    pinia.storeUserList(userslist)
}catch(err){
    console.log(err)
}





//pagination setup
const userr = pinia.userList
// Define per-page display
const perPage = 10;

// Define current page state using ref
const currentPage = ref(1);


const paginatedUsers = computed(() => {
  return userr.slice(((currentPage.value - 1) * perPage), currentPage.value * perPage);
});

const totalPages = ref(Math.ceil(userr.length / perPage));
const handlePageNextChange = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const handlePagePrevChange = () => {
    if (currentPage.value > 1) {
    currentPage.value--;
  }
};



</script>