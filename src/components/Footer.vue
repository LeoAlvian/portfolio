<template>
  <footer>
    <div class="footer-center sf">
      <div class="created">{{created}} <a href="" class="insta">Leo Alvian</a></div>
      <div class="year">{{year}}</div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
  },
  data() {
      return{
        created: 'Created by',
        year: 'in year 2020'

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  color: #918DB4;
  position: absolute;
  width: 100%;
  text-align: center;
}

.footer-center {
  font-size: .75rem;
  // background: yellow;
}

.sf {
    font-family: sf;
}

.insta {
  color: #3DFFB8;
  text-decoration: none;
}
</style>
