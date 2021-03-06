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
} from '@redux/biz/trailer';
import {
    listWrapper
} from 'common/js/build-list';
import {
    showWarnMsg,
    dateFormat
} from 'common/js/util';
import {
    lowerFrame,
    onShelf
} from 'api/biz';

@listWrapper(
    state => ({
        ...state.bizTrailer,
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
class trailer extends React.Component {
    render() {
        const fields = [{
            title: '业务编号',
            field: 'code',
            render: (v, d) => {
                return d.budgetOrder.code;
            },
            search: true
        }, {
            title: '客户姓名',
            field: 'realName'
        }, {
            title: '手机号',
            field: 'mobile',
            render: (v, d) => {
                return d.user.mobile;
            }
        }, {
            title: '贷款金额',
            field: 'loanAmount',
            amount: true
        }, {
            title: '剩余欠款',
            field: 'restAmount',
            amount: true
        }, {
            title: '未还清收成本',
            field: 'restTotalCost',
            amount: true
        }, {
            title: '车牌号',
            field: 'carNumber',
            render: (v, d) => {
                return d.budgetOrder.carNumber;
            }
        }, {
            title: '车型',
            field: 'carModel',
            render: (v, d) => {
                return d.budgetOrder.carModel;
            }
        }, {
            title: '收车地点',
            field: 'takeCarAddress',
            render: (v, d) => {
                return d.overdueRepayPlan.takeCarAddress;
            }
        }, {
            title: '收车时间',
            field: 'takeDatetime',
            render: (v, d) => {
                return dateFormat(d.overdueRepayPlan.takeDatetime);
            }
        }, {
            title: '当前节点',
            field: 'curNodeCode',
            type: 'select',
            listCode: 630147,
            keyName: 'code',
            valueName: 'name'
        }];
        return this.props.buildList({
            fields,
            pageCode: 630520,
            searchParams: {
                refType: '0',
                curNodeCodeList: ['021_08', '021_25', '021_26', '021_27', '021_28', '021_29']
            },
            btnEvent: {
                dispose: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_08') {
                        showWarnMsg('当前节点不是已录入代处理');
                    } else {
                        this.props.history.push(`/biz/trailer/dispose?code=${selectedRowKeys[0]}`);
                    }
                },
                finance: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_26' && selectedRows[0].curNodeCode !== '021_27') {
                        showWarnMsg('当前节点不是财务审核');
                    } else {
                        this.props.history.push(`/biz/trailer/finance?code=${selectedRowKeys[0]}`);
                    }
                },
                cashier: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_28') {
                        showWarnMsg('当前节点不是出纳打款');
                    } else {
                        this.props.history.push(`/biz/trailer/cashier?code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default trailer;
