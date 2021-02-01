<template>
  <div class="container">
    <form class="add-form" @submit.prevent="setField">
      <div class="add-form__header"><h3>Add field</h3></div>
      <div class="add-form__fields">
        <input
          class="add-form__input"
          type="text"
          placeholder="Key"
          v-model="form.key"
        />
        <input
          class="add-form__input"
          type="text"
          placeholder="Value"
          v-model="form.value"
        />
      </div>
      <div class="add-form__button">
        <button type="submit">Set field</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AddFieldForm',
  setup() {
    const store = useStore();
    const {
      params: { contactId },
    } = useRoute();
    const form = reactive({
      key: '',
      value: '',
    });

    const setField = () => store.commit('setField', { id: contactId, ...form });

    return { form, setField };
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
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
