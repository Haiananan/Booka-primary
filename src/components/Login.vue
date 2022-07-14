<template>
  <div class="box">
    <div class="logo-box">
      <i class="icon-logo icon login-logo"></i>
      <h1 class="heading">{{ title }}</h1>
    </div>

    <h2 class="heading__secondary">- Login -</h2>
    <div class="inputarea">
      <input type="text" class="input" placeholder="Phone" v-model="phone" />
    </div>
    <div class="inputarea">
      <input
        type="text"
        class="input"
        placeholder="Verify code"
        v-model="code"
      /><button class="btn-send btn-colorful btn" @click="sendCode">
        {{ btnMsg }}
      </button>
    </div>
    <button class="btn-big btn-colorful btn" @click="login">GO</button>
    <button class="btn-big btn" @click="tourist">Tourist</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      phone: "",
      code: "",
      btnMsg: "Verify",
      title: "Booka",
    };
  },
  methods: {
    ...mapMutations(["beTourist", "offTourist"]),
    tourist() {
      this.beTourist();

      axios.get(`${this.apiurl}/register/anonimous`).then((response) => {
        localStorage.setItem("cookie", response.data.cookie);
      });
    },
    sendCode() {
      if (this.btnMsg !== "Verify") return;
      axios({
        method: "get",
        withCredentials: true,
        url: `${this.apiurl}/captcha/sent?phone=${this.phone}`,
      }).then((res) => {
        let sec = 60;
        if (res.data.data) {
          var timer = setInterval(() => {
            this.btnMsg = `${sec--}S`;
            if (sec < 0) {
              clearInterval(timer);
              this.btnMsg = "Verify";
            }
          }, 1000);
        } else {
          this.title = "Error!";
          console.log(res.data)
        }
      });
    },
    login() {
      axios
        .get(
          `${this.apiurl}/login/cellphone?phone=${this.phone}&captcha=${this.code}`
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("userData", res.data);
          if(res.data.loginType === 1){
            this.beTourist();
          }
        });
    },
  },
  computed: {
    ...mapState(["apiurl"]),
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.logo-box {
  display: flex;
  align-items: center;
  @include gradient-logo;
  background-clip: text;
  text-shadow: 10px 10px 40px rgba(white, $alpha: 0.2);
}
.login-logo {
  font-size: 10rem;

  color: transparent;
  background-size: 100%;
  background-position: center;
}
.heading {
  color: transparent;
  font-size: 6rem;
  margin-left: 1rem;
  &__secondary {
    color: white;
  }
}
.inputarea {
  width: 300px;
  height: 60px;
  background-color: transparent;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  //box-shadow: 0 10px 20px rgba($color: white, $alpha: 0.1);
  border: rgba(white, 0.3) 1px solid;
}
.input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  border: none;
  color: white;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 10px;
  &:focus {
    border: none;
    outline: none;
  }
}
.btn {
  cursor: pointer;
  &-send {
    height: 100%;
    padding: 10px 20px;
    font-family: inherit;

    border: none;
  }
  &-big {
    width: 300px;
    padding: 16px;
    margin-top: 20px;
    border-radius: 10px;
    font-family: inherit;
    border: none;
    background-color: rgba(white, 0.8);
    transition: all 0.4s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba($color: $color-blue, $alpha: 0.4);
    }
    &:active {
      transform: translateY(0px);
      box-shadow: 0 5px 20px rgba($color-purple, 0.6);
    }
  }
  &-colorful {
    @include gradient-logo;
    color: white;
  }
}
</style>