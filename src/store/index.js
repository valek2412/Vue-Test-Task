import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: [],
  },
  mutations: {
    addContact: (state, newContact) => {
      const contact = new Map();
      contact.set('id', Date.now().toString());
      contact.set('contactName', newContact.contactName);
      contact.set('phoneNumber', newContact.phoneNumber);
      state.contacts.push(contact);
    },
    deleteContact: (state, id) => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Are you sure?')) {
        const index = state.contacts.findIndex((item) => item.get(id) === id);
        state.contacts.splice(index, 1);
      }
    },
    setField: (state, payload) => {
      const index = state.contacts.findIndex((item) => item.get('id') === payload.id);
      if (payload.key === 'id') return;
      if (state.contacts[index].has(payload.key)) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Do you want to overwrite the field ${payload.key}?`)) state.contacts[index].set(payload.key, payload.value);
      } else state.contacts[index].set(payload.key, payload.value);
    },
    removeField: (state, payload) => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Are you sure?')) {
        const index = state.contacts.findIndex((item) => item.get('id') === payload.id);
        state.contacts[index].delete(payload.key);
      }
    },
  },
  getters: {
    getContactById: (state) => (id) => state.contacts.find((item) => item.get('id') === id),
  },
});
