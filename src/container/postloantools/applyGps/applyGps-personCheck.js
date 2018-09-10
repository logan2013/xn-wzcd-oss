import React from 'react';
import {
  initStates,
  doFetching,
  cancelFetching,
  setSelectData,
  setPageData,
  restore
} from '@redux/postloantools/applyGps-personCheck';
import {
  getQueryString,
  showSucMsg,
  getUserId,
  getCompanyCode,
  showWarnMsg
} from 'common/js/util';
import {
  DetailWrapper
} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
  state => state.postloantoolsApplyGpsPersonCheck, {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
  }
)
class applyGpsPersonCheck extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.state = {
      isRemark: false
    };
  }
  render() {
    const fields = [{
      title: '申领个数',
      field: 'applyCount',
      readonly: true
    }, {
      title: '申领人',
      field: 'applyUserName',
      readonly: true
    }, {
      title: '申领原因',
      field: 'applyReason',
      readonly: true
    }, {
      title: '申领列表',
      field: 'gpsList',
      type: 'o2m',
      options: {
        add: true,
        delete: true,
        fields: [{
          title: 'GPS设备号',
          field: 'code',
          type: 'select',
          listCode: 632707,
          params: {
            applyStatus: '0',
            companyApplyStatus: '1',
            companyCode: getCompanyCode()
          },
          keyName: 'code',
          valueName: 'gpsDevNo',
          nowrap: true,
          required: true
        }]
      }
    }, {
      title: '审核意见',
      field: 'approveNote',
      required: true,
      type: 'select',
      key: 'approve_note',
      onChange: (v) => {
          this.setState({
              isRemark: v === '99'
          });
      }
  }, {
      title: '备注',
      field: 'remark',
      required: true,
      hidden: !this.state.isRemark
  }];
    return this.props.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 632716,
      buttons: [{
        title: '通过',
        handler: (param) => {
          param.approveResult = '1';
          param.approveUser = getUserId();
          if (param.gpsList.length < 1) {
            showWarnMsg('请新增GPS!');
            return false;
          }
          this.props.doFetching();
          fetch(632713, param).then(() => {
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
        title: '不通过',
        handler: (param) => {
          param.approveResult = '0';
          param.approveNote = this.projectCode;
          param.approveUser = getUserId();
          this.props.doFetching();
          fetch(632713, param).then(() => {
            showSucMsg('操作成功');
            this.props.cancelFetching();
            setTimeout(() => {
              this.props.history.go(-1);
            }, 1000);
          }).catch(this.props.cancelFetching);
        },
        check: true
      }, {
        title: '返回',
        handler: (param) => {
          this.props.history.go(-1);
        }
      }]
    });
  }
}

export default applyGpsPersonCheck;