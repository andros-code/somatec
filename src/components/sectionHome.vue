<template>
  <section>
    <div class="presentacion">
      <h1 class="eslogan">
        La mejor CALIDAD y al mejor PRECIO
      </h1>
      <div class="slider">
        <splide :options="slider.options">
          <splide-slide>
            <img class="slider-img" :src="slider.img1" />
          </splide-slide>
          <splide-slide>
            <img class="slider-img" :src="slider.img2" />
          </splide-slide>
          <splide-slide>
            <img class="slider-img" :src="slider.img3" />
          </splide-slide>
        </splide>
      </div>
    </div>
  </section>
</template>
<script>
import img1 from "@/assets/slider/1.jpg";
import img2 from "@/assets/slider/2.jpg";
import img3 from "@/assets/slider/3.jpg";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
//import backTexture from "@/assets/texture3.png";
export default {
  name: "sectionHome",
  components: {
    Splide,
    SplideSlide
  },
  data: function() {
    return {
      slider: {
        img1: img1,
        img2: img2,
        img3: img3,
        //backTexture: "background-image: url(" + backTexture + ")",
        options: {
          autoplay: true,
          interval: 3000,
          type: "fade",
          rewind: true,
          autoWidth: true,
          autoHeight: true
        }
      }
    };
  }
};
</script>
<style lang="scss">
@import "_basic.scss";
.presentacion {
  @include flex(flex-end);
  width: 100%;
  background: rgb(242, 187, 87);
  color: black;
  margin-top: -60px;
}
.presentacion .eslogan {
  font-size: 40px;
  @include flex(center);
  @include size(auto, 50vw);
  padding: 0 2vw;
  text-align: center;
  width: 100%;
  background: transparent;
}
.presentacion .slider {
  width: 100vw;
  @include flex(flex-end);
  .slider-img {
    @include flex(center);
    width: 60vw;
    height: 40vw;
    max-width: 1300px;
    max-height: 500px;
  }
}

@media screen and (max-width: 852px) {
  .presentacion {
    flex-wrap: wrap;
    background: transparent;
  }
  .presentacion .eslogan {
    width: 100%;
    height: 70px;
    padding: 0% 0;
    font-size: 30px;
    background: transparent;
  }
  .presentacion .slider {
    width: 100%;
    height: auto;
    @include flex(center);
  }
  .slider-img {
    width: 100vw !important;
    height: 58vw !important;
  }
}
</style>
