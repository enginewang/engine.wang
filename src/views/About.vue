<template>
  <div class="typing-text">
    <span v-for="(char, index) in displayText" :key="index" :class="{ 'show': charVisible[index] }">{{ char }}</span>
  </div>
</template>

<script>
export default {
  name: 'TypingText',
  data() {
    return {
      text: 'Hello, World!',
      displayText: '',
      charVisible: [],
      currentIndex: 0,
    };
  },
  mounted() {
    this.charVisible = new Array(this.text.length).fill(false);
    setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.displayText += this.text.charAt(this.currentIndex);
        this.charVisible.splice(this.currentIndex, 1, true);
        this.currentIndex++;
      }
    }, 100); // 每隔 100 毫秒添加一个字符
  },
};
</script>

<style scoped>
.typing-text {
  font-size: 2rem;
}
.typing-text .show {
  animation: typing 1s linear forwards;
}

@keyframes typing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
