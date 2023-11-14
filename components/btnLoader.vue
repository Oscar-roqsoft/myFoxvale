<template>
    <div class="main">
        <div class="spinner "></div>
    </div>
    
</template>


<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.spinner {
  
   width: 24px;
   height: 24px;
   border-radius: 50%;
   background: conic-gradient(#0000 10%,#ffff);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
   animation: spinner-zp9dbg 1s infinite linear;
}

@keyframes spinner-zp9dbg {
   to {
      transform: rotate(1turn);
   }
}
</style>