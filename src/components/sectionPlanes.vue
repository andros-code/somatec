<template>
  <section id="planes">
    <h1>Planes Disponibles</h1>
    <article>
      <div class="plan one">
        <div class="promo">50%</div>
        <span class="name-promo"
          >Promoción navideña <br />
          Válido hasta el: 25/2/2021
        </span>

        <h1 class="price">
          <span class="before">150 S/s</span>
          <span class="now"> 100 S/s</span>
        </h1>
        <h1 class="name">STANDARD</h1>
        <ul>
          <li>
            Asistencia remota 24/7<v-icon
              color="#27ae60"
              v-text="check"
            ></v-icon>
          </li>
          <li>
            Soporte tecnico en sitio dos dias a la semana
            <v-icon color="#27ae60" v-text="check"></v-icon>
          </li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
        </ul>
      </div>
      <div class="plan two">
        <h1 class="price">
          <span class="now"> 100 S/s</span>
        </h1>
        <h1 class="name">REMOTE</h1>
        <ul>
          <li>
            Asistencia remota 24/7<v-icon
              color="#27ae60"
              v-text="check"
            ></v-icon>
          </li>
          <li>
            Soporte tecnico en sitio dos dias a la semana
            <v-icon color="#27ae60" v-text="check"></v-icon>
          </li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
        </ul>
      </div>
      <div class="plan three">
        <h1 class="price">
          <span class="now"> 200 S/s</span>
        </h1>
        <h1 class="name">PRO</h1>
        <ul>
          <li>
            Asistencia remota 24/7<v-icon
              color="#27ae60"
              v-text="check"
            ></v-icon>
          </li>
          <li>
            Soporte tecnico en sitio dos dias a la semana
            <v-icon color="#27ae60" v-text="check"></v-icon>
          </li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
          <li>Descripcion <v-icon color="#27ae60" v-text="check"></v-icon></li>
        </ul>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "sectionPlanes",
  data() {
    return {
      check: "fas fa-check-circle"
    };
  }
};
</script>
<style lang="scss">
@import "../../_basic.scss";
.promo {
  width: 0px;
  height: 110px;
  border-left: 40px solid #c23616;
  border-right: 40px solid #c23616;
  border-bottom: 35px solid transparent;
  top: -5px;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PoppinsB;
  font-style: italic;
  font-size: 28px;
  color: white;
  position: absolute;
  z-index: 2;
}
.name-promo {
  font-size: 11px;
  color: gray;
  font-style: italic;
  position: absolute;
  width: 100%;
  padding: 10px 10px;
  text-align: right;
  top: 0px;
}
.date-end {
  top: 15px;
  font-size: 11px;
  margin-bottom: 70px;
}
#planes {
  padding: 40px 0;
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
    height: auto;
    width: 30vw;
    max-width: 320px;
    min-width: 300px;
    background: white;
    box-shadow: 3px 3px 20px -16px rgba(0, 0, 0, 0.75);
    position: relative;
    padding-bottom: 40px;
    .price {
      @include flex(center, wrap);
      margin-top: 25px;
      .before {
        font-size: 17px;
        color: gray;
        text-decoration: line-through;
        width: 100%;
        margin-left: 12%;
        order: 1;
      }
      .now {
        order: 0;
        font-style: bold;
        font-size: 45px !important;
      }
    }
    .name {
      font-size: 25px;
      margin-top: 50px;
    }
    ul {
      list-style: none;
      margin-top: 20px;
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
        width: 80%;
        padding: 5px 20px;
        text-align: left;
        font-size: 14px;
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
