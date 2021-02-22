import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#f5f6fa",
        tertiary: "#f5f6fa",
        font: "#000000"
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#1e272e",
        tertiary: "#f5f6fa",
        font: "#ffffff"
      }
    }
  }
});
