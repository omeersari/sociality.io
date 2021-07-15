<template>
  <div class="card">
    <div class="status" :class="statusObj[status]">
      <span v-html="channelObj[channel]"></span>
    </div>
    <div class="cardBody">
      <div class="cardHeader">
        <div class="cardDate">
          {{ $dateFns.format(card.created_at, 'dd MMMM yyyy hh:mm') }}
        </div>
        <div class="actions">
          <i v-if="status == 1" class="fas fa-ban"></i>
          <i v-if="status == 0" class="fas fa-check"></i>
          <i class="far fa-trash-alt"></i>
          <i class="far fa-comment-dots"></i>
        </div>
      </div>
      <div class="content">
        <div class="description" v-html="description"></div>
        <div class="card-thumbnail">
          <img
            :src="cardImage"
            alt=""
            @error="$event.target.src = require('~/assets/images/error.jpeg')"
          />
        </div>
        <div v-if="channel != 'twitter'" class="statistics">
          <i class="far fa-thumbs-up">
            <span> {{ status == 3 ? 124 : 0 }}</span>
          </i>
          <i class="far fa-comment-alt"
            ><span>{{ status == 3 ? 63 : 0 }}</span></i
          >
          <i class="fas fa-share-alt"
            ><span>{{ status == 3 ? 4 : 0 }}</span></i
          >
          <i class="far fa-eye"
            ><span>{{ status == 3 ? 1426 : 0 }}</span></i
          >
        </div>
        <div v-else class="statistics">
          <i class="far fa-heart"
            ><span>{{ status == 3 ? 124 : 0 }}</span></i
          >
          <i class="fas fa-retweet"
            ><span>{{ status == 3 ? 63 : 0 }}</span></i
          >
          <i class="far fa-comment-alt"
            ><span>{{ status == 3 ? 4 : 0 }}</span></i
          >
          <i class="far fa-eye"
            ><span>{{ status == 3 ? 1426 : 0 }}</span></i
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statusObj: {
        0: 'orange',
        1: 'green',
        2: 'Publishing',
        3: 'gray',
        4: 'red',
      },
      channelObj: {
        twitter: '<i class="fab fa-twitter"></i>',
        facebook: '<i class="fab fa-facebook-f"></i>',
        youtube: '<i class="fab fa-youtube"></i>',
        instagrambusiness: '<i class="fab fa-instagram"></i>',
      },
    }
  },
  computed: {
    description() {
      let des = this.card.entry.message
      let url = ''
      if (
        des.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
        )
      ) {
        url = des.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
        )
      }
      if (url) {
        des = des.replace(url, '')
        return `${des} <a href="${url[0]}" target="_blank"> ${url[0]} </a> `
      } else return des
    },
    updatedDate() {
      return this.card.updated_at
    },
    status() {
      return this.card.status
    },
    channel() {
      return this.card.account.channel
    },
    cardLink() {
      return this.card.account.link
    },
    cardImage() {
      return this.card.entry.image[0]
    },
    isPublished() {
      return this.card.is_published
    },
  },
  methods: {
    replacePath(event) {
      event.target.src = 'error.jpeg'
      console.log('error occured')
    },
  },
}
</script>
