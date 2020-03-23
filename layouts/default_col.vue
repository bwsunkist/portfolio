<template>
  <v-app>
    <div class="navi-btn1">
      <v-btn text fixed>Normal1</v-btn>
    </div>
    <div class="navi-btn1">
      <v-btn text fixed left bottom>2Normal</v-btn>
    </div>
    <v-row>
      <v-col :cols="4">
        <prof />
        <v-card color="blue" outlined tile height="50"></v-card>
      </v-col>
      <v-col :cols="8">
        <v-card color="blue" outlined tile height="50"></v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import prof from '~/components/Prof.vue'

export default {
  components() {
    return {
      prof
    }
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.navi-btn1 {
  bottom: 0;
  left: 0;
}
</style>
