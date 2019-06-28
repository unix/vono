<template>
  <div>
    <p>It's amazing ? <a target="_blank" href="https://github.com/WittBulter/v-decorators">Learn more decorators</a>.</p>
    <zi-button @click="send">send error request</zi-button>
  </div>
</template>

<script>
import { Decorators } from 'v-decorators'

export default {
  data: () => ({
    message: '',
  }),

  methods: {
    @Decorators.AutoCatch()
    async send() {
      await fetch('https://unknow.com')
    },
  },
}
</script>
