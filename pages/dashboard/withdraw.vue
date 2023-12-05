
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
                            <h5 class="mb-0">Withdraw Funds</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Withdrawal</li>
                                </ul>
                            </nav>
                        </div>
                    
                        
                        <form v-if="pinia.navigateBackAndFrontVal" class="rounded shadow p-3 mt-4 bg-color text-white" submit.prevent="null">
                            <div class="d-flex justify-content-end">
                                <span class="h6 fs-bold text-muted">Mini Withdrawal :</span>
                                <span class="ms-1 h6 text-muted fs-bold">$1.00</span>
                            </div>
                            <div class="row mt-4 align-items-center">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span>Payment Method</span>
                                            <select  v-model="selected" class="form-select mb-3">
                                                   <option  v-for="option in options" 
                                                   :key="option.name" :value="option.name">
                                                    {{ option.name }}
                                                   </option>

                                            </select>
                                            <!-- <input type="select" placeholder="BTC Wallet Address" class="form-control ps-4" disabled> -->
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">

                                        <div class="form-icon position-relative">
                                            <span>Amount</span>
                                            <input type="number" placeholder="Enter Amount Here" class="form-control ps-4"
                                            v-model.trim="amountToWithdraw">
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span>Wallet Address</span>
                                            <input type="select" placeholder="Enter Your Wallet Address Here" class="form-control ps-4"
                                            v-model.trim="walletAddress">
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12 mt-2 mb-2 d-flex" style="width: 100%;">
                                    <button @click.prevent="navigateTo('/dashboard/')" class="btn  btn-danger">Cancel</button>
                                    <button @click.prevent="pinia.goFront()" class="btn btn-warning ms-2">Proceed</button>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                        
                         <modal-deposit v-if="!pinia.navigateBackAndFrontVal"   
                         :class="!pinia.navigateBackAndFrontVal?'slideRight':'slideLeft'"/>
                    </div>

                    <modal-success/>
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
import {useStore} from '@/stores/index'
import {baseURL} from '@/composables/mixins'
definePageMeta({
    layout:"custom"
})

const pinia = useStore()
const amountToWithdraw = ref('')
const walletAddress = ref('')
const selected = ref("BTC")
const options = [
    {value: 1, name:'BTC'},
    {value: 1, name:'USDT'},
    {value: 1, name:'ETH'},
]

const withdrawalDetails = {
    amountToWithdraw,
    walletAddress,
    selected
}



console.log(withdrawalDetails)
pinia.storewithdrawalDetails(withdrawalDetails)


</script>


<style scoped>

.bg-color{
    background: #101038;
}
.slideRight{
        animation: slideRight 0.5s ease 0s 1 normal forwards;
    }
.slideLeft{
        animation: slideLeft 0.5s ease 0s 1 normal forwards;
    }

@keyframes slideRight {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

   

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes slideLeft {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>