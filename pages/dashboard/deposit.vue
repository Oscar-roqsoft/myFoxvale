
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
                            <h5 class="mb-0">Deposit Fund</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Deposit</li>
                                </ul>
                               
                            </nav>
                        </div>
                    
                        
                        <form class="rounded shadow p-3 mt-4 bg-color text-white">
                            <div class="d-flex justify-content-end">
                                <span class="h6 fs-bold text-muted">Mini Deposit :</span>
                                <span class="ms-1 h6 text-muted fs-bold">$100.00</span>
                            </div>
                            <div class="row mt-4 align-items-center">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                                <label for="selectOptions" class="form-label">Wallet Name</label>
                                                <!-- <select class="form-select mb-3" id="selectOptions" aria-label="Default select example">
                                                    <option selected>Select Wallet Type</option>
                                                    <option value="USDT">USDT</option>
                                                    <option value="BTC">BTC</option>
                                                    <option value="ETH">ETH</option>
                                                </select> -->
                                                <select v-model="selected" class="form-select mb-3"  >
                                                   <option  v-for="option in options" :key="option.value" :value="option.text">
                                                    {{ option.text }}
                                                   </option>
                                                </select>
                                                <!-- <p>{{ selected }}</p> -->
                                            
                                            <!-- <span>Payment Method</span>
                                            <input type="text" value="BTC WALLET ADDRESS" class="form-control ps-4" disabled> -->
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">

                                        <div class="form-icon position-relative">
                                            <span>Amount</span>
                                            <input type="number" class="form-control ps-4" v-model.trim="inputDepositAmtVal">
                                        </div>
                                    </div>
                                </div><!--end col-->

                              

                                <div class="col-lg-12 mt-2 mb-2 d-flex align-items-center" style="width: 100%;">
                                    <button @click.prevent="navigateTo('/dashboard')" class="btn  btn-danger">Cancel</button>
                                    
                                    <button  @click.prevent="toggleModal()" class="btn btn-warning ms-2">Proceed</button>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                        

                        <modal-wallet-details :depositAmount="amountToDeposit"  :value="modalVisibility" :changeD="toggleModal"/>
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

import {useStore} from '@/stores/index'
definePageMeta({
    layout:"custom"  
})

const selected = ref('USDT')
const selectedOptions = ref(null)
const pinia = useStore()
pinia.storeselectedWalletName(selected)

const isVisible = ref(false)
const inputDepositAmtVal = ref('')
let amountToDeposit = ref('')

const modalVisibility = ref(null)


const options = [
        { value: '1', text: 'USDT' },
        { value: '2', text: 'BTC' },
        { value: '3', text: 'ETH' }
]


watch(selected,(newval)=>{
    selectedOptions.value = options.find(option => option.value === newval);
    console.log(selectedOptions.value)
})


const toggleModal =()=>{
    if(inputDepositAmtVal.value >= 100 ){
        amountToDeposit.value = inputDepositAmtVal.value
        modalVisibility.value = !modalVisibility.value
        inputDepositAmtVal.value =''
    }else{
        return modalVisibility.value = false
    }

}



</script>



<style scoped>

.bg-color{
    background: #101038;
}

</style>