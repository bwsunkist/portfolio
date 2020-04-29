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
        <i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i>
      </span>
      Qiita
    </v-card-title>
    <v-card-text class="text--primary">
      <div v-for="(item, id) in qitems" :key="id" class="qiitarecord">
        <div class="qiitadate">
          {{ item.created_at.substr(0, 10) }}
        </div>
        <div class="qiitatitle">
          <a :href="item.url">
            {{ item.title }}
          </a>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      test: 'test text',
      items: [
        { title: 'aaa', url: 'aaa' },
        { title: 'bbb', url: 'bbb' }
      ]
    }
  },
  computed: {
    ...mapState('qiita', ['qitems', 'qitemsex'])
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
</style>
