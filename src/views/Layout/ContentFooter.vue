<template>
  <footer class="footer">
    <b-row align-v="center">
      <b-col lg="12">
        <div class="copyright text-center text-muted">
          Copyright © {{year}} <a style="color: #6f8ff8" href="https://engine.wang" class="font-weight-bold ml-1" target="_blank">engine的导航页</a>
        </div>
        <div class="copyright text-center text-muted py-1">
          All Rights Reserved.  <a style="color: #c5dbef" href="http://beian.miit.gov.cn/" class="text-muted">沪ICP备2020038034号-3</a>
        </div>
      </b-col>
<!--      <b-col lg="6">-->
<!--        <b-nav align="center" class="nav-footer justify-content-lg-end">-->
<!--          <b-nav-item href="http://127.0.0.1:8080"  target="_blank">-->
<!--            engine导航-->
<!--          </b-nav-item>-->
<!--          <b-nav-item href="http://127.0.0.1:8080/presentation" target="_blank">-->
<!--           About Us-->
<!--          </b-nav-item>-->
<!--          <b-nav-item href="http://blog.creative-tim.com" target="_blank">-->
<!--            Blog-->
<!--          </b-nav-item>-->
<!--          <b-nav-item href="http://127.0.0.1:8080/license" target="_blank">-->
<!--            License-->
<!--          </b-nav-item>-->
<!--        </b-nav>-->
<!--      </b-col>-->
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>

</style>
