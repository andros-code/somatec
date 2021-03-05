<template>
  <section class="quienesSomos">
    <article>
      <h1>QUIÉNES SOMOS</h1>
      <p>
        Somos una empresa que brinda servicios y soluciones en Tecnologías de la
        Información, dirigido a hogares, pequeñas y medianas empresas,
        respaldado por personal capacitado. Tenemos amplia experiencia en
        administracion de redes de computadoras, servicios de internet, soporte
        a usuarios, gestión de centros de computo, seguridad de la información,
        administración de servidores, respaldo de la información, instalación y
        mantenimiento de cámaras de seguridad, desarrollo de paginas web, entre
        otros.
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
