<template>
  <div id="app" class="app">
    <div v-if="getCurrentWeather && getForecast">
      <CurrentWeather v-bind:currentWeather="getCurrentWeather" />
      <Forecast v-bind:forecast="getForecast" />
    </div>
    <Loader v-else title="Getting weather..." />
  </div>
</template>

<script>
import CurrentWeather from './components/CurrentWeather';
import Loader from "./components/Loader";
import Forecast from './components/Forecast';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  methods: mapActions(['fetchCurrentWeather', 'fetchForecast']),
  computed: mapGetters(['getCurrentWeather', 'getForecast']),
  components: {
    CurrentWeather, Forecast, Loader
  },
  async mounted() {
    this.$getLocation()
    .then(coordinates => {
        this.fetchForecast(coordinates);
        this.fetchCurrentWeather(coordinates)
    })
  },
}
</script>
