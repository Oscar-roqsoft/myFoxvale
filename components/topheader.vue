<template>

     <!-- Top Header -->
    <div class="top-header">
            <div class="header-bar d-flex justify-content-between border-bottom">
                <div class="d-flex align-items-center">
                    <a href="#" class="logo-icon me-3">
                        <img src="/images/alog/logo_1-removebg.png"   height="50" alt="">
                        <span>Fox<span class="text-primary">vale</span></span>
                        <span class="big">
                            <img src="/images/alog/logo_1-removebg.png"   height="50" class="logo-light-mode" alt="">
                            <span>Fox<span class="text-primary">vale</span></span>
                            <!-- <img src="/images/alog/logo_1-removebg.png"    height="60" class="logo-dark-mode" alt=""> -->
                        </span>
                    </a>
                    <a @click="toggleSidebar"  id="close-sidebar" class="btn btn-icon btn-soft-light" >
                        <!-- href="javascript:void(0)"  -->
                        <i class="ti ti-menu-2"></i>
                    </a>
                  
                </div>

                <ul class="list-unstyled mb-0"> 
                   
                    <li class="list-inline-item mb-0 ms-1">
                        <div class="dropdown dropdown-primary">
                            <button type="button" class="btn btn-soft-light dropdown-toggle p-0" data-bs-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><img 
                        :src="store.user.imageProfile? store.user.imageProfile : 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'" class="avatar avatar-ex-small
                             rounded" alt=""></button>
                            <div class="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3" style="min-width: 200px;">
                                <nuxt-link to="/dashboard/profile" 
                                     class="dropdown-item d-flex align-items-center text-dark pb-3">
                                    <img  :src="store.user.imageProfile? store.user.imageProfile : 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'" class="avatar avatar-md-sm rounded-circle border shadow" alt="">
                                    <div class="flex-1 ms-2">
                                        <span class="d-block">@{{store.user.name}}</span>
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/dashboard" class="dropdown-item text-dark" ><span class="mb-0 d-inline-block me-1"><i class="ti ti-home"></i></span> Dashboard</nuxt-link>
                                <nuxt-link to="/dashboard/profile" class="dropdown-item text-dark"><span class="mb-0 d-inline-block me-1"><i class="ti ti-settings"></i></span> Account</nuxt-link>
                                <div class="dropdown-divider border-top"></div>
                                <button @click="store.signOut()"  class="dropdown-item text-dark"><span class="mb-0 d-inline-block me-1"><i class="ti ti-logout"></i></span> Logout</button>
                            </div>
                        </div>
                    </li>
                </ul> 
            </div>
    </div>
    <!-- Top Header -->
    
</template>


<script setup>
  import {useStore}  from "@/stores/index"

 
const store = useStore()

const toggleSidebar =()=>{
    store.menuOverlay = !store.menuOverlay
}

// const isAdmin = computed(() => {
//       return  store.user.isAdmin =  true
//     })


</script>

