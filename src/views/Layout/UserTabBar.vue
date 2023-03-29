<template>
  <div style="z-index: 1000 !important;">
    <tab-bar style="z-index: 1000 !important; height: 62px">
      <tab-bar-item path="/userHome" activeColor="#5e72e4">
        <img slot="item-icon" src="@/assets/icon/home-0.png" alt="">
        <img slot="item-icon-active" src="@/assets/icon/home-1.png" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/publicPage" activeColor="#5e72e4">
        <img slot="item-icon" src="@/assets/icon/public-0.png" alt="">
        <img slot="item-icon-active" src="@/assets/icon/public-1.png" alt="">
        <div slot="item-text">公开</div>
      </tab-bar-item>
      <tab-bar-item path="/postPage" activeColor="#5e72e4">
        <img slot="item-icon" src="@/assets/icon/chat-0.png" alt="">
        <img slot="item-icon-active" src="@/assets/icon/chat-1.png" alt="">
        <div slot="item-text">论坛</div>
      </tab-bar-item>
      <tab-bar-item path="/userProfile" activeColor="#5e72e4">
        <img slot="item-icon" src="@/assets/icon/user-0.png" alt="">
        <img slot="item-icon-active" src="@/assets/icon/user-1.png" alt="">
<!--        <i slot="item-icon" class="fas fa-light fa-user"></i>-->
<!--        <i slot="item-icon-active" class="fas fa-duotone fa-user"></i>-->
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import TabBarItem from '@/components/TabBarItem'
export default {
  name: "UserTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>