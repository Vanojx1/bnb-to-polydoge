<template>
  <v-container fluid>
    <v-alert
      v-if="!web3"
      border="top"
      color="red lighten-2"
      dark
    >
      Open this page from the Metamask browser or with the Metamask extension installed!
    </v-alert>
    <v-stepper
      v-else
      v-model="polydogeStepper"
      vertical
    >
      <v-stepper-step
        :complete="polydogeStepper > 1"
        step="1"
      >
        We need BSC network
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-btn
          class="ma-2"
          :loading="!!loadingStatus.BSC"
          :disabled="!!loadingStatus.BSC"
          color="primary"
          @click="addBsc"
        >
          Add BSC to Metamask ( click again to switch to it )
        </v-btn>
        <v-btn
          color="secondary"
          @click="next"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="polydogeStepper > 2"
        step="2"
      >
        Send BNB to your Metamask wallet
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-btn
          color="secondary"
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          text
          @click="back"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="polydogeStepper > 3"
        step="3"
      >
        Swap BNB to ELK
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          class="ma-2"
          color="primary"
          target="_blank"
          href="https://app.elk.finance/#/swap?inputCurrency=BNB&outputCurrency=ELK"
        >
          Swap BNB to ELK
        </v-btn>
        <v-card
          v-else-if="polydogeStepper == 3"
          color="grey lighten-1"
          class="mb-12"
          height="860px"
        >
          <iframe ref="bnbElk" width="100%" height="100%" seamless src="https://app.elk.finance/#/swap?inputCurrency=BNB&outputCurrency=ELK"></iframe>
        </v-card>
        <v-btn
          color="secondary"
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          text
          @click="back"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="polydogeStepper > 4"
        step="4"
      >
        Move ELK to Polygon network
      </v-stepper-step>
      <v-stepper-content step="4">
        <p>Select <b>Polygon</b> as target chain</p>
        <p>Select "Swap $ELK 1 for gas" if you don't have any MATIC on Polygon</p>
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          class="ma-2"
          color="primary"
          target="_blank"
          href="https://app.elk.finance/#/elknet"
        >
          Move Elk from BSC to Polygon
        </v-btn>
        <v-card
          v-else-if="polydogeStepper == 4"
          color="grey lighten-1"
          class="mb-12"
          height="1100px"
        >
          <iframe width="100%" height="100%" seamless src="https://app.elk.finance/#/elknet"></iframe>
        </v-card>
        <v-btn
          color="secondary"
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          text
          @click="back"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="5">
        Switch to Polygon network
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-btn
          class="ma-2"
          :loading="!!loadingStatus.MATIC"
          :disabled="!!loadingStatus.MATIC"
          color="primary"
          @click="addPolygon"
        >
          Add Polygon to Metamask
        </v-btn>
        <v-btn
          color="secondary"
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          text
          @click="back"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="6">
        Finally we can buy Polydoge
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          class="ma-2"
          color="primary"
          target="_blank"
          href="https://app.elk.finance/#/swap?inputCurrency=ELK&outputCurrency=0x8A953CfE442c5E8855cc6c61b1293FA648BAE472"
        >
          Buy Polydoge! NO SELL! NEVER SELL!
        </v-btn>
        <v-card
          v-else-if="polydogeStepper == 6"
          color="grey lighten-1"
          class="mb-12"
          height="860px"
        >
          <iframe width="100%" height="100%" seamless src="https://app.elk.finance/#/swap?inputCurrency=ELK&outputCurrency=0x8A953CfE442c5E8855cc6c61b1293FA648BAE472"></iframe>
        </v-card>
        <v-btn
          text
          @click="back"
        >
          Back
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import Web3 from 'web3';

export default {
  name: 'Home',
  data() {
    return {
      polydogeStepper: 1,
      loadingStatus: {},
      web3: false,
    };
  },
  async mounted() {
    this.web3 = await this.checkWeb3();
  },
  methods: {
    async checkWeb3() {
      if (window.web3) return true;
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        return true;
      }
      return false;
    },
    next() {
      this.polydogeStepper += 1;
    },
    back() {
      this.polydogeStepper -= 1;
    },
    addPolygon() {
      const network = {
        chainId: '0x89',
        chainName: 'Matic Mainnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: ['https://rpc-mainnet.maticvigil.com/', 'https://rpc-mainnet.matic.network/', 'https://rpc-mainnet.maticvigil.com/'],
        blockExplorerUrls: ['https://explorer.matic.network/'],
      };
      this.addNetwork(network);
    },
    addBsc() {
      const network = {
        chainId: '0x38',
        chainName: 'Smart Chain',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'BNB',
          decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/', 'https://bsc-dataseed1.ninicoin.io/'],
        blockExplorerUrls: ['https://bscscan.com/'],
      };
      this.addNetwork(network);
    },
    async addNetwork(network) {
      this.loadingStatus[network.nativeCurrency.name] = true;
      await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [network] });
      this.loadingStatus[network.nativeCurrency.name] = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.vs-card-content
  display flex
  justify-content center
</style>
