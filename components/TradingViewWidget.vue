
<template>
 <div class="container">
    <br>
    <form class="form-inline" action="POST" v-on:submit.prevent>
        <table>
            <tr>
                <td style="font-weight:bold; width:200px;">Exchange</td>
                <td style="width:250px;">
                    <input class="form-check-input"
                           type="radio" 
                           id="bittrex"
                           name="bittrex" 
                           value="bittrex"
                           v-model="queryExchange.picked"/> &nbsp;Bittrex
                    <input class="form-check-input"
                           type="radio" 
                           id="binnace"
                           name="binance"
                           value="binance"
                           v-model="queryExchange.picked" 
                           checked> &nbsp;Binance
                </td>

            </tr>
            <tr><td colspan="4" style="height:20px"></td></tr>
            <tr>
                <td style="font-weight:bold; width:200px;">Intervalo:</td>
                <td>
                    <select id="Intervalo" name="Intervalo" v-model="queryExchange.interval">
                        <option value="W">1 Semana</option>
                        <option value="D">1 Día</option>
                        <option value="240">4 Hrs</option>
                        <option value="60">1 Hr</option>
                        <option value="30">30 min</option>
                        <option value="15">15 min</option>
                        <option value="5">5 min</option>
                    </select>
                </td>
            </tr>
            <tr><td colspan="4" style="height:20px"></td></tr>
            <tr>
                <td style="font-weight:bold; width:200px;">
                    <button type="button" class="btn btn-primary"  
                            v-on:click="queryForm()">
                            Mostrar
                    </button>
                </td>
            </tr>
            <tr><td colspan="4" style="height:20px"></td></tr>
        </table>
    </form>
    <div id="contenedor">

    </div>
 </div>
</template>



<script>
  export default {
  data () {
    return {
        queryExchange: {
            picked: 'binance',
            interval: '60',
         },
         cryptoCurrency: ['BTC', 'ETH', 'EOS', 'XRP']
      }
    },
   methods: {
      queryForm(){
          let exchangeSelect = this.queryExchange.picked.toUpperCase();
          let intervalSelect = this.queryExchange.interval;
          this.cryptoCurrency.forEach(element => {
            new TradingView.widget(
                {
                    "width": 400,
                    "height": 300,
                    "symbol": exchangeSelect+':'+element+'BTC',
                    "interval": intervalSelect,
                    "timezone": "Etc/UTC",
                    "theme": "Dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "allow_symbol_change": true,
                    "enable_publishing": false,
                    "save_image": false,
                    "hideideas": true,
                    "container_id": "contenedor"
                }
              );
          });
        }
      }
   }
 </script>
