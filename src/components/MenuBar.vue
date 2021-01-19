<template>
  <div class="MenuBar">
    <header>
      <div class="logo" :style="logo"></div>
      <nav>
        <ul class="menu">
          <div class="logo-menu" :style="logoMin"></div>
          <li>Inicio</li>
          <li>¿Quiénes Somos?</li>
          <li>Qué Hacemos</li>
          <li>Contáctanos</li>
          <li class="menu-icon" style="display:none">
            Menu
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import logoCompleto from "@/assets/Somatec.png";
import logoMin from "@/assets/logo.png";

export default {
  name: "menuBar",
  data: function() {
    return {
      logo: "background-image:url(" + logoCompleto + ")",
      logoMin: "background-image:url(" + logoMin + ")"
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
        }
        if (yScroll < 180) {
          menu.style.position = "static";
          logo.style.visibility = "hidden";
        }
      };
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
    display: none;
  }
  .menu .menu-icon {
    display: block !important;
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
  @include flex(center, wrap);

  .logo {
    @include size(180px, 350px);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  nav {
    width: 100%;
    ul {
      @include flex(center);
      @include size(45px, 100vw);
      background: white;
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
