<template>
  <div class="wrapper">
    <notifications></notifications>
<!--    <side-bar>-->
<!--      <template slot="links">-->
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: '管理中心',-->
<!--            icon: 'ni ni-laptop text-primary',-->
<!--            path: '/admin/dashboard'-->
<!--          }"-->
<!--        >-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: '用户审核',-->
<!--            icon: 'ni ni-single-02 text-red',-->
<!--            path: '/admin/auditUser'-->
<!--          }">-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: '用户管理',-->
<!--            icon: 'ni ni-single-02 text-success',-->
<!--            path: '/admin/manageUser'-->
<!--          }">-->
<!--        </sidebar-item>-->
<!--      </template>-->
<!--    </side-bar>-->

    <div class="content">
      <admin-dashboard-navbar :type="$route.meta.navbarType"></admin-dashboard-navbar>
<!--      @click="$sidebar.displaySidebar(false)"-->
      <div>
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
    <content-footer class="footer" v-if="!$route.meta.hideFooter"></content-footer>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

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

  import AdminDashboardNavbar from './AdminDashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      AdminDashboardNavbar,
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
<style>
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
