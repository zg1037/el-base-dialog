<template>
 <div>
  <base-page :title="title"
             :table="table"
             :cloneData="cloneData"
             :tableList="tableData"
             :loadingTable="loadingTable"
             @btnClick="btnClick"
             @switchChange="switchChange"
             style="height: 100%"/>

  <BaseDialog
    :ShowDialog="ShowDialog"
    :form="form"
    :title="dialogTitle"
    :dialogForm="dialogForm"
    :selOption="selectOption"
    @cancelDialog="cancelDialog"
    @submitDialog="submitDialog"/>
 </div>
</template>

<script>
    import Device from "@/model/Device";

    const BasePage = () => import('@/components/BaseTable');
    const BaseDialog = () => import('@/components/BaseDialog');
    const DV = new Device();
    export default {
        name: "Hello",
        components: {
            BaseDialog,
            BasePage
        },
        data() {
            return {
                title: '测试baseTable',
                table: DV,
                tableData: [],
                cloneData: [],
                loadingTable: false,


                ShowDialog: false,
                form: DV,
                dialogForm: {}, // 编辑的dialog
                selectOption: DV.selectOption,
                dialogTitle: '默认dialog标题',
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            btnClick(type,row) {
                console.log(row);
                switch (type) {
                    case 'add1':
                        this.ShowDialog = true;
                        this.dialogTitle = '新增Dialog';
                        this.dialogForm = {};
                        break;
                    case 'edit':
                        this.showDialog = true;
                        this.dialogForm = row;
                        break;
                    default:
                        console.log(11);
                        break
                }
            },
            switchChange(type) {
                console.log(type);
            },
            init() {
                this.tableData = [
                    {deviceID: '1', deviceName: '测试1', deviceTypeName: 'hello', whiteList: false},
                    {deviceID: '1', deviceName: '测试2', deviceTypeName: 'hello', whiteList: false},
                    {deviceID: '1', deviceName: '测试3', deviceTypeName: 'hello', whiteList: false},
                    {deviceID: '1', deviceName: '测试4', deviceTypeName: 'hello', whiteList: false},
                    {deviceID: '1', deviceName: '测试5', deviceTypeName: 'hello', whiteList: false},
                ]
                this.cloneData = JSON.parse(JSON.stringify(this.tableData))
            },
            cancelDialog() {
                this.ShowDialog = false
            },
            submitDialog(form) {
                console.log(form);
                this.showDialog = false
            }
        }
    }
</script>

<style scoped>

</style>
