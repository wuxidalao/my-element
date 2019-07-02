<template>
  <div class="asideBar">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      background-color="#354155"
      text-color="#c1cbd8"
      active-text-color="#4aa0f8"
    >
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
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
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
import bus from "../common/bus";

export default {
  name: "Aside",
  data() {
    return {
      items: [
        {
          icon: "el-icon-location",
          index: "1",
          title: "首页",
          subs: [
            {
              index: "1-1",
              title: "消息"
            },
            {
              index: "1-2",
              title: "个人中心"
            },
            {
              index: "1-3",
              title: "其他",
              subs: [
                {
                  index: "1-3-1",
                  title: "吃饭"
                },
                {
                  index: "1-3-2",
                  title: "睡觉"
                }
              ]
            }
          ]
        },
        {
          icon: "el-icon-setting",
          index: "2",
          title: "设置"
        }
      ]
    };
  },
  methods: {}
};
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
</style>
