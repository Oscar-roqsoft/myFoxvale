<template>
     
    <div>
      

        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
           <sidebar/>
            <!-- sidebar-wrapper  -->

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <topheader/>
                <!-- Top Header -->

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Pricing</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" href="index.html">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Pricing</li>
                                </ul>
                            </nav>
                        </div>
                    
                        
                          
                        <!-- Price start -->
                        <section class="section">
                            <div class="container place-items-center">
                               

                                <div class="row ">
                   
                    
                                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2" v-for="item in assetPlan">
                                        <div 
                                        class="card pricing pricing-primary business-rate shadow border-0 rounded">
                                            <div  v-if="item.title==='premium'"
                                            class="ribbon ribbon-right ribbon-warning overflow-hidden"><span class="text-center d-block shadow small h6">Best</span></div>
                                            <div class="card-body">
                                                <h6 class="title name  text-uppercase mb-4">{{item.title}}</h6>
                                                
                                                <div  class="d-flex mb-4">
                                                        <span v-for="i in item.icon" class="h1 mb-0 text-warning">
                                                            <i  class="uil uil-star"></i>
                                                        </span>
                                                </div>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>${{item.price1}}</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>-</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>${{item.price2}}</li>
                                                </ul>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>{{item.interest}}%</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>ROI</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>(weekly)</li>
                                                </ul>
                
                
                                               
                                                <a href="javascript:void(0)" class="btn btn-primary mt-4">Try It Out</a>
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                    
                                    
                                   
                                </div><!--end row-->
                            </div><!--end container-->

                          

                        </section><!--end section-->
                        <!-- Price End -->

                    </div>
                </div><!--end container-->

                <!-- <footer2/> -->
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

const assetPlan = [
    {
        id:"premium",
        title: "premium",
        price1: 50000,
        price2 : 100000,
        interest: 10,
        icon:['star','star','star','star','star']

    },
    {
        id: "deluxe",
        title: "deluxe",
        price1: 10000,
        price2 : 49999,
        interest: 7.5,
        icon:['star','star','star']

    },
    {
        id:"standard",
        title: "standard",
        price1: 1000,
        price2 : 9999,
        interest: 5,
        icon:['star','star']

    }   
]
</script>