<template>
  <div class="high-lights-container my-5 px-2">
    <div class="high-lights-scroll">

      <v-card
        v-for="(hl, index) in allDestaque"
        :key="index"
        :aria-label="(hl.olho + ' - ' + hl.titulo)"
        :to="hl.url"
        class="card-high-light mr-3 emphasis rounded-lg"
      >

        <v-img
          :src="hl.imagem"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
          class="img-emphasis grey darken-4 img-card rounded-lg align-end"
        >

          <v-card-subtitle class="eye-card pb-0 white--text text-uppercase">
            {{hl.olho}}
          </v-card-subtitle>
          <v-card-title class="title-card pt-2 mb-2 white--text">
            {{hl.titulo}}
          </v-card-title>

        </v-img>

      </v-card>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Highlights',
  computed: {
    allDestaque() {
      return this.allDestaques();
    },
  },
  methods: {
    ...mapGetters(['allDestaques']),
  },
};
</script>

<style lang="scss" scoped>
$breakpoint: 600px;

.high-lights-container{
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
}

.high-lights-scroll {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}

.card-high-light{
  width: 90vw;
  height: 100%;
}

.card-high-light:first-child {
  margin-left: 3vw;
}

.card-high-light:last-child {
  margin-right: 3vw;
}

.img-card {
  position: relative;
  height: 100%;
}

.title-card{
  font-size: 1rem;
  line-height: 1rem;
  text-align: initial;
  word-break: keep-all;
}

.eye-card{
  text-align: initial;
  word-break: keep-all;
}

@media (min-width: $breakpoint) {
  .high-lights-container{
    height: 55vh;
    width: 100%;
    flex-direction: column;
    overflow: hidden
  }

  .high-lights-scroll {
    height: 100%;
    width: none;
    display: flex;
    flex-direction: row;
    flex-flow: column wrap;
  }

  .card-high-light{
    width: 48%;
    height: 48%;
    margin-left: 0;
    margin-right: 1vw;
  }

  .card-high-light:first-child {
    width: 48%;
    height: 100%;
    margin-left: 1.3vw;
    margin-right: 0;
  }

  .card-high-light:last-child {
    margin-top: 1.8vh;
  }

  .img-card {
    position: relative;
    height: 100%;
  }

  .title-card{
    font-size: 1.8rem;
    line-height: 1.9rem;
  }

  .eye-card{
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  height: 0px;
}
</style>
