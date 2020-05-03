<template>
  <v-app>
    <v-container center class="container">
      <v-row id="top" align-content="center">
        <v-col xl="4" lg="4" md="4" class="d-none d-md-flex">
          <vue-typed-js
            :strings="[
              'Hello,\nThis is My Portforio.',
              'Hello,\nThis is My Portfo',
              'Hello,\nThis is My Portfolio!'
            ]"
            :type-speed="100"
            :back-speed="100"
            :start-delay="100"
            :show-cursor="false"
            class="typed"
            style="white-space: pre"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
          <prof
            :psfixed="true"
            style="margin-left:40px;"
            @changeView="updateView"
          />
          <a href="https://github.com/bwsunkist" class="gitlink">
            <span class="fa-stack">
              <i class="fab fa-github fa-2x" style="color:#FFF"></i>
            </span>
          </a>
          <a href="https://twitter.com/BlueWhite_m" class="twlink">
            <span class="fa-stack">
              <i class="fab fa-twitter-square fa-2x" style="color:#FFF"></i>
            </span>
          </a>
        </v-col>
        <v-col :cols="12" class="d-md-none d-lg-none d-xl-none">
          <prof :psfixed="false" @changeView="updateView" />
          <a href="https://github.com/bwsunkist" class="gitlink-s">
            <span class="fa-stack">
              <i class="fab fa-github fa-2x" style="color:#FFF"></i>
            </span>
          </a>
          <a href="https://twitter.com/BlueWhite_m" class="twlink-s">
            <span class="fa-stack">
              <i class="fab fa-twitter-square fa-2x" style="color:#FFF"></i>
            </span>
          </a>
        </v-col>
        <v-col
          :cols="12"
          xl="8"
          lg="8"
          md="8"
          sm="10"
          :elevation="1"
          style="margin: auto"
        >
          <v-sheet
            v-if="isShowActivities == 1"
            height="auto"
            color="teal lighten-4"
            :elevation="1"
          >
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <git />
                </v-col>
                <v-col cols="12">
                  <qi />
                </v-col>
                <v-col cols="12">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="12">
                  <sb />
                </v-col>
                <v-col cols="12">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="12">
                  <ac />
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
          <v-sheet v-else color="teal lighten-4" height="auto" :elevation="1">
            <abtm />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <div class="navi-btn1">
      <v-btn
        v-scroll-to="'#top'"
        fixed
        left
        bottom
        small
        fab
        :elevation="25"
        style="z-index:999"
      >
        <v-icon light>mdi-chevron-up</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>
<script>
import prof from '~/components/Prof.vue'
import qi from '~/components/Qiitacard.vue'
import sb from '~/components/Scrapboxcard.vue'
import ac from '~/components/Atcodercard.vue'
import git from '~/components/Gitcard.vue'
import abtm from '~/components/Aboutme.vue'

export default {
  components: {
    prof,
    qi,
    sb,
    ac,
    git,
    abtm
  },
  data() {
    return {
      isShowActivities: 1,
      mess: 'no event'
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('qiita/getqiitapost')
    // await store.dispatch('scrapbox/getscrapboxpost')
    await store.dispatch('atcoder/getatcoderpost')
    await store.dispatch('git/getgitpost')
  },
  methods: {
    updateView(newView) {
      if (newView === 'actv') {
        this.isShowActivities = 1
        this.mess = 'show actv'
      } else {
        this.isShowActivities = 0
        this.mess = 'show abutme'
      }
    },
    setShowActivities(event) {
      this.isShowActivities = 1
    },
    setShowAboutMe(event) {
      this.isShowActivities = 0
    }
  }
}
</script>
<style scoped>
.typed {
  align-items: center;
  margin-top: 5px;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
  color: white;
  font-size: 14px;
}
.gitlink {
  align-items: center;
  margin-top: 470px;
  margin-right: auto;
  margin-left: 180px;
  position: fixed;
  color: white;
  font-size: 22px;
}
.twlink {
  align-items: center;
  margin-top: 470px;
  margin-right: auto;
  margin-left: 240px;
  position: fixed;
  color: white;
  font-size: 22px;
}
.gitlink-s {
  display: inline-block;
  align-items: center;
  margin-right: auto;
  margin-left: 180px;
  color: white;
  font-size: 22px;
}
.twlink-s {
  display: inline-block;
  align-items: center;
  margin-right: auto;
  color: white;
  font-size: 22px;
}
</style>
