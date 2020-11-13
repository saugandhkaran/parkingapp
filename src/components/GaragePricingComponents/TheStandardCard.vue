<template>
  <article>
      <div class="card">
        <div class="card-title">STANDARD</div>
          <div class="card-content">
            <p>Base price: {{pricing.basePrice}}</p>
            <p>Daily cap: {{pricing.dailyCap}}</p>
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
      background-color: rgb(4, 107, 76);
      color: white;
      text-align: center;
      padding: 5px;
    }
  }
</style>
