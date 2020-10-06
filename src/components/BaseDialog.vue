<template>
 <div>
  <el-dialog :title="dialogTitle" :visible.sync="show" top="1vh"
             :close-on-click-modal="false" @close="cancelDialog">
   <el-form :model="newForm" ref="ruleForm"
            label-width="120px"
            size="mini"
            :rules="baseRules">
    <el-form-item :label="item.label"
                  v-for="(item,i) in baseForm"
                  :key="i"
                  :prop="item.prop">
     <el-input v-if="item.input" v-model="newForm[item.prop]" :type="item.type"
               :maxlength="item.maxLength" :disabled="item.disabled"
               show-word-limit autocomplete="off"/>

     <el-switch v-if="item.switch" v-model="newForm[item.prop]"/>

     <el-date-picker v-if="item.datePicker" placeholder="选择日期"
                     @change="(val)=>clickDate(val,item.prop)"
                     value-format="yyyy-MM-dd"
                     v-model="newForm[item.prop]" style="width: 100%;"/>

     <el-upload v-if="item.upload"
                class="avatar-uploader"
                action="/api/v1/project/upload/uploadfile"
                :show-file-list="false"
                :on-success="(response, file, fileList) =>
         handleAvatarSuccess (response, file, fileList, item.prop)"
                :before-upload="beforeAvatarUpload"
     >
      <img v-if="newForm[item.prop]&&item.upload"
           :src="`/${newForm[item.prop]}`" class="avatar"/>
      <el-button v-else size="small" type="primary">点击上传</el-button>
     </el-upload>


     <el-select clearable
                v-else-if="item.select"
                v-model="newForm[item.prop]"
                size="mini"
                placeholder="请选择"
     >
      <el-option
        v-for="item in item.options || selectOption"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
     </el-select>
    </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="submitDialog">确 定</el-button>
   </div>
  </el-dialog>
 </div>
</template>

<script>
    import BS from "../model/format"

    export default {
        name: "BaseDialog",
        mounted(){
            console.log(this.ShowDialog);
            console.log(111);
        },
        props: {
            title: {
                default: '默认标题',
                type: String,
            },
            ShowDialog: {
                default: false,
                type: Boolean,
            },
            form: {
                default: () => {
                },
                type: Object,
            },
            baseRule: {
                default: () => {},
                type: Object,
            },
            dialogForm: {
                default: () => {},
                type: Object,
            },
            selOption: {
                default: () => {},
                type: Object,
            },
        },
        computed: {
            selectOption() {
                const s = [];
                this.selOption.list.forEach((item) => {
                    s.push({label: item[this.selOption.label], value: item[this.selOption.value]});
                });
                return s;
            },
        },
        watch: {
            title(newVal) {
                this.dialogTitle = newVal;
            },
            ShowDialog(newVal) {
                this.show = newVal;
            },
            dialogForm: {
                handler(val) {
                    this.editForm = val;
                },
                deep: true,
            },
        },
        data() {
            return {
                dialogTitle: this.title, // require
                show: this.ShowDialog, // require
                baseForm: this.form.form, // require important！！
                newForm: new BS().formatFrom(this.form.form), // 初始值
                baseRules: this.form.rules, //
                editForm: this.dialogForm, // 编辑值
            }
        },
        methods: {
            cancelDialog() {
                this.$emit('cancelDialog', false);
                this.$refs.ruleForm.resetFields();
            },
            clickDate(val, type) {
                if (val) {
                    this.$set(this.newForm, type, val);
                } else {
                    this.newForm[type] = '';
                }
            },
            handleAvatarSuccess(res, file, fileList, prop) {
                if (res === 'success') {
                    this.$set(this.newForm, `${prop}`, res.data.fullPath);
                } else {
                    this.$message.error(res.message);
                }
            },
            beforeAvatarUpload(file) {
                const fileType = file.name.substring(file.name.lastIndexOf('.') + 1);
                const fileTypeObj = {
                    jpg: true,
                    jpeg: true,
                    png: true,
                    gif: true,
                };
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!fileTypeObj[fileType]) {
                    this.$message({
                        message: '请上传图片',
                        type: 'warning',
                    });
                    return false;
                }
                if (!isLt2M) {
                    this.$message({
                        message: '上传文件大小不能超过 2MB!',
                        type: 'warning',
                    });
                    return false;
                }
                return true;
            },
            submitDialog(){
                this.$refs.ruleForm.validate((valid) => {
                    if (!valid) return;
                    this.$emit('submitDialog', { ...this.newForm });
                    this.$refs.ruleForm.resetFields();
                });
            }
        }
    }
</script>

<style scoped>

</style>
