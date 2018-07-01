import React from 'react';
import XLSX from 'xlsx';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/printing/mortgage-make';
import {
    getQueryString,
    getUserId,
    showSucMsg,
    moneyFormat,
    moneyUppercase,
    dateFormat,
    formatDate
} from 'common/js/util';
import fetch from 'common/js/fetch';
import {
    DetailWrapper
} from 'common/js/build-detail';

@DetailWrapper(
    state => state.printingMortgageMake, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class MortgageMake extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        const fields = [{
            title: '主贷人姓名',
            field: 'customerName',
            readonly: true
        }, {
            title: '身份证号码',
            field: 'idNo',
            readonly: true
        }, {
            title: '配偶姓名',
            field: 'ghRealName',
            readonly: true
        }, {
            title: '身份证号码',
            field: 'ghIdNo',
            readonly: true
        }, {
            title: '家庭地址',
            field: 'applyNowAddress',
            readonly: true
        }, {
            title: '担保合同编号',
            field: 'guaranteeContractCode',
            readonly: true
        }, {
            title: '账单日',
            field: 'billDatetime',
            readonly: true
        }, {
            title: '车牌号',
            field: 'carNumber'
        }, {
            title: '车架号',
            field: 'frameNo'
        }, {
            title: '发动机号',
            field: 'engineNo'
        }, {
            title: '贷款银行',
            field: 'loanBankName',
            readonly: true
        }, {
            title: '银行贷款额',
            field: 'loanAmount',
            readonly: true
        }, {
            title: '服务费',
            field: 'fee',
            readonly: true
        }, {
            title: '履约保证金',
            field: 'lyAmount',
            readonly: true
        }, {
            title: '贷款期限（年）',
            field: 'guarantContractDeadline',
            readonly: true
        }, {
            title: '银行全称',
            field: 'fullName',
            formatter: (v, d) => {
                return d.bankSubbranch.fullName;
            },
            readonly: true
        }, {
            title: '银行委托人',
            field: 'bankClient',
            formatter: (v, d) => {
                return d.bankSubbranch.bankClient;
            },
            readonly: true
        }, {
            title: '银行地址',
            field: 'address',
            formatter: (v, d) => {
                return d.bankSubbranch.address;
            },
            readonly: true
        }, {
            title: '银行电话',
            field: 'phoneNumber',
            formatter: (v, d) => {
                return d.bankSubbranch.phoneNumber;
            },
            readonly: true
        }, {
            title: '委托数有效期',
            field: 'clientValidDate',
            formatter: (v, d) => {
                return formatDate(d.bankSubbranch.clientValidDate);
            },
            readonly: true
        }, {
            title: '授权人姓名',
            field: 'autherName',
            formatter: (v, d) => {
                return d.bankSubbranch.autherName;
            },
            readonly: true
        }, {
            title: '授权人身份证',
            field: 'autherIdNo',
            formatter: (v, d) => {
                return d.bankSubbranch.autherIdNo;
            },
            readonly: true
        }, {
            title: '授权人电话',
            field: 'autherPhone',
            formatter: (v, d) => {
                return d.bankSubbranch.autherPhone;
            },
            readonly: true
        }, {
            title: '授权人地址',
            field: 'autherAddress',
            formatter: (v, d) => {
                return d.bankSubbranch.autherAddress;
            },
            readonly: true
        }, {
            title: '信用卡类型',
            field: 'creditCardType',
            formatter: (v, d) => {
                return d.bankSubbranch.creditCardType;
            },
            type: 'select',
            key: 'credit_card_type',
            readonly: true
        }, {
            title: '信用卡名称',
            field: 'creditCardName',
            formatter: (v, d) => {
                return d.bankSubbranch.creditCardName;
            },
            readonly: true
        }, {
            title: '所属地区',
            field: 'belongArea',
            formatter: (v, d) => {
                return d.bankSubbranch.belongArea;
            },
            readonly: true
        }, {
            title: '套打模版',
            field: 'pledgePrintTemplateId',
            type: 'select',
            key: 'guarant_print_template_id'
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 632146,
            buttons: [{
                    title: '打印',
                    check: true,
                    handler: (param) => {
                        param.operator = getUserId();
                        this.props.doFetching();
                        let pageData = this.props.pageData;
                        console.log(fields);
                        fetch(632192, param).then((data) => {
                            let str = dateFormat(data.pledgePrintDatetime);
                            let date = str.split('-');
                            let arr = [
                                ['主贷人姓名', data.customerName],
                                ['身份证号码', data.idNo],
                                ['配偶姓名', data.ghRealName],
                                ['身份证号码', data.ghIdNo],
                                ['家庭住址', data.applyNowAddress],
                                ['合同编号', data.pledgeContractCode],
                                ['车牌号', data.carNumber],
                                ['车架号', data.frameNo],
                                ['发动机号', data.engineNo],
                                ['贷款（大写）', moneyUppercase(data.loanAmount)],
                                ['贷款（小写）', moneyFormat(data.loanAmount)],
                                ['履约保证金（大写）', moneyUppercase(data.lyAmount)],
                                ['履约保证金（小写）', moneyFormat(data.lyAmount)],
                                ['年份', date[0]],
                                ['月', date[1]],
                                ['日', date[2]],
                                ['贷款期限（年）', data.guarantContractDeadline],
                                ['银行委托人', pageData.bankSubbranch.bankClient],
                                ['银行名称', pageData.bankSubbranch.fullName],
                                ['委托书有效期', pageData.bankSubbranch.clientValidDate],
                                ['授权人姓名', pageData.bankSubbranch.clientValidDate],
                                ['授权人身份证', pageData.bankSubbranch.autherIdNo],
                                ['授权人住址', pageData.bankSubbranch.autherAddress],
                                ['授权人电话', pageData.bankSubbranch.autherPhone],
                                ['信用卡类型', pageData.bankSubbranch.creditCardType],
                                ['信用卡名称', pageData.bankSubbranch.creditCardName],
                                ['所属地区', pageData.bankSubbranch.belongArea]
                            ];
                            const ws = XLSX.utils.aoa_to_sheet(arr);
                            const wb = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
                            XLSX.writeFile(wb, 'sheetjs.xlsx');
                            showSucMsg('操作成功');
                            this.props.cancelFetching();
                        }).catch(this.props.cancelFetching());
                    }
                },
                {
                    title: '返回',
                    handler: (param) => {
                        this.props.history.go(-1);
                    }
                }
            ]
        });
    }
}

export default MortgageMake;