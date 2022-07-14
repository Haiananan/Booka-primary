<template>
  <div class="outer">
    <div>
      <router-link
        class="icon icon-zhuye bigger"
        to="/home"
        active-class="active"
      ></router-link>
    </div>
    <div>
      <router-link
        class="icon icon-shuqian bigger"
        to="/collection"
        active-class="active"
      ></router-link>
    </div>
    <div>
      <router-link
        class="icon icon-faxian"
        to="/square"
        active-class="active"
      ></router-link>
    </div>
    <div>
      <router-link
        class="icon icon-shezhi"
        to="setting"
        active-class="active"
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.outer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
[class~="icon"] {
  color: $color-grey;
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: white;
    transform: scale(1.1);
    text-shadow: 0 2px 20px rgba($color: white, $alpha: 0.6);
  }
  &:active {
    color: white;
    text-shadow: 0 2px 14px rgba($color: white, $alpha: 0.6);
    transform: scale(1);
  }
}
.bigger {
  font-size: 2.4rem;
}
.active {
  color: white;
  transform: scale(1.1);
  text-shadow: 0 2px 20px rgba($color: white, $alpha: 0.6);
}
</style>