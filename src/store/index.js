import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    visitCount: 0,
  }),
  actions: {
    incrementVisitCount() {
      this.visitCount++;
    },
  },
});