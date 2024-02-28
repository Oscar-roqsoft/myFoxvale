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
                               
                                <li class="breadcrumb-item text-capitalize active" aria-current="page">Wallet</li>
                            </ul>
                            
                        </nav>

                    </div>
                    
                    <Loaders v-if="isloading"/> 



                    <div class="d-flex justify-content-between align-items-center my-4"> 
                        <h2 class="fs-6 ">My Wallet</h2>
                        <!-- <a @click="navigateTo('/dashboard/Adminwallet/create_Wallet')" 
                        class="badge btn btn-sm bg-primary rounded ">Create New Wallet</a> -->
                    </div>
                    <div class="table-responsive shadow rounded">


                            <table class="table table-bordered">

                                
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Wallet Address</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                
                                <tbody v-for="item in pinia.walletDetails">
                                    
                                        
                                    <tr>
                                        <td style="width: 140px;">{{ item.name }}
                                            <span v-show="item.name === 'ETH'">(ERC-20)</span>
                                            <span v-show="item.name === 'USDT'">(TRC-20)</span>
                                            <span v-show="item.name === 'BTC'">(BITCOIN)</span>
                                        </td>
                                        <td>{{ item.value }}</td>
                                        <td> 
                                            <a @click.prevent="navigateTo(`/dashboard/Adminwallet/${item._id}`)" 
                                            class="badge btn btn-sm bg-primary rounded ">Edit</a>
                                        </td>
                                       
                                    </tr>
                                  

                                </tbody>
                            </table>
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



try{
    const data = await fetch(`${baseURL}/get-account-details`,{
       method: "GET",
       headers: {
            "token": `Bearer ${pinia.user.accessToken}`
        },
    }).then(res=>res.json());
    
    console.log(data.data.accountDetails)
    const userAccountDetails = data.data.accountDetails
    pinia.storeWalletDetails(userAccountDetails)
    // console.log(userslist)
    // pinia.storeUserList(userslist)
}catch(err){

    console.log(err)


}


</script>