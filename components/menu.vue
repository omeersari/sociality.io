<template>
  <div class="menu">
    <div class="brands">
      <div
        v-for="item in brands"
        :key="item.id"
        class="brand-icon"
        :class="[activeElement === item ? 'active' : '']"
        @click="activateEl(item)"
      >
        <img
          :src="require(`~/assets/images/${item.logo}`)"
          :alt="item.logo"
          :class="[activeElement === item ? 'active' : '']"
        />
        <span v-if="item.notification" class="brand-not">{{
          item.notification
        }}</span>
      </div>
    </div>
    <div class="accordion">
      <ul>
        <li>
          <div class="menu-items">
            <span><i class="fas fa-bell left"></i> NOTIFICATIONS </span>
            <span class="notification">29</span>
          </div>
        </li>
        <li v-for="item in accordionMenu" :key="item.id">
          <div class="menu-items" :class="item.active ? 'subMenu' : ''">
            <span
              ><i :class="item.class" class="left"></i> {{ item.name }}</span
            >
            <i
              v-if="!item.active"
              class="fas fa-plus plus"
              @click="showSubMenu(item)"
            ></i>
            <i v-else class="fas fa-minus minus" @click="showSubMenu(item)"></i>
          </div>
          <template v-if="activeSubMenu">
            <ul
              v-for="subItems in item.subMenu"
              :key="subItems.id"
              class="activeSubMenu"
            >
              <li
                :class="[activeSubElement === subItems ? 'activeSubItem' : '']"
                @click="subItemActive(subItems)"
              >
                {{ subItems }}
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeElement: null,
      activeSubElement: 'Feed',
      activeSubMenu: true,
      menuClicked: false,
      accordionMenu: [
        {
          class: 'fas fa-chart-line',
          name: 'SUMMARY',
          active: false,
        },
        {
          class: 'fas fa-edit',
          name: 'PUBLISH',
          active: true,
          subMenu: ['Compose', 'Feed'],
        },
        {
          class: 'far fa-comments',
          name: 'ENGAGE',
          active: false,
        },
        {
          class: 'fas fa-sliders-h',
          name: 'LISTEN',
          active: false,
        },
        {
          class: 'fas fa-chart-area',
          name: 'REPORT',
          active: false,
        },
      ],
    }
  },
  computed: {
    brands() {
      return this.$store.state.brands
    },
  },
  created() {
    this.activeElement = this.$store.state.brands.fourthBrand
  },
  methods: {
    activateEl(brand) {
      this.activeElement = brand
    },
    subItemActive(subItem) {
      if (subItem === 'Feed') {
        this.$router.push('/feed')
      }
      this.activeSubElement = subItem
      this.$emit('closeMenu', false)
    },
    showSubMenu(item) {
      if (item.active) {
        item.active = false
      } else {
        this.accordionMenu.forEach((element) => {
          if (element !== item) {
            element.active = false
            this.activeSubMenu = false
          } else element.active = true
        })
      }
      if (item.subMenu) {
        this.activeSubElement = null
        this.activeSubMenu = !this.activeSubMenu
      }
    },
  },
}
</script>
