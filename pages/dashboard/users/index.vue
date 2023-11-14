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
                                                    <th class="text-center border-bottom p-3" style="min-width: 200px;">Phone</th>
                                                    <th class="text-center border-bottom p-3" style="min-width: 150px;">Generate</th>
                                                    <th class="text-center border-bottom p-3">Actions</th>
                                                    <th class="text-end border-bottom p-3" style="min-width: 200px;"></th>
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
                                                    <td class="text-end p-3">
                                                        <a href="#" class="btn btn-sm btn-primary">Add</a>
                                                        <a href="#" class="btn btn-sm btn-danger ms-2">Delete</a>
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
                                        <span class="text-muted me-3">Showing 1 - 10 out of 50</span>
                                        <ul class="pagination mb-0 justify-content-center mt-4 mt-sm-0">
                                            <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#" aria-label="Next">Next</a></li>
                                         </ul>
                                    </div>
                                </div><!--end col-->
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
definePageMeta({
    layout:"custom"  
})

const userList =[{}]
</script>