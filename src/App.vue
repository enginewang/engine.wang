<template>
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>

* {
  box-sizing: border-box;
}


html,body
{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

.resume-uploader .el-upload {
  border: 1px dashed #232323;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.el-image-viewer__canvas {
  z-index: 100001 !important;
}

/*.search-group .dropdown-toggle {*/
/*  background-color: transparent !important;*/
/*  border: none !important;*/
/*  box-shadow: none !important;*/
/*}*/

/*.search-group .dropdown-toggle::after {*/
/*  content: none !important;*/
/*}*/

.search-group > .btn {
  box-shadow: none;
  border-bottom: black 2px;
  height: max-content;
}

.dropdown .dropdown-menu {
    min-width: 4rem;
}

.dropdown {
  display: contents;
}

.avatar{
  background-color: white;
}

.btn-secondary {
  background-color: white;
  border: none;
}

</style>