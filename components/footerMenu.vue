<template>

    <!-- Footer Start -->
    <footer class="footer">    
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footer-py-60">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <div class="center">
                                    <a href="/" class="logo-footer  ">
                                        <img class="logo-footer2" src="/images/alog/logo_1-removebg.png" height="50" alt="">
                                    </a>
                                    <span class="mx-2 text-white">Fox<span class="text-primary">vale</span></span>
                                </div>
                                <p class="mx-auto mb-0">Start working with 
                                Foxvale
                                that can provide everything you need to generate 
                                massive profitable investment</p>

                            </div><!--end col-->
                            
                            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Company</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li><nuxt-link to="/about"  class="text-foot"><i class="uil uil-angle-right-b me-1"></i> About us</nuxt-link></li>
                                    <li><nuxt-link to="/login"  class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Login</nuxt-link></li>
                                    <li><nuxt-link to="/signup"  class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Register</nuxt-link></li>
                                </ul>
                            </div><!--end col-->
                            
                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Usefull Links</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li><nuxt-link to="/privacy" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="/terms" class="text-foot"><i class="uil uil-angle-right-b me-1"></i>Terms of Service</nuxt-link></li>
                                    <!-- <li><nuxt-link to="/legalDocuentation" class="text-foot"><i class="uil uil-angle-right-b me-1">Legal Documentation</i></nuxt-link></li> -->
                                </ul>
                            </div><!--end col-->

                        </div><!--end row-->
                        <div class="d-flex " style="display: flex; align-items: center; margin-top: 20px;">
                            <img style="width: 30px; height: 30px;"  src="/email.png"/>
                            <span style="margin-left: 8px !important;">support@foxvale.org</span>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

      
    </footer><!--end footer-->
    <!-- Footer End -->   
    
</template>

<style scoped>
.logo-footer{
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
    font-size: larger;
    margin-bottom: 10px;
}

.footer{
    color: #adb5bd !important;
    background: #202942 !important;
    position: relative;
    height: 100%;
}
.container{
    color: #adb5bd !important;
    background: #202942 !important;
    position: relative;
}

</style>