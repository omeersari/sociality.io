<template>
  <div role="feed">
    <div class="header">
      <div class="statusBar">
        <ul>
          <li><span class="circle gray"></span> Published</li>
          <li><span class="circle green"></span>Scheduled</li>
          <li><span class="circle orange"></span>Need Aproval</li>
          <li><span class="circle red"></span>Error</li>
          <li><span class="circle blue"></span>Notes</li>
        </ul>
      </div>
      <div class="thumbnail">
        <img src="~/assets/images/profile.jpeg" alt="" />
      </div>
    </div>
    <div class="mainSection">
      <feedSection v-for="date in dates" :key="date.id" :date="date" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import json from '../static/data.json'
export default {
  data() {
    return {
      myJson: json.posts_by_date,
      dates: [],
    }
  },
  created() {
    this.getData(this.myJson)
    this.dates = Object.keys(this.myJson)
    this.dates.sort(function (a, b) {
      return new Date(b) - new Date(a)
    })
  },
  methods: {
    ...mapActions(['getData']),
  },
}
</script>
