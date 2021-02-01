<template>
  <div class="container">
    <AddContactForm />
    <ContactList />
  </div>
</template>

<script>
import AddContactForm from '../components/AddContactForm.vue';
import ContactList from '../components/ContactList.vue';

export default {
  name: 'Contacts',
  components: {
    AddContactForm,
    ContactList,
  },
};
</script>

<style scoped></style>
