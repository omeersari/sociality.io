export const state = () => ({
  brands: {
    firstBrand: {
      logo: 'logo.jpeg',
      active: false,
    },
    secondBrand: {
      logo: 'logo1.png',
      active: false,
      notification: 99,
    },
    thirdBrand: {
      logo: 'logo2.jpeg',
      active: false,
    },
    fourthBrand: {
      logo: 'logo3.png',
      active: true,
    },
    fifthBrand: {
      logo: 'logo4.jpeg',
      active: false,
    },
    sixthBrand: {
      logo: 'logo5.png',
      active: false,
    },
  },
  data: null,
})

export const mutations = {
  GET_DATA(state, payload) {
    state.data = payload
  },
}

export const actions = {
  getData: ({ commit, state }, data) => {
    commit('GET_DATA', data)
  },
}
