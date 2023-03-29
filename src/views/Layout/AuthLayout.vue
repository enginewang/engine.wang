<template>
  <div class="wrapper">
    <div class="main-content">
      <notifications></notifications>
      <zoom-center-transition
          :duration="pageTransitionDuration"
          mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
      <content-footer style="background: transparent" v-if="!$route.meta.hideFooter"></content-footer>

      <!--    <footer class="py-3" id="footer-main">-->
      <!--      <b-container>-->
      <!--        <b-row align-v="center" class="justify-content-xl-between">-->
      <!--          <b-col xl="6">-->
      <!--            <div class="copyright text-center text-xl-left text-muted">-->
      <!--              © {{ year }} <a href="http://127.0.0.1:8080" class="font-weight-bold ml-1" target="_blank">engine导航</a>-->
      <!--            </div>-->
      <!--          </b-col>-->
      <!--          <b-col xl="6" class="col-xl-6">-->
      <!--            <b-nav class="nav-footer justify-content-center justify-content-xl-end">-->
      <!--            </b-nav>-->
      <!--          </b-col>-->
      <!--        </b-row>-->
      <!--      </b-container>-->
      <!--    </footer>-->
    </div>
  </div>
</template>
<script>
import {BaseNav} from '@/components';
import {ZoomCenterTransition} from 'vue2-transitions';
import ContentFooter from './ContentFooter.vue';

export default {
  components: {
    // BaseNav,
    ZoomCenterTransition,
    ContentFooter,
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: 'login-page'
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    }
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add('bg-default');
    },
    removeBackgroundColor() {
      document.body.classList.remove('bg-default');
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor()
      }
    }
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.updateBackground()
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

html,
body {
  height: 100%;
}

.wrapper {
  position: relative;
  box-sizing: border-box;
  height: 100%;
}

.wrapper .main-content {
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
