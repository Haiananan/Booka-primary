<template>
  <div class="item">
    <span class="index">{{ order }}</span>
    <img :src="picS" alt="img" class="cover" />
    <div class="text2">
      <span class="name">{{ name }}</span> - {{ singer }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id", "name", "singer", "order", "pic"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["apiurl"]),
    picS() {
      return this.pic + "?param=50y50";
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
}
.cover {
  width: 50px;
  border-radius: 100px;
}
.text2 {
  color: white;
  margin-left: 20px;
}
.index {
  color: white;
  font-size: 2rem;
  margin-right: 20px;
}
</style>