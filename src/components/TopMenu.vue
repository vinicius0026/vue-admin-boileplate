<template>
  <el-menu theme="dark" mode="horizontal">
    <el-row type="flex" justify="end">
      <el-submenu>
        <template slot="title">User</template>
        <el-menu-item>Profile</el-menu-item>
        <el-menu-item>Logout</el-menu-item>
      </el-submenu>
    </el-row>
  </el-menu>
</template>

<style>
.el-menu--horizontal .el-submenu>.el-menu {
  top: 60px;
}
</style>
