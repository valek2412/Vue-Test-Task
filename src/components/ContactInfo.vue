<template>
    <div class="container">
        <div class="field" v-for="item in getContactById(contactId)" :key="item[0]">
            <div>
                <div class="title">{{item[0]}}:</div>
                <div class="value">{{item[1]}}</div>
            </div>
            <div
                    class="buttons"
                    v-if="
                    item[0] !== 'id'
                    && item[0] !== 'contactName'
                    && item[0] !== 'phoneNumber'">
                <button @click="removeField({id: contactId, key: item[0]})">
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
    const { params: { contactId } } = useRoute();
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

</style>
