<template>
    <div class="container">
        <AddFieldForm/>
        <ContactInfo/>
    </div>
</template>

<script>
import ContactInfo from '../components/ContactInfo.vue';
import AddFieldForm from '../components/AddFieldForm.vue';

export default {
  name: 'Contact',
  components: {
    AddFieldForm,
    ContactInfo,
  },
};
</script>

<style scoped>

</style>
