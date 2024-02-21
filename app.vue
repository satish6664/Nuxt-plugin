<template>
  <div>
    <NuxtPage />
    
    <h2>Hii</h2>
  </div>
  <button  @click="Method"> click </button>
</template>
<script>
import { defineComponent} from 'vue';
export default defineComponent({
  methods:{
    Method(){
      this.$timeLogger.great();
    }
  }
})
</script>

