import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/biz/settlement-certain';
import {
    getQueryString,
    dateTimeFormat,
    moneyFormat,
    getUserId,
    showSucMsg
} from 'common/js/util';
import fetch from 'common/js/fetch';
import DetailUtil from 'common/js/build-detail-dev';
import { Form } from 'antd';

@Form.create()
export default class settlementCertain extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.state = {
          ...this.state,
          haveDepositReceipt: false,
          haveDepositReceiptLostProof: false
        };
    }
    render() {
        const fields = [{
            title: '客户姓名',
            field: 'realName',
            formatter: (v, d) => {
                return d.user.realName;
            },
            readonly: true
        }, {
            title: '身份证',
            field: 'idNo',
            formatter: (v, d) => {
                return d.user.idNo;
            },
            readonly: true
        }, {
            title: '业务编号',
            field: 'code',
            formatter: (v, d) => {
                return d.budgetOrder.code;
            },
            readonly: true
        }, {
            title: '贷款银行',
            field: 'loanBankName',
            readonly: true
        }, {
            title: '贷款金额',
            field: 'loanAmount',
            amount: true,
            readonly: true
        }, {
            title: '扣除违约金额',
            field: 'cutLyDeposit',
            amount: 'true',
            readonly: true
        }, {
            title: '实际退款金额',
            field: 'actualRefunds',
            formatter: (v, d) => {
                return moneyFormat(d.loanAmount - d.cutLyDeposit);
            },
            readonly: true
        }, {
            title: '结清时间',
            field: 'settleDatetime',
            type: 'date',
            readonly: true
        }, {
            title: '退款开户行',
            field: 'refundBankSubbranch',
            type: 'select',
            listCode: 802116,
            keyName: 'bankCode',
            valueName: 'bankName',
            readonly: true
        }, {
            title: '退款户名',
            field: 'refundBankRealName',
            readonly: true
        }, {
            title: '退款账号',
            field: 'refundBankcard',
            bankCard: true,
            readonly: true
        }, {
            title: '第二年按公司指定续保',
            field: 'secondCompanyInsurance',
            amount: 'true',
            readonly: true
        }, {
            title: '第三年按公司指定续保',
            field: 'thirdCompanyInsurance',
            amount: 'true',
            readonly: true
        }, {
            title: '是否有保证金单',
            field: 'isDepositReceipt',
            type: 'select',
            data: [{
                key: '0',
                value: '否'
            }, {
                key: '1',
                value: '是'
            }],
            keyName: 'key',
            valueName: 'value',
            onChange: (v) => {
                this.setState({
                    haveDepositReceipt: v !== '0' && v !== '',
                    haveDepositReceiptLostProof: v === '0'
                });
            },
            readonly: true
        }, {
            title: '保证金单',
            field: 'depositReceipt',
            type: 'img',
            hidden: !this.state.haveDepositReceipt,
            readonly: true
        }, {
            title: '保证金单遗失证明',
            field: 'depositReceiptLostProof',
            type: 'img',
            hidden: !this.state.haveDepositReceiptLostProof,
            readonly: true
        }, {
            title: '结清证明',
            field: 'settleAttach',
            type: 'img',
            readonly: true
        }, {
            title: '付款时间',
            field: 'settlePayDatetime',
            type: 'date',
            required: true
        }, {
            title: '银行回单',
            field: 'settlePdf',
            type: 'img',
            required: true
        }, {
            title: '备注',
            field: 'settleNote',
            required: true
        }];
        return this.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 630521,
            buttons: [{
              title: '确认',
              handler: (param) => {
                param.operator = getUserId();
                param.code = this.code;
                this.doFetching();
                fetch(630572, param).then(() => {
                  showSucMsg('操作成功');
                  this.cancelFetching();
                  setTimeout(() => {
                    this.props.history.go(-1);
                  }, 1000);
                }).catch(() => this.props.cancelFetching);
              },
              check: true,
              type: 'primary'
            }, {
              title: '返回',
              handler: (param) => {
                this.props.history.go(-1);
              }
            }]
        });
    }
}
