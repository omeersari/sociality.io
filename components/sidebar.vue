<template>
  <header>
    <div class="mobile-header">
      <div
        class="toggle-menu"
        :class="menuClicked ? 'change' : ''"
        @click="toggle"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="brand-name">
        <nuxt-link to="/">
          sociality<span style="font-weight: normal; color: #1f2226"
            >.io</span
          ></nuxt-link
        >
      </div>
      <div class="thumbnail-resp">
        <img src="~/assets/images/profile.jpeg" alt="" />
      </div>
    </div>
    <div :class="menuClicked ? 'showSidebar' : 'noShow'">
      <Menu @closeMenu="closeMenu" />
    </div>

    <div class="sidebar">
      <div class="header-logo">
        <nuxt-link to="/">
          sociality<span style="font-weight: normal; color: #1f2226"
            >.io</span
          ></nuxt-link
        >
      </div>
      <Menu />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuClicked: false,
    }
  },
  methods: {
    toggle() {
      this.menuClicked = !this.menuClicked
    },
    closeMenu(val) {
      this.menuClicked = val
    },
  },
}
</script>
