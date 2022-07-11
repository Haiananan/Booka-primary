<template>
  <div class="outer">
    <div><i class="icon icon-zhuye bigger"></i></div>
    <div><i class="icon icon-shuqian bigger"></i></div>
    <div><i class="icon icon-faxian"></i></div>
    <div><i class="icon icon-shezhi"></i></div>
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
    text-shadow: 0 2px 20px rgba($color: white, $alpha: 0.6);
  }
}
.bigger {
  font-size: 2.4rem;
}
</style>