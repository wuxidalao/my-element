<template>
  <div class="asideBar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(subsubItem,i) in subItem.subs" :key="i" :index="subsubItem.index">
                    {{ subsubItem.title }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus'

export default {
  name: 'Aside',
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-location',
          index: 'home',
          title: '首页',
          subs: [
            {
              index: 'tips',
              title: '消息'
            },
            {
              index: 'center',
              title: '个人中心'
            },
            {
              index: '3',
              title: '其他',
              subs: [
                {
                  index: 'chifan',
                  title: '吃饭'
                },
                {
                  index: 'shuijiao',
                  title: '睡觉'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-setting',
          index: 'shezhi',
          title: '设置'
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
.asideBar {
  background-color: #354155;
  position: absolute;
  width: 250px;
  height: calc(100% - 60px);
  overflow-x: hidden;
}

.asideBar::-webkit-scrollbar {
  display: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
</style>
