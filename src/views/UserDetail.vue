<template>
  <v-card
          class="mx-auto"
          max-width="344"
  >
    <v-card-text>
      <div class="text--primary">
        Адрес: {{storeLoadUsers.address.city}}, {{storeLoadUsers.address.street}}, {{storeLoadUsers.address.suite}}
      </div>
      <div class="text--primary">
        Компания: {{storeLoadUsers.company.name}}
      </div>
      <div class="text--primary">
        Эл. почта: {{storeLoadUsers.email}}
      </div>
      <div class="text--primary">
        Имя: {{storeLoadUsers.name}}
      </div>
      <div class="text--primary">
        Телефон: {{storeLoadUsers.phone}}
      </div>
      <div class="text--primary">
        Имя пользователя: {{storeLoadUsers.username}}
      </div>
      <div class="text--primary">
        Сайт: {{storeLoadUsers.website}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
              text
              color="deep-purple accent-4"
              v-on:click = "goBack()"
      >
        Назад
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'user',
    mounted() {
      if (this.$store.state.users.length === 0) {
        this.$router.push({ name: 'UserList'})
      }
    },
    computed: {
      storeLoadUsers() {
        return this.$store.getters.allUsers.filter(
                user => user.id === this.$route.params.userId
        )[0]
      }
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'UserList'})
      }
    }
  }
</script>
