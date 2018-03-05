<template>
<div class="aw-content aw-content-header">
  <el-row :gutter="1">
    <!--logo-->
    <el-col :span="18">
      <div class="logo">
        <router-link to="/">
          <span class="logo_prefix">XX</span><span class="logo_suffix">数据管理平台</span>
        </router-link>
      </div>
    </el-col>

    <!--搜索框-->
    <el-col :span="4" :pull="2">
      <div class="search">
        <el-input size="small" placeholder="输入搜索内容" prefix-icon="el-icon-search">
        </el-input>
      </div>
    </el-col>

    <!-- 消息内容 -->
    <el-col :span="1">
      <div class="header-right clear">
        <el-col :span="10">

          <!--这是消息的下拉列表 用了element里的 dropdown组件-->
          <el-dropdown menu-align="start">
            <span>
                            <el-badge :value="news.length" class="item">
                                <i class="el-icon-message"></i>
                            </el-badge>
                        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span class="pop-title">你的消息! </span>
              </el-dropdown-item>

              <el-dropdown-item v-for="(item,index) in news" :key="index" divided>
                <div class="pop-div">
                  <span class="pop-image">
                                        <img :src="item.img" width="50px" >
                                    </span>
                  <span class="pop-content">
                                    {{item.content}}
                                    </span>
                  <span class="pop-time">
                                        {{item.time}}分钟前
                                    </span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>

    </el-col>

    <!-- 头像 -->
    <el-col :span="1">
      <div class="user-header">
        <el-dropdown trigger="click" menu-align="start">
          <img src="../../../static/images/tongxiang.png" width="20px" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="setting-div">
                <span class="setting-icon"><i class="el-icon-menu"></i></span>
                <span class="setting-string">个人</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="setting-div">
                <span class="setting-icon"><i class="el-icon-setting"></i></span>
                <span class="setting-string">设置</span>
              </div>

            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="setting-div">
                <span class="setting-icon"><i class="el-icon-close"></i></span>
                <span class="setting-string">退出</span>
              </div>

            </el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "awHeader",
  data() {
    return {
      news: [{
          img: "../../static/images/tongxiang.png",
          content: "消息4！",
          time: "1"
        },
        {
          img: "../../static/images/tongxiang.png",
          content: "消息3！",
          time: "12"
        },
        {
          img: "../../static/images/tongxiang.png",
          content: "消息2！",
          time: "15"
        },
        {
          img: "../../static/images/tongxiang.png",
          content: "消息1！",
          time: "30"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.aw-content-header {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 66px;
    background-color: #00a870;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 0 32px 0 40px;
    overflow: hidden;
    .logo {
        float: left;
        cursor: pointer;
        font-size: 22px;
        .logo_prefix {
            color: #fff;
        }
        .logo_suffix {
            color: #fff;
        }
    }
    .search {
        float: left;
        color: #fff;
        font-size: 14px;
    }
    .website span {
        display: inline-block;
        color: rgb(255, 208, 75);
    }
    .website span:first-child {
        color: #fff;
    }
    .header-right {
        padding-top: 28px;
        line-height: 10px;
    }
    .header-right span {
        display: inline-block;
        margin-left: 14px;
        font-size: 18px;
        color: #fff;
        line-height: 1px;
        height: 18px;
        cursor: pointer;
    }
    .header-right span:hover {
        color: rgb(255, 208, 75);
    }
    .user-header {
        line-height: 10px;
        padding-top: 25px;
        font-size: 12px;
    }
    .user-header img {
        border-radius: 50%;
        cursor: pointer;
    }
}
.pop-image {
    display: block;
    float: left;
    img {
        border-radius: 50%;
    }
}
.pop-div {
    height: 55px;
    clear: both;
}
.pop-content {
    display: block;
    font-size: 12px;
    line-height: 14px;
    padding-top: 15px;
    margin-left: 60px;
}
.pop-time {
    display: block;
    float: right;
    font-size: 10px;
    color: #ccc;
}
.pop-title {
    font-size: 12px;
    color: rgb(255, 208, 75);
}
.task-div {
    clear: both;
    height: 55px;
}
.task-span {
    display: block;
    float: left;
    font-size: 12px;
}

.task-content {
    width: 160px;
    line-height: 16px;
    margin-left: 10px;
    padding: 5px;
}
.task-time {
    clear: both;
    float: right;
    color: #ccc;
}
.setting-div {
    height: 30px;
    line-height: 30px;
    clear: both;
}
.setting-div span {
    display: block;
    float: left;
    font-size: 12px;
}
.setting-icon {
    padding-top: 3px;
    padding-right: 3px;
}
</style>
