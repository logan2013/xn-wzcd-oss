import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/biz/trailer-dispose';
import {
    getQueryString,
    getUserId,
    showSucMsg
} from 'common/js/util';
import fetch from 'common/js/fetch';
import {
    DetailWrapper
} from 'common/js/build-detail';

@DetailWrapper(state => state.bizTrailerDispose, {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
})
class trailerDispose extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.userId = getQueryString('userId', this.props.location.search);
        this.dealResult = '';
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
            title: '车辆型号',
            field: 'carModel',
            formatter: (v, d) => {
                return d.budgetOrder.carModel;
            },
            readonly: true
        }, {
            title: '车牌号',
            field: 'carNo',
            formatter: (v, d) => {
                return d.budgetOrder.carNumber;
            },
            readonly: true
        }, {
            title: '剩余欠款',
            field: 'restAmount',
            amount: true,
            readonly: true
        }, {
            title: '处理结果',
            field: 'dealResult',
            type: 'select',
            key: 'tc_deal_result',
            required: true,
            readonly: false,
            onChange: (v, data) => {
                this.dealResult = v;
            }
        }, {
            title: '出售价格',
            field: 'sellPrice',
            amount: true,
            required: true,
            readonly: false,
            hidden: this.dealResult !== '2'
        }, {
            title: '保证金',
            field: 'deposit',
            amount: true,
            required: true,
            readonly: false,
            hidden: this.dealResult !== '1'
        }, {
            title: '代偿预算单',
            field: 'ReplaceRepayCode',
            type: 'select',
            listCode: 632327,
            params: {
                status: 4,
                bizCode: this.code
            },
            keyName: 'code',
            valueName: '{{receiptRealName.DATA}}-{{code.DATA}}',
            required: true,
            hidden: this.dealResult !== '5'
        }, {
            title: '处理结果说明',
            field: 'remark',
            type: 'textarea',
            normalArea: true
        }, {
            title: '附件',
            field: 'dealEnclosure',
            type: 'img'
        }];
        return this
            .props
            .buildDetail({
                fields,
                code: this.code,
                view: this.view,
                detailCode: 630521,
                buttons: [{
                    title: '确定',
                    handler: (param) => {
                        param.code = this.code;
                        param.operator = getUserId();
                        this.props.doFetching();
                        fetch(630557, param).then(() => {
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

export default trailerDispose;