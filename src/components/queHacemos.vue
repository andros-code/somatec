<template>
  <section class="queHacemos">
    <h1>¿Qué Hacemos?</h1>
    <article>
      <ul>
        <li>
          <h2>Mantenimientos de equipos</h2>
          <p>
            Realizamos trabajos de mantenimiento preventivo y correctivo para tu
            hogar o tu negocio, preparamos todos tus dispositivos para el día a
            día, instalamos programas, respaldamos información y te brindamos
            toda la asistencia que necesitas.
          </p>
        </li>
        <li>
          <h2>Reparación de equipos</h2>
          <p>
            Tenemos amplia experiencia en el diagnostico y reparación de los
            equipos de computo de tu hogar o empresa. podemos resolver cualquier
            insurgencia ya sea en el hardware o software.
          </p>
        </li>
        <li>
          <h2>Diseñamos páginas web</h2>
          <p>
            Somos profesionales en el desarrollo de tu presencia digital,
            creamos tu pagina web a la medida, adaptable a todos tus
            dispositivos y acceso inmediato a sus redes sociales con enlaces
            directos para consultar todos tus productos o servicios.
          </p>
        </li>
      </ul>
      <div data-aos="fade-up" class="pictures" :style="img3"></div>
    </article>
  </section>
</template>

<script>
import img3 from "@/assets/img3.jpg";
export default {
  name: "queHacemos",
  data() {
    return {
      img3: "background-image: url(" + img3 + ");"
    };
  }
};
</script>

<style lang="scss">
@import "_basic.scss";

.queHacemos {
  padding: 20px 0 40px 0px;
  height: 100%;
  background: rgb(242, 187, 87);
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

    .pictures {
      order: 2;
      width: 50%;
      background-size: contain;
      background-position: center;
      height: 500px;
    }
  }
  ul {
    order: 3;

    > p {
      margin-top: -20px;
    }
    width: 48%;
    text-align: justify;
    padding: 5%;
    font-family: PoppinsB;

    li {
      list-style: none;
      font-family: Poppins;
      margin: 20px 0;
      max-width: 600px;
    }
  }

  @include tablets() {
    ul {
      width: 90%;
      order: 1;
    }
    .pictures {
      width: 100%;
      max-height: 250px;
    }
  }
}
</style>
