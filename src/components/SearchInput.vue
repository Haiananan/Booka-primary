<template>
  <div class="searchcomp-outer">
    <div class="searchcomp">
      <i class="searchcomp__icon icon-1_music95 icon"></i>
      <input
        type="text"
        placeholder="Search something"
        class="searchcomp__input"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.searchcomp-outer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchcomp {
  width: 90%;
  background-color: black;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;
  &:hover {
    width: 95%;
  }
  &__icon {
    color: white;
    font-size: 1.3rem;
    margin-left: 10px;
    transform: translateY(-2px);
  }
  &__input {
    width: 100%;
    height: 40px;
    margin-left: 5px;
    background-color: transparent;
    overflow: hidden;
    border: none;
    margin-right: 10px;
    color: white;
    &:focus {
      border: none;
      text-decoration: none;
      outline: none;
    }
  }
}
</style>