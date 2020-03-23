<template>
  <v-card
    height="400"
    width="250"
    :elevation="1"
    app
    :style="useClass()"
    class="profe"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/prof.jpg')"
    ></v-img>
    <v-card-title class="pb-0">Masahiro Akita</v-card-title>
    <v-card-text class="text--primary">
      <div>Software Engineer</div>
      <div>From Saitama, now live in Hiroshima.</div>
    </v-card-text>
    <v-card-actions>
      <div @click="showActvView">
        <v-btn color="orange" text>Activities</v-btn>
      </div>
      <div @click="showAbutMeView">
        <v-btn color="orange" text>About Me</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    psfixed: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showActvView() {
      this.$emit('changeView', 'actv')
    },
    showAbutMeView() {
      this.$emit('changeView', 'abutme')
    },
    useClass(event) {
      if (this.psfixed === true) {
        return 'position:fixed; margin-top:100px;'
      } else {
        return ''
      }
    }
  }
}
</script>
<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  height: 180px;
  width: 245px;
}
.prof-fixed {
  align-items: center;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
}
.profe {
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
