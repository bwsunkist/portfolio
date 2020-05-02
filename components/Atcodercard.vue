<template>
  <v-card
    width="95%"
    height="auto"
    :elevation="1"
    style="margin:auto; font-size:10px;"
    color="white"
  >
    <v-card-title class="text--primary">
      <span class="fa-stack" style="color:#4cb10d">
        <i class="fa fa-square fa-stack-2x"></i>
        <i class="fas fa-font fa-stack-1x fa-inverse"></i>
      </span>
      AtCoder (Submissions)
    </v-card-title>
    <v-card-text class="text--primary">
      <div v-for="(item, id) in acitems" :key="id" class="qiitarecord">
        <div class="qiitadate">
          {{ item.epoch_second }}
        </div>
        <div :class="item.result">
          {{ item.result }}
        </div>
        <div class="qiitatitle">
          <a :href="item.id">
            {{ item.problem_id }}
          </a>
        </div>
      </div>
      <div class="moreInfo">
        <a :href="homeurl">
          <span class="fa-stack">
            <i class="fa fa-arrow-right"></i>
          </span>
          Show More
        </a>
      </div>
      <div class="moreInfo">
        <a :href="infourl">
          <span class="fa-stack">
            <i class="fa fa-arrow-right"></i>
          </span>
          User Profile
        </a>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      homeurl:
        'https://kenkoooo.com/atcoder#/user/MasahiroBW?userPageTab=Submissions',
      infourl: 'https://atcoder.jp/users/MasahiroBW'
    }
  },
  computed: {
    ...mapState('atcoder', ['acitems'])
  }
}
</script>
<style scoped>
.qiitadate {
  font-size: 15px;
  display: inline;
  margin-right: 5px;
}
.qiitatitle {
  font-size: 18px;
  display: inline;
}
.qiitarecord {
  display: block;
  margin-bottom: 5px;
}
.moreInfo {
  font-size: 15px;
  text-align: right;
  margin-right: 20px;
}
.moreInfo a {
  color: black;
  text-decoration: none;
}
.WA,
.RE,
.CE {
  display: inline-block;
  width: 30px;
  text-align: center;
  background-color: orange;
  color: white;
  font-size: 18px;
  margin-right: 5px;
  margin-left: 3px;
}
.TLE {
  display: inline-block;
  width: 30px;
  text-align: center;
  background-color: orange;
  color: white;
  font-size: 15px;
  margin-right: 5px;
  margin-left: 3px;
}
.AC {
  display: inline-block;
  width: 30px;
  text-align: center;
  background-color: green;
  color: white;
  font-size: 18px;
  margin-right: 5px;
  margin-left: 3px;
}
</style>
