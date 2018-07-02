import React from 'react';
import {
  initStates,
  doFetching,
  cancelFetching,
  setSelectData,
  setPageData,
  restore
} from '@redux/loan/archives-addedit.js';
import {
  getQueryString
} from 'common/js/util';
import {
  CollapseWrapper
} from 'component/collapse-detail/collapse-detail';

@CollapseWrapper(
  state => state.loaNarchivesAddedit, {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
  }
)
class ArchivesAddedit extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
        title: '车辆信息列表',
        items: [
            [{
                title: '客户姓名',
                field: 'customerName'
            }, {
                title: '业务编号',
                field: 'code'
            }, {
                title: '保险公司',
                field: 'insuranceCompanyName',
                type: 'select',
                listCode: 632046,
                keyName: 'code',
                valueName: 'name'
            }],
            [{
                title: '车辆颜色',
                field: 'carColor'
            }, {
                title: '车辆品牌(品牌车型)',
                field: 'carBrand'
            }, {
                title: '车架号码',
                field: 'frameNo'
            }],
            [{
                title: '发动机号码',
                field: 'engineNo'
            }, {
                title: '交强险',
                field: 'forceInsurance',
                amount: true
            }, {
                title: '商业险合计',
                field: 'commerceInsurance',
                amount: true
            }],
            [{
                title: '保险生效日期',
                field: 'insuranceEffectDatetime',
                type: 'date'
            }, {
                title: '经办银行',
                field: 'insuranceBank',
                type: 'select',
                listCode: 632037,
                keyName: 'bankCode',
                valueName: 'bankName'
            }, {
                title: '业务员',
                field: 'saleUserName'
            }],
            [{
                title: '抵押合同编号',
                field: 'pledgeContractCode'
            }, {
                title: '登记证书号',
                field: 'regCertificateCode',
                type: 'img'
            }],
            [{
                title: '其他联系人',
                field: 'otherContact'
            }, {
                title: '联系人手机',
                field: 'contactMobile'
            }],
            [{
                title: '担保人姓名',
                field: 'guarantorName'
            }, {
                title: '担保人手机',
                field: 'guarantorMobile'
            }],
            [{
                title: '银行卡号',
                field: 'bankCardNumber'
            }, {
                title: '对账单日',
                field: 'billDatetime'
            }, {
                title: '月还款额',
                field: 'monthAmount',
                amount: true
            }],
            [{
                title: '身份证',
                field: 'idNoPic',
                type: 'img'
            }],
            [{
                title: '已入档清单',
                field: 'fileList',
                type: 'checkbox',
                key: 'file_list'
            }],
            [{
                title: '资料是否完善',
                field: 'isComplete',
                type: 'select',
                data: [{
                    key: '0',
                    value: '不完善'
                }, {
                    key: '1',
                    value: '完善'
                }],
                keyName: 'key',
                valueName: 'value'
            }],
            [{
                title: '备注',
                field: 'fileRemark'
            }],
            [{
                title: '经办人',
                field: 'operatorName'
            }, {
                title: '经办日期',
                field: 'operateDatetime',
                type: 'date'
            }, {
                title: '经办部门',
                field: 'operateDepartmentName',
                type: 'select',
                listCode: 630106,
                params: {
                    typeList: ['2']
                },
                keyName: 'code',
                valueName: 'name',
                readonly: true,
                value: '333'
            }]
        ]
    }];
    return this
      .props
      .buildDetail({
        fields,
        code: this.code,
        view: this.view,
        detailCode: 632146
      });
  }
}

export default ArchivesAddedit;
