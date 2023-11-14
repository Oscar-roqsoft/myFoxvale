<template>
    <!-- Navbar Start -->
    <header id="topnav" class="defaultscroll sticky">
        <div class="container">
            <!-- Logo container-->
            <a class="logo" href="/">
                <img src="/images/alog/logo_1-removebg.png" height="43" class="logo-light-mode" alt="">
                <img src="/images/alog/logo_1-removebg.png" height="43" class="logo-dark-mode" alt="">
                <span>Fox<span class="text-primary">vale</span></span>
            </a>                
            <!-- Logo End -->

            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

           

            <div id="navigation">
                <!-- Navigation Menu-->   
                <ul class="navigation-menu">
                    <li><nuxt-link to="/"  class="sub-menu-item">Home</nuxt-link></li>
                    <li><nuxt-link to="about"  class="sub-menu-item">About</nuxt-link></li>
                    <li><nuxt-link to="/login" class="sub-menu-item">Login</nuxt-link></li>
                    <li><nuxt-link to="/signup" class="sub-menu-item">Register</nuxt-link></li>
               
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </header><!--end header-->
    <!-- Navbar End -->
</template>



<style scoped>
#topnav{
    background-color: #fff;
}

.logo{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: large;
}

.menu-item{
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.sub-menu-item{
    color: black !important;
}
</style>