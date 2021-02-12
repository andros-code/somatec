<template>
  <section class="queHacemos">
    <h1>¿Qué Hacemos?</h1>
    <article>
      <ul>
        <li>
          <h2>MANTENIMIENTO DE EQUIPOS</h2>
          <p>
            Realizamos mantenimientos preventivos y correctivos de sus
            computadoras y equipos de cómputo con personal especializado.
          </p>
        </li>
        <li>
          <h2>REPARACIÓN DE EQUIPOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe
            facere, corporis sint, molestias veritatis reiciendis repudiandae
            quibusdam enim hic quis deleniti animi, soluta perspiciatis
            molestiae magnam quos repellat amet!
          </p>
        </li>
        <li>
          <h2>PRESENCIA DIGITAL</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe
            facere, corporis sint, molestias veritatis reiciendis repudiandae
            quibusdam enim hic quis deleniti animi, soluta perspiciatis
            molestiae magnam quos repellat amet!
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
    padding: 2%;
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
