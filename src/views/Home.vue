<template>
  <div>
    <!--Header-->
    <div class="header pt-5 pb-7 gradient">
      <b-container>
        <template>
          <div class="settings">
            <b-icon-gear-fill size="4rem" variant="white" @click="showModal"></b-icon-gear-fill>
            <b-modal v-model="modalVisible" title="设置">
              <div class="form-group">
                <div class="d-flex align-items-center">
                  <label class="setting-label" for="defaultEngine">默认搜索引擎</label>
                  <b-select id="defaultEngine" v-model="selectedEngine" class="flex-grow-1">
                    <option v-for="engine in engines" :value="engine">{{ engine.label }}</option>
                  </b-select>
                </div>
              </div>
              <div slot="modal-footer">
                <base-button type="secondary" @click="hideModal">取消</base-button>
                <base-button type="primary" @click="setDefaultEngine">保存</base-button>
              </div>
            </b-modal>
          </div>
        </template>

        <div class="header-body">
          <b-row align-v="center" style="margin-top: 3rem">
            <b-col></b-col>
            <b-col lg="8">
              <div class="pr-5" style="text-align: center">
<!--                <h1 style="display: inline" class="display-2 text-white font-weight-bold">engine的导航页-->
<!--                </h1>-->
                <!--                <badge rounded type="danger"-->
                <!--                       style="font-size: xx-small; display: inline; vertical-align: center; top: 0.5rem">-->
                <!--                  v1.0.0-->
                <!--                </badge>&nbsp;-->
              </div>
            </b-col>
            <b-col></b-col>
          </b-row>

          <b-row style="margin: 2rem 0">
            <b-col></b-col>
            <b-col md="12">
              <!--            <b-input-group>-->
              <!--              <b-form-input type=search v-model="search"-->
              <!--                            placeholder="搜索"></b-form-input>-->
              <!--            </b-input-group>-->

              <b-input-group class="search-group">
                <b-form-input @keyup.enter="searchContent" style="border: none;" type="search" v-model="search"
                              placeholder="想要搜索什么呢？"></b-form-input>
                <template #append>
                  <b-dropdown class="dropdown" no-caret>
                    <template #button-content class="search_btn">
                      <!--                      {{ selectedEngine.label }}-->
                      <!--                      <img style="width: 100%; height: 24px; display: block; margin: auto" alt="Image placeholder" :src=selectedEngine.img>-->

                      <img style="width: auto;height: 24px" alt="Image placeholder" :src=selectedEngine.img>

                    </template>
                    <b-dropdown-item v-for="engine in engines" :key="engine.id"
                                     @click="selectedEngine = engine">
                      <!--                      {{ engine.label }}-->
                      <img style="width: auto;height: 20px" alt="Image placeholder" :src=engine.img>
                    </b-dropdown-item>
                  </b-dropdown>
                  <base-button style="padding-left: 12px; padding-right: 12px"  @click="searchContent">
                    <i class="fa fa-search"></i>
                  </base-button>
                </template>
              </b-input-group>
            </b-col>
            <b-col></b-col>
          </b-row>

          <b-row>
            <b-col></b-col>
            <b-col lg="12">
              <div class="mt-5" style="text-align: left; margin-left: 20px;">
                <div class="typing-text text-white" style="font-size: medium; white-space: pre-wrap;">
                  <span v-for="(char, index) in displayText" :key="index">{{ char }}</span>
                </div>
              </div>
            </b-col>
            <b-col></b-col>
          </b-row>


        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="-10 -10 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>

    <!-- Page content -->
    <section class="py-6 pb-5 bg-default">

      <b-row style="padding-left: 1rem">
        <b-col lg="8">
          <div class="mt-5">
            <h3 style="display: inline;" class="text-white font-weight-bold">我的其他站点
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row style="margin-top: 1.5rem">
        <b-col xl="4" md="6" sm="12" v-for="(site, key) in mySiteList" :key=key>
          <div style="display: flex; flex-wrap: wrap;">
            <card style="flex-basis: 100%; max-width: 100%;">
              <!-- Card body -->
              <b-row align-v="center">
                <b-col class="col-4">
                  <!-- Avatar -->
                  <a :href="site.url" class="avatar avatar-xl" target="_blank">
                    <img :style="{ transform: `scale(${site.scale})` }" alt="Image placeholder" :src=site.avatar>
                  </a>
                </b-col>
                <b-col class="ml--2 col-8">
                  <h4 class="mb-0" style="font-weight: bolder">
                    <a :href="site.url" target="_blank">{{ site.name }}</a>
                  </h4>
                  <h5><a class="card-text" :href="site.url" target="_blank">{{ site.urlStr }}</a></h5>
                  <p class="text-sm text-muted mb-0 card-text">
                    {{ site.desc }}
                  </p>
                  <span v-if="site.isActive" class="text-success">● <small>Active</small></span>
                  <span v-else class="text-danger">● <small>维护中...</small></span>
                </b-col>
              </b-row>
            </card>
          </div>
        </b-col>
      </b-row>

      <div v-for="(cate, k1) in otherSiteJson" :key=k1>
        <b-row style="padding-left: 1rem">
          <b-col lg="8">
            <h3 style="display: inline;" class="text-white font-weight-bold">{{ cate.label }}
            </h3>
          </b-col>
        </b-row>
        <b-row style="margin-top: 1.5rem">
          <b-col xl="3" md="4" sm="6" v-for="(site, key) in cate.siteList" :key=key>
            <div style="display: flex; flex-wrap: wrap;">
              <card style="flex-basis: 100%; max-width: 100%;">
                <!-- Card body -->
                <b-row align-v="center">
                  <b-col col-8>
                    <!-- Avatar -->
                    <a style="width: 48px;height: 48px" :href="site.url" target="_blank" class="avatar avatar-xl">
                      <img :style="{ transform: `scale(${site.scale})` }" alt="Image placeholder" :src=site.avatar>
                    </a>
                  </b-col>
                  <b-col class="ml--2 col-8">
                    <h4 class="mb-0" style="font-weight: bold">
                      <a class="card-text" target="_blank" :href="site.url">{{ site.name }}</a>
                    </h4>
                    <small><a class="card-text" target="_blank" style="color: black" :href="site.url">{{
                        site.urlStr
                      }}</a></small>
                    <p class="text-sm text-muted mb-0 card-text">
                      {{ site.desc }}
                    </p>
                  </b-col>
                </b-row>
              </card>
            </div>
          </b-col>
        </b-row>
      </div>

    </section>
    <!--    <section class="py-7">-->
    <!--      <b-container>-->
    <!--        <b-row class="row-grid justify-content-center">-->
    <!--          <b-col lg="8" class="text-center">-->
    <!--            <h2 class="display-3">快来报名吧！</h2>-->
    <!--          </b-col>-->
    <!--        </b-row>-->
    <!--      </b-container>-->
    <!--    </section>-->
  </div>
