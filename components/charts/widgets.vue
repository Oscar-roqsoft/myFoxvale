<template>
    <div class="style my-4 mx-auto">
      <h5>Market Price Chart Overview</h5>
      <!-- TradingView Widget BEGIN -->
      <div class="tradingview-widget-container mx-auto">
        <div class="tradingview-widget-container__widget mx-auto"></div>
      </div>
      <!-- TradingView Widget END -->
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      "title_raw": "Cryptocurrencies",
      "belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
    "gridLineColor": "rgba(233, 233, 234, 1)",
    "scaleFontColor": "rgba(218, 221, 224, 1)",
    "title": "Cryptocurrencies",
    "tabs": [
    {
      "title_raw": "Overview",
      "symbols": [
        {
          "s": "BITFINEX:BTCUSD"
        },
        {
          "s": "BITFINEX:ETHUSD"
        },
        {
          "s": "BITFINEX:XRPUSD"
        },
        {
          "s": "COINBASE:BCHUSD"
        },
        {
          "s": "COINBASE:LTCUSD"
        },
        {
          "s": "BITFINEX:IOTUSD"
        }
      ],
      "title": "Overview"
    },
    {
      "title_raw": "Bitcoin",
      "symbols": [
        {
          "s": "BITFINEX:BTCUSD"
        },
        {
          "s": "COINBASE:BTCEUR"
        },
        {
          "s": "COINBASE:BTCGBP"
        },
        {
          "s": "BITFLYER:BTCJPY"
        },
        {
          "s": "WEX:BTCRUR"
        },
        {
          "s": "CME:BTC1!"
        }
      ],
      "title": "Bitcoin"
    },
    {
      "title_raw": "Ripple",
      "symbols": [
        {
          "s": "BITFINEX:XRPUSD"
        },
        {
          "s": "KRAKEN:XRPEUR"
        },
        {
          "s": "KORBIT:XRPKRW"
        },
        {
          "s": "BITSO:XRPMXN"
        },
        {
          "s": "BINANCE:XRPBTC"
        },
        {
          "s": "BITTREX:XRPETH"
        }
      ],
      "title": "Ripple"
    },
    {
      "title_raw": "Ethereum",
      "symbols": [
        {
          "s": "COINBASE:ETHUSD"
        },
        {
          "s": "KRAKEN:ETHEUR"
        },
        {
          "s": "KRAKEN:ETHGBP"
        },
        {
          "s": "KRAKEN:ETHJPY"
        },
        {
          "s": "POLONIEX:ETHBTC"
        },
        {
          "s": "WEX:ETHLTC"
        }
      ],
      "title": "Ethereum"
    },
    {
      "title_raw": "Bitcoin Cash",
      "symbols": [
        {
          "s": "COINBASE:BCHUSD"
        },
        {
          "s": "BITSTAMP:BCHEUR"
        },
        {
          "s": "CEXIO:BCHGBP"
        },
        {
          "s": "POLONIEX:BCHBTC"
        },
        {
          "s": "HITBTC:BCHETH"
        },
        {
          "s": "WEX:BCHLTC"
        }
      ],
      "title": "Bitcoin Cash"
    }
     ],
    "plotLineColorFalling": "rgba(255, 74, 104, 1)",
    "plotLineColorGrowing": "rgba(60, 188, 152, 1)",
    "showChart": true,
    "title_link": "/markets/cryptocurrencies/prices-all/",
    "locale": "en",
    "symbolActiveColor": "rgba(242, 250, 254, 1)",
    "belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
      "height": 660,
      "width": 420
    })
    document.querySelector('.tradingview-widget-container__widget').appendChild(script)
  })
  </script>
  
  <style scoped>
  .style{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

  }
  @media(max-width: 767px){
    .tradingview-widget-container >>> iframe{
        width: 78%!important;
    }
  }

  @media(min-width: 768px){
        .style{
            display: flex;
            justify-content: start;
            flex-direction: column;
            align-items: start;
            width: 450px;

        }
        .tradingview-widget-container_widget >>> iframe{
            width: 140%!important;
            margin-right: 80px !important;
        }
        /* .tradingview-widget-container__widget div {
            width: 100vw!important;
            margin: auto !important;
        } */
    } 
  </style>