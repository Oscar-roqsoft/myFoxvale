
<template>

    <div class="tradingview-widget-container my-3">
  
      <div class="tradingview-widget-container__widget"></div>
  
      <div class="tradingview-widget-copyright">
  
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <!-- <span class="blue-text">Track all markets on TradingView</span> -->
        </a>
  
      </div>
  
  </div>

</template>

<script setup>

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
  script.async = true
  script.innerHTML = JSON.stringify({
    // Customize configuration options here
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
  })
  document.querySelector('.tradingview-widget-container__widget').appendChild(script)
})
</script>