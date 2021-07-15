<template>
  <div class="feedSection">
    <div class="date">
      {{ $dateFns.format(date, 'dd MMMM yyyy') }}
    </div>
    <div class="cards">
      <card v-for="card in data[date]" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: [],
    }
  },
  computed: {
    formattedDate() {
      return ''
    },
  },
  created() {
    console.log(this.formattedDate)
    this.data = this.$store.state.data
  },
}
</script>
