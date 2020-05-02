<template>
  <v-card
    width="95%"
    height="auto"
    :elevation="1"
    style="margin:auto; font-size:10px;"
    color="white"
  >
    <v-card-title class="text--primary">
      <span class="fa-stack">
        <i class="far fa-square fa-stack-2x" style="color:#FFF  "></i>
        <i class="fab fa-github fa-stack-1x fa-2x" style="color:#4cb10d"></i>
      </span>
      Git
    </v-card-title>
    <v-card-text class="text--primary">
      <div v-for="(item, id) in gitems" :key="id" class="qiitarecord">
        <div class="qiitadate">
          {{ item.updated_at }}
        </div>
        <div class="qiitatitle">
          <a :href="item.html_url">
            {{ item.name }}
          </a>
        </div>
        <div class="descrp">description : {{ item.description }}</div>
      </div>
      <div class="moreInfo">
        <a :href="homeurl">
          <span class="fa-stack">
            <i class="fa fa-arrow-right"></i>
          </span>
          Show More
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
      homeurl: 'https://github.com/bwsunkist'
    }
  },
  computed: {
    ...mapState('git', ['gitems'])
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
.descrp {
  font-size: 15px;
  display: block;
  margin-left: 20px;
  margin-bottom: 5px;
}
</style>
