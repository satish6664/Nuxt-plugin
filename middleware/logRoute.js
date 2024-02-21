export default defineNuxtMiddleware(({to}) => {
  console.log('Navigating to ${to.path}');
});
    