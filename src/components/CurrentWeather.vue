<template>
  <div class="current-weather">
    <div class="current-weather__wrapper" v-if="currentWeather">
      <div class="current-weather__head">
        <h2>{{currentWeather.city_name}}</h2>
        <img :src="`https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`" />
        <span>{{currentWeather.weather.description}}</span>
      </div>
      <div class="current-weather__item sunstate">
        <img src="../assets/sunrise.svg" />
        <p>{{currentWeather.sunrise}}</p>
      </div>
      <div class="current-weather__item sunstate">
        <img src="../assets/sunset.svg" />
        <p>{{currentWeather.sunset}}</p>
      </div>
      <div class="current-weather__item">
        <h6>Temperature</h6>
        <p>{{Math.floor(currentWeather.temp)}}&#8451;</p>
      </div>
      <div class="current-weather__item">
        <h6>Wind</h6>
        <p>{{currentWeather.wind_cdir_full}}, {{Math.floor(currentWeather.wind_spd)}} m/s</p>
      </div>
      <div class="current-weather__item">
        <h6>Pressure</h6>
        <p>{{Math.floor(currentWeather.pres / 1000 * 760)}} mmHg</p>
      </div>
      <div class="current-weather__item">
        <h6>Humidity</h6>
        <p>{{Math.floor(currentWeather.rh)}}%</p>
      </div>
    </div>
    <Loader v-else title="Get current weather..." />
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: ["currentWeather"],
};
</script>
