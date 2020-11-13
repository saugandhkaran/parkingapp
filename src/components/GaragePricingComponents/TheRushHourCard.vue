<template>
  <article>
      <div class="card">
        <div class="card-title">RUSH HOUR</div>
          <div class="card-content">
            <p>Base Rate: {{pricing.rate}}</p>
            <p>Rush hour rate: {{pricing.rushHourRate}}</p>
            <p>Daily Rate: {{pricing.dailyRate}}</p>
            <p>From {{pricing.rushHourStartTime}} to {{pricing.rushHourEndTime}}</p>
            <p v-if="pricing.includeSaturday || pricing.includeSunday">includes 
              <span v-if="pricing.includeSaturday">SAT</span>
              <span v-if="pricing.includeSunday">SUN</span>
            </p>
          </div>
      </div>
  </article>
</template>

<script>

export default {
  name: 'TheRushHourCard',
  props: {
    pricing: Object
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 280px;
    border: 1px solid grey;
    border-radius: 6px;
    padding: 5px 10px;
    margin: 5px;

    .card-title {
      background-color: rgb(145, 92, 23);
      color: white;
      text-align: center;
      padding: 5px;
    }
  }
</style>
