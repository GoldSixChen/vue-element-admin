<template>
  <div class="hello">
    <h1 class="test">{{ msg }}</h1>
    <div :class="[
    {
      'hovered': hoverStatus
    },
    'tag']"
         @mouseenter="hoverStatus = true"
         @mouseleave="hoverStatus = false"> hover change me color</div>
    <div @click="handleChange">点击change</div>
    <p v-if="clickStatus">现在你看到我了</p>

    <div @click="handleChange">to page2</div>

    <div @click="goToPage3">to page3</div>

    <div @click="goToPage4">to page4</div>

    <div>-------Counter -----</div>
    <!-- <Counter num="1" />
    <Counter num="1" />
    <Counter num="1" />
    <Counter num="1" />
    <Counter num="1" />
    <Counter num="1" />
    <Counter num="1" /> -->
    <input v-model="inputValue" />
    {{ inputValue }}
    <!-- <CounterComponent /> -->
    <!-- <counter-component /> -->

    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
  </div>
</template>

<script>
import Counter from './Counter'
import CounterComponent from './CounterComponent.vue'

export default {
  components: {
    Counter,
    'counter-component': CounterComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hoverStatus: false,
      clickStatus: false,
      inputValue: '',
      message: 'Hello'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    inputValue: function (newVal, oldVal) {
      console.log('oldVal, newVal', oldVal, newVal)
      this.message = newVal
    }
  },
  methods: {
    handleChange () {
      // this.clickStatus = !this.clickStatus
      this.$router.push({
        name: 'Page2',
        params: {
          param1: 'params 1 from page1'
        },
        query: {
          param2: 'params 2 from page1'
        }
      })
      // window.open('/#/page2', '_self')
    },
    // handleChange: function (msg) {
    //   this.clickStatus = !this.clickStatus
    //   console.log('msg: ', msg)
    // }
    goToPage3 () {
      this.$router.push({
        name: 'Page3',
        params: {
          id: 'aaaa'
        }
      })
    },
    goToPage4 () {
      this.$router.push({
        name: 'Page4'
      })
    },
    handleInputChange (event) {
      console.log(event.target.value)
      this.inputValue = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag {
  color: #222;
}

.tag.hovered {
  color: red;
}
h1,
h2 {
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
