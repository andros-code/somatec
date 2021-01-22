<template>
  <section class="quienesSomos">
    <article>
      <h1>¿Quiénes Somos?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit veritatis
        quo totam cupiditate soluta ipsum fugit facere provident assumenda sit,
        quisquam similique repellendus animi dolorum iste laudantium deleniti
        impedit reiciendis! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Harum perferendis totam dignissimos ex incidunt consectetur vero
        dicta dolores, quisquam quo facilis sequi pariatur consequuntur, optio
        saepe fuga illum aut repellendus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam sequi repudiandae libero rerum soluta adipisci eum
        veniam sed cumque aperiam fugiat molestias, labore beatae atque! Id
        labore veniam debitis accusamus.
      </p>
      <div class="picture">
        <img id="img1" :src="img1" alt="Imagen de contexto" />
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

      #img1 {
        width: 100%;
        height: 100%;
      }
    }
    p {
      width: 48%;
      text-align: justify;
      padding: 2%;
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
