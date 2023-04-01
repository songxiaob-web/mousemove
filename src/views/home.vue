
<script>
import { getImg } from "../utils/newimg";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  setup() {
    const getImgPath = (path) => {
      return getImg(path)
    };
    return { getImgPath }
  },

  data() {
    return {
      titleList: [
        {
          title: '关于51心理学',
          id: 'c1'
        },
        {
          title: '600颗心理胶囊',
          id: 'c2'
        },
        {
          title: '8门心理学课程',
          id: 'c3'
        },
        {
          title: '学员见证',
          id: 'c4'
        },
        {
          title: '事业合伙人奖金',
          id: 'c5',
        },
        {
          title: '考证课程',
          id: 'c6'
        },
        {
          title: '加入我们',
          id: 'c7',
        }
      ],

      leaderList: [{
        imgUrl: '1.png',
        name: '杨卫东',
        position: '51心理学创始人'
      }, {
        imgUrl: '1.png',
        name: '左霄红',
        position: '51心理学创始人'
      }, {
        imgUrl: '1.png',
        name: '王婷',
        position: '51心理学创始人'
      }, {
        imgUrl: '1.png',
        name: '高霞',
        position: '51心理学创始人'
      }, {
        imgUrl: '1.png',
        name: '董方方',
        position: '51心理学创始人'
      }],

      knowledgeList: {
        title: '600颗心理胶囊包括六大模块:心理科普、家庭教育、婚恋情感、情绪减压、人际职场、销售管理。',
        images: [
          {
            imgUrl: '9.jpg',
          }, {
            imgUrl: '9.jpg',
          }, {
            imgUrl: '9.jpg',
          }, {
            imgUrl: '9.jpg',
          }, {
            imgUrl: '9.jpg',
          }, {
            imgUrl: '9.jpg',
          }
        ]
      },
      marriageList: [
        "第1讲 婚恋心理学包括哪些内容？",
        "第2讲 异性闺蜜是一种什么样的情感？",
        "第3讲 一夜情为什么会出现？",
        "第4讲 婚前性行为及人们的态度",
        "第5讲 随意性行为为什么会发生？",
        "第6讲 空洞爱缺少了什么关键成分？",
        "第7讲 同居不婚族的恋爱模式",
        "第8讲 完美主义的内在心理机制是什么？",
        "第9讲 如何应对婚恋中的完美主义？",
        "第10讲 选择无性婚姻的内心需求是什么？",
        "第11讲 闪婚闪离背后的心理原因",
        "第12讲 爱情中的一见钟情与晕轮效应",
        "第13讲 罗密欧与朱丽叶效应、吊桥效应",
        "第14讲 单相思、猜疑和妒忌对婚恋的影响",
        "第15讲 爱情中的控制与反控制",
        "第16讲 爱情中的攀比与从众",
        "第17讲 恋爱暴力与失恋",
        "第18讲 通过人格测试，选择适合自己的另一半",
        "第19讲 父母如何在潜意识中影响子女择偶？",
        "第20讲 择偶的其它影响因素",
        "第21讲 经济因素如何影响择偶？",
        "第22讲 生理因素如何影响择偶？",
        "第23讲 外貌如何影响择偶？",
        "第24讲 亲密关系中的浪漫期、权力争夺期",
        "第25讲 亲密关系中的整合期、承诺期、共同创造期",
        "第26讲 新婚后的感情与日常生活的调节",
        "第27讲 新婚后生活习惯和人际关系的磨合",
        "第28讲 如何调整新婚后的家庭人际关系？",
        "第29讲 新婚后价值观与性格的差异、孕育的准备",
        "第30讲 重新认识出轨",
        "第31讲 婚外情和婚外性行为对家庭的危害",
        "第32讲 婚外情和婚外性行为高发期（一）",
        "第33讲 婚外情和婚外性行为高发期（二）", "第34讲 婚外情和婚外性行为的高发期（三）", "第35讲 婚外情和婚外性行为的高发期（四）", "第36讲 婚外情和婚外行为的高发期（五）", "第37讲 婚外情和婚外行为的高发期（六）", "第38讲 人们会选择哪些人作为婚外情人？", "第39讲 婚外情和婚外性行为发生的信号", "第40讲 如何度过发现婚外情后的应激反应期？（一）", "第41讲 如何度过发现婚外情后的应激反应期？（二）", "第42讲 通过婚外情，探讨婚姻的问题", "第43讲 探讨婚姻的意义和使命", "第44讲 探讨婚外情是否要说明", "第45讲 探讨婚外情中的获得与纠结", "第46讲 探讨婚外情人的处境", "第47讲 探讨婚外情的归宿", "第48讲 探讨与婚外情人的分离", "第49讲 《婚姻法》的出台和修订", "第50讲 案例——被家暴的“网红”", "第51讲 家庭暴力及其特点（一）", "第52讲 家庭暴力的特点及其应对方式（二）", "第53讲 离婚的原因分析（一）", "第54讲 离婚的原因分析（二）", "第55讲 离婚中的道德要求", "第56讲 离婚中和离婚后的心理状态", "第57讲 离婚带来的后果、《婚姻法》相关规定", "第58讲 再婚家庭的相关研究", "第59讲 再婚家庭人际关系的复杂性", "第60讲 再婚家庭经济关系的复杂性", "第61讲 家庭的概述", "第62讲 家庭治疗中的系统观", "第63讲 对家庭的正确理解", "第64讲 家庭生命周期的七阶段", "第65讲 萨提亚五种沟通姿态",
        "第66讲 萨提亚冰山理论", "第67讲 萨提亚冥想"
      ],
      swearList: [{
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 1,
        name: '张三'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 2,
        name: '张三张'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 3,
        name: '张三'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 4,
        name: '张三'
      }, {
        video: 'https://51nst-video-2.yunfeng365.com/51xxl/top-cx/015~1.mp4',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 5,
        name: '张三'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 6,
        name: '张三'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 7,
        name: '张三'
      }, {
        video: '',
        imgUrl: 'https://51nst-video-2.yunfeng365.com/FutV6jUnAtO-__8ILM-X6gByIQ6l?imageView2/0/w/600',
        id: 8,
        name: '张三'
      }],
      activeCurrent: '1',
      phoneHeight: 600,
      phoneWidth: 400,
      screenWidth: 0,
      lesPhoneHeight: 120,
      selectItemCurrent: 1,
      sItemPicList:[

      ],
      lessonList: [
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/jichu.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/shehui.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/fazhan.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/celiang.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/zixun.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/zhenduan_s.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/zixun_s.jpg',
        'https://51nst-video-2.yunfeng365.com/51xxl/index/course/ceyan_s.jpg',
      ]
    }
  },

  components: {
    Swiper,
    SwiperSlide
  },

  methods: {
    handleSelect(id) {
      document.getElementById(id).scrollIntoView()
    }
  },

  mounted() {
    let img = new Image();
    img.onload = (e) => {
      console.log('e',e)
      this.phoneHeight = this.$refs.phoneImg.$el.clientHeight;
      this.phoneimgBeignWidththis = this.phoneWidth = this.$refs.phoneImg.$el.clientWidth;
      this.pixied = this.phoneWidth / this.phoneHeight;
    }
    img.src = "/images/9.png";
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    }
  },

  watch: {
    screenWidth: {
      handler(newV, oldV) {
        if (newV <= 500) {
          this.phoneWidth = 300;
          this.phoneHeight = 300 / this.pixied;
        } else if (newV <= 380) {
          this.phoneWidth = 260;
          this.phoneHeight = 260 / this.pixied;
        } else {
          this.phoneWidth = this.phoneimgBeignWidththis;
          this.phoneHeight = this.phoneimgBeignWidththis / this.pixied;
        }

        if (newV < 600) {
          this.lesPhoneHeight = 150
        } else {
          this.lesPhoneHeight = 120
        }
      },
      immediate: true
    }

  }
}

