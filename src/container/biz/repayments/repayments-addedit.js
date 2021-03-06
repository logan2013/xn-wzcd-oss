import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/biz/repayments/repayments-addedit';
import {
    getQueryString,
    moneyFormat
} from 'common/js/util';
import {
    DetailWrapper
} from 'common/js/build-detail';
// import { COMPANY_CODE } from 'common/js/config';

@DetailWrapper(
    state => state.repaymentsAddEdit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class RepaymentsAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
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
            formatter: (v, d) => {
                return moneyFormat(d.repayBiz.loanAmount);
            },
            readonly: true
        }, {
            title: '还款计划表',
            field: 'repayPlanList',
            type: 'o2m',
            options: {
                fields: [{
                    title: '当前期数',
                    field: 'curPeriods'
                }, {
                    title: '月供金额',
                    field: 'repayCapital',
                    amount: true
                }, {
                    title: '实还金额',
                    field: 'payedAmount',
                    amount: true
                }, {
                    title: '逾期金额',
                    field: 'overdueAmount',
                    amount: true
                }, {
                    title: '催收回逾期金额',
                    field: 'payedFee',
                    amount: true
                }, {
                    title: '清收成本',
                    field: 'totalFee',
                    amount: true
                }, {
                    title: '代偿金额',
                    field: 'replaceRealRepayAmount',
                    amount: true
                }, {
                    title: '代偿时间',
                    field: 'replaceRepayDatetime',
                    type: 'date'
                }, {
                    title: '收回代偿金额',
                    field: 'replaceBackRepayAmount',
                    amount: true
                }, {
                    title: '收回代偿时间',
                    field: 'replaceBackRepayDatetime',
                    type: 'date'
                }]
            }
        }, {
            title: '流程日志',
            field: 'list',
            type: 'o2m',
            listCode: 630176,
            params: {
                refOrder: this.code
            },
            options: {
                rowKey: 'id',
                noSelect: true,
                fields: [{
                    title: '操作人',
                    field: 'operatorName'
                }, {
                    title: '开始时间',
                    field: 'startDatetime',
                    type: 'datetime'
                }, {
                    title: '结束时间',
                    field: 'endDatetime',
                    type: 'datetime'
                }, {
                    title: '花费时长',
                    field: 'speedTime'
                }, {
                    title: '审核意见',
                    field: 'dealNote'
                }, {
                    title: '当前节点',
                    field: 'dealNode',
                    type: 'select',
                    listCode: 630147,
                    keyName: 'code',
                    valueName: 'name'
                }]
            }
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 630521
        });
    }
}

export default RepaymentsAddedit;