<template>
  <section>
    <div class="contacto">
      <h1>Contáctanos</h1>
      <div class="two-div">
        <div id="send-email">
          <input type="text " class="nombre" required placeholder="Nombre" />
          <input type="email " class="email" required placeholder="Email" />
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <div id="data-contact">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
          commodi praesentium iure deleniti minima beatae. Error, ratione! Magni
          provident ducimus ipsum modi ullam quibusdam iusto fugit deserunt
          voluptatem nostrum.
          <ul class="vertical-bar">
            <li>
              <div class="icon-contact-item"></div>
              <span class="description-contact-item"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "sectionContacto"
};
</script>
<style lang="scss">
@import "../../_basic.scss";
.contacto {
  @include size(auto, 100%);
  background-color: #ffcc29;
  padding: 20px 0;
  .two-div {
    @include flex(center, wrap);
    @include size(100%, 100%);

    div {
      @include size(
        100%,
        50%,
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
    }
  }
}
</style>
