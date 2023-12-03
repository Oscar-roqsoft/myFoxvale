<template>
     <div class="rounded shadow p-3 mt-4 bg-white text-white">
                            <div class="d-flex justify-content-center">
                                <span class="h6 fs-bold fs-5 text-muted">Withdrawal Details</span>
                                <!-- <span class="ms-1 h6 text-muted fs-bold">$1.00</span> -->
                            </div>
                            <div class="row mt-4 align-items-center text-muted">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span class="text-dark">Payment Method:</span><br>
                                            <span>BTC Wallet Address</span>
                                           
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">

                                        <div class="form-icon position-relative">
                                            <span class="text-dark">Amount:</span><br>
                                            <span>{{ pinia.withdrawalDetails.amountToWithdraw }}</span>
                                           
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span class="text-dark">Wallet Address: </span><br>
                                            <span>{{ pinia.withdrawalDetails.walletAddress }}</span>
                                            
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12 mt-2 mb-2 d-flex" style="width: 100%;">
                                    <button @click.prevent="pinia.goBack" class="btn  btn-danger">Cancel</button>
                                    <button @click.prevent="withdrawalRequest" class="btn btn-warning ms-2" :disabled="isloading">Confirm</button>
                                </div><!--end col-->
                            </div><!--end row-->
                     </div>
</template>


<script setup>
import {useStore} from '@/stores/index'
import {baseURL} from '@/composables/mixins'

const pinia = useStore()
const isloading = ref(false)

const withdrawalRequest = async()=>{
    isloading.value = true
    const withdrawalDetail = {
        amount: pinia.withdrawalDetails.amountToWithdraw,
    }

    console.log(withdrawalDetail)
    try{
     const data = await fetch(`${baseURL}/user/send-withdrawal-request/btc`,{
        method:"POST",
        headers: {
        "Content-Type":"application/json",
        "token": `Bearer ${pinia.user.accessToken}`
        }, 
        body:JSON.stringify(withdrawalDetail)
     }).then(res=>res.json())
     isloading.value = false
     console.log(data.message)
     navigateTo('/dashboard/withdraw')
    }catch(e){
      console.log(e)
    }
}


</script>