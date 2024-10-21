import { defineStore } from "pinia";

export const useShowComponentsSlideStore = defineStore('showComponentsSlide', {
  state: () => ({
    show: false
  }),
  actions: {
    showSlide(){
      this.show = true;
    },
    hideSlide(){
      this.show = false;
    }
  }
})
