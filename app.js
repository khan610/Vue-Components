const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '030493 30403 4039',
          email: 'manuel@sdsdgmail.com',
        },
        {
          id: 'julie',
          name: 'Julie Khan',
          phone: '9334 39493 394',
          email: 'julie@khgangmail.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
