<template>
<el-container>
    <el-container>
  <el-main>
  <el-button type="primary" @click="newDialogFormVisible = true">新建</el-button>
  <!-- 收货地址对话框 -->
  <el-dialog title="收货地址" :visible.sync="newDialogFormVisible">
    <el-form :model="newDialogForm">
      <el-form-item label="活动日期" :label-width="formLabelWidth">
        <el-date-picker
        v-model="newDialogForm.date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="newDialogForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="newDialogForm.address" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="newDialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleClickedAdd">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 表格 -->
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
<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
</template>

<template slot-scope="scope">
<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
    Edit</el-button>
<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
            newDialogFormVisible: false,
            newDialogForm: {
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
            console.log(row)
            console.log(row.name)
            this.newDialogForm.date = row.date
            this.newDialogForm.name = row.name
            this.newDialogForm.address = row.address
            this.newDialogFormVisible = true
        },
        handleDelete(index) {
            this.$delete(this.tableData, index)
        },
        handleClickedAdd() {
            // console.log(this.form.date)
            // 组装日期
            let dayStr = '';
            if (this.newDialogForm.date) {
                const D = new Date(this.newDialogForm.date);
                const year = D.getFullYear();
                const month = D.getMonth() + 1;
                const day = D.getDate();
                dayStr = `${year}-${month}-${day}`
            }
            // 更新数组
            this.tableData.push({
                date: dayStr,
                name: this.newDialogForm.name,
                address: this.newDialogForm.address
            })
            this.newDialogFormVisible = false
        }
    }
}
</script>

<style scoped>
.el-header {
    padding: 0;
}

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
}

/* .el-aside{
  color: pink;
  background-color: yellow;
} */

.el-table {
    color: blue;
}

.el-dialog {
    width: 400px;
}
</style>