<template>
    <div class="aw-content aw-content-navmenu">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" active-text-color="#fff" background-color="rgb(84, 92, 100)" unique-opened router>
            <el-menu-item index="Home">
                    <span class="sb-icon"><i class="el-icon-news"></i></span>
                    <span class="sb-cn">总览</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">常用1</span>
                </template>
                <el-menu-item index="Db1">aaa</el-menu-item>
                <el-menu-item index="DashBoard">bbb</el-menu-item>
                <el-menu-item index="Db1">ccc</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">常用2</span>
                </template>
                <el-menu-item index="DashBoard">ddd</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">常用3</span>
                </template>
                <el-menu-item index="Db1">eee</el-menu-item>
                <el-menu-item index="DashBoard">fff</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>
<style lang="less">
.aw-content-navmenu {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 66px;
  bottom: 0;
  background: rgb(84, 92, 100);
}

.aw-content-navmenu > ul {
  height: 100%;
  background: rgb(84, 92, 100);
}

.el-menu-item,
.el-submenu__title {
  font-size: 14px;
  color: #ffffff;
}

.material-icons {
  font-size: 12px;
}
</style>
