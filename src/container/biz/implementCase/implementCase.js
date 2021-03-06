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
} from '@redux/biz/implementCase/implementCase';
import {
    listWrapper
} from 'common/js/build-list';
import {
  showWarnMsg,
  showSucMsg,
  formatDate,
  moneyFormat
} from 'common/js/util';
import {
    Button,
    Upload,
    Modal
} from 'antd';
import {
    implementCaseAgain
} from 'api/biz';

@listWrapper(
    state => ({
        ...state.bizImplementCase,
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
class ImplementCase extends React.Component {
    constructor(props) {
        super(props);
        this.arr = ['执毕', '和解', '终结'];
    }
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
            title: '申请人',
            field: 'exeApplyUser',
            render: (v, d) => {
                return d.judge.exeApplyUser;
            }
        }, {
            title: '被执行人',
            field: 'beExeUser',
            render: (v, d) => {
                return d.judge.beExeUser;
            }
        }, {
            title: '申请标的额',
            field: 'executeMarkAmount',
            render: (v, d) => {
                return moneyFormat(d.judge.executeMarkAmount);
            }
        }, {
            title: '申请时间',
            field: 'applyDatetime',
            render: (v, d) => {
                return formatDate(d.judge.applyDatetime);
            }
        }, {
            title: '经办法官',
            field: 'handleJudge',
            render: (v, d) => {
                return d.judge.handleJudge;
            }
        }, {
            title: '执行案号',
            field: 'hearCaseNumber',
            render: (v, d) => {
                return d.judge.hearCaseNumber;
            }
        }, {
            title: '优先权标的物',
            field: 'caseSubject',
            render: (v, d) => {
                return d.judge.caseSubject;
            }
        }, {
            title: '标的物拍卖时间',
            field: 'saleDatetime',
            render: (v, d) => {
                return formatDate(d.judge.saleDatetime);
            }
        }, {
            title: '有关公告时间',
            field: 'noticeDatetime',
            render: (v, d) => {
                return formatDate(d.judge.noticeDatetime);
            }
        }, {
            title: '执行结果',
            field: 'exeResult',
            render: (v, d) => {
                return this.arr[d.judge.exeResult];
            }
        }, {
            title: '查封裁定到期时间',
            field: 'adjudicationDeadline',
            render: (v, d) => {
                return formatDate(d.judge.adjudicationDeadline);
            }
        }, {
            title: '当前节点',
            field: 'curNodeCode',
            type: 'select',
            listCode: 630147,
            keyName: 'code',
            valueName: 'name'
        }, {
            title: '备注',
            field: 'remark1',
            render: (v, d) => {
                return d.judge.remark;
            }
        }];
        return this.props.buildList({
            fields,
            pageCode: 630520,
            searchParams: {
                isImplementAgain: '0',
                curNodeCodeList: ['021_16', '021_17', '021_18', '021_19', '021_20', '021_22', '021_23', '021_24']
            },
            btnEvent: {
                apply: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_16') {
                        showWarnMsg('当前节点不是申请执行');
                    } else {
                        this.props.history.push(`/biz/implementCase/apply?code=${selectedRowKeys[0]}&bizCode=${selectedRows[0].budgetOrder.code}`);
                    }
                },
                acceptance: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_17') {
                        showWarnMsg('当前节点不是案件受理');
                    } else {
                        this.props.history.push(`/biz/implementCase/acceptance?code=${selectedRowKeys[0]}`);
                    }
                },
                auction: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_18') {
                        showWarnMsg('当前节点不是拍卖');
                    } else {
                        this.props.history.push(`/biz/implementCase/auction?code=${selectedRowKeys[0]}`);
                    }
                },
                notice: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_19') {
                        showWarnMsg('当前节点不是公告');
                    } else {
                        this.props.history.push(`/biz/implementCase/notice?code=${selectedRowKeys[0]}`);
                    }
                },
                result: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_20') {
                        showWarnMsg('当前节点不是执行结果');
                    } else {
                        this.props.history.push(`/biz/implementCase/result?code=${selectedRowKeys[0]}`);
                    }
                },
                finance: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_22') {
                        showWarnMsg('当前节点不是财务确认收款');
                    } else {
                        this.props.history.push(`/biz/implementCase/finance?code=${selectedRowKeys[0]}`);
                    }
                },
                enter: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].curNodeCode !== '021_23') {
                        showWarnMsg('当前节点不是录入查封裁定到期时间');
                    } else {
                        this.props.history.push(`/biz/implementCase/enter?code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default ImplementCase;