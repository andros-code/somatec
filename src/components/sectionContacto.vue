<template>
  <section class="global">
    <div class="contacto">
      <h1>
        CONTÁCTANOS
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
          <button class="btn-sendEmail" style="margin:5px; position:relative;">
            <span class="enter-msj">Enviar Mensaje</span>
            <v-icon
              style="margin-left:20px"
              v-text="enter"
              color="#000000"
            ></v-icon>
          </button>
          <v-progress-circular
            id="progress-email"
            style="position:absolute; visibility:hidden;"
            indeterminate
            color="#000000"
          ></v-progress-circular>
          <v-alert
            :value="alert"
            type="success"
            color="#4caf50"
            style="position:absolute; width:300px; height:50px; min-width:200px; font-size:13px;"
            transition="scale-transition"
          >
            <span style="margin-left:10px; font-family:Roboto !important; ">
              Te contactaremos pronto!
            </span>
          </v-alert>
        </form>
        <div id="data-contact">
          <div data-aos="fade-up" class="pictures" :style="img3"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "emailjs-com";
import img4 from "@/assets/logo.png";
import img3 from "@/assets/img3.jpg";
export default {
  name: "sectionContacto",
  data() {
    return {
      whatsapp: "fab fa-whatsapp",
      facebook: "fab fa-facebook",
      email: "fa fa-envelope",
      enter: "fa fa-paper-plane",
      phone: "fa fa-phone",
      alert: false,
      validateMensaje: false,
      img4: "background-image:url(" + img4 + ")",
      img3: "background-image: url(" + img3 + ")"
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
        let progress = document.getElementById("progress-email");
        let btn = document.querySelector(".btn-sendEmail");
        btn.style.filter = "contrast(0)";
        btn.disabled = true;
        progress.style.visibility = "visible";
        emailjs
          .sendForm(
            "somattec.atencion",
            "somattec.atencion",
            e.target,
            "user_l0P1nvYCljs8WUnPx7ZFd"
          )
          .then(
            result => {
              progress.style.visibility = "hidden";
              console.log("SUCCESS!", result.status, result.text);
              btn.disabled = false;
              btn.style.filter = "none";

              this.alert = true;
              e.target[0].value = "";
              e.target[1].value = "";
              e.target[2].value = "";
              setTimeout(() => {
                this.alert = false;
              }, 2500);
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
.global {
  display: flex;
}
#progress-email {
  transition: all 0.2s ease-in-out;
}

#data-contact {
  @include flex(center);
  margin: 0 2%;
  .pictures {
    width: 50%;
    background-size: contain;
    background-position: center;
    height: 500px;
  }
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
      color: black;
    }
    li {
      display: flex;
      margin: 10px 0;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      @include tablets() {
        padding: 10px;
        margin: 0px;
      }
      @include phones() {
        .icon-contact-item {
          margin-left: 50px;
        }
      }
      .description-contact-item {
        display: flex;
        align-items: center;
        font-family: Poppins;
        font-size: 16px;
        margin-left: 60px;
        width: 100%;
        margin-top: -31px;
        @include tablets() {
          font-size: 14px !important;
          margin-left: 4%;
          padding-left: 10%;
        }
        @include phones() {
          font-size: 13px !important;
        }
      }
    }
  }
}
.contacto {
  @include size(auto, 100%);
  background: #f2bb57;
  padding: 20px 0;
  order: 1;
  color: black !important;

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
      @include flex(center, wrap, space-between);
      flex-direction: column;
      @include tablets() {
        width: 80%;
      }
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
        margin-bottom: 30px;
        box-shadow: 3px 3px 30px -16px rgba(0, 0, 0, 0.75);
        min-width: 200px;
      }
      textarea {
        margin-bottom: 40px;
      }
      button {
        display: flex;
        justify-content: center;
        margin-right: 20px;
        width: 200px;
        outline: none;
        font-family: PoppinsB;
        align-self: center;
        position: absolute;
        top: -30px;
        @include tablets() {
          margin: 0px 0px 30px 0 !important;
        }
      }
    }
  }
}
</style>
