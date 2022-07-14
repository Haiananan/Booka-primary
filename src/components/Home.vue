<template>
  <div class="homebox">
    <h3 class="head3">🌟 Top in Booka today</h3>
    <ul class="list">
      <div
        class="item"
        v-for="(song, index) in recommendSongsList"
        :key="index"
      >
        <Item
          :id="song.al.id"
          :name="song.al.name"
          :singer="singer(song.ar)"
          :order="index + 1"
          :pic="song.al.picUrl"
        ></Item>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Item from "./Item.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    const list = this.$store.state.recommendSongsList;
    console.log(list);
  },
  computed: {
    ...mapState(["recommendSongsList"]),
  },
  watch: {},
  components: { Item },
  methods: {
    singer(arr) {
      return arr.map((i) => i.name).join("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.homebox {
  display: grid;
  grid-template-rows: repeat(10, 10%);
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 100%;
}
.head3 {
  grid-row: 1/2;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  color: white;
}
.list {
  background-color: rgba($color: #000000, $alpha: 0.8);
  border-radius: 20px;
  margin-bottom: 20px;
  grid-column: 1/7;
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  overflow: auto;
}

.cover {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
.item {
  position: relative;
  width: 90%;
  margin: 10px;
  padding-right: 10px;
}
.number {
  position: absolute;
  bottom: 10px;
  left: 0;
  font-size: 5rem;
}

::-webkit-scrollbar {
  display: none;
}
</style>