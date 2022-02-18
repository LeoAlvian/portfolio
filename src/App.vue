<template>
  <div class="container">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-body': Body
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800;900&display=swap');

@font-face {
    font-family: "sf";
    src: url(./fonts/SFMono-Regular.ttf) format("truetype");
 }
@font-face {
    font-family: "sfm";
    src: url(./fonts/SFMonoMedium.otf) format("opentype");
 }
@font-face {
    font-family: "lab";
    src: url(./fonts/LaborUnion.otf) format("opentype");
 }
@font-face {
    font-family: "op";
    src: url(./fonts/OpenSans-Regular.ttf) format("truetype");
 }
@font-face {
    font-family: "ops";
    src: url(./fonts/OpenSans-SemiBold.ttf) format("truetype");
 }
@font-face {
    font-family: "opb";
    src: url(./fonts/OpenSans-Bold.ttf) format("truetype");
 }
@font-face {
    font-family: "ope";
    src: url(./fonts/OpenSans-ExtraBold.ttf) format("truetype");
 }

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color:#3DFFB8;
}

::-webkit-scrollbar {
  width: .6rem;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #121212;
  margin-block: .5rem;
}

::-webkit-scrollbar-thumb {
  background: #121212;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid #3DFFB8;  /* creates padding around scroll thumb */
}

::-webkit-scrollbar-thumb:hover {
  // background: linear-gradient(#E6FFF6, #121212);
  background: linear-gradient(#121212, #E6FFF6);
}

@supports (scrollbar-color: red blue) {
  * {
    scrollbar-color: #3DFFB8 #121212;
    scrollbar-width: thin;
  }
}

body {
  margin: 0;
  padding: 0;
  background: #121212;
  font-family: 'Poppins', sans-serif;
}

.container {
  height: 100vh;
}


</style>
