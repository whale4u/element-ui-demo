<template>
<div>
  <el-row>  
    <el-button type="text" @click="dialogFormVisible = true">新建</el-button>
    <el-button type="primary">删除</el-button>
  </el-row>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动日期" :label-width="formLabelWidth">
      <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleClickedAdd">确 定</el-button>
  </div>
  </el-dialog>
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
</div>
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
        form: {
          name: '',
          date: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
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
          address: "xxxx"
        })
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style scoped>
.el-table{
  color: blue;
}

.el-dialog{
  width: 400px;
}
</style>