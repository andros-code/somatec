<template>
  <section class="quienesSomos">
    <article>
      <h1>¿Quiénes Somos?</h1>
      <p>
        Somos una empresa dedicada a mantener de manera adecuada y segura la
        infraestructura informática de su empresa, ofreciendo un servicio
        garantizado, profesional y de calidad. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Excepturi esse asperiores provident, hic
        dolorem placeat vel necessitatibus architecto, praesentium sit ipsa
        iusto vero aut aliquid autem magni natus laborum repellat.
      </p>
      <div class="picture">
        <img id="img1" :src="img1" alt="Imagen de contexto" />
        <div class="leyenda" data-aos="slide-left">SIEMPRE A TU SERVICIO</div>
      </div>
    </article>
  </section>
</template>

<script>
import img1 from "@/assets/img1.jpg";
export default {
  name: "quienesSomos",
  data() {
    return {
      img1: img1
    };
  }
};
</script>

<style lang="scss">
@import "_basic.scss";

.quienesSomos {
  padding: 20px 0 60px 0px;
  height: 100%;
  article {
    width: 100%;
    height: 100%;
    @include flex(space-around, wrap, center);
    flex-wrap: wrap;
    h1 {
      width: 80%;
      padding: 20px 0;
      text-align: left;
      margin-left: -5%;
      height: auto;
    }
    .picture {
      max-width: 450px;
      width: 45vw;
      display: flex;
      justify-content: center;
      flex-wrap: wrap !important;

      #img1 {
        width: 100%;
        height: 100%;
      }

      .leyenda {
        padding: 10px;
        text-align: center;
        width: 100%;
        font-family: RobotoB;
        font-size: 20px;
        height: 20px;
      }
    }
    p {
      width: 48%;
      text-align: justify;
      padding: 2%;
      font-family: Poppins !important;
    }
    @include phones() {
      #img1 {
        width: 90% !important;
      }
    }
    @include tablets() {
      p {
        width: 90%;
      }
      .picture {
        width: 100%;
        height: 50vw;
        margin: 20px 0;
        max-width: none;
        @include flex(center);
        #img1 {
          width: 80%;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
