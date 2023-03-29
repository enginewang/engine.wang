<template>
  <div class="wrapper">
    <notifications></notifications>
    <div class="content">

<!--      <user-dashboard-navbar :type="$route.meta.navbarType"></user-dashboard-navbar>-->
<!--      @click="$sidebar.displaySidebar(false)"-->
      <div >
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <user-tab-bar></user-tab-bar>
      </div>
<!--      <content-footer class="footer" v-if="!$route.meta.hideFooter"></content-footer>-->
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';
  import UserTabBar from '@/views/Layout/UserTabBar'

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import UserDashboardNavbar from './UserDashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      UserTabBar,
      UserDashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style scoped>
html,
body {
  height: 100%;
}
.wrapper {
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
}
.wrapper .content {
  padding-bottom: 100px;
}

.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
}
</style>
