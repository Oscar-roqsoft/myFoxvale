<!-- <template>
    <div class="tradingview-widget-container" style="height:100%;width:100%">
      <trading-view
        :symbol="symbol"
        :interval="interval"
        :timezone="timezone"
        :theme="theme"
        :style="style"
        :locale="locale"
        :enable-publishing="enablePublishing"
        :allow-symbol-change="allowSymbolChange"
        :container-id="`tradingview_` + Math.random().toString(36).substring(2, 15)"
      />
    </div>
  </template>
  
  <script>
import { defineComponent } from 'vue'
import TradingView from 'tradingview-widget'

export default defineComponent({
  components: {
    TradingView,
  },
  data() {
    return {
      // Widget configuration options
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      enablePublishing: false,
      allowSymbolChange: true,
    }
  },
})
  </script> -->