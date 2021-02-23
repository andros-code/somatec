<template>
  <section id="planes" data-aos="fade-up">
    <h1>Planes Disponibles</h1>
    <article>
      <!--<p class="planes-descripcion">
        Diseñamos planes de soporte técnico personalizados en base a las
        necesidades y presupuesto de cada empresa, de esta manera, Usted
        dispondrá de una gama de servicios de Tecnología de Información y
        Soporte en la modalidad de tercerización y/o outsourcing de personal.
        Nuestro servicio incluye actividades básicas de la primera línea de
        soporte, así como actividades avanzadas que requieren niveles de
        especialización mas altos. Hemos diseñados los siguientes planes para
        ofrecer un servicio de calidad que se ajuste tanto a nivel empresarial
        como domestico.
      </p>-->

      <div class="plan one">
        <h1 class="price">
          <img :src="plan" alt="logo plan empresa" />
          <span class="now">PROFESIONAL</span>
        </h1>
        <ul>
          <li>
            Asistencia remota 24/7<v-icon
              color="#27ae60"
              v-text="check"
              size="15px"
            ></v-icon>
          </li>
          <li>
            Soporte técnico en sitio un dia a la semana
            <v-icon color="#27ae60" size="15px" v-text="check"></v-icon>
          </li>

          <li>
            Diseño web a la medida
            <v-icon color="#27ae60" size="15px" v-text="check"></v-icon>
          </li>
        </ul>
      </div>
      <div class="plan two">
        <h1 class="price">
          <img :src="plan" alt="logo plan domestico" />
          <span class="now">PROFESIONAL II</span>
        </h1>
        <ul>
          <li>
            Asistencia remota 24/7<v-icon
              color="#27ae60"
              v-text="check"
              size="15px"
            ></v-icon>
          </li>
          <li>
            Soporte técnico en sitio cada vez que sea necesario
            <v-icon color="#27ae60" size="15px" v-text="check"></v-icon>
          </li>

          <li>
            Diseño web a la medida
            <v-icon color="#27ae60" size="15px" v-text="check"></v-icon>
          </li>
        </ul>
      </div>
      <div class="plan three">
        <h1 class="price">
          <img :src="plan3" alt="logo plan unico" />
          <span class="now">UNICO SERVICIO</span>
        </h1>
        <ul>
          <li>
            Recibe asistencia personalizada.
            <v-icon color="#27ae60" size="15px" v-text="check"></v-icon>
          </li>
        </ul>
        <span @click="scrollMove('.contacto')" class="contact-ref"
          >Consulta ahora
          <v-icon size="25px" color="#ffffff">fas fa-chevron-down</v-icon></span
        >
      </div>
    </article>
  </section>
</template>
<script>
import plan3 from "@/assets/person.png";
import plan from "@/assets/servi.png";
const $ = require("jquery");
export default {
  name: "sectionPlanes",
  data() {
    return {
      check: "fas fa-check-circle",
      plan3: plan3,
      plan: plan
    };
  },
  methods: {
    scrollMove(el) {
      let position;
      el = document.querySelector(el);
      position = el.offsetTop;
      $("html, body").animate(
        {
          scrollTop: position - 30
        },
        500
      );
    }
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
  padding: 40px 0 60px 0;
}
h1 {
  height: auto;
  margin-bottom: 40px;
}
article {
  width: 100%;
  @include flex(space-around, wrap, center);
  .planes-descripcion {
    font-size: 17px;
    font-family: Poppins;
    text-align: justify;
    padding: 5vw;
  }
  .task-list {
    width: 100%;
    font-size: 17px;
    font-family: Poppins;
    padding: 0 5vw;
    list-style: none;
  }
  .plan {
    height: auto;
    width: 30vw;
    height: 470px;
    max-width: 320px;
    min-width: 300px;
    background: white;
    box-shadow: 3px 3px 20px -16px rgba(0, 0, 0, 0.75);
    position: relative;
    @include flex(flex-start, wrap, flex-start);

    .price {
      @include flex(center, wrap);

      .before {
        font-size: 17px;
        color: gray;
        text-decoration: line-through;
        width: 100%;
        margin-left: 12%;
        order: 1;
      }
      img {
        margin-top: -20px;
      }
      .now {
        order: 0;
        font-size: 25px;
        font-family: PoppinsB;
        font-weight: 900;
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .name {
      font-size: 25px;
      margin-top: 5px;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-end;
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
  .three {
    background-color: #3d64ad;
    color: white;

    ul {
      li {
        border-bottom: solid 1px white;
      }
    }
  }
  .contact-ref {
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
}
</style>
