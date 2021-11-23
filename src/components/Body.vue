<template>
  <div class="page">
    <div class="main-content">
      <div class="left-fixed">
        <div class="social-items">
          <a class="icon-link" href=""><fa icon="github" type="fab" class="icon"></fa></a>
          <a class="icon-link" href=""><fa icon="codepen" type="fab" class="icon"></fa></a>
          <a class="icon-link" href=""><fa icon="linkedin-in" type="fab" class="icon"></fa></a>
          <a class="icon-link" href=""><fa icon="instagram" type="fab" class="icon"></fa></a>
          <div class="vl"></div>
        </div>
      </div>
      <div class="hero">
          <div class="hero-item left"></div>
          <div class="hero-item center-left"></div>
          <div class="hero-item center-right">
            <div class="hero-right">
              <p class="hello sf">Hello, World!</p>
              <p class="name sf">my name is</p>
              <h1 class="name1 ">Leo Alvian.</h1>
              <h2 class="job ">I'm a software developer.</h2>
              <p class="detail ">I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
              <button class="button-right sf one">Get In Touch</button>
            </div>
          </div>
          <div class="hero-item right"></div>
      </div>
      <div class="right-fixed">
        right here
      </div>
    </div>


    <div class="about">
      <div class="block-item left"></div>
      <div class="block-item center about-center">
        <div class="about-content">
          <div class="about-title">
            <div class="num sf">01.</div>
            <div class="subtitle opb">About Me</div>
            <div class="line-title"></div>
          </div>
          <div class="content">
            <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
            <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
            <p>Here are a few technologies I've been working with recently: </p>
            <div class="tech-list">
              <div class="tech-list-detail">
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">Python</span>
                </div>
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">JavaScript (ES6+)</span>
                </div>
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">Flutter</span>
                </div>
              </div>
              <div class="tech-list-detail">
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">Vue</span>
                </div>
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">Dart</span>
                </div>
                <div class="list-tech">
                  <div class="triangle-right">
                    <div class="inner-triangle"></div>
                  </div>
                  <span class="text-list">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-pic">Hey</div>
      </div>
      <div class="block-item right"></div>
    </div>

    <div class="project">
      <div class="block-item left">Your</div>
      <div class="block-item center">
        <div class="project-title">
          <div class="num sf">02.</div>
          <div class="subtitle opb">My Projects</div>
          <div class="line-title-project"></div>
        </div>
        <div class="global-card">
          <div class="img-card">
            <img src="img/analysis.jpg" alt="">
          </div>
          <div class="detail-project">
            <div class="feature sf">Featured Project</div> 
            <div class="opb project-title">The Corner Cafe App</div>
            <div class="detail-card">
              <p class="content-project content">Lorem ipsum dolor sit amet, consectetur adipisicing. fugiat repellendus, amet eveniet sunt necessitatibus beatae. Odit praesentium temporibus tempora!</p>
            </div>
            <div class="project-tech">
              <div class="content list-project-tech sf">Vue</div>
              <div class="content list-project-tech sf">Vuetify</div>
              <div class="content list-project-tech sf">Firebase</div>
              <div class="content list-project-tech sf">Express</div>
              <div class="content list-project-tech sf">Heroku</div>
            </div>
            <div class="icon-project">
              <a class="icon-link" href=""><fa icon="github" type="fab" class="icon"></fa></a>
              <a class="icon-link" href=""><fa icon="meetup" type="fab" class="icon"></fa></a>
            </div>
          </div>
        </div>
      </div>
      <div class="block-item right"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
      return{
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$base-color: #3DFFB8;

.sf {
  font-family: sf;
}

.sfm {
  font-family: sfm;
}

.op {
  font-family: op;
}

.ops {
  font-family: ops;
}

.opb {
  font-family: opb;
}

.ope {
  font-family: ope;
}

.lab {
  font-family: lab;
}

.page {
  position: relative;
}

.main-content {
    padding: 0;
    height: 85%;
}

.hero {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    height: 100%;
}

.hero-item {
  // background: brown;
  color: #3DFFB8;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  &.left {
    grid-column: span 1;
  }

  &.center-left {
    grid-column: span 4;
      
  }

  &.center-right {
    grid-column: span 6;
  }

  &.right {
    grid-column: span 1;
  }
}

