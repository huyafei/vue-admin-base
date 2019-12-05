<template>
  <div class="home">
    <el-button type="primary" @click="getData">主要按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Index",
  components: {},
  methods: {
    getData() {
      let obj = {};
      obj.rowBegin = this.rowBegin;
      obj.rowCount = this.rowCount;
      this.$ajax({
        method: "post",
        url: "/article/list",
        data: JSON.stringify(obj)
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
