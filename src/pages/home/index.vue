<template>
<el-container>
  <el-container>
    <!-- <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div> -->
  <el-main>
  <el-button type="text" @click="dialogFormVisible = true">新建</el-button>
  <!-- 收货地址对话框 -->
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="dialogForm">
      <el-form-item label="活动日期" :label-width="formLabelWidth">
        <el-date-picker
        v-model="dialogForm.date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="dialogForm.address" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleClickedAdd">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 表格对话框 -->
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Address"
      prop="address">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王佬虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王老虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogForm: {
          name: '',
          date: '',
          address: ''
        },
        formLabelWidth: '120px',
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleEdit(index, row) {
        // console.log(index, row);
        // console.log(row.name)
        this.dialogForm.date = row.date
        this.dialogForm.name = row.name
        this.dialogForm.address = row.address
        this.dialogFormVisible = true
      },
      handleDelete(index) {
        this.$delete(this.tableData, index)
      },
      handleClickedAdd() {
        // console.log(this.form.date)
        // 组装日期
        let dayStr = '';
        if (this.form.date) {
          const D = new Date(this.form.date);
          const year = D.getFullYear();
          const month = D.getMonth() + 1;
          const day = D.getDate();
          dayStr = `${year}-${month}-${day}`
        }
        // 更新数组
        this.tableData.push({
          date:dayStr,
          name: this.form.name,
          address: this.form.address
        })
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-footer{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

/* .el-aside{
  color: pink;
  background-color: yellow;
} */
  
.el-table{
  color: blue;
}

.el-dialog{
  width: 400px;
}
</style>