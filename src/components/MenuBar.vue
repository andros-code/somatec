<template>
  <div class="MenuBar">
    <header>
      <div class="logo" :style="logo"></div>
      <nav>
        <ul class="menu">
          <div class="logo-menu" :style="logoMin"></div>
          <li @click="scrollMove('.presentacion')">Inicio</li>
          <li @click="scrollMove('.quienesSomos')">¿Quiénes Somos?</li>
          <li @click="scrollMove('.queHacemos')">¿Qué Hacemos?</li>
          <li @click="scrollMove('#planes')">Planes</li>
          <li @click="scrollMove('.contacto')">Contáctanos</li>
          <li class="menu-icon" style="display:none">
            <v-icon color="#000000">{{ svgPath }}</v-icon>
            &nbsp;&nbsp; <span style="margin-left:5px">Menu</span>
            <ul class="mini-menu">
              <li @click="scrollMove('.presentacion')">Inicio</li>
              <li @click="scrollMove('.quienesSomos')">¿Quiénes Somos?</li>
              <li @click="scrollMove('.queHacemos')">¿Qué Hacemos?</li>
              <li @click="scrollMove('#planes')">Planes</li>
              <li @click="scrollMove('.contacto')">Contáctanos</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import logoCompleto from "@/assets/Somatec.png";
import logoMin from "@/assets/logo.png";

import { mdiMenu } from "@mdi/js";
const $ = require("jquery");
export default {
  name: "menuBar",
  data: function() {
    return {
      logo: "background-image:url(" + logoCompleto + ")",
      logoMin: "background-image:url(" + logoMin + ")",
      svgPath: mdiMenu
    };
  },
  methods: {
    menuFixed() {
      window.onscroll = function() {
        let yScroll = window.scrollY;

        let menu = document.querySelector("header nav");
        let logo = document.querySelector(".logo-menu");

        if (yScroll > 179) {
          menu.style.zIndex = "1000";
          menu.style.top = "0";
          menu.style.position = "fixed";
          logo.style.visibility = "visible";
          document.querySelector("header").style.paddingBottom = "45px";
        }
        if (yScroll < 180) {
          menu.style.position = "static";
          logo.style.visibility = "hidden";
          document.querySelector("header").style.paddingBottom = "0px";
        }
      };
    },
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
  },
  mounted() {
    this.menuFixed();
  }
};
</script>

<style lang="scss">
@import "_basic.scss";

@include phones() {
  .menu li {
    display: none !important;
  }
  .menu .menu-icon {
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 110px;
    margin-right: 50px;
    .mini-menu {
      display: none;
      position: absolute;
      bottom: -183px;
      width: 200px;
      background: white;
      border-left: solid 3px #3d64ad;

      box-shadow: 0px 3px 20px -16px rgba(0, 0, 0, 0.75);
      &:hover {
        display: block;
      }
      li {
        display: flex !important;
        width: 90%;
        height: 20px;
        padding: 12px;
        justify-content: flex-start;
        align-items: center;
        color: black;
        border-left: solid 3px transparent;

        &:hover {
          border-bottom: solid 3px transparent;
          border-left: #3d64ad 3px solid;
        }
      }
    }
    &:hover ul {
      display: block;
    }
  }
}

.logo-menu {
  @include size(30px, 30px);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15px;
  visibility: hidden;
}
header {
  width: 100%;
  background: #ecf0f1;
  background-repeat: no-repeat;
  @include flex(center, wrap);

  .logo {
    @include size(150px, 330px);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  nav {
    width: 100%;
    background: #ecf0f1;
    color: black;
    .menu {
      @include flex(center);
      @include size(45px, 100vw);
      list-style: none;

      li {
        @include flex(center);
        @include size(30px, auto);
        @include font(PoppinsB, 14px);
        transition: all 0.3s ease-in-out;
        margin: 10px;
        padding: 0px;
        border-bottom: solid transparent 2px;
        cursor: pointer;
        &:hover {
          border-color: black;
        }
      }
    }
  }
}
</style>
