<template>
 <Chart />
  <CryptoMarket />
  <Snaps/>
  <Screener/>
</template>

<script>
import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
});
</script>


