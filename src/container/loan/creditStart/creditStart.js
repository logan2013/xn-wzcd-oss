import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/loan/creditStart';
import {
    showWarnMsg,
    showSucMsg,
    getRoleCode
} from 'common/js/util';
import {
    listWrapper
} from 'common/js/build-list';
import {
    lowerFrame,
    onShelf,
    sendMsg
} from 'api/biz';

@listWrapper(
    state => ({
        ...state.loanCreditStart,
        parentCode: state.menu.subMenuCode
    }), {
        setTableData,
        clearSearchParam,
        doFetching,
        setBtnList,
        cancelFetching,
        setPagination,
        setSearchParam,
        setSearchData
    }
)
class CreditStart extends React.Component {
    render() {
        const fields = [{
        //     title: '业务编号',
        //     field: 'code'
        // }, {
            title: '客户姓名',
            field: 'userName',
            render: (e, t) => {
                return (t.creditUser ? t.creditUser.userName : '-');
            }
        }, {
            title: '贷款银行',
            field: 'loanBankCode',
            type: 'select',
            listCode: 802116,
            keyName: 'bankCode',
            valueName: 'bankName'
        }, {
            title: '手机号',
            field: 'mobile',
            render: (e, t) => {
                return (t.creditUser ? t.creditUser.mobile : '-');
            }
        }, {
            title: '身份证号',
            field: 'idNo',
            render: (e, t) => {
                return (t.creditUser ? t.creditUser.idNo : '-');
            }
        // }, {
        //     title: '业务员',
        //     field: 'salesman',
        //     render: (e, t) => {
        //         return (t.creditUser ? t.creditUser.idNo : '-');
        //     }
        }, {
            title: '申请日期',
            field: 'applyDatetime',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            pageCode: 632115,
            searchParams: {
                roleCode: getRoleCode()
            }
        });
    }
}

export default CreditStart;