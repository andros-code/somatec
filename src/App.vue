<template>
  <div id="app">
    <MenuBar />
    <sectionHome />
    <sectionContacto />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import sectionHome from "./components/sectionHome.vue";
import sectionContacto from "./components/sectionContacto.vue";
export default {
  name: "App",

  components: {
    MenuBar,
    sectionHome,
    sectionContacto
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  overflow-x: hidden;
}
@import "_basic.scss";
@include newFont("Poppins", "Poppins-Regular.ttf");
@include newFont("PoppinsB", "Poppins-SemiBold.ttf");
@include newFont("RobotoB", "RobotoCondensed-Bold.ttf");
@include newFont("Roboto", "RobotoCondensed-Regular.ttf");

section {
  font-family: Roboto;
  width: 100%;
  background-color: #ecf0f1;
  margin-top: 30px;
}
h1 {
  width: 100%;
  height: 30px;
  padding: 15px 5px;
  text-align: center;
  font-size: 30px;
}
</style>
