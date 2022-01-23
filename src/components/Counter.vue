<template>
  <div>当前计数: {{ num }}</div>
</template>

<script>
export default {
  props: {
    num: {type: Number, default: 0}
  }
}
</script>
