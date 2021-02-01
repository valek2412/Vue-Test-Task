import { createRouter, createWebHistory } from 'vue-router';
import Contacts from '../pages/Contacts.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/',
    redirect: '/contacts',
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/contacts/:contactId',
    name: 'contactDetail',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
