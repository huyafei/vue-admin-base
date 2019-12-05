import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/org-manage",
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/org-manage",
    redirect: "/org-manage/org-list",
    name: "OrgManage",
    meta: {
      title: "机构管理",
      icon: "el-icon-user",
      breadcrumb: true
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
    children: [
      {
        path: "org-list",
        name: "OrgList",
        meta: {
          title: "机构列表",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/org-manage/org/list.vue"
          )
      },
      {
        path: "user-list",
        name: "UserList",
        meta: {
          title: "机构成员列表",
          breadcrumb: true
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/org-manage/user/list.vue"
          )
      },
      {
        path: "add-user",
        name: "AddUser",
        hidden: true,
        meta: {
          title: "添加机构成员",
          breadcrumb: true,
          activeMenu: "/org-manage/user-list"
        },
        component: () =>
          import(
            /* webpackChunkName: "org" */ "../views/org-manage/user/edit.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
