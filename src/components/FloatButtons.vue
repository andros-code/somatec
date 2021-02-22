<template>
  <v-fab-transition class="ws-btn">
    <v-btn @click="refWhatsapp" class="ws" color="pink" dark absolute fab>
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </v-fab-transition>
</template>
<script>
export default {
  name: "FloatButtons",
  methods: {
    refWhatsapp: function() {
      window.open("https://wa.me/51934987211", "_blank");
    }
  }
};
</script>
<style lang="scss" scoped>
.ws {
  position: fixed;
  z-index: 900;
  right: 20px;
  bottom: 20px;
  padding: 10px !important;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100% !important;
  background: rgb(35, 199, 57) !important;
  box-shadow: 3px 3px 15px -5px rgba(0, 0, 0, 0.75);
  .btn {
    background: rgb(35, 199, 57);
    box-shadow: none;
    outline: none;
  }
}
a {
  text-decoration: none;
}
</style>
