<template>
  <article>
    <div v-if="!isLoading && !error.type" class="flex-container center">
      <div v-for="pricing in garagePricing" :key="pricing.type">
        <standard-card v-if="pricing.type === 'standard'" :pricing="pricing"></standard-card>
        <rush-hour-card v-if="pricing.type === 'rushhour'" :pricing="pricing"></rush-hour-card>
        <time-block-card v-if="pricing.type === 'timeblock'" :pricing="pricing"></time-block-card>
      </div>
    </div>
    <div v-if="error.type" class="flex-container center">
      <h3>{{error.message}}</h3>
    </div>
    <loading v-if="isLoading"></loading>
  </article>
</template>

<script>
import TheRushHourCard from './GaragePricingComponents/TheRushHourCard'
import TheStandardCard from './GaragePricingComponents/TheStandardCard'
import TheTimeBlockCard from './GaragePricingComponents/TheTimeBlockCard'
import Loading from './Loading'

import axios from 'axios'
export default {
  name: 'GaragePricing',
  components: {
    'rush-hour-card': TheRushHourCard,
    'standard-card': TheStandardCard,
    'time-block-card': TheTimeBlockCard,
    'loading': Loading
  },
  data () {
    return {
      garagePricing: {},
      error: {},
      isLoading: false
    }
  },
  methods : {
    //get garage ppricing
    async getGaragePriceDetails () {
      this.error = {};
      this.isLoading = true;
      let response = await axios.get('/api/id/getPricing')
      .catch((err) => {
        this.error.type = 'SERVER_ISSUE';
        this.error.message = 'Something went wrong. Please try after sometime.'
        this.isLoading = false;
        return
      });
      this.isLoading = false;
      this.garagePricing = response.data;
    }
  },
  mounted() {
    this.getGaragePriceDetails();
  }
}
</script>

<style lang="scss" scoped>
</style>
