<template>
  <article>
    <div v-if="garageAvailability" class="flex-container title">
      <div v-bind:class="[slotsfull ? 'unavailable-slot slot' : 'available-slot slot']">
        {{garageAvailability.availableSpaces}}
      </div>
      /<p>{{garageAvailability.capacity}}</p>
    </div>
    <loading v-if="isLoading"></loading>
    <div v-if="error.type">
      <h3>{{error.message}}</h3>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
import Loading from './../Loading'

export default {
  name: 'GarageAvailability',
  components: {
    'loading': Loading
  },
  data () {
    return {
      garageAvailability: undefined,
      error: {},
      slotsfull: false,
      isLoading: false
    }
  },
  methods : {
    //gets garage availability
    async getGarageAvailability () {
      this.error = {};
      this.isLoading = true;
      let response = await axios.get(`/api/id/availability`)
      .catch((err) => {
        this.error.type = 'SERVER_ISSUE';
        this.error.message = 'Something went wrong. Please try after sometime.'
        this.isLoading = false;
        return
      });
      this.isLoading = false;
      this.garageAvailability = response.data;
    }
  },
  mounted() {
    this.getGarageAvailability();
  }
}
</script>

<style lang="scss" scoped>
  .slot {
    border-radius: 6px;
    width: 30px;
    height: 30px;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 1.3em;
    font-weight: bold;
  }

  .available-slot {
    background-color: green;
  }

  .unavailable-slot {
    background-color: red;
  }
</style>