</template>
<script>
// import {Tooltip} from 'element-ui'
import {Carousel, CarouselItem, Tag, Image} from 'element-ui'
import Badge from '@/components/Badge';
import axios from "axios";

export default {
  name: 'home-page',
  // components: {
  //   [Tooltip.name]: Tooltip
  // }
  components: {
    [Tag.name]: Tag,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Image.name]: Image,
    Badge,
  },
  data() {
    return {
      quote: [
        "码上行舟梦未醒，键中尽是心中情。",
        "码海茫茫舟渐行，数字长河浩无垠。",
        "程序如帆迎风起，键盘似桨划涟漪。",
        "远方代码难探幽，心中情感绕迷津。",
        "码字千秋气象新，代码犹如江海流。",
        "编程语言变万千，程序设计驭虎头。",
        "惟愿代码通万物，技艺精湛掌乾坤。",
        "数字世界纵横驰，编程之道走向盛。",
        "键盘敲击笔底磨，代码如诗写世间。",
        "白驹过隙光阴在，键盘前后码如山。",
        "白昼浑浊思精进，夜晚灯火正熹微。",
        "代码调试如钩陈，寻找bug心闷愁。",
        "终有突破方可见，喜笑颜开遂心愿。",
        "真伪判断在编程，逻辑清晰应万变。",
        "无论前端或后台，编码功底皆相牵。",
        "万行程序紧相扣，笔耕不辍忘食中。",
        "堆栈跟踪排错路，切勿半途而废难。",
        "代码如诗藏墨痕，注释如画点缀间。",
        "编程之路万里长，勤学苦练方成材。",
        "代码如舞翩翩起，思想飞扬展宏愿。",
        "追寻梦想始终在，激情澎湃写人生。",
        "注释点缀灵魂抒，变量命名妙笔添。",
        "算法设计如画卷，数据结构点亮眼。",
      ],
      displayText: '',
      currentIndex: 0,
      isBlinkVisible: true,
      modalVisible: false,
      engines: [
        {id: 'google', img: "img/icons/google-2015.svg", scale: 1.0, label: "谷歌", url: 'https://www.google.com/search?q='},
        {id: 'bing', img: "img/icons/bing-11.svg", scale: 1.0, label: "必应", url: 'https://www.bing.com/search?q='},
        {id: 'baidu', img: "img/icons/baidu.svg", scale: 1.0, label: "百度", url: 'https://www.baidu.com/s?wd='},
        {id: 'duckduckgo', img: "img/icons/duckduckgo-2.svg", scale: 1.0, label: "duckduckgo", url: 'https://duckduckgo.com/?q='},
        {id: 'github', img: "img/icons/github.png", scale: 1.0, label: "github", url: 'https://github.com/search?q='},
       ],
      selectedEngine: {
        id: 'google',
        img: "img/icons/google-2015.svg",
        label: "谷歌",
        url: 'https://www.google.com/search?q='
      },
      search: '',
      mySiteList: [
        {
          "name": "Blog",
          "desc": "我的博客，记录技术，记录生活",
          "isActive": true,
          "avatar": "img/icons/favicon.png",
          "url": "https://blog.engine.wang",
          "urlStr": "blog.engine.wang",
          "scale": 1
        },
        {
          "name": "ChatGPT",
          "desc": "自部署的ChatGPT Web，国内直连",
          "isActive": true,
          "avatar": "img/icons/chatgpt-icon.png",
          "url": "https://chat.engine.wang",
          "urlStr": "chat.engine.wang",
          "scale": 0.9
        },
        {
          "name": "Stable Diffusion",
          "desc": "自部署的Diffusion Ai Web，图片生成",
          "isActive": true,
          "avatar": "img/icons/diffusion.png",
          "url": "https://diffusion.engine.wang",
          "urlStr": "diffusion.engine.wang",
          "scale": 1.1
        },
        {
          "name": "engine云",
          "desc": "自部署的个人云盘，基于Cloudreve",
          "isActive": true,
          "avatar": "img/icons/cloudreve.png",
          "url": "https://drive.engine.wang",
          "urlStr": "drive.engine.wang",
          "scale": 1
        },
        {
          "name": "Gitlab",
          "desc": "自部署的Gitlab，私有代码仓库",
          "isActive": true,
          "avatar": "img/icons/gitlab.png",
          "url": "https://gitlab.engine.wang",
          "urlStr": "gitlab.engine.wang",
          "scale": 1
        },
        {
          "name": "Harbor",
          "desc": "自部署的Harbor，私有Docker仓库",
          "isActive": true,
          "avatar": "img/icons/harbor.png",
          "url": "https://harbor.engine.wang",
          "urlStr": "harbor.engine.wang",
          "scale": 1
        },
      ],
      otherSiteJson: {
        "officialSiteList": {
          "label": "官方网站",
          "siteList": [
            {
              "name": "Google",
              "desc": "世界顶级搜索引擎",
              "isActive": true,
              "avatar": "img/icons/google.svg",
              "url": "https://www.google.com/",
              "urlStr": "google.com",
              "scale": 1
            },
            {
              "name": "Gmail",
              "desc": "谷歌邮箱，收邮件的",
              "isActive": true,
              "avatar": "img/icons/gmail.svg",
              "url": "https://gmail.com/",
              "urlStr": "gmail.com",
              "scale": 1
            },
            {
              "name": "Github",
              "desc": "最大的代码托管基地",
              "isActive": true,
              "avatar": "img/icons/github.svg",
              "url": "https://gmail.com/",
              "urlStr": "gmail.com",
              "scale": 1.0
            },
            {
              "name": "LeetCode",
              "desc": "算法题刷题网站",
              "isActive": true,
              "avatar": "img/icons/leetcode.svg",
              "url": "https://leetcode.cn/",
              "urlStr": "leetcode.cn",
              "scale": 1.0
            },
            {
              "name": "Stack Overflow",
              "desc": "计算机问答类技术社区",
              "isActive": true,
              "avatar": "img/icons/stackoverflow.svg",
              "url": "https://stackoverflow.com/",
              "urlStr": "stackoverflow.com",
              "scale": 0.8
            },
            {
              "name": "Youtube",
              "desc": "世界最流行的视频网站",
              "isActive": true,
              "avatar": "img/icons/youtube.svg",
              "url": "https://www.youtube.com/",
              "urlStr": "youtube.com",
              "scale": 1
            },
            {
              "name": "MicroSoft",
              "desc": "微软，科技巨头，Ai时代的领导者",
              "isActive": true,
              "avatar": "img/icons/microsoft.svg",
              "url": "https://www.microsoft.com/",
              "urlStr": "microsoft.com",
              "scale": 0.9
            },
            {
              "name": "Wikipedia",
              "desc": "维基百科，最全的百科",
              "isActive": true,
              "avatar": "img/icons/wikipedia.svg",
              "url": "https://en.wikipedia.org/",
              "urlStr": "wikipedia.org",
              "scale": 1
            },
          ]
        },

        "CodingSites": {
          "label": "我的常用站",
          "siteList": [
            {
              "name": "极客时间",
              "desc": "计算机课程",
              "isActive": true,
              "avatar": "img/icons/geektime.png",
              "url": "https://time.geekbang.org/",
              "urlStr": "time.geekbang.org",
              "scale": 1
            },
            {
              "name": "阿里云",
              "desc": "顶级云计算服务提供商",
              "isActive": true,
              "avatar": "img/icons/aliyun.png",
              "url": "https://aliyun.com/",
              "urlStr": "aliyun.com",
              "scale": 1
            },
            {
              "name": "腾讯云",
              "desc": "顶级云计算服务提供商",
              "isActive": true,
              "avatar": "img/icons/txyun.png",
              "url": "https://cloud.tencent.com/",
              "urlStr": "cloud.tencent.com",
              "scale": 1
            },
            {
              "name": "代码随想录",
              "desc": "算法笔记",
              "isActive": true,
              "avatar": "img/icons/programcarl.png",
              "url": "https://programmercarl.com/",
              "urlStr": "programmercarl.com",
              "scale": 1
            },
            // {
            //   "name": "Labuladong算法小抄",
            //   "desc": "算法笔记",
            //   "isActive": true,
            //   "avatar": "img/icons/labuladong.jpg",
            //   "url": "https://labuladong.github.io/algo/",
            //   "urlStr": "labuladong.github.io/algo",
            //   "scale": 1
            // },
            {
              "name": "人人都是产品经理",
              "desc": "产品经理",
              "isActive": true,
              "avatar": "img/icons/iampm.jpeg",
              "url": "https://www.woshipm.com/",
              "urlStr": "woshipm.com",
              "scale": 0.8
            },
            {
              "name": "小林Coding",
              "desc": "网络数据库系统八股",
              "isActive": true,
              "avatar": "img/icons/xiaolin.png",
              "url": "https://xiaolincoding.com/",
              "urlStr": "xiaolincoding.com",
              "scale": 1
            },
            {
              "name": "Code Top",
              "desc": "企业题库",
              "isActive": true,
              "avatar": "img/icons/codetop.jpg",
              "url": "https://codetop.cc/",
              "urlStr": "codetop.cc",
              "scale": 1
            },
            {
              "name": "Go roadmap",
              "desc": "Go语言路径学习",
              "isActive": true,
              "avatar": "img/icons/goroadmap.png",
              "url": "https://www.golangroadmap.com/",
              "urlStr": "golangroadmap.com",
              "scale": 1
            },
          ],
        },
        "officialDocSites": {
          "label": "官方文档",
          "siteList": [
            {
              "name": "Go文档",
              "desc": "Golang官方文档",
              "isActive": true,
              "avatar": "img/icons/golang.svg",
              "url": "https://go.dev/doc/",
              "urlStr": "go.dev/doc",
              "scale": 1
            },
            {
              "name": "Python文档",
              "desc": "Python官方文档",
              "isActive": true,
              "avatar": "img/icons/python.svg",
              "url": "https://docs.python.org/",
              "urlStr": "docs.python.org",
              "scale": 1
            },
            {
              "name": "Docker文档",
              "desc": "Docker官方文档",
              "isActive": true,
              "avatar": "img/icons/docker.svg",
              "url": "https://docs.docker.com/",
              "urlStr": "docs.docker.com",
              "scale": 1
            },
            {
              "name": "k8s文档",
              "desc": "Kubernetes官方文档",
              "isActive": true,
              "avatar": "img/icons/kubernets.svg",
              "url": "https://kubernetes.io/",
              "urlStr": "kubernetes.io",
              "scale": 1
            },
            {
              "name": "MySQL文档",
              "desc": "MySQL官方文档",
              "isActive": true,
              "avatar": "img/icons/mysql.svg",
              "url": "https://dev.mysql.com/",
              "urlStr": "dev.mysql.com",
              "scale": 1
            },
            {
              "name": "MongoDB文档",
              "desc": "MongoDB官方文档",
              "isActive": true,
              "avatar": "img/icons/mongodb.svg",
              "url": "https://www.mongodb.com/docs",
              "urlStr": "mongodb.com/docs",
              "scale": 1.3
            },
            {
              "name": "Redis文档",
              "desc": "Redis官方文档",
              "isActive": true,
              "avatar": "img/icons/redis.svg",
              "url": "https://redis.io/docs/",
              "urlStr": "redis.io/docs",
              "scale": 1
            },
            {
              "name": "Vue.js文档",
              "desc": "Vue.js官方文档",
              "isActive": true,
              "avatar": "img/icons/vuejs.svg",
              "url": "https://cn.vuejs.org/",
              "urlStr": "cn.vuejs.org",
              "scale": 1
            },
          ],
        },
        "AiSites": {
          "label": "Ai风暴",
          "siteList": [
            {
              "name": "ChatGPT",
              "desc": "目前最强Ai对话",
              "isActive": true,
              "avatar": "img/icons/openai.svg",
              "url": "https://chat.openai.com/",
              "urlStr": "chat.openai.com",
              "scale": 1
            },
            {
              "name": "New Bing",
              "desc": "能联网的GPT4",
              "isActive": true,
              "avatar": "img/icons/bing.svg",
              "url": "https://bing.com/new",
              "urlStr": "bing.com/new",
              "scale": 0.8
            },
            {
              "name": "Midjourney",
              "desc": "目前最强Ai绘画",
              "isActive": true,
              "avatar": "img/icons/midjourney.png",
              "url": "https://www.midjourney.com/",
              "urlStr": "midjourney.com",
              "scale": 1.2
            },
            {
              "name": "Stable Diffusion",
              "desc": "AI绘图，可自部署",
              "isActive": true,
              "avatar": "img/icons/stablediffusion.png",
              "url": "https://stablediffusionweb.com/",
              "urlStr": "stablediffusionweb.com",
              "scale": 1
            },
          ]
        },

        "sourceSiteList": {
          "label": "资源网站",
          "siteList": [
            {
              "name": "IconFont",
              "desc": "阿里的图标资源库",
              "isActive": true,
              "avatar": "img/icons/iconfont.svg",
              "url": "https://www.iconfont.cn/",
              "urlStr": "iconfont.cn",
              "scale": 1
            },
            {
              "name": "佛系软件",
              "desc": "win/mac破解软件下载",
              "isActive": true,
              "avatar": "img/icons/foxi.png",
              "url": "https://foxirj.com/",
              "urlStr": "foxirj.com",
              "scale": 1
            },
            {
              "name": "云盘小站",
              "desc": "阿里云盘资源分享社区",
              "isActive": true,
              "avatar": "img/icons/ypxz.png",
              "url": "https://newxiaozhan.com/",
              "urlStr": "newxiaozhan.com/",
              "scale": 1
            },
            {
              "name": "大力盘",
              "desc": "网盘搜索引擎",
              "isActive": true,
              "avatar": "img/icons/dali.png",
              "url": "https://www.dalipan.com/",
              "urlStr": "dalipan.com",
              "scale": 1
            },
            {
              "name": "橘子盘搜",
              "desc": "影视资源网盘搜索引擎",
              "isActive": true,
              "avatar": "img/icons/juzi.png",
              "url": "https://www.nmme.cc/",
              "urlStr": "nmme.cc",
              "scale": 1
            },
            {
              "name": "猫狸盘搜",
              "desc": "阿里网盘搜索引擎",
              "isActive": true,
              "avatar": "img/icons/alipansou.png",
              "url": "https://www.alipansou.com/",
              "urlStr": "alipansou.com",
              "scale": 1
            },
            {
              "name": "鸠摩搜书",
              "desc": "书籍免费下载",
              "isActive": true,
              "avatar": "img/icons/jiumo.png",
              "url": "https://www.jiumodiary.com/",
              "urlStr": "jiumodiary.com",
              "scale": 1.2
            },
            {
              "name": "IT Pandas",
              "desc": "技术书籍免费下载",
              "isActive": true,
              "avatar": "img/icons/itpanda.png",
              "url": "https://www.itpanda.net/book/",
              "urlStr": "itpanda.net",
              "scale": 0.8
            },
          ]
        },

      }
    }
  },
  methods: {
    goToAbout() {
      this.$router.push({path: '/about'});
    },
    searchContent() {
      window.open(this.selectedEngine.url + this.search, "_blank");
    },
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    setDefaultEngine() {
      console.log("set default engine")
      localStorage.setItem('defaultEngine', this.selectedEngine.id)
      this.$notify({
        type: 'success',
        title: '设置默认搜索引擎成功！',
        message: '已经将默认搜索引擎设置为' + this.selectedEngine.label,
        duration: 4000,
      });
      this.modalVisible = false;
    },
  },
  mounted() {
    if (!localStorage.getItem('visited') || localStorage.getItem('visited')!=="diffusion") {
      // 存储一个名为"visited"的标记到本地存储
      localStorage.setItem('visited', 'diffusion');
      this.$notify({
        type: 'success',
        title: 'Stable Diffusion AI已上线！',
        message: "https://difussion.engine.wang，快来体验Ai生成图像的乐趣吧~",
        timeout: 5000,
      });
    }
    // var text = this.quote[Math.floor(Math.random() * this.quote.length)];
    axios.get('https://v1.hitokoto.cn/?c=d&c=i&c=j&c=k')
        .then(response => {
          var text = response.data.hitokoto;
          if (response.data.from_who) {
            text = text + "——" + response.data.from_who
          }
          const intervalId = setInterval(() => {
            if (this.currentIndex === text.length) {
              clearInterval(intervalId);
            } else {
              this.displayText += text.charAt(this.currentIndex);
              this.currentIndex++;
              this.isBlinkVisible = true;
              setTimeout(() => {
                this.isBlinkVisible = false;
              }, 500);
            }
          }, 100); // 每隔 100 毫秒添加一个字符
        })
        .catch(error => {
          console.log(error);
        });
  },
  created() {
    const defaultEngineId = localStorage.getItem('defaultEngine')
    if (defaultEngineId) {
      for (var i = 0; i < this.engines.length; i++) {
        if (this.engines[i].id === defaultEngineId) {
          this.selectedEngine = this.engines[i];
          break;
        }
      }
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5);
  /*background: linear-gradient(-45deg, #EA4335, #4285F4);*/
  /* 背景尺寸 - 原理3 */
  background-size: 600% 600%;
  animation: gradientBG 10s ease infinite;
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

.typing-text {
  font-size: 2rem;
  white-space: nowrap; /* 禁用文字换行 */
  position: relative;
}


@media (max-width: 768px) {
  .bg-default {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 768px) {
  .bg-default {
    padding-left: calc(-2rem + 15%);
    padding-right: calc(-2rem + 15%);
  }
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.settings {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
}

.setting-label {
  width: 140px;
  display: inline-block;
  margin-right: 20px;
}
</style>
