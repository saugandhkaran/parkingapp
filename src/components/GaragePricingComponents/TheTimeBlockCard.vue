<template>
  <article>
      <div class="card">
        <div class="card-title">TIME BLOCK</div>
          <div class="card-content">
            <div v-for="schedule in pricing.schedules" :key="schedule.uniqueId">
              <h4 v-if="schedule.daysOfWeek === 31">Mon-Fri</h4>
              <h4 v-if="schedule.daysOfWeek === 96">Sat-Sun</h4>
              <div v-for="timeBlock in schedule.timeBlocks" :key="timeBlock.duration">
                <p>For {{timeBlock.duration}} hours: {{timeBlock.price}}</p>
              </div>
            </div>
          </div>
      </div>
  </article>
</template>

<script>

export default {
  name: 'TheStandardCard',
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
      background-color: rgb(34, 4, 82);
      color: white;
      text-align: center;
      padding: 5px;
    }
  }
</style>
