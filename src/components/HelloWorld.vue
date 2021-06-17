<template>
<div class="container is-max-desktop">
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

