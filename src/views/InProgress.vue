<template>
  <div class="flex-container column center main">
    <h2 v-if="garageDetails">Your parking has started at {{garageDetails.garageDetails.name}}</h2>
    <p class="timer">{{timer}}</p>

    <!-- If loading component is not needed -->
    <p v-if="isCalculatingCost">Please wait while we calculate your cost...</p>

    <footer class="footer">
    <button v-if="!isCalculatingCost" class="stop" @click="stopTimer()">STOP PARKING</button>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InProgress',
  components: {
    
  },
  data () {
    return {
      startTime: this.$store.getters.transactionDetails.startTime,
      garageDetails: this.$store.getters.garageDetails,
      timer: '00m:00s',
      endTime: '',
      timerSwitch: '',
      isCalculatingCost: false,
      error: {}
    }
  },
  methods: {
    //assigns elapsed time to 'timer' to be shown in html
    checkTime(){
      this.endTime = Date.now();
      const timeDifference = this.endTime - this.startTime;
      this.timer = this.convertTime(timeDifference);
    },
    //breaks the time into minutes and seconds returns string in format 00m:00s
    convertTime(miliseconds) {
      const totalSeconds = Math.floor(miliseconds/1000);
      const minutes = this.setPadding(Math.floor(totalSeconds/60));
      const seconds = this.setPadding(totalSeconds - minutes * 60);
      return minutes + 'm:' + seconds + 's';
    },
    //assigns the setInterval to 'timerSwitch'
    startTimer () {
      this.timerSwitch = setInterval(this.checkTime, 1000);
    },
    //converts single digit to two digits  e.g. 0 -> 00. Vue filter can also be created
    setPadding(value) {
      if (value.toString().length === 1) {
        return `0${value}`;
      } else {
        return value;
      }
    },
    //clears the interval by clearing 'timerSwitch'
    stopTimer () {
      clearInterval(this.timerSwitch);
      this.$store.dispatch('storeEndTime', new Date(this.endTime)).then(() => {
        this.isCalculatingCost = true;
      });
      this.calculateCost();
    },
    //calculates total cost of the parkingå
    async calculateCost () {
      this.error = {};
      const costObject =  {
        DoorId: this.$store.getters.transactionDetails
      }
      const response = await axios.post('api/id/stopTransaction', costObject)
        .catch((err) => {
          this.error.type = 'SERVER_ERROR';
          this.error.message = 'Something went wrong. Please try after sometime'
          return
        })
      this.$store.dispatch('storeTotalCost', response.data.transactionAmount).then(() => {
        this.$router.push('/parkingsummary');
      })
    }
  },
  mounted() {
    this.startTimer();
  }
}
</script>

<style lang="scss" scoped>
.stop {
  background-color: rgb(170, 29, 29);
}

.timer {
  font-size: 4em;
  font-weight: bold;
}

.main {
  padding: 30px 10px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 10px;
}
</style>
