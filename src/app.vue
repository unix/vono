<template>
  <div class="zi-layout zi-main">
    <zi-card>
      <h3>vono</h3>
      <p>This is a template for a Vue project and contains a lot of magic. Want to try to be a magician? </p>
    </zi-card><br>
    <zi-card>
      <h2>
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </h2>
    <router-view/>
    </zi-card><br>
    <zi-card>
      <div class="zi-comment">
        The project based on <a target="_blank" href="https://github.com/zeit-ui/vue">@zeit-ui/vue</a> UI
      </div>
    </zi-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/home')
  },
}
</script>
