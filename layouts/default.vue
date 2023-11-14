<template>
    <div>
         <Navbar/>
         <slot/>
         <footerMenu/>
    </div>
</template>




<script setup>
    import {useStore}  from "@/stores/index";
    const store = useStore()
    const router = useRouter();
  // check if the user is logged in

  // if the user is logged in, and they are on the authentication, take them to the dashboard
  const blackListedRoutesWhenLoggedIn = ["/login","/signup","/recoverPassword"];
  const currentPath = router.currentRoute.value.path;
  if(store?.user?.id && blackListedRoutesWhenLoggedIn.includes(currentPath)){
    router.push("/dashboard")
  }
  
</script>