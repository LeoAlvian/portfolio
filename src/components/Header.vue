<template>
    <header>
        <h1 class="logo">Logo</h1>
        <nav>
            <ul class="sf">
                <li><a href=""><div class="minus"></div><div class="plus-rotate"></div> <span class="fancy-nav">About</span></a></li>
                <li><a href=""><div class="minus"></div><div class="plus-rotate"></div> <span class="fancy-nav">Project</span></a></li>
                <li><a href=""><div class="minus"></div><div class="plus-rotate"></div> <span class="fancy-nav">Contact</span></a></li>
                <li><a href=""><div class="minus"></div><div class="plus-rotate"></div> <span class="fancy-nav">Blog</span></a></li>
            </ul>
        </nav>
        <div class="right-side"><button class="button-right sf one">Resume</button></div>
    </header>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {

  components: {
  },
  data() {
      return{

      }
  }
}
</script>

<style scoped lang="scss">
$base-color: #3DFFB8;

.sf {
    font-family: sf;
}

header {
    text-align: center;
    width: 100%;
    height: 15%;
    z-index: 1;
}

nav {
    // position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: none;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
}

nav li {
    display: flex;
    margin-bottom: 1em;
    margin-right: 0;
    font-size: .8rem;
    color: $base-color;
}

nav a {
    color: $base-color;
    text-decoration: none;
}

nav a:hover {
    color:$base-color;
}

@media screen and (min-width: 800px){
    header {
        display: grid;
        grid-template-columns: 1fr auto minmax(600px, 6fr) 1fr;
        // background-color: red;
    }

    .logo {
        grid-column: span 1;
    }

    nav {
        all: unset;
        grid-column: 3/4;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav ul {
        display: flex;
    }

    nav li {
        margin-left: 4em;
        margin-bottom: 0;
        padding: .2em;
    }

    .fancy-nav {
        position: relative;
        color: white;
    }

    .fancy-nav::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        margin-top: 0.5rem;
        width: 100%;
        height: 1px;
        background-color: $base-color;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 150ms ease-in;
    }

    .sf a {
        position: relative;
    }

    .minus {
        height: 2px;
        width: 8px;
        background-color: $base-color;
        position: absolute;
        top: 50%; left: -20px;

        transition: transform 150ms ease-in;
    }

    .plus-rotate {
        height: 2px;
        width: 8px;
        background-color: $base-color;
        position: absolute;
        top: 50%; left: -20px;

        transition: transform 150ms ease-in;
    }

    li:hover .plus-rotate {
        transform: rotate(180deg);
    }

    li:hover .minus {
        transform: rotate(90deg);
    }

    li:hover .fancy-nav::after {
        transform: scaleX(0.7);
    }

    li:hover .fancy-nav{
        color: $base-color;
    }

    .right-side {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-right {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 10px 16px;
        color: $base-color;
        text-align: center;
        display: inline-block;
        font-size: .8rem;
        border: 1px solid $base-color;
        border-radius: 4px;
        position: relative;
        z-index: 10;
    }

    // .button-left:hover{
    //     background-color: #1F2624;
    // }

    .button-right::after {
        content: "";
        position: absolute;
        width: 99.9%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #1F2624;
        border-radius: 4px;

        z-index: -1;
        transition: transform 200ms ease-in;
    }

    .one::after {
        transform: scaleX(0);
        transform-origin: left;
    }

    .one:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    } 

}

</style>
