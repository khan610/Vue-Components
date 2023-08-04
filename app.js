const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'julie',
          name: 'Julie Khan',
          phone: '9334 39493 394',
          email: 'julie@khgangmail.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
          <h2>{{ friend.name}}</h2>
          <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '030493 30403 4039',
        email: 'manuel@sdsdgmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
