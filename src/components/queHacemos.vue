<template>
  <section class="queHacemos">
    <h1>NUESTROS SERVICIOS</h1>
    <article>
      <ul>
        <li>
          <div class="texto">
            <h2>Mantenimiento de equipos</h2>
            <p>
              Todos los equipos deben recibir periódicamente mantenimientos de
              limpieza tanto del Hardware como el Software. Nuestro objetivo con
              el mantenimiento prevenivo es identificar las señales tempranas de
              un defecto para minimizar el riesgo de averías no programadas y
              reducir la necesidad de realizar mantenimiento correctivo.
            </p>
          </div>
          <div class="ref-img">
            <img :src="imgTecnicos" alt="" />
          </div>
        </li>
        <li class="img-gray">
          <div class="ref-img">
            <img class="tecnico" :src="imglimpieza" alt="" />
          </div>
          <div class="texto">
            <h2>Asistencia remota</h2>
            <p>
              Tenemos amplia experiencia en el diagnostico y asesoramiento de
              usuarios por internet. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Autem error aliquid cupiditate libero aspernatur
              amet odio laudantium omnis porro repudiandae dignissimos iusto
              praesentium enim veritatis nemo, veniam tempora officia harum?
            </p>
          </div>
        </li>
        <li>
          <div class="texto">
            <h2>Instalación y configuración de redes locales</h2>
            <p>
              Por lo general, las empresas y/o negocios a medida que van
              creciendo incorporan nuevos equipos y necesitan formar una la red
              de área local que les permita compartir información y periféricos
              como puede ser un módem(Internet), impresora, escáner, entre
              otros. Es por ello que brindamos el servicio de instalación y
              configuración de equipos e impresoras en red, tendido de cableado,
              instalación y configuración de programas diversos, etc.
            </p>
          </div>
          <div class="ref-img">
            <img class="imgMantenimiento" :src="red" alt="" />
          </div>
        </li>

        <li class="img-gray">
          <div class="ref-img">
            <img :src="imgCamaras" alt="" />
          </div>
          <div class="texto">
            <h2>Instalación y configuración de cámaras de vigilancia</h2>
            <p>
              Si desea vigilar y controlar su negocio, empresa, escuela u hogar,
              tanto local como remotamente con el uso de cámaras de vigilancia e
              internet el circuito cerrado de video vigilancia es su mejor
              opción. Le brindamos el servicio de instalación y configuración
              así como mantenimiento de sus equipos ya instalados.
            </p>
          </div>
        </li>

        <li>
          <div class="texto">
            <h2>Desarrollo de páginas web</h2>
            <p>
              Debe dar a conocer su negocio, teniendo un espacio donde describir
              sus servicios, horarios y la forma de contactarlo para así
              incrementar su popularidad y clientes. Contamos con paquetes
              básicos con diseño responsivo, dominio web, plan de hosting anual.
            </p>
          </div>
          <div class="ref-img">
            <img
              style="width:350px; height:300px;"
              class="imgMantenimiento"
              :src="imgWeb"
              alt=""
            />
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import red from "@/assets/red.png";
import imgCamaras from "@/assets/camaras.png";
import imglimpieza from "@/assets/man.png";
import imgWeb from "@/assets/webDesign.png";
import imgTecnicos from "@/assets/tecnico.png";
import background1 from "@/assets/background1.jpg";

export default {
  name: "queHacemos",
  data() {
    return {
      red: red,
      imgCamaras: imgCamaras,
      imglimpieza: imglimpieza,
      imgWeb: imgWeb,
      imgTecnicos: imgTecnicos,
      background1: "background-image: url(" + background1 + ");"
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "_basic.scss";
.back-section {
  background-size: cover;
}

.queHacemos {
  padding: 20px 0 40px 0px;
  height: 100%;
  background: #f2bb57;
  min-width: 280px;

  h1 {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    height: auto;
  }
  h2 {
    margin-bottom: 10px;
    font-family: PoppinsB;
  }
  article {
    width: 100%;
    height: 100%;
    @include flex(space-around, wrap, flex-start);
    flex-wrap: wrap;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    background: rgb(255, 0, 242);
    .img-gray {
      background: blueviolet !important;

      .texto {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end !important;
        background: chocolate;
        h2 {
          text-align: right;
        }
      }
      p {
        background: brown;
      }
      .ref-img {
        background: pink;
      }
    }
    li {
      width: 100%;
      height: auto;
      padding: 60px 20px;
      background: rgb(0, 174, 255);
      .texto {
        background: chocolate;
      }
      p {
        width: 85%;
        background: red;
      }
      .ref-img {
        width: 60%;
        height: 100%;
        @include flex(center);
        background: aquamarine;
        img {
          width: 100%;
          height: 100%;
          max-width: 350px;
          max-height: 300px;
          min-height: 250px;
          min-width: 300px;
        }
      }
      @include flex(center);

      &:nth-child(2n) {
        background: #ecf0f1;
      }

      // linea 2
      &:nth-child(2) {
        img {
          width: 100%;
          height: 60%;
          max-width: 650px !important;
          max-height: 370px;
          min-height: 380px;
          min-width: 400px;
        }
      }
    }
  }
}
</style>