</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-image style="width: 100%; height: auto" src="/images/2.jpg" fit="contain"></el-image>
        <el-header>
          <el-menu :default-active="activeCurrent" class="el-menu-demo" mode="horizontal" background-color="#339f5e"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <template v-for="item in titleList" :key="item.id">
              <el-menu-item :index="item.id" :data-id="item.id">
                {{ item.title }}
              </el-menu-item>
            </template>
          </el-menu>
        </el-header>

        <el-main class="main-container">
          <el-col :xs="22" :sm="22" :md="20" :lg="20" :xl="20">
            <el-col id="c1">
              <el-col class="content-title">51心理学是谁</el-col>
              <el-row :gutter="20" justify="space-between" align="middle" class="content-nav">
                <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
                  <div class="grid-content bg-purple content-indr-text">
                    51心理学隶属于晋中纽斯特文化科技有限公司，为该公司旗下线上品牌。
                    2019年上线微信小程序、2021年上线安卓版APP、2022年上线苹果版APP，
                    在此过程中，广大用户口口相传，旨在让心理学高深的理论生活化，
                    老百姓学了之后能用在自己的日常工作和生活中，实现“人人可以学，学了就能用”。
                    51心理学主要学习内容包括600颗心理胶囊和8门实用心理学课程。
                  </div>
                </el-col>

                <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="company-img">
                  <el-row align="middle" :gutter="20" justify="center">
                    <el-col class="cd-img-logo" :span="12">
                      <el-image src="/images/5.png" alt="" class="logo" />
                      <div class="logo-name">Android / ios</div>
                      <div class="logo-up">APP已上线</div>
                    </el-col>
                    <el-col class="cd-img-phone" :span="12">
                      <el-image src="/images/3.png" alt="" class="phone" />
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>

            <el-col>
              <el-col class="content-title">我们的理想</el-col>
              <el-row :gutter="20" justify="space-between" align="middle" class="content-nav">
                <div class="content-indr-text">
                  人人能用心理学提升自己的幸福感
                </div>
              </el-row>
            </el-col>


            <el-col>
              <el-col class="content-title">我们的团队</el-col>
              <el-row :gutter="20" justify="space-between" align="middle" class="content-nav">
                <template v-for="( item, index ) in leaderList" :key="index">
                  <el-col :span="4">
                    <el-image :src="getImgPath(item.imgUrl)" alt="" />
                    <div class="align-center font1 team-name">{{ item.name }}</div>
                    <div class="align-center font1">{{ item.position }}</div>
                  </el-col>
                </template>
              </el-row>
            </el-col>


            <el-col id="c2">
              <el-col class="content-title">600颗心理胶囊</el-col>
              <el-col class="align-center font1-5 margint3">{{ knowledgeList['title'] }}</el-col>
              <el-col>
                <el-row :gutter="0" align="middle" class="content-nav">
                  <swiper :slidesPerView="4">
                    <swiper-slide v-for="( item, index ) in knowledgeList['images']" :key="index">
                      <el-image :src="getImgPath(item.imgUrl)" alt="" class="know-swiper-img img-fluid" />
                    </swiper-slide>
                  </swiper>
                </el-row>
              </el-col>
            </el-col>

            <el-col class="font1-5 margint2 know-text">
              将晦涩的心理学知识用通俗易懂的语言表达，用每天抄写一颗胶囊的方式学习，使我们在不感到吃力、不占用过多时间的前提下，达
              到最好的记忆效果。并通过实践与应用提供具体方法，实现“人人可以学，学了就能用”。进而提高婚姻家庭幸福度、子女教育质量及
              职场销售能力等。
            </el-col>

            <el-col>
              <el-row class="font1-5 margint2" justify="space-between">
                <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11" class="bgcolor-white border1 padding2">
                  <el-row align="middle" class="know-indr-content">
                    <el-col :span="13" class="ke-content-left">
                      <div class="color">心理胶囊抄写卡展示</div>
                      <div class="kec-title-left font1">
                        心理胶囊的格式包括标题、一句话总
                        结、知识点详解、实践与应用四部分。
                      </div>
                    </el-col>
                    <el-col :span="7" :offset="2">
                      <el-image src="/images/7.jpg" alt="" class="" />
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11" class="bgcolor-white border1 padding2 company-img">
                  <el-row class="know-indr-content" align="middle">
                    <el-col class="ke-content-left" :span="12">
                      <div class="kec-title color">心理胶囊实体书展示</div>
                      <div class="kec-title-left kec-title-left-column">
                        <div class="font1">心理胶囊线下实体书在
                          售，内容与51心理学小程
                          序(APP)同步，学习更多的胶囊。 </div>
                        <div class="kec-title-left-btn">立即购买</div>
                      </div>
                    </el-col>
                    <el-col :span="11" :offset="1">
                      <el-image src="/images/8.png" class="ke-img-right" />
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>

            <el-col id="c3">
              <el-col class="content-title">8门心理学</el-col>
              <el-col :span="24" class="align-center font1-5 margint3 n_phone-box">
                <el-col class="n_phone">
                  <el-image src="/images/9.png" class="phone-width n_phone-img" ref="phoneImg"
                    :style="`width:${phoneWidth}px;height:${phoneHeight}`"/>


                  <div class="n_phone-container phone-width"
                    :style="`width:${phoneWidth}px;height:${phoneHeight}px`">


                    <div class="n_phone-select">
                      <template v-for="( item, index ) in ['介绍', '目录', '测试']">
                        <div :class="['n_phone-dis-item', selectItemCurrent == index ? 'dis-item' : '']">{{ item }}</div>
                      </template>
                    </div>

                    <template v-show="selectItemCurrent == 0">
                      <div class="n_phone-quick-select-3">
                        <template v-for="( item, index ) in sItemPicList" class="">
                          <div :class="['n_phone-quick-select-item', item === 1 ? 'psl' : '']">{{ item }}</div>
                        </template>
                      </div>
                    </template>

                    <template v-show="selectItemCurrent == 1">
                      <div class="n_phone-quick-select">
                        <el-row>
                          <div class="n_phone-quick-select-1 color">快速选课</div>
                          <div class="n_phone-quick-select-2">共67讲</div>
                        </el-row>

                        <div class="n_phone-quick-select-3">
                          <template v-for="( item, index ) in 67" class="">
                            <div :class="['n_phone-quick-select-item', item === 1 ? 'psl' : '']">{{ item }}</div>
                          </template>
                        </div>
                      </div>
                    </template>


                    <div class="n_phone-titles">
                      <div class="color title">课程目录</div>
                      <div class="n_phone-titles-content" :style="`height: ${lesPhoneHeight}px;`">
                        <template v-for="( item, index ) in marriageList" class="">
                          <div :class="['n_phone-select-item', item === 1 ? 'psl' : '']">
                            {{ item }}
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </el-col>

                <el-col class="font2-5 margint2" :span="24">
                  婚恋心理学
                </el-col>
                <el-col class="font1 margint1 marriage-text" :xs="22" :sm="22" :md="22" :lg="16" :xl="16">
                  课程共45讲，包括心理发展相关基本理论、每个年龄阶段的一般发展规律及其特点。
                  通过学习掌握儿童心理发展受到哪些因素的影响，从时间纵向上清楚孩子的认知、情绪
                  能力等在婴儿期、幼儿期、儿童期、青春期分别应该达到什么样的水平。
                </el-col>
              </el-col>
            </el-col>

            <el-col id="c4">
              <el-col class="content-title">学员见证</el-col>
              <el-col>
                <el-row :gutter="0" align="middle" class="content-nav">
                  <swiper :slidesPerView="6">
                    <swiper-slide v-for="( item, index ) in swearList" :key="index">
                      <el-col :span="21">
                        <el-image :src="item.imgUrl" alt="" class="swear-img" fit="cover" />
                      </el-col>
                    </swiper-slide>
                  </swiper>
                </el-row>
              </el-col>
            </el-col>

            <el-col id="c5">
              <el-col class="content-title">事业合伙人奖学金</el-col>
              <el-row align="middle" justify="space-between" class="bgcolor-white padding2 borderbox margint2">
                <el-col :span="16" class="partner-text">
                  在51心理学小程序/APP连续签到18天，并影响3名学员成功入学，可
                  申请事业合伙人奖学金，奖学金每月10日发放，发放后可直接提现到微信
                  零钱。
                </el-col>
                <el-col :span="6" :offset="2">
                  <el-image src="/images/7.jpg" alt="" class="" fit="cover" />
                </el-col>
              </el-row>
            </el-col>

            <el-col id="c6">
              <el-col class="content-title">国家心理咨询师考证课程</el-col>
              <el-row align="middle" justify="space-between" class="margint2">
                <template v-for="( item, index ) in lessonList" class="">
                  <el-col :xs="11" :sm="11" :md="6" :lg="6" :xl="6" class="lesson-img-box">
                    <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="22">
                      <el-image :src="item" alt="" class="border1" fit="cover" />
                    </el-col>
                  </el-col>
                </template>
              </el-row>
              <el-col :span="24" class="les-btn">心理咨询师课程免费学习</el-col>
            </el-col>

            <el-col id="c7">
              <el-col class="content-title">如何成为学员</el-col>
              <el-row align="middle" justify="space-between" class="margint2">
                <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="card-text">
                  加入51心理学，可获得600颗心理胶囊，学习8门心理学，免费学习心理咨询师课程，并且还有实体书上下册、抄写笔本包邮免费送。有机会领取事业合伙学习卡人奖学金
                </el-col>
                <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="card-img-box">
                  <el-image src="/images/10.png" alt="" class="border1 card-img-box-img" fit="cover" />
                </el-col>
              </el-row>
              <el-col class="card-btn">立即购买学习卡 >>></el-col>
            </el-col>
          </el-col>
        </el-main>

        <el-footer id="c8">
          <el-col class="footer">
            <el-col :xs="10" :sm="14" :md="9" :lg="9" :xl="9" class="footer-left">
              <el-col :xs="8" :sm="8" :md="10" :lg="10" :xl="10">
                <el-image src="/images/logo.png" class="footer-logo"></el-image>
              </el-col>

              <el-col class="footer-text" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <div>联系我们:0354-3060680</div>
                <div>版权所有:纽斯特文化科技有限公司</div>
                <div>扫描二维码下载并使用51心理学APP</div>
              </el-col>
            </el-col>


            <el-col :xs="12" :sm="6" :md="6" :lg="4" :xl="4" class="footer-img-box">
              <el-col :xs="6" :sm="9" :md="9" :lg="11" :xl="10" :offset="1" class="align-center footer-code">
                <el-image src="/images/4.jpg" class=""></el-image>
                <div>Android</div>
              </el-col>
              <el-col :xs="6" :sm="9" :md="9" :lg="11" :xl="10" :offset="2" class="align-center footer-code">
                <el-image src="/images/4.jpg" class=""></el-image>
                <div>ios</div>
              </el-col>
            </el-col>
          </el-col>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style  lang="scss">
