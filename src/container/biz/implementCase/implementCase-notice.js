import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/biz/implementCase/implementCase-notice';
import {
    getQueryString,
    getUserId,
    showSucMsg,
    formatDate,
    moneyFormat
} from 'common/js/util';
import fetch from 'common/js/fetch';
import {
    DetailWrapper
} from 'common/js/build-detail';

@DetailWrapper(state => state.bizImplementCaseNotice, {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
})
class ImplementCaseNotice extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.userId = getQueryString('userId', this.props.location.search);
    }
    render() {
        const fields = [{
            title: '客户姓名',
            field: 'realName',
            readonly: true
        }, {
            title: '业务编号',
            field: 'code',
            formatter: (v, d) => {
                return d.budgetOrder.code;
            },
            readonly: true
        }, {
            title: '身份证',
            field: 'idNo',
            readonly: true
        }, {
            title: '贷款金额',
            field: 'loanAmount',
            amount: true,
            readonly: true
        }, {
            title: '贷款银行',
            field: 'loanBankName',
            readonly: true
        }, {
            title: '申请人',
            field: 'exeApplyUser',
            formatter: (v, d) => {
                return d.judge.exeApplyUser;
            },
            readonly: true
        }, {
            title: '被执行人',
            field: 'beExeUser',
            formatter: (v, d) => {
                return d.judge.beExeUser;
            },
            readonly: true
        }, {
            title: '申请标的额',
            field: 'executeMarkAmount',
            formatter: (v, d) => {
                return moneyFormat(d.judge.executeMarkAmount);
            },
            readonly: true
        }, {
            title: '申请时间',
            field: 'applyDatetime',
            formatter: (v, d) => {
                return formatDate(d.judge.applyDatetime);
            },
            amount: true,
            readonly: true
        }, {
            title: '经办法官',
            field: 'handleJudge',
            formatter: (v, d) => {
                return d.judge.handleJudge;
            },
            readonly: true
        }, {
            title: '执行案号',
            field: 'hearCaseNumber',
            formatter: (v, d) => {
                return d.judge.hearCaseNumber;
            },
            readonly: true
        }, {
            title: '优先权标的物',
            field: 'caseSubject',
            formatter: (v, d) => {
                return d.judge.caseSubject;
            },
            readonly: true
        }, {
            title: '标的物拍卖时间',
            field: 'saleDatetime',
            formatter: (v, d) => {
                return formatDate(d.judge.saleDatetime);
            },
            readonly: true
        }, {
            title: '有关公告时间',
            field: 'noticeDatetime',
            type: 'date',
            required: true
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            editCode: 630583,
            detailCode: 630521,
            beforeSubmit: (params) => {
                params.operator = getUserId();
                params.repayBizCode = params.code;
                delete params.code;
                return params;
            }
        });
    }
}

export default ImplementCaseNotice;