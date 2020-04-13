<template>
  <v-card
    width="90%"
    height="200"
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
      <div>
        <div class="qiitadate">
          2020-3-30
        </div>
        <div class="qiitatitle">
          <a href="https://qiita.com/MasahiroBW/items/46bd48d0c4c8956d8665">
            [Vuetify]theme利用時の背景色を変更する
          </a>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {}
</script>
<style scoped>
.qiitadate {
  font-size: 15px;
  display: inline;
  margin-right: 5px;
}
.qiitatitle {
  font-size: 20px;
  display: inline;
}
</style>
