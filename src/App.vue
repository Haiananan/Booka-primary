<template>
  <div class="container">
    <transition name="login" appear>
      <Login class="login-page" v-if="loginPageShow"></Login>
    </transition>

    <div class="app">
      <div class="logo" @click="demo">
        <router-link
          class="icon icon-logo home-logo"
          to="/about"
          active-class="about-active"
        ></router-link>
      </div>
      <Welcome class="welcome" @click.native="login"></Welcome>
      <SearchInput class="search"></SearchInput>
      <Navigator class="navigator"></Navigator>
      <div :class="viewShrink ? 'view-shrink' : 'view'">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <Player :class="viewShrink ? 'player-grow' : 'player'"></Player>
    </div>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import SearchInput from "./components/SearchInput.vue";
import Navigator from "./components/Navigator.vue";
import Player from "./components/Player.vue";
import Login from "./components/Login.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  name: "App",
  components: { Welcome, SearchInput, Navigator, Player, Login },
  data() {
    return {
      viewShrink: false,
      islogin: true,
    };
  },
  methods: {
    ...mapMutations(["beTourist", "offTourist"]),
    ...mapActions(["getRecommendSongs"]),
    demo() {
      this.viewShrink = !this.viewShrink;
    },
    login() {
      this.offTourist();
    },
  },
  computed: {
    ...mapState(["apiurl", "touristMode", "isLogin"]),
    loginPageShow() {
      if (!this.touristMode && !this.islogin) {
        return true;
      }
    },
  },
  mounted() {
    const cookie = localStorage.getItem("cookie");
    this.getRecommendSongs(cookie);
  },
};
</script>


<style lang="scss">
a {
  text-decoration: none;
}
.container {
  @include gradient-fable-wave;
  width: auto;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(100px);
    z-index: 1;
    background-image: url(data:image/png;base64,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);
  }
}
.app {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 10;
  background-color: $color-primary;
  opacity: 0.7;
  margin: 0rem;
  border-radius: 0px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 10%);
}
.logo {
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-logo {
  cursor: pointer;
  transition: all 0.4s;
  transform: scale(1);
  &::before {
    color: white;
    font-size: 2rem;
  }
  &:hover {
    color: white;
    text-shadow: 0 10px 20px rgba($color: white, $alpha: 0.6);
    transform: scale(1.1);
  }
  &:active {
    color: white;
    text-shadow: 0 6px 14px rgba($color: white, $alpha: 0.6);
    transform: scale(1);
  }
}
.about-active {
  color: white;
  text-shadow: 0 10px 20px rgba($color: white, $alpha: 0.6);
  transform: scale(1.1);
}
.welcome {
  grid-row: 1/2;
  grid-column: 2/9;
}
.search {
  grid-row: 1/2;
  grid-column: 9/-1;
}
.navigator {
  grid-row: 2/-1;
  grid-column: 1/2;
}
.view {
  grid-row: 2/-1;
  width: 1100%;

  transition: all 0.5s;
  &-shrink {
    grid-row: 2/-1;
    width: 700%;

    transition: all 0.5s;
  }
}

.player {
  grid-row: 2/-1;
  grid-column: 9/-1;
  transition: all 0.5s;
  transform: translateX(100%);
  &-grow {
    grid-row: 2/-1;
    grid-column: 9/-1;
    transition: all 0.5s;
    background-color: blue;
  }
}
.login-page {
  position: relative;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: $color-dark;
  transition: opacity 0.5s;

  &-hidden {
    width: 0;
    opacity: 0;
  }
  &-display {
    width: 100vw;
    opacity: 1;
  }
}
.login-enter-active {
  opacity: 0;
  transition: all 0.5s;
}
.login-leave-active {
  opacity: 0;
  transition: all 0.5s;
}
@font-face {
  font-family: "righteous";
  src: url("./assets/font/Righteous.ttf");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "righteous";
  font-weight: 500;
  line-height: 1.7;
  box-sizing: border-box;
  overflow: hidden;
  /* overflow-y: hidden;
    overflow-x: hidden; */
}
html {
  font-size: 100%;
  width: 100vw;
  height: 100vh;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.icon,
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>