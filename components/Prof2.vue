<template>
  <v-card height="200" width="250" class="prof" :elevation="1" app>
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="require('@/assets/prof.jpg')"
    ></v-img>
    <v-card-title class="pb-0">Name: bwsunkist</v-card-title>
    <v-card-text class="text--primary">
      <div>Live in Hirosima from 2019/11-</div>
      <div></div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text>Share</v-btn>
      <v-btn color="orange" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  height: 180px;
  width: 245px;
}
.prof {
  align-items: center;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
}
</style>
