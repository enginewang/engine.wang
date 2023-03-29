<template>
  <div>
    <!--
       show-file-list: 是否显示上传的文件列表
       action: '#' 用来指定文件要上传的地址，由于我们需要定制上传动作
              这里设为#
       :http-request：自定义上传行为（重点）
       on-success: 上传成功之后的回调
       before-upload： 上传之前的检查
       :on-success="handleAvatarSuccess"
     -->
    <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :http-request="upload"
    >
      <img v-if="value" :src="value" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
      <el-progress v-if="showProgress" :percentage="percent" />
    </el-upload>
  </div>
</template>

<script>
import global from '@/global/global.js'
const COS = require('cos-js-sdk-v5')
import {Upload, Image, Progress, Select, Option, FormItem, Dialog, Cascader, Tag, Table, TableColumn} from 'element-ui'

const cos = new COS({
  SecretId: global.tencentCloudSecretId,
  SecretKey: global.tencentCloudSecretKey
})

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      percent: 0, // 进度
      showProgress: false // 控制进度条显示隐藏
    }
  },
  components: {
    [Upload.name]: Upload,
    [Image.name]: Image,
    [Progress.name]: Progress,
  },
  methods: {
    upload(res) {
      if (res.file) {
        this.showProgress = true
        // 执行上传操作
        cos.putObject({
          Bucket: 'jryy-1257430317', /* 存储桶 */
          Region: 'ap-shanghai', /* 存储桶所在地域，必须字段 */
          Key: new Date().getTime() + "-" + res.file.name, /* 文件名 */
          StorageClass: 'STANDARD', // 上传模式, 标准模式
          Body: res.file // 上传文件对象
        }, (err, data) => {
          // console.log(err || data)
          // 上传成功之后
          if (data.statusCode === 200) {
            this.$emit('input', `https://${data.Location}`)
            this.$emit('updateUrl', `https//:${data.Location}`)
          }
          this.showProgress = false
        })
      }
    },
    beforeAvatarUpload(file) {
      // console.log(file)
      var posix = file.name.split(".")[file.name.split(".").length - 1];
      if (posix !== "jpg" && posix !== "png" && posix !== "jpeg") {
        this.$notify({
          type: 'danger',
          title: '文件后缀不符合要求',
          message: '请上传jpg/png/jpeg格式的图片文件',
          duration: 4000,
        });
        return false;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        this.$notify({
          type: 'danger',
          title: '文件过大',
          message: '上传的图片大小不能超过5MB!',
          duration: 4000,
        });
        return false;
      }
      return true;
    },
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>