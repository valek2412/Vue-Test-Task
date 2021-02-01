<template>
    <div class="container">
        <div class="contactList">
            <div class="contactItem" v-for="contact in contacts" :key="contact.get('id')">
                <router-link
                        :to="{ name: 'contactDetail', params: { contactId: contact.get('id') }}">
                    <h2>{{contact.get('contactName')}}</h2>
                </router-link>
                <span>{{contact.get('phoneNumber')}}</span>
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

</style>
