<template>
  <h1>test app</h1>
  <p>Amet atque officiis molestias facere quia. Rerum dignissimos amet assumenda perspiciatis adipisci voluptates libero, molestias obcaecati fuga voluptates Fugiat ipsa temporibus amet adipisci consequuntur! Voluptate dolorem quis eius accusamus nulla8</p>
  <span>{%rrr%}</span>
  <pre>{{d}}</pre>
</template>

<script>
import d from '@root/public/data.xml';
console.log('imported: ', d);
export default {
  name: 'App',
  data() {
    return { d };
  },
  created() {
    console.log('created: ', d);
  }
};
</script>

<style lang="less" module> </style>
