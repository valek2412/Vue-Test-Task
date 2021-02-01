<template>
  <div class="contact-info">
    <div
      class="contact-info__item"
      v-for="item in getContactById(contactId)"
      :key="item[0]"
    >
      <div class="contact-info__field">
        <span>{{ item[0] }}: {{ item[1] }}</span>
      </div>
      <div
        class="contact-info__button"
        v-if="
          item[0] !== 'id' &&
            item[0] !== 'contactName' &&
            item[0] !== 'phoneNumber'
        "
      >
        <button @click="removeField({ id: contactId, key: item[0] })">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore, mapGetters, mapMutations } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'ContactInfo',
  setup() {
    const {
      params: { contactId },
    } = useRoute();
    const store = useStore();

    return { contactId, store };
  },
  computed: {
    ...mapGetters(['getContactById']),
  },
  methods: {
    ...mapMutations(['removeField']),
  },
};
</script>

<style scoped>
.contact-info__item {
  padding: 10px;
}
</style>
