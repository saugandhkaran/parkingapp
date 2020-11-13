<template>
<div>
  <article v-if="garageDetails">
    <div class="flex-container column center title">
      <h3>{{garageDetails.name}}</h3>
      <p>{{garageDetails.streetAddress}}, {{garageDetails.postalCode}}, {{garageDetails.city}}</p>
    </div>
    <section class="flex-container around">
      <div>
         <!-- If had more time, would like to make it as a photo gallery component -->
        <img class="garage-image" :src="garageDetails.photos[1].urls[1].url" />
        <section class="parking">
          <h3>Parking slots available
          <garage-availability></garage-availability></h3>
        </section>
      </div>
      
      <!-- Can be converted to a component if needed -->
      <div class="garage-details">
        <section>
          <h3>Garage Information</h3>
          <p v-for="info in garageDetails.garageInformation" :key="info.countryCode">{{info.message}}</p>
        </section>

        <section> 
          <div class="flex-container">
          <garage-metadata :garageDetails="garageDetails"></garage-metadata>
        </div>
        </section>

        <!-- Can be converted to a component if needed -->
        <h3>Doors</h3>
        <div class="flex-container">
            <div class="door" v-for="door in garageDetails.doors" :key="door.doorId">
              {{door.doorType}}
            </div>
        </div>
      </div>
    </section>

    <section class="flex-container column">
      <h3>Garage Pricing</h3>
      <div class="flex-container center pricing">
        <garage-pricing></garage-pricing>
      </div>
    </section>
    <start-confirm-modal v-if="openStartConfirmModal" @close-start-confirm-modal="toggleStartConfirmModal"></start-confirm-modal>
    <footer class="footer">
      <button @click="toggleStartConfirmModal()">START PARKING</button>
    </footer>
  </article>
  <loading v-if="isLoading"></loading>
  <article v-if="error.type && !isLoading">
    <h4>{{error.message}}</h4>
  </article>
</div>
</template>

<script>
import axios from 'axios'
import GaragePricing from './GaragePricing'
import GarageAvailability from './GarageDetailComponents/GarageAvailability'
import GarageMetadata from './GarageDetailComponents/GarageMetadata'
import StartConfirmModal from './GarageDetailComponents//StartConfirmModal'
import Loading from './Loading'
export default {
  name: 'GarageDetails',
  components: {
    'garage-pricing': GaragePricing,
    'garage-availability': GarageAvailability,
    'garage-metadata': GarageMetadata,
    'start-confirm-modal': StartConfirmModal,
    'loading': Loading
  },
  data () {
    return {
      garageDetails: undefined,
      error: {},
      openStartConfirmModal: false,
      isLoading: false
    }
  },
  methods : {
    //get the details of the garage
    async getGarageDetails () {
      this.isLoading = true;
      let response = await axios.get('/api/getGarageDetails')
      .catch((err) => {
        this.error.type = 'SERVER_ISSUE';
        this.error.message = 'Something went wrong. Please try after sometime.'
        this.isLoading = false;
        return
      });
      this.isLoading = false;
      this.garageDetails = response.data.garageDetails[0];
    },
    //open or close the confirm modal
    toggleStartConfirmModal () {
      this.openStartConfirmModal = !this.openStartConfirmModal;
      this.setGarageDetails();
    },
    //save garageDetails in store
    setGarageDetails () {
      this.$store.dispatch('storeGarageDetails', {garageDetails : this.garageDetails});
    }
  },
  mounted() {
    this.getGarageDetails();
  }
}
</script>

<style lang="scss" scoped>

  .garage-image {
    width: 100%;
    max-width: 450px;
  }

  .garage-details {
    max-width: 475px;
    h3 {
      padding-top: 10px;
    }
  }

  .title {
    p {
      color: grey;
    }
  }

  .door {
    width: 80px;
    color: white;
    text-align: center;
    padding: 10px;
    background-color: rgb(158, 94, 11);
    border: 3px solid rgb(105, 63, 8);
    margin: 10px 10px 10px 0px;
  }

.parking {
  position: absolute;
  margin-top: -100px;
  color: white;
}

.pricing {
  padding-bottom: 70px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 10px;
}
</style>
