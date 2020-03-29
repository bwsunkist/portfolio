<template>
  <v-app>
    <v-container center class="container">
      <v-row id="top" align-content="center">
        <v-col xl="4" lg="4" md="4" class="d-none d-md-flex">
          <prof
            :psfixed="true"
            style="margin-left:15px;"
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
          <v-card
            v-if="isShowActivities == 1"
            color="white"
            height="1200"
            :elevation="1"
          >
            <v-card-text class="text--primary">
              <div>{{ isShowActivities }}</div>
              <div>{{ mess }}</div>
              <div>Live in Hiroshima from 2018/11-.</div>
            </v-card-text>
          </v-card>
          <v-card v-else color="white" height="1200" :elevation="1"></v-card>
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

export default {
  components: {
    prof
  },
  data() {
    return {
      isShowActivities: 1,
      mess: 'no event'
    }
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
<style scoped></style>
