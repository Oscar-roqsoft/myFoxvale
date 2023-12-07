 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr:true,
  pages:true,
  compeonents:true,

  modules: [
    // ...
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
  ],
 

  
  css: [
    // '@/assets/css/bootstrap-dark.min.css',
    // '@/assets/css/icons.css',
     // '@/assets/css/style-dark.css',
    // '@/assets/css/style-dark.css',
    

    '@/assets/hcss/bootstrap.min.css',
    '@/assets/hcss/icons.min.css',
    '@/assets/hcss/style.min.css',

    '@/assets/css/bootstrap.min.css',
    '@/assets/css/icons.min.css',
    '@/assets/css/style.min.css',


  ],


  app: {
    head: {
      link:[
        // {href:"landing/libs/@iconscout/unicons/css/line.css" , rel:"stylesheet",type:"text/css"},
        { href:"/dashboard/css/icons.min.css", rel:"stylesheet", type:"text/css"},
        {href:"/dashboard/libs/@iconscout/unicons/css/line.css" , rel:"stylesheet",type:"text/css"},
        {href:"/dashboard/libs/tobii/css/tobii.min.css",rel:"stylesheet",type:"text/css"},
        {href:"/dashboard/libs/simplebar/simplebar.min.css",rel:"stylesheet"}
      ],
     
      script: [
        {src:"/landing/libs/feather-icons/feather.min.js",body:true},
        // {src:"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",type:"text/css",body:true},
        // {src: 'landing/js/plugins.init.js',body:true },

        { src: '/dashboard/js/plugins.init.js', body:true },
        {src: '/dashboard/js/app.js', body:true  },

         {src:"/dashboard/libs/feather-icons/feather.min.js", body:true },
        {src:"/dashboard/libs/bootstrap/js/bootstrap.bundle.min.js", body:true },
        {src:"/dashboard/libs/simplebar/simplebar.min.js", body:true },
        {src:"/dashboard/libs/apexcharts/apexcharts.min.js", body:true }
       
      ],
     
     },
  },


  env: {
    CMC_API_KEY: process.env.CMC_API_KEY || "",
  },


})
