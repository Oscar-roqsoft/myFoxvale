<template>
    <div>
        <slot/>
    </div>
</template>

<script setup>
    import {useStore}  from "@/stores/index";
    const store = useStore()
    const router = useRouter();

  // if the user is not logged in, and they are on the dashboard page, take back to the auth/login page
  if(!store?.user?.id){
    router.push("/login")
  }
</script>
