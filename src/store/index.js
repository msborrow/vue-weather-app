import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const API_KEY = 'cffcca366b7443fbabae5b8269880f24';

export default new Vuex.Store({
  state: {
    currentWeather: null,
    forecast: null
  },
  actions: {
    async fetchCurrentWeather(context, coordinates) {
      const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${coordinates.lat}&lon=${coordinates.lng}&key=${API_KEY}`);
      const currentWeather = await res.json();
      context.commit('updateCurrentWeather', currentWeather);
    },
    async fetchForecast(context, coordinates) {
      const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${coordinates.lat}&lon=${coordinates.lng}&key=${API_KEY}`);
      const forecast = await res.json();
      context.commit('updateForecast', forecast);
    }
  },
  mutations: {
    updateCurrentWeather(state, currentWeather) {
      state.currentWeather = currentWeather.data[0];
    },
    updateForecast(state, forecast) {
      state.forecast = forecast.data;
    }
  },
  getters: {
    getCurrentWeather(state) {
      return state.currentWeather;
    },
    getForecast(state) {
      return state.forecast;
    }
  }
});
