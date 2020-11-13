<template>
  <div class="home">
    <garage-detail></garage-detail>
  </div>
</template>

<script>
import GarageDetail from '../components/GarageDetail';

export default {
  name: 'Home',
  components: {
    'garage-detail': GarageDetail    
  }
}
</script>
