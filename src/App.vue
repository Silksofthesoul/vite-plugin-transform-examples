<template>
  <h1>test app</h1>
  <p>Amet atque officiis molestias facere quia. Rerum dignissimos amet assumenda perspiciatis adipisci voluptates libero, molestias obcaecati fuga voluptates Fugiat ipsa temporibus amet adipisci consequuntur! Voluptate dolorem quis eius accusamus nulla8</p>
  <span>replace-example: {%replace-example%}</span>
  <pre>@npm: {%resolve_alias key="@npm" %} </pre>
  <pre>@npm with params: {%resolve_alias key="@npm" path="dfrgasdfa/asdfasdf\asdfasf" %} </pre>

  <strong>xml:</strong>
  <pre>{{xml}}</pre>

  <strong>json:</strong>
  <pre>{{json}}</pre>
</template>

<script>
import xml from '@root/public/data.xml';
import json from '@root/public/data.json';
console.log('imported: ', xml, json);
export default {
  name: 'App',
  data() {
    return { xml, json };
  },
  created() {
    console.log('created: ', xml, json);
  }
};
</script>

<style lang="less" module> </style>
