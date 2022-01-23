<template>
  <div class="hello">
    <h1 class="test">Page2</h1>
  </div>
</template>

<script>
export default {
  props: {
    param1: {type: String, default: ''}
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hoverStatus: false,
      clickStatus: false
    }
  },
  created () {
    console.log('params from props', this.$props)
    console.log('query from url:', window.location.search)
  },
  methods: {
    // handleChange () {
    //   this.clickStatus = !this.clickStatus
    // }
    handleChange: function (msg) {
      this.clickStatus = !this.clickStatus
      console.log('msg: ', msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag {
  color: #222
}

.tag.hovered {
  color: red;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
