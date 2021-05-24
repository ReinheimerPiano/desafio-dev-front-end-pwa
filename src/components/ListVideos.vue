<template>
  <div v-if="!$_model" class="div-container my-5">
    <div class="bar-video">
      <span class="title-bar">Vídeos</span>
    </div>
    <div class="videos-container">
      <v-card
        v-for="(vd, index) in allVideo"
        :key="index"
        :aria-label="(vd.titulo)"
        :to="vd.url"
        class="card-video emphasis rounded-lg">
        <v-hover v-slot="{ hover }">
            <v-img
              :src="vd.imagem"
              :gradient="hover ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)' : ''"
              class="img-emphasis grey darken-4 img-card rounded-lg align-end">
              <v-fade-transition>
                <div v-if="hover" >
                  <v-card-subtitle class="play-card pb-0 white--text text-uppercase">
                    {{vd.playlist}}
                  </v-card-subtitle>
                  <v-card-title class="title-card pt-2 mb-2 white--text">
                    {{vd.titulo}}
                  </v-card-title>
                </div>
              </v-fade-transition>
            </v-img>
        </v-hover>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListVideos',
  props: {
    value: Boolean,
  },
  data() {
    return {
      active: [false, false, false],
    };
  },
  computed: {
    allVideo() {
      return this.allVideos();
    },
    $_model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    ...mapGetters(['allVideos']),
    mouseOver(index) {
      this.active.splice(index, 0, !this.active[index]);
      console.log(this.active[index]);
      // this.active[index] = !this.active[index];
    },
  },
};
</script>

<style lang="scss" scoped>
.div-container{
  width: 100%;
  height: 100%;
  padding: 0 9rem;
  background-color: var(--v-primary-base);
}

.videos-container{
  height: 35vh;
  margin-top: 2rem;
  padding: 0 0 6rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  background-color: var(--v-primary-base);
}

.bar-video{
  padding-top: 4rem;
  text-align: justify;
}

.title-bar{
  font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
}

.card-video{
  width: 32%;
  height: 100%;
}

.img-card {
  position: relative;
  height: 100%;
}

.title-card{
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
  text-align: initial;
  word-break: keep-all;
}

.play-card{
  font-size: 1rem;
  font-weight: bold;
  text-align: initial;
  word-break: keep-all;
}
</style>
