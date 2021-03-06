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
        <li class="img-gray" id="imgAsistencia">
          <div class="ref-img">
            <img class="tecnico" :src="imglimpieza" alt="" />
          </div>
          <div class="texto">
            <h2>Asistencia remota</h2>
            <p>
              El servicio de asistencia remota, es un producto que SOMATEC
              ofrece a todos sus clientes en cualquiera de sus modalidades.
              Nuestros servicios más comunes dentro del servicio de asistencia
              técnica remota son: Consultoría de software, instalación de
              software y configuración, instalación y configuración de
              periféricos (impresoras, cámaras, escaner, etc…) Limpieza de virus
              y spyware Recuperación de datos (fotos, documentos, cuentas de
              correo)
            </p>
          </div>
        </li>
        <li>
          <div class="texto">
            <h2>Instalación de redes locales</h2>
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
          <div class="ref-img" id="imgCamaras">
            <img :src="imgCamaras" alt="" />
          </div>
          <div class="texto">
            <h2>Instalación de cámaras de vigilancia</h2>
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
#imgAsistencia {
  position: relative;
  @include tablets {
    padding: 90px !important;
  }
  p {
    margin-bottom: 30px;
  }
}
#imgAsistencia img {
  position: absolute;
  bottom: 0;
  width: 300px;
  min-width: 500px;
}
#imgCamaras {
  width: 100px;
  min-width: 100px;
}
.back-section {
  background-size: cover;
}
.queHacemos {
  padding: 20px 0 0px 0px;
  height: 100%;
  background: #f2bb57;
  min-width: 280px;

  h1 {
    width: 100%;
    padding-top: 20px;
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

    li {
      width: 100%;
      height: auto;
      padding: 5vw 0;
      @include flex(space-around);
      .texto {
        order: 1;
        width: 50%;
        padding: 0 0 0 30px;
      }
      p {
        width: 85%;
      }
      .ref-img {
        order: 2;
        width: 50%;
        height: 100%;
        @include flex(center);
        max-width: 350px;
        max-height: 300px;
        min-height: 250px;
        margin-top: 20px;
        img {
          width: 100%;
          height: 100%;
          max-width: 350px;
          max-height: 300px;
          min-height: 250px;
          min-width: 300px;
        }
      }
      &:nth-child(2n) {
        background: #ecf0f1;
        width: 100vw;

        .texto {
          order: 2;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          padding: 0 30px 0 0;

          h2 {
            text-align: right;
          }
        }
        .ref-img {
          order: 1;
        }
        .ref-img img {
          margin-right: -50px;
        }
        @include tablets {
          @include flex(center, wrap, row);
          padding: 50px 0;

          .texto {
            width: 100vw;
            order: 1;
            padding: 0 0px 0 0;
            @include flex(center, wrap);
            h2 {
              text-align: center;
            }
          }
          .ref-img {
            order: 2;
          }
        }
      }
      // linea 2
      &:nth-child(2) {
        img {
          width: 100%;
          height: 60%;
          max-width: 650px;
          max-height: 370px;
          min-height: 380px;
          min-width: 400px;
        }
      }
      @include tablets {
        @include flex(center, wrap, row);
        .texto {
          width: 100vw;
          order: 1;
          padding: 0 0px 0 0;
          @include flex(center, wrap);
          h2 {
            width: 100vw;
            text-align: center;
          }
        }
        .ref-img {
          order: 2;
        }
      }
    }
  }
}
</style>
