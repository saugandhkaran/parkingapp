<template>
  <article class="flex-container">
    <div v-bind:class="[garageDetails.active ? 'metadata-tag true' : 'metadata-tag false']">Active</div>
    <div v-bind:class="[garageDetails.hasBarrier ? 'metadata-tag true' : 'metadata-tag false']">Barrier</div>
    <div v-bind:class="[garageDetails.isSuspended ? 'metadata-tag true' : 'metadata-tag false']">Suspended</div>
    <div v-bind:class="[garageDetails.isPayPerMinute ? 'metadata-tag true' : 'metadata-tag false']">Pay Per Minute</div>
    <div v-bind:class="[garageDetails.isPrepaid ? 'metadata-tag true' : 'metadata-tag false']">Prepaid</div>
    <div v-bind:class="[garageDetails.isReservable ? 'metadata-tag true' : 'metadata-tag false']">Reserveable</div>
  </article>
</template>

<script>

export default {
  name: 'GarageMetadata',
  props: {
    garageDetails: Object
  }
}
</script>

<style lang="scss" scoped>
.metadata-tag {
  background-color: grey;
  margin: 5px;
  padding: 3px 8px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
}

.true {
  background-color: green;
}

.false {
  background-color: grey;
}
</style>
