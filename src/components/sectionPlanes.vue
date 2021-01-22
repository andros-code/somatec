<template>
  <section id="planes">
    <h1>Planes Disponibles</h1>
    <article>
      <div class="plan one">
        <h1 class="price">150 S/s</h1>
        <h1 class="Name">LOREM</h1>
        <ul>
          <li>Descripcion</li>
        </ul>
      </div>
      <div class="plan two"></div>
      <div class="plan three"></div>
    </article>
  </section>
</template>
<script>
export default {
  name: "sectionPlanes"
};
</script>
<style lang="scss">
@import "../../_basic.scss";
h1 {
  height: auto;
  margin-bottom: 20px;
}
article {
  width: 100%;
  @include flex(space-around, wrap, center);
  .plan {
    margin: 20px 10px;
    height: 350px;
    width: 25vw;
    min-width: 230px;
    max-width: 320px;
    border-radius: 20px;
    background: white;
    ul {
      list-style: none;
      margin-top: 50px;
      li {
        width: 100%;
        padding: 4px;
        text-align: center;
        background: rgb(223, 223, 223);
      }
    }
    @include tablets() {
      width: 33.33%;
      margin: 20px 0;
    }
  }
}
</style>
