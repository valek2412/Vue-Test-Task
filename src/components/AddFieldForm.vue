<template>
    <div class="formContainer">
        <form @submit.prevent='setField'>
            <h1>Add field</h1>
            <div>
                <div class="input">
                    <input type="text" placeholder="Key" v-model="form.key">
                </div>
                <div class="input">
                    <input type="text" placeholder="Value" v-model="form.value">
                </div>
            </div>
            <button type="submit">Set field</button>
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
    const { params: { contactId } } = useRoute();
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

</style>
