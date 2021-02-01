<template>
    <div class="formContainer">
        <form @submit.prevent='addContact'>
            <h1>Add user</h1>
            <div>
                <div class="input">
                    <input type="text" placeholder="Name" v-model="form.contactName">
                </div>
                <div class="input">
                    <input type="text" placeholder="Phone" v-model="form.phoneNumber">
                </div>
            </div>
            <button type="submit">Add contact</button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AddContactForm',
  setup() {
    const store = useStore();
    const form = reactive({
      contactName: '',
      phoneNumber: '',
    });

    const addContact = () => store.commit('addContact', form);

    return { form, addContact };
  },
};
</script>

<style scoped>

</style>
