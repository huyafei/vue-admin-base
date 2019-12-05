<template>
  <div class="app-mian">
    <div class="app-container">
      <div class="operation text-align-right">
        <el-button type="primary" size="small" @click="jumpPage('/org-manage/add-user')"
          >添加机构成员</el-button
        >
      </div>
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <!--        <el-table-column prop="name" label="ID" width="180">-->
        <!--        </el-table-column>-->
        <el-table-column
          align="center"
          prop="username"
          label="用户名"
          width="220"
        >
        </el-table-column>
        <el-table-column align="center" label="性别" width="180">
          <template v-slot="scope">
            <span>{{ scope.row.male ? "男" : "女" }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="age" label="年龄" width="180">
        </el-table-column>

        <el-table-column align="center" prop="height" label="身高" width="180">
        </el-table-column>
        <el-table-column align="center" prop="weight" label="体重" width="180">
        </el-table-column>
        <el-table-column align="center" prop="addTime" label="添加时间">
        </el-table-column>
        <!--        <el-table-column align="center"  label="操作" width="200">-->
        <!--          <template>-->
        <!--            <div>-->
        <!--              <el-button type="primary" size="small">编辑</el-button>-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
      </el-table>
      <div class="pagination text-align-right">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="current"
          :page-sizes="[15, 30, 45, 60]"
          :page-size="15"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserList",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      current: 0,
      pageSize: 15,
      total: 0,
      loading: true
    };
  },
  //计算属性
  computed: {
    tableData() {
      return this.$store.state.orgUser.list || [];
    }
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this.$store);
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.loading = true;
      let obj = {
        page: this.current,
        size: this.pageSize,
        appSecret: "62f96024c3a6f5bfb6ad8f10a75fc6ec",
        code: "48e09d92ec75eaf5389d"
      };
      this.$store
        .dispatch("GetUserList", obj)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    jumpPage(url) {
      this.$router.push({
        path: url
      });
    },
    handleSizeChange(val) {
      this.loading = true;
      this.pageSize = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.current = val;
      this.getUserList();
    }
  }
};
</script>
<style scoped lang="scss">
.operation {
  margin-bottom: 20px;
}
</style>
