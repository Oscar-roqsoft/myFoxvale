  
<template>
   
    <div class="row">
        <div class="col-12 mt-4">
            <div class="d-flex align-items-center justify-content-center my-4 ">
                <h6 class="mb-1 fs-5">Users List</h6>
            </div>
            <div class="table-responsive shadow rounded">
                <table class="table table-center bg-white mb-0">
                    <thead>
                        <tr>
                            <th class="border-bottom p-3" style="min-width: 220px;">Client Name</th>
                            <th class="text-center border-bottom p-3" style="min-width: 200px;">Phone</th>
                            <th class="text-center border-bottom p-3" style="min-width: 150px;">Generate(Dt.)</th>
                            <th class="text-center border-bottom p-3">Actions</th>
                            <!-- <th class="text-end border-bottom p-3" style="min-width: 200px;"></th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Start -->
                        <tr v-for="i in 4 ">
                           <td class="p-3">
                                <a href="#" class="text-primary">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/client/01.jpg" class="avatar avatar-ex-small rounded-circle shadow" alt="">
                                        <span class="ms-2">Howard Tanner</span>
                                    </div>
                                </a>
                            </td>
                            <td class="text-center p-3">(+12)85-4521-7568</td>
                            <td class="text-center p-3">23th Sept 2021</td>
                            <td class="text-center p-3">
                                <div class="badge btn btn-sm bg-primary rounded ">
                                 approve
                                </div>
                            </td>
                            <!-- <td class="text-end p-3">
                                <a href="#" class="btn btn-sm btn-primary">Add</a>
                                <a href="#" class="btn btn-sm btn-danger ms-2">Delete</a>
                            </td> -->
                        </tr>
                        <!-- End -->

                    </tbody>
                </table>
            </div>
        </div><!--end col-->
    </div><!--end row-->


</template> 





<script setup>

import {useStore}  from "@/stores/index";
import {baseURL} from "@/composables/mixins";

const pinia = useStore()

const data = await fetch(`${baseURL}/user/users-list`,{
   method: "GET",
   headers: {
        "Content-Type":"application/json",
        "token": `Bearer ${pinia.user.accessToken}`
    },
}).then(res=>res.json());

onMounted(()=>{
    console.log(data.message)
})

</script>