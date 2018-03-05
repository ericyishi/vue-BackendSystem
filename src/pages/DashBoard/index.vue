<template>
  <div class="aw-content aw-content-dashBoard">
    <div class="item-tittle clear">

    </div>

    <div class="progress">
        <el-row :gutter="20">

            <el-col :xs="12" :sm="12" :md="12" :lg="6" v-for="(item,index) in processBox" :key="index">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <el-progress type="circle" :percentage="item.percent" :width="80"></el-progress>
                    </el-col>
                    <el-col :xs="24" :sm="16" :md="16" :lg="16">
                        <div class="cart-string">
                        <span>XX使用量</span>
                        <span><h2>{{item.num}}</h2></span>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>

    <div class="chart">
      <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-card class="box-chart">
                  <pie-chart></pie-chart>
              </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-card class="box-chart">
                  <line-chart></line-chart>
              </el-card>
          </el-col>

      </el-row>
    </div>

    <div class="list">
      <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="18">
              <el-card class="box-list">
                  To Do List
                  <hr>
                  <todo-list></todo-list>
              </el-card>
              <el-card class="box-list">
                    人员信息管理
                  <hr>
                  <border-table></border-table>
              </el-card>
          </el-col>


          <el-col :xs="24" :sm="24" :md="24" :lg="6">
              <el-card class="box-list">
                    新接案件
                  <hr>
                  <message-list></message-list>
              </el-card>
          </el-col>



      </el-row>



    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style src="./index.css">
</style>