p {
  font-size: .9rem;
  // font-weight: 400;
}

.hero-right {
  height: 85vh;
  padding-top: 60px;
  // background-color: blue;
}

.hello {
  margin: 0;
}

.name {
  margin: 0;
}

.name1 {
  margin: 0;
  margin-left: -5px;
  font-size: 4rem;
  color: #E6FFF6;
  letter-spacing: 1px;
}

.job {
  margin: 0;
  margin-left: -5px;
  font-size: 3.16rem;
  color: #918DB4;
  letter-spacing: 1px;
}

.detail {
  margin-top: 20px;
  margin-bottom: 40px;
  width: 450px;
  color: #918DB4;
  font-size: .9rem;
  line-height: 150%;
  // letter-spacing: .1px;
}

.button-right {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 15px 18px;
  color: $base-color;
  text-align: center;
  display: inline-block;
  font-size: .8rem;
  border: 1px solid $base-color;
  border-radius: 4px;
  position: relative;
  z-index: 10;
}

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

.social-items {
  display: grid;
  row-gap: 25px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat (5, 1fr);
  justify-items: center;

  
}

.icon-link {
  color: #918DB4;

  transition: all  150ms ease-in-out;
}

.icon-link:hover {
  color: $base-color;
  transform: translateY(-3px);
}

.icon {
  height: 20px;
}

.vl {
  border-left: 1px solid #918DB4;
  height: 90px;
  left: 50%;
  bottom: 0;
}

.left-fixed {
  position: fixed;
  width: 8.3%;
  height: 85%;
  // background: green;
  display: flex;
  align-items: end;
  justify-content: center;
  color: white;
}

.right-fixed {
  position: fixed;
  height: 85%;
  width: 8.2%;
  right: 0;
  top: 15%;
  // background: green;
  display: flex;
  align-items: end;
  color: white;
}

.about {
  margin-top: 100px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
}

.block-item {
  // background-color: green;

  &.left {
      grid-column: span 2;
  }

  &.center {
      grid-column: span 8;
      &.about-center{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
      }
      // background-color: yellow;
  }

  &.right {
      grid-column: span 2;
  }
}

.about-title {
  display: flex;
  align-items: center;
  // width: 60%;
}

.subtitle {
  margin-right: 20px;
  color: #E6FFF6;
  font-size: 1.7rem;
}

.num {
  margin-right: 9px;
  color: #3DFFB8;
  font-size: 1.3rem;
}

.line-title {
  border-top: 1px solid hsla(246, 21%, 63%, 0.4);
  width: 55%;
}

.about-content {
  grid-column: 1 / span 6;
}

.about-pic {
  grid-column: 8 / span 5 ;
  // background-color: blue;
}


.tech-list {
  display: flex;
  // background-color: red;
}
 
.tech-list-detail {
  width: 45%;
}

.list-tech{
  display: flex;
  margin: 1rem 0;
}

.content {
  color: #b0adcc;
  font-size: .8rem;
}

.content p {
  font-size: .9rem;
  // word-spacing: 1px;
}


.triangle-right {
  position: relative;
  margin: 7px 18px 0 0;
  width: 0; height: 0; 
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  
  border-left: 6px solid $base-color;
}

.inner-triangle {
  position: absolute;
  top: -2px; left: -5px;
  width: 0;
  height: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 3px solid #121212;;
}

//PROJECT
.project {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
}

.project-title {
  display: flex;
  align-items: center;
  // width: 60%;
}

.line-title-project {
  border-top: 1px solid hsla(246, 21%, 63%, 0.4);
  width: 35%;
}

.global-card {
  margin: 2.6rem 0;
  display: flex;
  justify-content: space-between;
}

.img-card {
  width: 20rem;
}

.img-card img {
  width: 30rem;
}

.detail-project {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.feature {
  font-size: .9rem;
}

.project-title {
  color: #E6FFF6;
  font-size: 1.55rem;
}

.detail-card {
  width: 30rem;
  background-color: #202020;
  padding: .9rem 2rem;
  margin: 1.5rem 0;
  border-radius: 4px;
}

.content-project {
  text-align: right;
  font-size: .9rem;
}

.project-tech {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1.3rem;
}

.list-project-tech {
  font-size: .8rem;
}

.icon-project {
  width: 15%;
  display: flex;
  justify-content: space-between;
}
</style>
