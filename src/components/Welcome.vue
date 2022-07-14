<template>
  <div class="welcome">
    <img src="../assets/hai.png" alt="avatar" class="welcome__avatar" />
    <h2 class="welcome__title">Welcome back, {{ username }} !</h2>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      username: "Haian",
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  transition: all 0.5s;
  &:hover {
    transform: translateX(5px);
  }
  &:active {
    transform: translateX(0px);
  }
  &__avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    background-size: 100%;
    background-position: center;
  }
  &__title {
    margin-left: 1rem;
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
  }
}
</style>
