import Vue from 'vue'
import format from 'date-fns/format'


Vue.filter('formatDate', function (value) {
  if (value) {
    return format(value, 'dd-MMM-yyyy HH:mm:ss');
  }
})