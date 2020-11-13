<template>
<div>
  <div class="modal">
    <div class="modal-content">
      <div class="flex-container column around">
        <p v-if="error.type">{{error.message}}</p>
        <h2>Action Center</h2>
        <p>Once you click 'START PARKING', your timer will be started. Would you like to continue?</p>
        <loading v-if="isLoading"></loading>
        <button @click="startTransaction()">YES</button>
        <button @click="closeConfirmModal()">NO</button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Loading from './../Loading'
export default {
  name: 'StartConfirmModal',
  props: {
    pricing: Object
  },
  components: {
    'loading': Loading
  },
  data () {
    return {
      error: {},
      isLoading: false
    }
  },
  methods: {
    //starts transaction
    async startTransaction() {
      this.isLoading = true;
      this.error = {};
      const transactionObject = {
        RegistrationNumber : this.$store.getters.userDetails.registrationNumber,
        GarageId : 'A8108EFC-80BB-43FD-BA37-635E3AE38D81',
        DoorId : 'A8108EFC-80BB-43FD-BA37-635E3AE38D41',
        ExternalClientId : this.$store.getters.userDetails.externalClientId 
      }
      const response = await axios.post('/api/parkingTransactions', transactionObject)
      .catch((err) => {
        this.error.type = 'SERVER_ISSUE';
        this.error.message = 'Something went wrong, please try after sometime.'
        this.isLoading = false;
        return
      })
      this.storeTransactionDetailsInStore(transactionObject, response.data.transactionId, new Date())
    },
    //stores transaction details in the store
    storeTransactionDetailsInStore (transactionObject, transactionId, startTime) {
      this.$store.dispatch('storeTransactionDetails', {...transactionObject, transactionId: transactionId, startTime: startTime})
      .then(() => {
        this.isLoading = false;
        this.$router.push('/inprogress')
        });
    },
    //closes the modal
    closeConfirmModal() {
      this.$emit('close-start-confirm-modal');
    }
  }
}
</script>

<style scope>
.modal {
  display: block;
  position: fixed;
  z-index: 10004;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  background-color: rgb(167, 167, 167);
  background-color: rgba(177, 176, 176, 0.4);
  box-shadow: 0 4px 8px 0 rgba(206, 206, 206, 0.2),0 6px 20px 0 rgba(206, 206, 206, 0.19);
}


.modal-content {
  position: absolute;
  bottom: 0;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: rgb(241,241,241);
  max-height: 90%;
  overflow-y: auto;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid grey;
  width: 100%;
  box-sizing: border-box;
}
</style>