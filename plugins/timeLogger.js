export default defineNuxtPlugin(( nuxtApp ) => {
  nuxtApp.provide('timeLogger', {
    great(){
  console.log('Hello')}
    });
  });
  