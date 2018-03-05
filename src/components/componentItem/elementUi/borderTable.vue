<template>
    <div class="aw-content aw-content-borderTable">
        <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
        <el-table-column prop="userName" label="姓名" width="180"></el-table-column>
        <el-table-column prop="idNo" label="账号" width="80"> </el-table-column>
        <el-table-column prop="password" label="密码"> </el-table-column>
        <el-table-column prop="email" label="邮箱" align="right"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "borderTable",
  data() {
    return {
      tableData: [
        {
          id: 1,
          userName: "张3",
          idNo: "wxy1234",
          password: "gt667123",
          email: "lucky123@qq.com"
        },
        {
          id: 2,
          userName: "张雯",
          idNo: "zww8800",
          password: "ooii11883",
          email: "zww4ww@qq.com"
        },
        {
          id: 2,
          userName: "张雯",
          idNo: "zww8800",
          password: "ooii11883",
          email: "zww4ww@qq.com"
        },
        {
          id: 2,
          userName: "张雯",
          idNo: "zww8800",
          password: "ooii11883",
          email: "zww4ww@qq.com"
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>
