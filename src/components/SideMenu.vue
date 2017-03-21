<template>
  <el-row class="tac">
    <el-col :span="24" class="full-height">
      <el-menu :router="true" class="full-height">
        <el-menu-item-group title="Menu">
          <el-menu-item index="1">Item one</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
</script>

<style>
.tac {
  top: 0;
  bottom: 0;
  float: left;
  margin-top: 60px;
  position: fixed;
  width: 200px;
}
.full-height {
  height: 100%;
}
</style>
