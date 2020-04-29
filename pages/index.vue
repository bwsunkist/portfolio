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
        </v-col>
        <v-col :cols="12" class="d-md-none d-lg-none d-xl-none">
          <prof :psfixed="false" @changeView="updateView" />
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
            height="1200"
            color="teal lighten-4"
            :elevation="1"
          >
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <qi :qitems="qitems" />
                </v-col>
                <v-col cols="12">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="12">
                  <v-card
                    width="90%"
                    height="200"
                    :elevation="1"
                    style="margin:auto; font-size:10px;"
                  >
                    <v-card-text class="text--primary">
                      <div style="font-size:20px;">
                        Live in Hiroshima from 2018/11-.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
          <v-sheet v-else color="white" height="1200" :elevation="1"></v-sheet>
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

export default {
  components: {
    prof,
    qi
  },
  data() {
    return {
      isShowActivities: 1,
      mess: 'no event',
      qitems: []
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('qiita/getqiitapost')
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
</style>