@media screen and (max-width: 991px) {
  .company-img {
    margin-top: 1.5rem;
  }

  .card-img-box-img {
    width: 80%;
    margin-top: 2rem;
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .footer {
    justify-content: space-between !important;
    padding: 1rem 0 !important;

    .footer-left {
      align-items: flex-start !important;
      flex-direction: column;
    }

    .footer-text {
      border: none !important;
      padding: 0 !important;
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 599px) {
  .n_phone-titles-content {
    height: 154px;
  }
}



.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-menu-demo {
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .content-title {
    position: relative;
    color: #000;
    font-size: 2.3rem;
    display: inline-block;
    margin-top: 2rem;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 3px;
      height: 5px;
      background: #339f5e;
    }
  }

  .content-nav {
    margin-top: 3rem;

    .logo-up,
    .logo-name {
      text-align: center;
    }

    .content-indr-text {
      font-size: 1.8rem;
      text-indent: 3.6rem;
    }
  }

  .cd-img-phone {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    max-width: 240px;
  }

  .cd-img-logo {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    max-width: 120px;
  }


  .team-name {
    margin: 0.8rem 0 0.4rem
  }

  .know-swiper-img {
    width: 90%;
    margin: 0 auto;
    display: block;
    border-radius: 1rem;
    line-height: 2.2rem;
  }

  .know-text {
    text-indent: 2rem;
  }

  .know-indr-content {
    height: 100%;

    .ke-content-left {
      display: flex;
      flex-direction: column;
      height: 100%;

      .kec-title-left {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-indent: 2rem;
      }
    }
  }

  .kec-title-left-column {
    flex-direction: column;
  }

  .kec-title-left-btn {
    position: relative;
    background-color: #339f5e;
    padding: 5px 1.5rem;
    font-size: 1rem;
    align-self: self-end;
    color: #fff;
    border-radius: 5px;
    margin-top: 1rem;
    text-align: center;
    text-indent: 0;
  }

  .n_phone-box {
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    box-sizing: border-box;

    .n_phone {
      position: relative;
      overflow: hidden;
      margin-bottom: 1rem;

      .phone-width {
        width: 420px;
      }

      .n_phone-img {
        height: auto;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 0 13px 0 rgb(23 95 51 / 60%);
      }

      .n_phone-container {
        position: absolute;
        left: 50%;
        top: 53%;
        transform: translate(-50%, 0);
        background: #fff;
        padding: 0 1rem;
        box-sizing: border-box;
        overflow: hidden;
      }

      .n_phone-select {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.3rem;
        padding: 1.4rem 0;
        box-sizing: border-box;
      }

      .n_phone-quick-select {
        width: 100%;

        .n_phone-quick-select-2 {
          margin-left: 5px;
          color: #7c7c7c;
        }

        .n_phone-quick-select-3 {
          white-space: nowrap;
          overflow-y: scroll;
          margin: 1rem 0;
        }

        .n_phone-quick-select-item {
          display: inline-flex;
          width: 3rem;
          height: 3rem;
          background: #ccc;
          margin: 5px;
          align-items: center;
          justify-content: center;
        }

        .psl {
          background: #d8f1e3;
        }
      }

      .n_phone-titles {
        text-align: left;

        .title {
          margin-bottom: 1rem
        }

        .n_phone-titles-content {
          overflow-y: scroll;
        }

        .n_phone-select-item {
          font-size: 1rem;
          padding: 1rem 0;
          font-weight: 700;
          border-bottom: 1px solid #ccc;
        }
      }
    }

    .marriage-text {
      text-indent: 2rem;
      padding: 0 2rem;
      text-align: justify;
      font-size: 1.3rem;
      margin: 0 auto;
    }
  }

  .swear-img {
    width: 100%;
    height: auto;
  }


  .partner-text {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  .lesson-img-box {
    margin: 1rem 0;
  }

  .les-btn {
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    color: #339f5e;
  }

  .card-img-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-text {
    font-size: 2rem;
    color: #339f5e;
    text-indent: 4rem;
    font-weight: 700;
    text-align: justify;
  }

  .card-btn {
    border: 2px solid #339f5e;
    padding: 1.2rem;
    color: #339f5e;
    text-align: center;
    border-radius: 8px;
    margin: 2rem 0;
    font-size: 1.2rem;
  }
}



.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #339f5e;
  color: #fff;
  padding: 3rem 0;

  .footer-left {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .footer-text {
    font-size: 1rem;
    white-space: nowrap;
    padding: 2rem 0 2rem 1rem;
    border-left: 2px solid #4ff29b;
  }

  .footer-img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
  }

  .footer-logo {
    -webkit-text-stroke: 0 0 2px #ffffff;
  }

  .footer-code {
    font-size: 1rem;
    white-space: nowrap;
  }
}
</style>