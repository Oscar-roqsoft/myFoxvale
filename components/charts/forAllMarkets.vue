<template>
    <div class="style my-4 ">
        <h5>Market Price Chart Overview</h5>
        <div class="tradingview-widget-container">
      
          
            <div class="tradingview-widget-container__widget"></div>
      
            <div class="tradingview-widget-copyright">
      
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                </a>
            </div>
    
        </div>
    </div>

  </template>

<script setup>

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    // ...props, // Pass props as configuration options
    // Override any default props as needed...
  "colorTheme": "light",
  "dateRange": "12M",
  "showChart": true,
  "locale": "en",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "showFloatingTooltip": false,
  "width": "400",
  "height": "660",
  "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
  "plotLineColorFalling": "rgba(41, 98, 255, 1)",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "scaleFontColor": "rgba(106, 109, 120, 1)",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
  "tabs": [
    {
      "title": "Indices",
      "symbols": [
        {
          "s": "FOREXCOM:SPXUSD",
          "d": "S&P 500"
        },
        {
          "s": "FOREXCOM:NSXUSD",
          "d": "US 100"
        },
        {
          "s": "FOREXCOM:DJI",
          "d": "Dow 30"
        },
        {
          "s": "INDEX:NKY",
          "d": "Nikkei 225"
        },
        {
          "s": "INDEX:DEU40",
          "d": "DAX Index"
        },
        {
          "s": "FOREXCOM:UKXGBP",
          "d": "UK 100"
        }
      ],
      "originalTitle": "Indices"
    },
    {
      "title": "Futures",
      "symbols": [
        {
          "s": "CME_MINI:ES1!",
          "d": "S&P 500"
        },
        {
          "s": "CME:6E1!",
          "d": "Euro"
        },
        {
          "s": "COMEX:GC1!",
          "d": "Gold"
        },
        {
          "s": "NYMEX:CL1!",
          "d": "WTI Crude Oil"
        },
        {
          "s": "NYMEX:NG1!",
          "d": "Gas"
        },
        {
          "s": "CBOT:ZC1!",
          "d": "Corn"
        }
      ],
      "originalTitle": "Futures"
    },
    {
      "title": "Bonds",
      "symbols": [
        {
          "s": "CBOT:ZB1!",
          "d": "T-Bond"
        },
        {
          "s": "CBOT:UB1!",
          "d": "Ultra T-Bond"
        },
        {
          "s": "EUREX:FGBL1!",
          "d": "Euro Bund"
        },
        {
          "s": "EUREX:FBTP1!",
          "d": "Euro BTP"
        },
        {
          "s": "EUREX:FGBM1!",
          "d": "Euro BOBL"
        }
      ],
      "originalTitle": "Bonds"
    },
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "FX:EURUSD",
          "d": "EUR to USD"
        },
        {
          "s": "FX:GBPUSD",
          "d": "GBP to USD"
        },
        {
          "s": "FX:USDJPY",
          "d": "USD to JPY"
        },
        {
          "s": "FX:USDCHF",
          "d": "USD to CHF"
        },
        {
          "s": "FX:AUDUSD",
          "d": "AUD to USD"
        },
        {
          "s": "FX:USDCAD",
          "d": "USD to CAD"
        }
      ],
      "originalTitle": "Forex"
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
  ]
  });

  document.querySelector('.tradingview-widget-container__widget').appendChild(script);

});

</script>


<style scoped>
.style{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

}
.tradingview-widget-container__widget >>> div {
     display: center;
     justify-content: center;
     align-items:center;
  }

@media(max-width: 767px){
  .tradingview-widget-container__widget >>> div {
     display: center;
     justify-content: center;
      width: 100% !important;
  }
  .tradingview-widget-container .tradingview-widget-container__widget >>> iframe{
      width: 345px !important;
  }
}

@media(min-width: 768px){
      .style{
          display: flex;
          justify-content: center;
          flex-direction: column;
          /* min-width: 440px !important; */

      }
    .tradingview-widget-container__widget >>> div {
      width: 65% !important;
      margin: 0 auto !important;
  }
      .tradingview-widget-container .tradingview-widget-container__widget div >>>iframe{
        display: flex;
        justify-content: center;
        width: 400px !important;
        /* margin-right: 80px !important; */
      }
      .tradingview-widget-container{
          width: 1100px !important;
          /* margin: auto !important; */
      }
  } 
@media(min-width: 1100px){
      .style{
          display: flex;
          justify-content: center;
          flex-direction: column;
          min-width: 400px !important;

      }
      .tradingview-widget-container__widget >>> div {
      width: 65% !important;
      margin-left: 0px !important;
  }

      .tradingview-widget-container>>>iframe{
        min-width: 1050px !important;
        margin-left:26px !important;
      }
      .tradingview-widget-container{
          width: 1100px !important;
          /* margin: auto !important; */
      }
  } 
</style>