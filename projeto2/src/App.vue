<template>
  <div id="app">
    <Header/>
     <nav>
      <router-link to="/">Principal</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
     <main>
      <transition name="scale" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import './assets/css/css.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  display: flex;
  justify-content: center;
  padding: 1em;
  gap: 1em;
  background: #a2a2a2;
}
</style>
