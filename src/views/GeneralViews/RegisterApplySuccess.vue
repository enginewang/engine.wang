<template>
  <div>
    <!-- Header -->
    <div class="header gradient py-6 py-lg-9 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="6" class="px-5">
              <h1 class="text-white"> 您已经成功报名！</h1>
              <p style="margin-top: 1rem" class="text-lead text-white">请耐心等待人工审核，如果48小时内没收到反馈邮件请联系管理员</p>
            </b-col>

          </b-row>
          <b-row class="justify-content-center">
            <base-button type="danger" style="margin-top: 1rem" @click="toHome">返回主界面</base-button>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid text-center">
          <b-col md="12">
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

export default {
  name: 'not-found',
  methods: {
    toHome() {
      this.$router.push("/home")
    }
  }
};


</script>

<style scoped>
.gradient {
  /* 设置容器尺寸 - 原理1 */
  /*width: 400px;*/
  height: 400px;
  /* 背景渐变色 - 原理2 */
  background: linear-gradient(-45deg, #2dce89, #66A853);
  /* 背景尺寸 - 原理3 */
  background-size: 600% 600%;
  animation: gradientBG 5s ease infinite;
}

/* 动画，控制背景 background-position */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
