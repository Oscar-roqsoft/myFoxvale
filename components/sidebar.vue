<template>
      
    
    <!-- sidebar-wrapper -->
    <nav id="sidebar" class="sidebar-wrapper sidebar-dark" :class="store.menuOverlay === true ?'hide-sidebar-lg show-sidebar':'hide-sidebar show-sidebar-lg'">
        <div class="sidebar-content" data-simplebar >
            <div class="sidebar-brand">
                <a href="#">
                    <!-- <img src="/images/alog/logo_1-removebg.png"  height="60"  alt=""> -->
                    <!-- <img src="/images/logo-light.png" height="24" class="logo-dark-mode" alt=""> -->
                    <span class="sidebar-colored">
                        <div class="center">

                            <div class="logo-header mt-2">
                                <img src="/images/alog/logo_1-removebg.png"   height="50" alt="">
                            </div>
                            <span class="mx-2 text-white mt-2">Fox<span class="text-primary">vale</span></span>
                        </div>
                    </span>
                </a>
            </div>
            
            <ul class="sidebar-menu" v-if="store.user">
                <li><nuxt-link to="/dashboard/" ><i class="ti ti-home me-2"></i>Dashboard</nuxt-link></li>
                <li v-if="!store.user.isAdmin"><nuxt-link to="/dashboard/profile"><i class="ti ti-user me-2"></i>Account Settings</nuxt-link></li>
                <li v-if="store.user.isAdmin"><nuxt-link to="/dashboard/orders"><i class="ti ti-user me-2"></i>Orders</nuxt-link></li>
                <li v-if="!store.user.isAdmin"><nuxt-link to="/dashboard/subscription"><i class="ti ti-file-info me-2"></i>Subscriptions</nuxt-link></li>
                <li v-if="!store.user.isAdmin"><nuxt-link to="/dashboard/privacy"><i class="ti ti-home me-2"></i>Privacy Policy</nuxt-link></li>
                
                <li v-if="store.user.isAdmin"  class="sidebar-dropdown" >
                    <a  href="javascript:void(0)"><i class="ti ti-brand-gravatar me-2"></i>User Management</a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li><nuxt-link to="/dashboard/users" >All Users</nuxt-link></li>
                            <li><nuxt-link to="/dashboard/users/adduser" >Add User</nuxt-link></li>
                        </ul>
                    </div>
                </li>
                <li v-if="store.user.isAdmin"  class="sidebar-dropdown" >
                    <a  href="javascript:void(0)"><i class="ti ti-shopping-cart me-2"></i>Packages</a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li><nuxt-link to="/dashboard/packages">All Packages</nuxt-link></li>
                            <li><nuxt-link to="/dashboard/packages/createPackage">Add Package</nuxt-link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- sidebar-menu  -->
        </div>
    </nav>
    <!-- sidebar-wrapper  -->
</template>

 

<script setup>


  import {useStore}  from "@/stores/index"

  const store = useStore()
 


//  const isAdmin = computed(() => {
//     return  store.user.isAdmin = "true"
//     console.log(store.user.isAdmin)
//     })



</script>


<style scoped>

.sidebar-content{
    overflow-y: hidden !important;
}

.show-sidebar{
    left: 0px !important;
}
.hide-sidebar{
    left:-300px !important;
}

@media (min-width: 1023px) {
   
.show-sidebar-lg{
    left: 0px !important;
}
.hide-sidebar-lg{
    left:-300px !important;
} 
}

.logo-header{
    background:#fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
}
.center{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

</style>