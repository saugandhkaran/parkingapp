<template>
<div>
  <div class="flex-container center column">
    <h2>Thank you :)</h2>
    <h3>Please find the parking summary below</h3>
    <p>Registration Number: <b>{{$store.getters.transactionDetails.RegistrationNumber}}</b></p>
    <p>Parking: <b>{{$store.getters.garageDetails.garageDetails.name}}</b></p>
    <p>Start Time: <b>{{$store.getters.transactionDetails.startTime | formatDate}}</b></p>
    <p>End Time: <b>{{$store.getters.transactionDetails.endTime | formatDate }}</b></p>
    <p>Total Cost: <b>{{$store.getters.transactionDetails.cost}}</b></p>
  </div>
  <footer class="footer">
    <router-link to="/" ><button class="stop">START AGAIN</button></router-link>
  </footer>
</div>
</template>

<script>

export default {
  name: 'ParkingSummary'
}
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 10px;
}
</style>