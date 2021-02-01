<template>
  <div class="container">
    <form class="add-form" @submit.prevent="addContact">
      <div class="add-form__header">
        <h3>Add user</h3>
      </div>
      <div class="add-form__fields">
        <input
          class="add-form__input"
          type="text"
          placeholder="Name"
          v-model="form.contactName"
        />
        <input
          class="add-form__input"
          type="text"
          placeholder="Phone"
          v-model="form.phoneNumber"
        />
      </div>
      <div class="add-form__button">
        <button
          type="submit"
          v-bind:disabled="!form.contactName || !form.phoneNumber"
        >
          Add contact
        </button>
      </div>
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

    const addContact = () => {
      store.commit('addContact', form);
      form.contactName = '';
      form.phoneNumber = '';
    };

    return { form, addContact };
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
}
.add-form__header {
  padding: 5px;
}
.add-form__fields {
  padding: 5px;
}
.add-form__input {
  padding: 5px;
}
.add-form__button {
  padding: 5px;
}
.add-form__button button {
  padding: 5px;
}
</style>
