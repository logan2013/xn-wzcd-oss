import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/biz/repayments/repayments-pay';
import {
    getQueryString,
    moneyFormat,
    getUserId,
    showSucMsg
} from 'common/js/util';
import fetch from 'common/js/fetch';
import {
    DetailWrapper
} from 'common/js/build-detail';
// import { COMPANY_CODE } from 'common/js/config';

@DetailWrapper(
    state => state.repaymentsPay, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class RepaymentsPay extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.haveDepositReceipt = false;
        this.haveDepositReceiptLostProof = false;
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
            title: '剩余欠款',
            field: 'restAmount',
            amount: 'true',
            readonly: true
        }, {
            title: '代偿欠款',
            field: 'restReplaceRepayAmount',
            amount: 'true',
            readonly: true
        }, {
            title: '实际逾期次数',
            field: 'curOverdueCount',
            readonly: true
        }, {
            title: '实际代偿次数',
            field: 'curReplaceRepayCount',
            readonly: true
        }, {
            title: '保证金金额',
            field: 'lyDeposit',
            amount: 'true',
            readonly: true
        }, {
            title: '扣除违约金额',
            field: 'cutLyDeposit',
            amount: 'true',
            onChange: (v) => {
                let lyDeposit = this.props.pageData.lyDeposit;
                this.props.setPageData({
                    ...this.props.pageData,
                    actualRefunds: moneyFormat(lyDeposit - v * 1000)
                });
            },
            required: true
        }, {
            title: '实际退款金额',
            field: 'actualRefunds',
            readonly: true
        }, {
            title: '结清时间',
            field: 'settleDatetime',
            type: 'date',
            required: true
        }, {
            title: '退款开户行',
            field: 'refundBankSubbranch',
            type: 'select',
            listCode: 802116,
            keyName: 'bankCode',
            valueName: 'bankName',
            required: true
        }, {
            title: '退款户名',
            field: 'refundBankRealName',
            required: true
        }, {
            title: '退款账号',
            field: 'refundBankcard',
            bankCard: true,
            required: true
        }, {
            title: '是否有押金单',
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
                this.haveDepositReceipt = v !== '0';
                this.haveDepositReceiptLostProof = v === '0';
            },
            required: true
        }, {
            title: '押金单',
            field: 'depositReceipt',
            type: 'img',
            hidden: !this.haveDepositReceipt,
            required: true
        }, {
            title: '押金单遗失证明',
            field: 'depositReceiptLostProof',
            type: 'img',
            hidden: !this.haveDepositReceiptLostProof,
            required: true
        }, {
            title: '第二年按公司指定续保',
            field: 'secondCompanyInsurance',
            amount: 'true'
        }, {
            title: '第三年按公司指定续保',
            field: 'thirdCompanyInsurance',
            amount: 'true'
        }, {
            title: '结清证明',
            field: 'settleAttach',
            type: 'img',
            required: true
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 630521,
            buttons: [{
              title: '确认',
              handler: (param) => {
                param.operator = getUserId();
                this.props.doFetching();
                fetch(630512, param).then(() => {
                  showSucMsg('操作成功');
                  this.props.cancelFetching();
                  setTimeout(() => {
                    this.props.history.go(-1);
                  }, 1000);
                }).catch(this.props.cancelFetching);
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

export default RepaymentsPay;