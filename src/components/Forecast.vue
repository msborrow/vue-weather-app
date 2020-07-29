<template>
  <div>
    <div class="forecast">
      <h4>Weekly forecast</h4>
      <VueSlickCarousel v-bind="settings">
        <div v-for="item in newForecast" :key="item.i">
          <div class="forecast__item">
            <img :src="`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`" />
            <span class="forecast__temp">{{Math.floor(item.app_max_temp)}}&#8451;</span>
            <span class="forecast__date">{{item.datetime.split('-').reverse().join('.')}}</span>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Forecast",
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 4,
        infinite: false,
      },
    };
  },
  props: ["forecast"],
  computed: {
    newForecast: (props) => {
      return props.forecast.splice(0, 7);
    },
  },
  components: { VueSlickCarousel }
};
</script>

<style>
</style>