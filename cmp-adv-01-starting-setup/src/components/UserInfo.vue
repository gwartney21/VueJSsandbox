<template>
  <section>
    <base-card>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:default>
    <p>{{ infoText }}</p>
    </template>
    </base-card>
  </section>
</template>
<script>
import baseCard from './baseCard.vue';
export default {
  components: { baseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>

