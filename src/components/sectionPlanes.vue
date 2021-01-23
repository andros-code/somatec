<template>
  <section id="planes">
    <h1>Planes Disponibles</h1>
    <article>
      <div class="plan one">
        <div class="promo">50%</div>
        <h1 class="price">150 S/s</h1>
        <h1 class="Name">LOREM</h1>
        <ul>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
        </ul>
      </div>
      <div class="plan two"></div>
      <div class="plan three"></div>
    </article>
  </section>
</template>
<script>
export default {
  name: "sectionPlanes",
  data() {
    return {
      check: "fas fa-check"
    };
  }
};
</script>
<style lang="scss">
@import "../../_basic.scss";
.promo {
  width: 0px;
  height: 120px;
  border-left: 50px solid #c0392b;
  border-right: 50px solid #c0392b;
  border-bottom: 35px solid transparent;
  top: -5px;
  left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PoppinsB;
  font-size: 35px;
  color: white;
  position: absolute;
}
#planes {
  padding-top: 40px;
}
h1 {
  height: auto;
  margin-bottom: 20px;
}
article {
  width: 100%;
  @include flex(space-around, wrap, center);
  .plan {
    margin: 20px 20px;
    height: 350px;
    width: 30vw;
    max-width: 320px;
    background: white;
    box-shadow: 3px 3px 20px -16px rgba(0, 0, 0, 0.75);
    position: relative;
    ul {
      list-style: none;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-end;

      padding-top: 20px;
      height: auto;
      li {
        border-bottom: solid 0.5px #95a5a6;
        display: flex;
        justify-content: space-between;
        width: 90%;
        padding: 5px 20px;
        text-align: center;
        font-family: Poppins;
      }
    }
    @include tablets() {
      width: 250px;
      margin: 20px 10px;
      border-radius: 0px;
    }
  }
}
</style>
