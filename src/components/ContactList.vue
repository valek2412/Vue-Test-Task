<template>
  <div class="container">
    <div class="contact-list">
      <div
        class="contact-list__item"
        v-for="contact in contacts"
        :key="contact.get('id')"
      >
        <div class="contact-list__link">
          <router-link
            :to="{
              name: 'contactDetail',
              params: { contactId: contact.get('id') }
            }"
          >
            Name: {{ contact.get("contactName") }}
          </router-link>
        </div>
        <div class="contact-list__description">
          <span>Phone: {{ contact.get("phoneNumber") }}</span>
        </div>
        <button @click="deleteContact(contact.get('id'))">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ContactList',
  setup() {
    const store = useStore();
    const contacts = computed(() => store.state.contacts);
    const deleteContact = (id) => store.commit('deleteContact', id);
    return { contacts, deleteContact };
  },
};
</script>

<style scoped>
.container {
  padding: 5px;
}
.contact-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-list__item {
  padding: 10px;
}
</style>
