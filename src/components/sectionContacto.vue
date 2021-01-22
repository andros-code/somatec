<template>
  <section>
    <div class="contacto">
      <h1>
        Contáctanos
      </h1>
      <div class="two-div">
        <form id="send-email" @submit.prevent="sendEmail">
          <input
            type="text "
            class="nombre"
            required
            placeholder="Nombre"
            name="nombre"
          />
          <input
            type="email "
            class="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            placeholder="Mensaje"
            required
          >
          </textarea>
          <button class="btn-sendEmail" style="margin:5px;">
            <span class="enter-msj">Enviar Mensaje</span>
            <v-icon
              style="margin-left:20px"
              v-text="enter"
              color="#000000"
            ></v-icon>
          </button>
          <v-alert
            :value="alert"
            type="success"
            color="#4caf50"
            style="margin-top:-170px; width:70%; min-width:200px; font-size:13px;"
            transition="scale-transition"
          >
            <span style="margin-left:10px; font-family:Roboto !important; ">
              Te contactaremos pronto!
            </span>
          </v-alert>
        </form>
        <div id="data-contact">
          <ul class="vertical-bar">
            <li>
              <div class="icon-contact-item">
                <v-icon size="40px" color="#000000" v-text="whatsapp"></v-icon>
                <div class="description-contact-item">
                  <a href="https://wa.me/51934987211" target="_black">
                    <strong style="margin-left:0;">
                      Comunícate con nosotros ahora!
                    </strong>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="icon-contact-item">
                <v-icon size="34px" color="#000000" v-text="email"></v-icon>
                <div class="description-contact-item">
                  Email:
                  <a href="mailto:somattec.atencion@gmail.com">
                    <strong>somattec.atencion@gmail.com</strong></a
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="icon-contact-item">
                <v-icon size="30px" color="#000000" v-text="phone"></v-icon>
                <div class="description-contact-item">
                  Telefonos de contacto: <br />
                  +51934987211 <br />
                  +51 000 000 000
                </div>
              </div>
            </li>
            <li>
              <div class="icon-contact-item">
                <v-icon size="34px" color="#000000" v-text="facebook"></v-icon>
                <div class="description-contact-item">
                  Facebook:
                  <a
                    href="https://www.facebook.com/@somattec-3wwe/"
                    target="_black"
                    ><strong>@somattec-3wwe</strong></a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "sectionContacto",
  data() {
    return {
      whatsapp: "fab fa-whatsapp",
      phone: "fa fa-phone",
      email: "fa fa-envelope",
      facebook: "fab fa-facebook",
      enter: "fa fa-paper-plane",
      alert: false,
      validateMensaje: false
    };
  },
  methods: {
    emailValidation: function() {
      let email = document.getElementsByClassName("email")[0];
      email.addEventListener(
        "keyup",
        () => {
          let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          if (emailRegex.test(email.value)) {
            email.style.border = "none";
            this.validateMensaje = true;
          } else {
            this.validateMensaje = false;
            email.style.border = "#e74c3c solid 2px";
            email.focus();
          }
        },
        false
      );
    },
    sendEmail: function(e) {
      if (this.validateMensaje == true) {
        emailjs
          .sendForm(
            "somattec.atencion",
            "somattec.atencion",
            e.target,
            "user_l0P1nvYCljs8WUnPx7ZFd"
          )
          .then(
            result => {
              this.alert = true;
              e.target[0].value = "";
              e.target[1].value = "";
              e.target[2].value = "";
              setTimeout(() => {
                this.alert = false;
              }, 2500);
              console.log("SUCCESS!", result.status, result.text);
            },
            error => {
              console.log("FAILED...", error);
            }
          );
      } else {
        e.target[1].focus();
      }
    }
  },
  mounted() {
    this.emailValidation();
  }
};
</script>
<style lang="scss">
@import "../../_basic.scss";
#data-contact {
  @include flex(center);
  margin: 0 2%;
  .vertical-bar {
    list-style: none;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      margin-left: 10px;
    }
    a {
      text-decoration: none;
      color: #000000;
      font-style: bold;
    }
    li {
      display: flex;
      margin: 10px 0;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      .description-contact-item {
        display: flex;
        align-items: center;
        font-family: Poppins;
        font-size: 16px;
        margin-left: 60px;
        width: 100%;
        margin-top: -31px;
      }
    }
  }
}
.contacto {
  @include size(auto, 100%);
  background-color: #ffcc29;
  padding: 20px 0;
  h1 {
    margin-bottom: 30px;
  }
  .two-div {
    @include flex(center, wrap);
    @include size(100%, 100%);

    div,
    form {
      @include size(
        100%,
        48%,
        (
          width: 300px,
          height: auto
        )
      );
    }
    #send-email {
      @include flex(center, wrap);
      padding-top: 10px;
      input,
      textarea {
        background: white;
        font-family: RobotoB;
        font-size: 20px;
        border: none;
        padding: 10px;
        width: 80%;
        resize: none;
        outline: none;
        margin-bottom: 20px;
        box-shadow: 3px 3px 30px -16px rgba(0, 0, 0, 0.75);
      }

      button {
        display: flex;
        justify-content: center;
        margin-right: 20px;
        width: 200px;
        outline: none;
        font-family: PoppinsB;
        align-self: flex-end;

        @include tablets() {
          margin: -30px -10px 20px 0 !important;
          .enter-msj {
            display: none;
          }
        }
      }
    }
  }
}
</style>
