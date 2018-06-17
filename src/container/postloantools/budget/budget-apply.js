import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/postloantools/budget-apply';
import {
  getQueryString,
  showSucMsg,
  getUserId
} from 'common/js/util';
import fetch from 'common/js/fetch';
import {
    DetailWrapper
} from 'common/js/build-detail';

@DetailWrapper(
    state => state.postloantoolsBudgetApply, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class budgetApply extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }
    render() {
        const fields = [{
            title: '代偿性质',
            field: 'type',
            type: 'select',
            key: 'replace_repay_type',
            required: true
        }, {
            title: '业务编号',
            field: 'bizCode',
            type: 'select',
            listCode: 630542,
            params: {
                repayBizCode: 'RB_TEST'
            },
            keyName: 'code',
            valueName: 'code',
            required: true
        }, {
            title: '预算金额',
            field: 'amount',
            amount: true,
            required: true
        }, {
            title: '收款人姓名',
            field: 'receiptRealName',
            required: true
        }, {
            title: '收款人开户行',
            field: 'receiptBank',
            type: 'select',
            listCode: '632037',
            keyName: 'bankCode',
            valueName: 'bankName',
            required: true
        }, {
            title: '收款人账号',
            field: 'receiptAccount',
            bankCard: true,
            required: true
        }, {
            title: '是否加急',
            field: 'isUrgent',
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
            required: true
        }, {
            title: '申请说明',
            field: 'applyNote'
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 632326,
            buttons: [{
                title: '保存',
                check: true,
                handler: (params) => {
                    params.applyUser = getUserId();
                    this.props.doFetching();
                    fetch(632320, params).then(() => {
                        showSucMsg('操作成功');
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 500);
                        this.props.cancelFetching();
                    }).catch(this.props.cancelFetching);
                }
            }, {
                title: '发送',
                check: true,
                handler: (params) => {
                    params.applyUser = getUserId();
                    this.props.doFetching();
                    fetch(632320, params).then(() => {
                        showSucMsg('操作成功');
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 500);
                        this.props.cancelFetching();
                    }).catch(this.props.cancelFetching);
                }
            }, {
                title: '返回',
                handler: (param) => {
                    this.props.history.go(-1);
                }
            }]
        });
    }
}

export default budgetApply;