<template>
  <div class="app-mian">
    <div class="app-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" style="width: 240px"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="male">
          <el-radio-group v-model="ruleForm.male">
            <el-radio :label="true">男</el-radio>
            <el-radio :label="false">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input
            v-model.number="ruleForm.age"
            controls-position="right"
            style="width: 160px"
          ></el-input>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input
            v-model.number="ruleForm.height"
            style="width: 160px"
          ></el-input>
        </el-form-item>
        <el-form-item label="体重" prop="weight">
          <el-input
            v-model.number="ruleForm.weight"
            style="width: 160px"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { addUser } from "../../../api/org-user";

export default {
  name: "UserEdit",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      ruleForm: {
        username: "",
        male: true,
        age: "",
        height: null,
        weight: null
      },
      rules: {
        username: [
          {
            required: true,
            min: 20,
            message: "请输入长度为20位的用户名",
            trigger: "blur"
          }
        ],
        male: [{ required: true, message: "请选择性别", trigger: "change" }],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { type: "number", message: "格式不正确", trigger: "blur" }
        ],
        height: [
          { required: true, message: "请输入身高", trigger: "blur" },
          { type: "number", message: "格式不正确", trigger: "blur" }
        ],
        weight: [
          { required: true, message: "请输入体重", trigger: "blur" },
          { type: "number", message: "格式不正确", trigger: "blur" }
        ]
      }
    };
  },
  //计算属性
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      let _that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {
            appSecret: "62f96024c3a6f5bfb6ad8f10a75fc6ec",
            code: "48e09d92ec75eaf5389d",
            ...this.ruleForm
          };
          addUser(obj).then(res => {
            if (res.code === 1) {
              _that.$message.success(res.message);
              _that.$router.go(-1);
            } else {
              _that.$message.warning(res.message);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="scss"></style>
