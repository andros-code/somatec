<template>
  <footer>
    <div>
      © 2021 SOMATTEC |

      <a href="">About </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterDown"
};
</script>

<style lang="scss">
@import "_basic.scss";

footer {
  margin-top: 40px;
  padding: 2%;
  background: rgb(226, 226, 226);
  color: gray;
  font-family: Roboto;
  @include flex(center);
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
