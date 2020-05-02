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
        <i class="far fa-square fa-stack-2x" style="color:#4cb10d"></i>
        <i class="fab fa-stripe-s fa-stack-1x" style="color:#4cb10d"></i>
      </span>
      Scrapbox
    </v-card-title>
    <v-card-text class="text--primary">
      <div v-for="(item, id) in qitems" :key="id" class="qiitarecord">
        <div class="qiitadate">
          {{ item.created_at }}
        </div>
        <div class="qiitatitle">
          <a :href="item.url">
            {{ item.title }}
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
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      qitems: [
        {
          created_at: '随時更新',
          title: '自主学習ログ・メモ一覧',
          url: 'https://scrapbox.io/itall/'
        },
        {
          created_at: '随時更新',
          title: '書籍ログ',
          url: 'https://scrapbox.io/itall/%E6%9B%B8%E7%B1%8D'
        }
      ],
      homeurl: 'https://scrapbox.io/itall/'
    }
  },
  computed: {
    ...mapState('scrapbox', ['sbitems'])
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
</style>
