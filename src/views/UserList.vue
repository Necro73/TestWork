<template>
  <v-card
          class="mx-auto"
          max-width="600"
          tile
  >
    <v-list shaped>
      <v-subheader>СПИСОК ПОЛЬЗОВАТЕЛЕЙ</v-subheader>
      <v-list-item-group
              v-model="selectedItem"
              color="primary"
      >
        <v-list-item
                v-for="(item, i) in storeLoadUsers"
                :key="i"
                v-on:click = "openCard(item.id)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.username"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'users',
    data: () => ({
      selectedItem: null,
    }),
    mounted() {
      this.$store.dispatch("fetchUsers")

    },
    computed: {
      storeLoadUsers() {
        return this.$store.getters.allUsers
      }
    },
    methods: {
      openCard(id) {
        this.$router.push({ name: 'UserDetail', params: { userId: id }})
      }
    }
  }
</script>