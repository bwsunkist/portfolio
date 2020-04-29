<template>
  <v-card
    height="370"
    width="250"
    :elevation="0"
    app
    :style="useClass()"
    class="profe"
    flat
    color="teal darken-4"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/prof.jpg')"
    ></v-img>
    <v-card-title class="cardtitle">bwsunkist</v-card-title>
    <v-card-text class="text--primary">
      <div class="cardtext">Software Engineer</div>
      <div class="cardtext">Now live in Hiroshima.</div>
    </v-card-text>
    <v-card-actions>
      <div @click="showActvView">
        <v-btn color="white" text :style="selectActvStyle()">Activities</v-btn>
      </div>
      <div @click="showAbutMeView">
        <v-btn color="white" text :style="selectAbutmStyle()">About Me</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    psfixed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShowActivities: 1
    }
  },
  methods: {
    showActvView() {
      this.$emit('changeView', 'actv')
      this.isShowActivities = 1
    },
    showAbutMeView() {
      this.$emit('changeView', 'abutme')
      this.isShowActivities = 0
    },
    useClass(event) {
      if (this.psfixed === true) {
        return 'position:fixed; margin-top:100px;'
      } else {
        return ''
      }
    },
    selectActvStyle(event) {
      if (this.isShowActivities === 1) {
        return 'border-style: solid; border-color: white;'
      } else {
        return 'border-style: solid; border-color: #004D40;'
      }
    },
    selectAbutmStyle(event) {
      if (this.isShowActivities === 0) {
        return 'border-style: solid; border-color: white;'
      } else {
        return 'border-style: solid; border-color: #004D40;'
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
.cardtitle {
  color: white;
  padding: 7px;
}
.cardtext {
  color: white;
}
</style>
