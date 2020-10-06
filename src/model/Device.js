/**
 * created by @looper
 */
export default class Device {
    constructor() {
        this.table = {
            deviceID: {
                label: '设备ID',
                width: '100',
                prop: 'deviceID',
            },
            deviceName: {
                label: '仪表名称',
                input: true,
                width: '180',
                prop: 'deviceName',
            },
            deviceTypeName: {
                label: '设备类型',
                input: true,
                width: '180',
                prop: 'deviceTypeName',
            },
            whiteList: {
                label: '白名单',
                select: true,
                width: '200px',
                options: [{
                    label: '否',
                    value: 'false',
                }, {
                    label: '是',
                    value: 'true',
                },
                ],
                switch: true,
                prop: 'WhiteList',
            },
        };
        this.btnList = [
            {title: '新增', type: 'add1', iconType: 'warning'},
        ];
        this.options = {
            edit: {
                title: '修改',
                type: 'edit',
                iconType: 'primary',
                icon: 'el-icon-edit',
            },
            position: {
                title: '点位',
                type: 'position',
                iconType: 'primary',
                icon: 'el-icon-map-location',
            },
            delete: {
                title: '删除',
                type: 'delete',
                iconType: 'danger',
                icon: 'el-icon-delete',
            },
        };
        this.form = {
            deviceNo: {
                label: '设备编号',
                switch: true,
                prop: 'deviceNo',
                maxLength: 30,
            },
            deviceName: {
                label: '仪表名称',
                input: true,
                prop: 'deviceName',
                maxLength: 130,
            },
            description: {
                label: '设备描述',
                input: true,
                prop: 'description',
                maxLength: 40,
            },
            style: {
                label: '型号',
                datePicker: true,
                prop: 'style',
            },
            model: {
                label: '规格',
                input: true,
                prop: 'model',
                maxLength: 20,
            },
            factory: {
                label: '厂商',
                input: true,
                prop: 'factory',
                maxLength: 50,
            },
            madein: {
                label: '来源',
                input: true,
                prop: 'madein',
                maxLength: 50,

            },
            memo: {
                label: '备注',
                input: true,
                prop: 'memo',
                maxLength: 50,
            },
            deviceIP: {
                label: '设备IP',
                input: true,
                prop: 'deviceIP',
                maxLength: 15,
            },
        }
        this.rules = {
            deviceTypeID: [
                {required: true, message: '请选择设备类型', trigger: 'change'},
            ],
        }
    }

}
