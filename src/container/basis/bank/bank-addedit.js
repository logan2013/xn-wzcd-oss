import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/basis/bank-addedit';
import {
    getQueryString,
    getUserId,
    showWarnMsg
} from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
    state => state.basisBankAddEdit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class bankAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }
    render() {
        const fields = [{
            title: '银行名称',
            field: 'bankCode',
            type: 'select',
            listCode: 802116,
            keyName: 'bankCode',
            valueName: '{{bankName.DATA}}-{{bankCode.DATA}}',
            required: true
        }, {
            title: '12期',
            field: 'rate12'
        }, {
            title: '18期',
            field: 'rate18'
        }, {
            title: '24期',
            field: 'rate24'
        }, {
            title: '36期',
            field: 'rate36'
        }, {
            title: '利率明细',
            field: 'bankRateList',
            type: 'o2m',
            required: true,
            options: {
                add: true,
                edit: true,
                fields: [{
                    title: '期数',
                    field: 'period',
                    required: true
                }, {
                    title: '说明',
                    field: 'remark',
                    required: true
                }, {
                    title: '利率',
                    field: 'rate',
                    required: true
                }]
            }
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            addCode: 632030,
            editCode: 632032,
            detailCode: 632036,
            beforeSubmit: (param) => {
                if (!param.bankRateList) {
                    showWarnMsg('至少新增一条利率明细！');
                    return;
                }
                let bank = this.props.selectData.bankCode.find(v => v.bankCode === param.bankCode);
                param.bankName = bank.bankName;
                param.updater = getUserId();
                return param;
            }
        });
    }
}

export default bankAddedit;