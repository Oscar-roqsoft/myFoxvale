<template>
    <div class="tradingview-widget-container">
  
      
         <div class="tradingview-widget-container__widget"></div>
  
      
         <div class="tradingview-widget-copyright">
  
        
        <a  href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <!-- <span class="blue-text">Track all markets on TradingView</span> -->
        </a>
      </div>
    </div>
  </template>


<script setup>
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    
  "exchanges": [],
  "dataSource": "SPX500",
  "grouping": "sector",
  "blockSize": "market_cap_basic",
  "blockColor": "change",
  "locale": "en",
  "symbolUrl": "",
  "colorTheme": "light",
  "hasTopBar": false,
  "isDataSetEnabled": false,
  "isZoomEnabled": true,
  "hasSymbolTooltip": true,
  "width": "100%",
  "height": "450"
  });

  document.querySelector('.tradingview-widget-container__widget').appendChild(script);

});
</script>