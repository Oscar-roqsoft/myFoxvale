<template>
        
     <div class="main-layer fade" v-if="isSupported"  :class="isVisible== props.value?'main-layer-visible':'main-layer-hidden'">

         <div class="layer rounded shadow" :class="isVisible === props.value ?'clicked':''">
                <div>
                    <p class="text-sm">Send <span class="text-warning">${{ numberWithCommas(props.depositAmount) }}</span> worth of 
                        BTC to the wallet address below</p>
                    <hr class="bg-dark w-100">
                </div>
             
                <div class="img">
                    <qrcode-vue :value="props.select" :size="size" level="H" />
                </div>
                <input class="form-control ps-4 w-100" type="type" v-model.trim="props.select" disabled/>
                <hr class="bg-dark w-100">
                <button @click.prevent="copy(props.select)" class="btn btn-warning text-sm">
                    <span v-if="!copied">Copy Wallet Address</span>
                    <span v-else>Copied!</span>
                </button>
                <div class="w-100">
                    <hr class="bg-dark w-100">
                    <div class=" d-flex justify-content-center">
                        <button @click.prevent="closeModal" class="btn btn-danger text-sm">close</button>
                        <button @click.prevent="" class="btn btn-success mx-2 text-sm">confirm</button>
                    </div>
                </div>
         </div>
     </div>
           
        
</template>



<script setup>
import QrcodeVue from 'qrcode.vue'
import {useStore} from '@/stores/index'
import {baseURL} from '@/composables/mixins'

const store = useStore()

const props = defineProps([
    "value",
    "depositAmount",
    "select"
])

const size = 130

const btcAddress = ref("bdfgetGDRTHBB3#juhyugnigtgtg")
const isVisible = ref(true)

const emits = defineEmits()

const { copy,copied, isSupported } = useClipboard({ btcAddress })

// How to format a number with commas as thousands separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const closeModal = ()=>{
    emits('changeD', isVisible.value = !isVisible.value)
}





const confirmPayment = async()=>{
    try{
     const data = await fetch(`${baseURL}/`)
    }catch(e){
        console.log(e)
    }
}


</script>



<style scoped>
.text-sm{
    font-size: 12px;
}

.main-layer-visible{
    visibility: visible;
    transition: all 0.5s ease;
  transform: scale(1);
  opacity: 1;
}
.main-layer-hidden{
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
  transform: scale(0);
}


.main-layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* From https://css.glass */
background: rgba(255, 255, 255, 0.03);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}







.layer {
    padding: margin;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 14px 27px ;
  background: white;
  opacity: 0;
  transform: scale(0.1);
  font-size: 18px;
  transition: all 0.5s ease;
  visibility: hidden;
  
}

i {
  position: absolute;
  right: 15px;
  top: 10px;
  color: #FFF;
  cursor: pointer;
}

.img{
    width: 160px;
}


.clicked {
  transition: all 0.5s ease;
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  
}
</style>