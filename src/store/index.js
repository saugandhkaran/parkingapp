import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userDetails: {
      registrationNumber: 'RZ495Y',
      externalClientId: 'A8108EFC-80BB-43FD-BA37-635E3AE38D41'
    },
  garageDetails: undefined,
  transactionDetails: undefined
  },
  actions: {
    storeTransactionDetails({ commit }, transactionId) {
      return commit('setTransactionDetails', transactionId);
    },
    storeGarageDetails({ commit }, garageDetails) {
      return commit('setGarageDetails', garageDetails);
    },
    storeEndTime({ commit }, endTime) {
      return commit('setEndTime', endTime);
    },
    storeTotalCost({ commit }, amount) {
      return commit('setTotalCost', amount);
    }
  },
  mutations: {
    setTransactionDetails(state, transactionId) {
      state.transactionDetails = {};
      state.transactionDetails = transactionId;
    },
    setGarageDetails(state, garageDetails) {
      state.garageDetails = {};
      state.garageDetails = garageDetails;
    },
    setEndTime(state, endTime) {
      state.transactionDetails.endTime = endTime;
    },
    setTotalCost(state, amount) {
      state.transactionDetails.cost = amount;
    }
  },
  getters: {
    userDetails: state => state.userDetails,
    garageDetails: state => state.garageDetails,
    transactionDetails: state => state.transactionDetails
  }
});
export default store;
