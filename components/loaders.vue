<template>
    <div class="main  d-flex justify-content-center align-items-center">
        <span class="loader"></span>
    </div>
    <div class="inner"></div>
</template>


<style scoped>
      .main{
        position: absolute;
        left:38vw;
        height: 60vh;
        background: transparent;
        z-index: 20;
      } 

      .inner{
        position: absolute;
        height: 100vh;
        width: 100%;
        background: #fff;
        z-index: 10;
        opacity: 0.8;
      }
      .loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  .loader:before {
    animation: ball1 1s infinite;
    background-color: #fff;
    box-shadow: 30px 0 0 #0400ff;
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 1s infinite;
    background-color: #0400ff;
    box-shadow: 30px 0 0 #fff;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8) }
    50% { transform: rotate(360deg) scale(1.2) }
    100% { transform: rotate(720deg) scale(0.8) }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #0400ff;
    }
    50% {
      box-shadow: 0 0 0 #0400ff;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #0400ff;
      margin-bottom: 10px;
    }
  }

 
  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #fff;
    }
    50% {
      box-shadow: 0 0 0 #fff;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #fff;
      margin-top: 0;
    }
  }
  
</style>