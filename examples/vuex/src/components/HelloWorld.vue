<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <p>{{first}}</p>
    <p>{{last}}</p>
    <p>{{newProperty}}</p>
    <p>{{newProperty2}}</p>

    <button @click="add">add</button>
    <button @click="set">set</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
  },
  computed: {
    ...mapGetters(['todo', 'newProperty', 'newProperty2']),
    msg() {
      return this.todo;
    },
    first() {
      return this.$store.getters.getBy(4);
    },
    last() {
      console.log('computed', 4);
      return this.todo.indexOf(4);
    },
  },
  methods: {
    ...mapGetters(['getBy']),
    ...mapActions(['add']),
    ...mapMutations(['set']),
  },
  created() {
    this.add();
  },
};
</script>
