import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu',
    component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/role/nodemenu',
    component: asyncComponent(() => import('container/security/node-menu/node-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role',
    component: asyncComponent(() => import('container/security/user/assign'))
  },
  {
    path: '/system/user/pwd_reset',
    component: asyncComponent(() => import('container/security/user/pwdReset'))
  },
  {
    path: '/system/user/post',
    component: asyncComponent(() => import('container/security/user/post'))
  },

  //  系统参数
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  {
    path: '/system/node',
    component: asyncComponent(() => import('container/security/node/node'))
  },
  {
    path: '/system/node/addedit',
    component: asyncComponent(() => import('container/security/node-addedit/node-addedit'))
  },
  {
      path: '/system/node/setMateriallist',
      component: asyncComponent(() => import('container/security/node-setMateriallist/node-setMateriallist'))
  },
  {
    path: '/system/compConstruct',
    component: asyncComponent(() => import('container/security/compConstruct/compConstruct'))
  },
  {
    path: '/system/post',
    component: asyncComponent(() => import('container/security/post/post'))
  },
  {
    path: '/public/aboutus_addedit',
    component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
  },
  {
    path: '/public/hotLine_addedit',
    component: asyncComponent(() => import('container/public/hotLine-addedit/hotLine-addedit'))
  },
  {
    path: '/public/time_addedit',
    component: asyncComponent(() => import('container/public/time-addedit/time-addedit'))
  },
  {
    path: '/public/notice',
    component: asyncComponent(() => import('container/public/notice/notice'))
  },
  {
    path: '/public/notice/addedit',
    component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
  },
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  {
    path: '/biz/brand',
    component: asyncComponent(() => import('container/biz/carSale/brand'))
  },
  {
    path: '/biz/brand/addedit',
    component: asyncComponent(() => import('container/biz/carSale/brand-addedit'))
  },
  {
    path: '/biz/carSeries',
    component: asyncComponent(() => import('container/biz/carSale/carSeries'))
  },
  {
    path: '/biz/carSeries/addedit',
    component: asyncComponent(() => import('container/biz/carSale/carSeries-addedit'))
  },
  //  车型管理
  {
    path: '/biz/carShape',
    component: asyncComponent(() => import('container/biz/carSale/carShape'))
  },
  //  车型管理详情
  {
    path: '/biz/carShape/addedit',
    component: asyncComponent(() => import('container/biz/carSale/carShape-addedit'))
  },
  //  车贷申请单
  {
    path: '/biz/handleApply',
    component: asyncComponent(() => import('container/biz/carSale/handleApply'))
  },
  //  车贷申请单 处理
  {
    path: '/biz/handleApply/check',
    component: asyncComponent(() => import('container/biz/carSale/handleApply-check'))
  },
  //  历史车贷申请单
  {
    path: '/biz/historicalApply',
    component: asyncComponent(() => import('container/biz/carSale/historicalApply'))
  },
  //  历史车贷申请单 详情
  {
    path: '/biz/historicalApply/addedit',
    component: asyncComponent(() => import('container/biz/carSale/historicalApply-addedit'))
  },
  //  会员查询
  {
    path: '/biz/memberInquiries',
    component: asyncComponent(() => import('container/biz/administration/memberInquiries'))
  },
  //  会员详情
  {
    path: '/biz/memberInquiries/addedit',
    component: asyncComponent(() => import('container/biz/administration/memberInquiries-addedit'))
  },
  //  还款卡查询
  {
    path: '/biz/refundCard',
    component: asyncComponent(() => import('container/biz/administration/refundCard'))
  },
  //  还款卡详情
  {
    path: '/biz/refundCard/addedit',
    component: asyncComponent(() => import('container/biz/administration/refundCard-addedit'))
  },
  {
    path: '/general/textParam',
    component: asyncComponent(() => import('container/general/text-param/text-param'))
  },
  {
    path: '/general/textParam/addedit',
    component: asyncComponent(() => import('container/general/text-param-addedit/text-param-addedit'))
  },
  // 会员账户 -- 账户查询
  {
    path: '/finance/userAccount',
    component: asyncComponent(() => import('container/finance/user-account/user-account'))
  },
  // 会员账户 -- 账户查询 -- 流水
  {
    path: '/finance/userAccount/flows',
    component: asyncComponent(() => import('container/finance/user-flows/user-flows'))
  },
  // 会员账户 -- 流水查询
  {
    path: '/finance/userLedger',
    component: asyncComponent(() => import('container/finance/all-user-flows/all-user-flows'))
  },
  {
    path: '/finance/breakBalance',
    component: asyncComponent(() => import('container/finance/account/account'))
  },
  {
    path: '/finance/breakBalance/ledger',
    component: asyncComponent(() => import('container/finance/account-ledger/account-ledger'))
  },
  {
    path: '/finance/platform_ledger',
    component: asyncComponent(() => import('container/finance/platform-ledger/platform-ledger'))
  },
  {
    path: '/finance/platform_ledger/addedit',
    component: asyncComponent(() => import('container/finance/ledger-addedit/ledger-addedit'))
  },
  {
    path: '/finance/enchashmentRule',
    component: asyncComponent(() => import('container/finance/enchashmentRule/enchashmentRule'))
  },
  {
    path: '/finance/enchashmentRule/addedit',
    component: asyncComponent(() => import('container/finance/enchashmentRule-addedit/enchashmentRule-addedit'))
  },
  {
    path: '/finance/underEnchashment',
    component: asyncComponent(() => import('container/finance/underEnchashment/underEnchashment'))
  },
  {
    path: '/finance/underEnchashment/addedit',
    component: asyncComponent(() => import('container/finance/underEnchashment-addedit/underEnchashment-addedit'))
  },
  {
    path: '/finance/underEnchashment/check',
    component: asyncComponent(() => import('container/finance/underEnchashment-check/underEnchashment-check'))
  },
  {
    path: '/finance/enchashments',
    component: asyncComponent(() => import('container/finance/enchashments/enchashments'))
  },
  {
    path: '/finance/enchashments/addedit',
    component: asyncComponent(() => import('container/finance/enchashments-addedit/enchashments-addedit'))
  },
  //  车辆贷后管理
  //  车贷业务管理
  {
    path: '/biz/carLoanBusiness',
    component: asyncComponent(() => import('container/biz/carLoanRepay/carLoanBusiness'))
  },
  //  车贷业务详情
  {
    path: '/biz/carLoanBusiness/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/carLoanBusiness-addedit'))
  },
  //  车贷业务审核
  {
    path: '/biz/carLoanBusiness/check',
    component: asyncComponent(() => import('container/biz/carLoanRepay/carLoanBusiness-check'))
  },
  //  银行放款
  {
    path: '/biz/bankMoney',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney'))
  },
  //  银行放款 详情
  {
    path: '/biz/bankMoney/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney-addedit'))
  },
  //  银行放款 车辆落户
  {
    path: '/biz/bankMoney/settle',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney-settle'))
  },
  //  银行放款 确认提交银行
  {
    path: '/biz/bankMoney/sub',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney-sub'))
  },
  //  银行放款 确认收款
  {
    path: '/biz/bankMoney/certain',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney-certain'))
  },
  //  银行放款 录入
  {
    path: '/biz/bankMoney/enter',
    component: asyncComponent(() => import('container/biz/carLoanRepay/bankMoney-enter'))
  },
  //  车辆抵押
  {
    path: '/biz/mortgage',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgage'))
  },
  //  车辆抵押 详情
  {
    path: '/biz/mortgage/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgage-addedit'))
  },
  //  车辆抵押 录入抵押信息
  {
    path: '/biz/mortgage/enter',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgage-enter'))
  },
  //  车辆抵押 确认提交银行
  {
    path: '/biz/mortgage/sub',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgage-sub'))
  },
  //  车辆抵押 抵押完成
  {
    path: '/biz/mortgage/certain',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgage-certain'))
  },
  //  档案入党
  {
    path: '/biz/archives',
    component: asyncComponent(() => import('container/biz/carLoanRepay/archives'))
  },
  //  档案入党 详情
  {
    path: '/biz/archives/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/archives-addedit'))
  },
  //  档案入党 确认入档
  {
    path: '/biz/archives/certain',
    component: asyncComponent(() => import('container/biz/carLoanRepay/archives-certain'))
  },
  //  还款业务管理
  {
    path: '/biz/refundBusiness',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundBusiness'))
  },
  //  还款业务详情
  {
    path: '/biz/refundBusiness/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundBusiness-addedit'))
  },
  //  还款业务还款计划
  {
    path: '/biz/refundBusiness/plan',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundBusiness-plan'))
  },
  //  还款业务还款卡变更
  {
    path: '/biz/refundBusiness/changecard',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundBusiness-changeCard'))
  },
  //  还款业务确认结清
  {
    path: '/biz/refundBusiness/certain',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundBusiness-certain'))
  },
  //  当月还款名单
  {
    path: '/biz/refundList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundList'))
  },
  //  当月还款名单详情
  {
    path: '/biz/refundList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/refundList-addedit'))
  },
  //  逾期名单
  {
    path: '/biz/overdueList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/overdueList'))
  },
  //  逾期名单详情
  {
    path: '/biz/overdueList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/overdueList-addedit'))
  },
  //  逾期处理
  {
    path: '/biz/overdueList/dispose',
    component: asyncComponent(() => import('container/biz/carLoanRepay/overdueList-dispose'))
  },
  //  绿名单
  {
    path: '/biz/greenList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/greenList'))
  },
  //  绿名单详情
  {
    path: '/biz/greenList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/greenList-addedit'))
  },
  //  绿名单 缴纳清收成本
  {
    path: '/biz/greenList/payment',
    component: asyncComponent(() => import('container/biz/carLoanRepay/greenList-payment'))
  },
  //  黄名单
  {
    path: '/biz/yellowList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/yellowList'))
  },
  //  黄名单 详情
  {
    path: '/biz/yellowList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/yellowList-addedit'))
  },
  //  黄名单 缴纳清收成本
  {
    path: '/biz/yellowList/payCost',
    component: asyncComponent(() => import('container/biz/carLoanRepay/yellowList-payCost'))
  },
  //  黄名单 缴纳代偿款
  {
    path: '/biz/yellowList/payCompensate',
    component: asyncComponent(() => import('container/biz/carLoanRepay/yellowList-payCompensate'))
  },
  //  黑名单
  {
    path: '/biz/blackList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/blackList'))
  },
  //  黑名单详情
  {
    path: '/biz/blackList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/blackList-addedit'))
  },
  //  黑名单处理
  {
    path: '/biz/blackList/dispose',
    component: asyncComponent(() => import('container/biz/carLoanRepay/blackList-dispose'))
  },
  //  红名单
  {
    path: '/biz/redList',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList'))
  },
  //  红名单 详情
  {
    path: '/biz/redList/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList-addedit'))
  },
  //  红名单 拖车申请
  {
    path: '/biz/redList/apply',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList-apply'))
  },
  //  红名单 录入拖车结果
  {
    path: '/biz/redList/enter',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList-enter'))
  },
  //  红名单 财务打款
  {
    path: '/biz/redList/pay',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList-pay'))
  },
  //  红名单 总经理审核
  {
    path: '/biz/redList/check',
    component: asyncComponent(() => import('container/biz/carLoanRepay/redList-check'))
  },
  //  拖车管理
  {
    path: '/biz/trailer',
    component: asyncComponent(() => import('container/biz/carLoanRepay/trailer'))
  },
  //  拖车管理 详情
  {
    path: '/biz/trailer/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/trailer-addedit'))
  },
  //  拖车管理 处理结果
  {
    path: '/biz/trailer/dispose',
    component: asyncComponent(() => import('container/biz/carLoanRepay/trailer-dispose'))
  },
  //  用户赎回
  {
    path: '/biz/userRedemption',
    component: asyncComponent(() => import('container/biz/carLoanRepay/userRedemption'))
  },
  //  用户赎回 详情
  {
    path: '/biz/userRedemption/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/userRedemption-addedit'))
  },
  //  用户赎回 申请赎回
  {
    path: '/biz/userRedemption/applyRedeem',
    component: asyncComponent(() => import('container/biz/carLoanRepay/userRedemption-applyRedeem'))
  },
  //  用户赎回 风控主管审核
  {
    path: '/biz/userRedemption/checkDirector',
    component: asyncComponent(() => import('container/biz/carLoanRepay/userRedemption-checkDirector'))
  },
  //  用户赎回 财务经理审核
  {
    path: '/biz/userRedemption/checkFinance',
    component: asyncComponent(() => import('container/biz/carLoanRepay/userRedemption-checkFinance'))
  },
  //  司法诉讼
  {
    path: '/biz/litigation',
    component: asyncComponent(() => import('container/biz/carLoanRepay/litigation'))
  },
  //  司法诉讼 详情
  {
    path: '/biz/litigation/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/litigation-addedit'))
  },
  //  司法诉讼 处理结果
  {
    path: '/biz/litigation/dispose',
    component: asyncComponent(() => import('container/biz/carLoanRepay/litigation-dispose'))
  },
  //  结清审核
  {
    path: '/biz/settlement',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement'))
  },
  //  结清审核 详情
  {
    path: '/biz/settlement/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement-addedit'))
  },
  //  结清审核 清欠催收部审核
  {
    path: '/biz/settlement/collection',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement-collection'))
  },
  //  结清审核 驻行人员审核
  {
    path: '/biz/settlement/stationed',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement-stationed'))
  },
  //  结清审核 总经理审核
  {
    path: '/biz/settlement/manager',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement-manager'))
  },
  //  结清审核 财务审核
  {
    path: '/biz/settlement/finance',
    component: asyncComponent(() => import('container/biz/carLoanRepay/settlement-finance'))
  },
  //  解除抵押
  {
    path: '/biz/mortgages',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgages'))
  },
  //  解除抵押 详情
  {
    path: '/biz/mortgages/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgages-addedit'))
  },
  //  解除抵押 解除抵押
  {
    path: '/biz/mortgages/relieve',
    component: asyncComponent(() => import('container/biz/carLoanRepay/mortgages-relieve'))
  },
  //  历史业务管理
  {
    path: '/biz/historyBusinessManage',
    component: asyncComponent(() => import('container/biz/carLoanRepay/historyBusinessManage'))
  },
  //  历史业务管理详情
  {
    path: '/biz/historyBusinessManage/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/historyBusinessManage-addedit'))
  },
  //  历史业务管理详情的详情
  {
    path: '/biz/historyBusinessManage/addedit/addedit',
    component: asyncComponent(() => import('container/biz/carLoanRepay/historyBusinessManage-addedit-addedit'))
  },
  // 基础管理
  //  保险公司管理
  {
      path: '/basis/insuranceCompany',
      component: asyncComponent(() => import('container/basis/insuranceCompany/insuranceCompany'))
  },

  //  保险公司管理 新增,修改
  {
      path: '/basis/insuranceCompany/addedit',
      component: asyncComponent(() => import('container/basis/insuranceCompany/insuranceCompany-addedit'))
  },

  //  收款账户管理
  {
      path: '/basis/receivables',
      component: asyncComponent(() => import('container/basis/receivables/receivables'))
  },

  //  收款账户管理 新增，修改
  {
      path: '/basis/receivables/addedit',
      component: asyncComponent(() => import('container/basis/receivables/receivables-addedit'))
  },

  //  银行管理
  {
      path: '/basis/bank',
      component: asyncComponent(() => import('container/basis/bank/bank'))
  },
  //  银行管理详情 + 修改
  {
      path: '/basis/bank/addedit',
      component: asyncComponent(() => import('container/basis/bank/bank-addedit'))
  },

  //  银行管理
  {
      path: '/basis/bank/subbranch',
      component: asyncComponent(() => import('container/basis/bank/subbranch'))
  },
  //  银行管理详情 + 修改
  {
      path: '/basis/bank/subbranch/addedit',
      component: asyncComponent(() => import('container/basis/bank/subbranch-addedit'))
  },

  //  身份证区域表
  {
      path: '/basis/idCardArea',
      component: asyncComponent(() => import('container/basis/idCardArea/idCardArea'))
  },

  //  身份证区域表 新增，修改
  {
      path: '/basis/idCardArea/addedit',
      component: asyncComponent(() => import('container/basis/idCardArea/idCardArea-addedit'))
  },

  //  全国省份编号
  {
      path: '/basis/provinceNum',
      component: asyncComponent(() => import('container/basis/provinceNum/provinceNum'))
  },

  //  全国省份编号 新增，修改
  {
      path: '/basis/provinceNum/addedit',
      component: asyncComponent(() => import('container/basis/provinceNum/provinceNum-addedit'))
  },

  //  经销商管理
  {
      path: '/basis/dealer',
      component: asyncComponent(() => import('container/basis/dealer/dealer'))
  },

  //  经销商管理 新增，修改
  {
      path: '/basis/dealer/addedit',
      component: asyncComponent(() => import('container/basis/dealer/dealer-addedit'))
  },

  //  经销商管理 审核
  {
      path: '/basis/dealer/check',
      component: asyncComponent(() => import('container/basis/dealer/dealer-check'))
  },

  //  我司贷款成数比例
  {
      path: '/basis/loanPercent',
      component: asyncComponent(() => import('container/basis/loanPercent/loanPercent'))
  },

  //  我司贷款成数比例 新增，修改
  {
      path: '/basis/loanPercent/addedit',
      component: asyncComponent(() => import('container/basis/loanPercent/loanPercent-addedit'))
  },
    //  统计分析模块
  //  余额明细
  {
    path: '/statistic/balancedetail',
    component: asyncComponent(() => import('container/analysis/statistic/balancedetail'))
  },
  //  在保余额
  {
    path: '/statistic/protect',
    component: asyncComponent(() => import('container/analysis/statistic/protect'))
  },
  //  在保余额
  {
    path: '/statistic/protect/addedit',
    component: asyncComponent(() => import('container/analysis/statistic/protect-addedit'))
  },
  // 贷前管理
  // 预算单申请
  {
      path: '/loan/budget',
      component: asyncComponent(() => import('container/loan/budget/budget'))
  },

  // 预算单申请 详情
  {
      path: '/loan/budget/addedit',
      component: asyncComponent(() => import('container/loan/budget-addedit/budget-addedit'))
  },

  // 贷款审查
  {
      path: '/loan/budgetCheck',
      component: asyncComponent(() => import('container/loan/budgetCheck/budgetCheck'))
  },
  // 发起征信查询
  {
      path: '/loan/creditStart',
      component: asyncComponent(() => import('container/loan/creditStart/creditStart'))
  },

  // 发起征信查询  发起征信查询
  {
      path: '/loan/creditStart/addedit',
      component: asyncComponent(() => import('container/loan/creditStart-addedit/creditStart-addedit'))
  },

  // 征信录入
  {
      path: '/loan/creditEntering',
      component: asyncComponent(() => import('container/loan/creditEntering/creditEntering'))
  },

  // 准入审查
  {
      path: '/loan/creditCheck',
      component: asyncComponent(() => import('container/loan/creditCheck/creditCheck'))
  },

  //  发起垫资
  {
    path: '/loan/advMoney',
    component: asyncComponent(() => import('container/loan/advMoney/advMoney'))
  },

  //  发起垫资 详情
  {
    path: '/loan/advMoney/addedit',
    component: asyncComponent(() => import('container/loan/advMoney/advMoney-addedit'))
  },

  //  发起垫资 确认用款单
  {
    path: '/loan/advMoney/apply',
    component: asyncComponent(() => import('container/loan/advMoney/advMoney-apply'))
  },

  //  发起垫资 区域总经理审核
  {
    path: '/loan/advMoney/areaCheck',
    component: asyncComponent(() => import('container/loan/advMoney/advMoney-areaCheck'))
  },

  //  发起垫资 省分公司总经理审核
  {
    path: '/loan/advMoney/areaCheck',
    component: asyncComponent(() => import('container/loan/advMoney/advMoney-areaCheck'))
  },

  //  垫资审核
  {
    path: '/loan/moneyCheck',
    component: asyncComponent(() => import('container/loan/moneyCheck/moneyCheck'))
  },

  //  垫资审核 总公司制单
  {
    path: '/loan/moneyCheck/allBill',
    component: asyncComponent(() => import('container/loan/moneyCheck/moneyCheck-allBill'))
  },

  //  垫资审核 分公司制单
  {
    path: '/loan/moneyCheck/compBill',
    component: asyncComponent(() => import('container/loan/moneyCheck/moneyCheck-compBill'))
  },

  //  垫资审核 确认打款车行
  {
    path: '/loan/moneyCheck/payCar',
    component: asyncComponent(() => import('container/loan/moneyCheck/moneyCheck-payCar'))
  },

  //  垫资审核 确认打款分公司
  {
    path: '/loan/moneyCheck/payComp',
    component: asyncComponent(() => import('container/loan/moneyCheck/moneyCheck-payComp'))
  },

  //  放款审核
  {
    path: '/loan/bankMoney',
    component: asyncComponent(() => import('container/loan/bankMoney/bankMoney'))
  },

  //  放款审核 详情
  {
    path: '/loan/bankMoney/addedit',
    component: asyncComponent(() => import('container/loan/bankMoney/bankMoney-addedit'))
  },

  //  放款审核 确认提交银行
  {
    path: '/loan/bankMoney/apply',
    component: asyncComponent(() => import('container/loan/bankMoney/bankMoney-apply'))
  },

  //  放款审核 确认收款
  {
    path: '/loan/bankMoney/receive',
    component: asyncComponent(() => import('container/loan/bankMoney/bankMoney-receive'))
  },

  //  车辆抵押
  {
    path: '/loan/mortgage',
    component: asyncComponent(() => import('container/loan/mortgage/mortgage'))
  },

  //  车辆抵押 详情
  {
    path: '/loan/mortgage/addedit',
    component: asyncComponent(() => import('container/loan/mortgage/mortgage-addedit'))
  },

  //  车辆抵押 确认提交银行
  {
    path: '/loan/mortgage/apply',
    component: asyncComponent(() => import('container/loan/mortgage/mortgage-apply'))
  },

  //  车贷入档
  {
    path: '/loan/archives',
    component: asyncComponent(() => import('container/loan/archives/archives'))
  },

  //  车贷入档 详情
  {
    path: '/loan/archives/addedit',
    component: asyncComponent(() => import('container/loan/archives/archives-addedit'))
  },

  //  车贷入档 入档补录
  {
    path: '/loan/archives/enter',
    component: asyncComponent(() => import('container/loan/archives/archives-enter'))
  },

  //  贷前工具
  //  垫资请款预算单
  {
      path: '/loanstools/estimate',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate'))
  },

  //  垫资请款预算单 详情
  {
      path: '/loanstools/estimate/addedit',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-addedit'))
  },

  //  垫资请款预算单 申请
  {
      path: '/loanstools/estimate/apply',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-apply'))
  },

  //  垫资请款预算单 审核
  {
      path: '/loanstools/estimate/check',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-check'))
  },

  //  垫资请款预算单 确认放款
  {
      path: '/loanstools/estimate/certain',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-certain'))
  },

  //  客户作废
  {
      path: '/loanstools/cancel',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel'))
  },

  //  客户作废 详情
  {
      path: '/loanstools/cancel/addedit',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-addedit'))
  },

  //  客户作废 申请
  {
      path: '/loanstools/cancel/apply',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-apply'))
  },

  //  客户作废 审核
  {
      path: '/loanstools/cancel/check',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-check'))
  },

  //  客户作废 确认放款
  {
      path: '/loanstools/cancel/certain',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-certain'))
  },

  //  收回垫资款
  {
      path: '/loanstools/take',
      component: asyncComponent(() => import('container/loanstools/take/take'))
  },

  //  收回垫资款 详情
  {
      path: '/loanstools/take/addedit',
      component: asyncComponent(() => import('container/loanstools/take/take-addedit'))
  },

  //  收回垫资款 申请
  {
      path: '/loanstools/take/enter',
      component: asyncComponent(() => import('container/loanstools/take/take-enter'))
  },

  //  收回预算款
  {
      path: '/loanstools/takeEstimate',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate'))
  },

  //  收回预算款 详情
  {
      path: '/loanstools/takeEstimate/addedit',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate-addedit'))
  },

  //  收回预算款 申请
  {
      path: '/loanstools/takeEstimate/certain',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate-certain'))
  },

  //  收回手续费
  {
      path: '/loanstools/takeFree',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree'))
  },

  //  收回手续费 详情
  {
      path: '/loanstools/takeFree/addedit',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree-addedit'))
  },

  //  收回手续费 申请
  {
      path: '/loanstools/takeFree/enter',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree-enter'))
  },

  //  制卡
  {
      path: '/loanstools/card',
      component: asyncComponent(() => import('container/loanstools/card/card'))
  },

  //  制卡 详情
  {
      path: '/loanstools/card/addedit',
      component: asyncComponent(() => import('container/loanstools/card/card-addedit'))
  },

  //  制卡 申请
  {
      path: '/loanstools/card/apply',
      component: asyncComponent(() => import('container/loanstools/card/card-apply'))
  },

  //  制卡 录入
  {
      path: '/loanstools/card/enter',
      component: asyncComponent(() => import('container/loanstools/card/card-enter'))
  },

  //  发保和
  {
      path: '/loanstools/invoice',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice'))
  },

  //  发保和 详情
  {
      path: '/loanstools/invoice/addedit',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice-addedit'))
  },

  //  发保和 申请
  {
      path: '/loanstools/invoice/enter',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice-enter'))
  },

  //  发票不匹配
  {
      path: '/loanstools/misInvoice',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice'))
  },

  //  发票不匹配 详情
  {
      path: '/loanstools/misInvoice/addedit',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-addedit'))
  },

  //  发票不匹配 申请
  {
      path: '/loanstools/misInvoice/apply',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-apply'))
  },

  //  发票不匹配 审核
  {
      path: '/loanstools/misInvoice/check',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-check'))
  },

  //  发票不匹配 二审
  {
      path: '/loanstools/misInvoice/checkTwo',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-checkTwo'))
  },

  //  发票不匹配 确认放款
  {
      path: '/loanstools/misInvoice/certain',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-certain'))
  },

  //  返点支付
  {
      path: '/loanstools/rebates',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates'))
  },

  //  返点支付 详情
  {
      path: '/loanstools/rebates/addedit',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-addedit'))
  },

  //  返点支付 制单
  {
      path: '/loanstools/rebates/bill',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-bill'))
  },

  //  返点支付 确认放款
  {
      path: '/loanstools/rebates/certain',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-certain'))
  },

  //  银行合同导入
  {
      path: '/loanstools/contract',
      component: asyncComponent(() => import('container/loanstools/contract/contract'))
  },

  //  银行合同导入 导入
  {
      path: '/loanstools/contract/import',
      component: asyncComponent(() => import('container/loanstools/contract/contract-import'))
  },

  //  应退按揭款
  {
      path: '/loanstools/refund',
      component: asyncComponent(() => import('container/loanstools/refund/refund'))
  },

  //  应退按揭款 详情
  {
      path: '/loanstools/refund/addedit',
      component: asyncComponent(() => import('container/loanstools/refund/refund-addedit'))
  },

  //  应退按揭款 确认放款
  {
      path: '/loanstools/refund/certain',
      component: asyncComponent(() => import('container/loanstools/refund/refund-certain'))
  },

  //  贷前工具
  //  垫资请款预算单
  {
      path: '/loanstools/estimate',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate'))
  },

  //  垫资请款预算单 详情
  {
      path: '/loanstools/estimate/addedit',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-addedit'))
  },

  //  垫资请款预算单 申请
  {
      path: '/loanstools/estimate/apply',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-apply'))
  },

  //  垫资请款预算单 审核
  {
      path: '/loanstools/estimate/check',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-check'))
  },

  //  垫资请款预算单 确认放款
  {
      path: '/loanstools/estimate/certain',
      component: asyncComponent(() => import('container/loanstools/estimate/estimate-certain'))
  },

  //  客户作废
  {
      path: '/loanstools/cancel',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel'))
  },

  //  客户作废 详情
  {
      path: '/loanstools/cancel/addedit',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-addedit'))
  },

  //  客户作废 申请
  {
      path: '/loanstools/cancel/apply',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-apply'))
  },

  //  客户作废 审核
  {
      path: '/loanstools/cancel/check',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-check'))
  },

  //  客户作废 确认放款
  {
      path: '/loanstools/cancel/certain',
      component: asyncComponent(() => import('container/loanstools/cancel/cancel-certain'))
  },

  //  收回垫资款
  {
      path: '/loanstools/take',
      component: asyncComponent(() => import('container/loanstools/take/take'))
  },

  //  收回垫资款 详情
  {
      path: '/loanstools/take/addedit',
      component: asyncComponent(() => import('container/loanstools/take/take-addedit'))
  },

  //  收回垫资款 申请
  {
      path: '/loanstools/take/enter',
      component: asyncComponent(() => import('container/loanstools/take/take-enter'))
  },

  //  收回预算款
  {
      path: '/loanstools/takeEstimate',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate'))
  },

  //  收回预算款 详情
  {
      path: '/loanstools/takeEstimate/addedit',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate-addedit'))
  },

  //  收回预算款 申请
  {
      path: '/loanstools/takeEstimate/certain',
      component: asyncComponent(() => import('container/loanstools/takeEstimate/takeEstimate-certain'))
  },

  //  收回手续费
  {
      path: '/loanstools/takeFree',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree'))
  },

  //  收回手续费 详情
  {
      path: '/loanstools/takeFree/addedit',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree-addedit'))
  },

  //  收回手续费 申请
  {
      path: '/loanstools/takeFree/enter',
      component: asyncComponent(() => import('container/loanstools/takeFree/takeFree-enter'))
  },

  //  制卡
  {
      path: '/loanstools/card',
      component: asyncComponent(() => import('container/loanstools/card/card'))
  },

  //  制卡 详情
  {
      path: '/loanstools/card/addedit',
      component: asyncComponent(() => import('container/loanstools/card/card-addedit'))
  },

  //  制卡 申请
  {
      path: '/loanstools/card/apply',
      component: asyncComponent(() => import('container/loanstools/card/card-apply'))
  },

  //  发保和
  {
      path: '/loanstools/invoice',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice'))
  },

  //  发保和 详情
  {
      path: '/loanstools/invoice/addedit',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice-addedit'))
  },

  //  发保和 申请
  {
      path: '/loanstools/invoice/enter',
      component: asyncComponent(() => import('container/loanstools/invoice/invoice-enter'))
  },

  //  发票不匹配
  {
      path: '/loanstools/misInvoice',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice'))
  },

  //  发票不匹配 详情
  {
      path: '/loanstools/misInvoice/addedit',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-addedit'))
  },

  //  发票不匹配 申请
  {
      path: '/loanstools/misInvoice/apply',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-apply'))
  },

  //  发票不匹配 审核
  {
      path: '/loanstools/misInvoice/check',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-check'))
  },

  //  发票不匹配 确认放款
  {
      path: '/loanstools/misInvoice/certain',
      component: asyncComponent(() => import('container/loanstools/misInvoice/misInvoice-certain'))
  },

  //  返点支付
  {
      path: '/loanstools/rebates',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates'))
  },

  //  返点支付 详情
  {
      path: '/loanstools/rebates/addedit',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-addedit'))
  },

  //  返点支付 制单
  {
      path: '/loanstools/rebates/bill',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-bill'))
  },

  //  返点支付 确认放款
  {
      path: '/loanstools/rebates/certain',
      component: asyncComponent(() => import('container/loanstools/rebates/rebates-certain'))
  },

  //  银行合同导入
  {
      path: '/loanstools/contract',
      component: asyncComponent(() => import('container/loanstools/contract/contract'))
  },

  //  银行合同导入 导入
  {
      path: '/loanstools/contract/import',
      component: asyncComponent(() => import('container/loanstools/contract/contract-import'))
  },

  //  应退按揭款
  {
      path: '/loanstools/refund',
      component: asyncComponent(() => import('container/loanstools/refund/refund'))
  },

  //  应退按揭款 详情
  {
      path: '/loanstools/refund/addedit',
      component: asyncComponent(() => import('container/loanstools/refund/refund-addedit'))
  },

  //  应退按揭款 确认放款
  {
      path: '/loanstools/refund/certain',
      component: asyncComponent(() => import('container/loanstools/refund/refund-certain'))
  },

  //  资料传递
  //  资料传递
  {
    path: '/transmit/transmit',
    component: asyncComponent(() => import('container/transmit/transmit/transmit'))
  },
  //  资料传递 详情
  {
    path: '/transmit/transmit/addedit',
    component: asyncComponent(() => import('container/transmit/transmit/transmit-addedit'))
  },
  //  资料传递 发件
  {
    path: '/transmit/transmit/send',
    component: asyncComponent(() => import('container/transmit/transmit/transmit-send'))
  },
  //  资料传递 收件并审核
  {
    path: '/transmit/transmit/check',
    component: asyncComponent(() => import('container/transmit/transmit/transmit-check'))
  },
  //  贷后工具
  //  代偿预算单
  {
      path: '/postloantools/budget',
      component: asyncComponent(() => import('container/postloantools/budget/budget'))
  },

  //  代偿预算单 详情
  {
      path: '/postloantools/budget/addedit',
      component: asyncComponent(() => import('container/postloantools/budget/budget-addedit'))
  },

  //  代偿预算单 结清单申请
  {
      path: '/postloantools/budget/apply',
      component: asyncComponent(() => import('container/postloantools/budget/budget-apply'))
  },

  //  代偿预算单 财务经理审核
  {
      path: '/postloantools/budget/check',
      component: asyncComponent(() => import('container/postloantools/budget/budget-check'))
  },

  //  代偿审核
  {
      path: '/postloantools/compensatory',
      component: asyncComponent(() => import('container/postloantools/compensatory/compensatory'))
  },

  //  代偿审核 详情
  {
      path: '/postloantools/compensatory/addedit',
      component: asyncComponent(() => import('container/postloantools/compensatory/compensatory-addedit'))
  },

  //  代偿审核 确认结清
  {
      path: '/postloantools/compensatory/certain',
      component: asyncComponent(() => import('container/postloantools/compensatory/compensatory-certain'))
  },

  //  代偿审核 财务经理审核
  {
      path: '/postloantools/compensatory/check',
      component: asyncComponent(() => import('container/postloantools/compensatory/compensatory-check'))
  },

  //  gps申领
  {
    path: '/postloantools/applyGps',
    component: asyncComponent(() => import('container/postloantools/applyGps/applyGps'))
  },
  //  gps申领 详情
  {
    path: '/postloantools/applyGps/addedit',
    component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-addedit'))
  },
  //  gps申领 申领
  {
    path: '/postloantools/applyGps/apply',
    component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-apply'))
  },
  //  gps申领 GPS管理员审核
  {
    path: '/postloantools/applyGps/check',
    component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-check'))
  },
  //  gps安装
  {
    path: '/postloantools/manageGps',
    component: asyncComponent(() => import('container/postloantools/manageGps/manageGps'))
  },
  //  gps安装 详情
  {
    path: '/postloantools/manageGps/addedit',
    component: asyncComponent(() => import('container/postloantools/manageGps/manageGps-addedit'))
  },
  //  导入逾期名单
  {
    path: '/postloantools/import',
    component: asyncComponent(() => import('container/postloantools/import/import'))
  },
  //  导入逾期名单 详情
  {
    path: '/postloantools/import/addedit',
    component: asyncComponent(() => import('container/postloantools/import/import-addedit'))
  },
  //  导入逾期名单 导入
  {
    path: '/postloantools/import/import',
    component: asyncComponent(() => import('container/postloantools/import/import-import'))
  },
  //  导入逾期名单 处理
  {
    path: '/postloantools/import/dispose',
    component: asyncComponent(() => import('container/postloantools/import/import-dispose'))
  },
  //  人事
  //  人事档案
  {
    path: '/personalarchives/parchives',
    component: asyncComponent(() => import('container/personalarchives/parchives/parchives'))
  },
  //  人事档案 详情
  {
    path: '/personalarchives/parchives/addedit',
    component: asyncComponent(() => import('container/personalarchives/parchives/parchives-addedit'))
  },
  //  人事分析
  {
    path: '/personalarchives/panalysis',
    component: asyncComponent(() => import('container/personalarchives/panalysis/panalysis'))
  },
  //  车贷档案
  {
      path: '/loanarchives/locationcode',
      component: asyncComponent(() => import('container/loanarchives/loanarchives/locationcode'))
  },
  //  车贷档案 详情
  {
      path: '/loanarchives/locationcode/addedit',
      component: asyncComponent(() => import('container/loanarchives/loanarchives/locationcode-addedit'))
  },
  //  车贷档案查询
  {
      path: '/loanarchives/archivesquery',
      component: asyncComponent(() => import('container/loanarchives/loanarchives/archivesquery'))
  },
  //  离职档案
  {
    path: '/personalarchives/quitarchives',
    component: asyncComponent(() => import('container/personalarchives/quitarchives/quitarchives'))
  },
  //  离职档案 详情
  {
    path: '/personalarchives/quitarchives/addedit',
    component: asyncComponent(() => import('container/personalarchives/quitarchives/quitarchives-addedit'))
  },
  //  合同管理
  {
    path: '/contract/manage',
    component: asyncComponent(() => import('container/contract/manage/manage'))
  },
  //  合同管理 详情
  {
    path: '/contract/manage/addedit',
    component: asyncComponent(() => import('container/contract/manage/manage-addedit'))
  },
  //  合同管理 续约
  {
    path: '/contract/manage/continue',
    component: asyncComponent(() => import('container/contract/manage/manage-continue'))
  },
  //  合同管理预警
  {
    path: '/contract/warning',
    component: asyncComponent(() => import('container/contract/warning/warning'))
  },
  //  应聘登记
  {
    path: '/recruit/register',
    component: asyncComponent(() => import('container/recruit/register/register'))
  },
  //  应聘登记 详情
  {
    path: '/recruit/register/addedit',
    component: asyncComponent(() => import('container/recruit/register/register-addedit'))
  },
  //  应聘登记 录入
  {
    path: '/recruit/register/enter',
    component: asyncComponent(() => import('container/recruit/register/register-enter'))
  },
  //  应聘登记 申请
  {
    path: '/recruit/register/apply',
    component: asyncComponent(() => import('container/recruit/register/register-apply'))
  },
  //  用人申请
  {
    path: '/recruit/apply',
    component: asyncComponent(() => import('container/recruit/apply/apply'))
  },
  //  用人申请 详情
  {
    path: '/recruit/apply/addedit',
    component: asyncComponent(() => import('container/recruit/apply/apply-addedit'))
  },
  //  用人申请 申请
  {
    path: '/recruit/apply/apply',
    component: asyncComponent(() => import('container/recruit/apply/apply-apply'))
  },
  //  用人申请 审核
  {
    path: '/recruit/apply/check',
    component: asyncComponent(() => import('container/recruit/apply/apply-check'))
  },
  //  入职申请
  {
    path: '/recruit/entry',
    component: asyncComponent(() => import('container/recruit/entry/entry'))
  },
  //  入职申请 详情
  {
    path: '/recruit/entry/addedit',
    component: asyncComponent(() => import('container/recruit/entry/entry-addedit'))
  },
  //  入职申请 申请
  {
    path: '/recruit/entry/apply',
    component: asyncComponent(() => import('container/recruit/entry/entry-apply'))
  },
  //  入职申请 审核
  {
    path: '/recruit/entry/check',
    component: asyncComponent(() => import('container/recruit/entry/entry-check'))
  },
  //  转正申请
  {
    path: '/recruit/formal',
    component: asyncComponent(() => import('container/recruit/formal/formal'))
  },
  //  转正申请 详情
  {
    path: '/recruit/formal/addedit',
    component: asyncComponent(() => import('container/recruit/formal/formal-addedit'))
  },
  //  转正申请 申请
  {
    path: '/recruit/formal/apply',
    component: asyncComponent(() => import('container/recruit/formal/formal-apply'))
  },
  //  转正申请 审核
  {
    path: '/recruit/formal/check',
    component: asyncComponent(() => import('container/recruit/formal/formal-check'))
  },
  //  调岗申请
  {
    path: '/recruit/post',
    component: asyncComponent(() => import('container/recruit/post/post'))
  },
  //  调岗申请 详情
  {
    path: '/recruit/post/addedit',
    component: asyncComponent(() => import('container/recruit/post/post-addedit'))
  },
  //  调岗申请 详情
  {
    path: '/recruit/post/check',
    component: asyncComponent(() => import('container/recruit/post/post-check'))
  },
  //  请假申请
  {
    path: '/attendance/leave',
    component: asyncComponent(() => import('container/attendance/leave/leave'))
  },
  //  请假申请 详情
  {
    path: '/attendance/leave/addedit',
    component: asyncComponent(() => import('container/attendance/leave/leave-addedit'))
  },
  //  补签申请
  {
      path: '/attendance/supplement',
      component: asyncComponent(() => import('container/attendance/supplement/supplement'))
  },
  //  补签申请 详情
  {
      path: '/attendance/supplement/addedit',
      component: asyncComponent(() => import('container/attendance/supplement/supplement-addedit'))
  },
  //  加班申请
  {
      path: '/attendance/overtime',
      component: asyncComponent(() => import('container/attendance/overtime/overtime'))
  },
  //  加班申请 详情
  {
      path: '/attendance/overtime/addedit',
      component: asyncComponent(() => import('container/attendance/overtime/overtime-addedit'))
  },
  //  出差申请
  {
      path: '/attendance/travel',
      component: asyncComponent(() => import('container/attendance/travel/travel'))
  },
  //  出差申请 详情
  {
      path: '/attendance/travel/addedit',
      component: asyncComponent(() => import('container/attendance/travel/travel-addedit'))
  },
  //  公出申请
  {
      path: '/attendance/publicity',
      component: asyncComponent(() => import('container/attendance/publicity/publicity'))
  },
  //  公出申请 详情
  {
      path: '/attendance/publicity/addedit',
      component: asyncComponent(() => import('container/attendance/publicity/publicity-addedit'))
  },
  //  考勤汇总
  {
      path: '/attendance/summary',
      component: asyncComponent(() => import('container/attendance/summary/summary'))
  },
  //  休息日定义
  {
      path: '/attendance/restDay',
      component: asyncComponent(() => import('container/attendance/restDay/restDay'))
  },
  // 行政
  // 库存管理
  // 类别管理
  {
      path: '/stock/category',
      component: asyncComponent(() => import('container/stock/category/category'))
  },
  // 类别管理 详情
  {
      path: '/stock/category/addedit',
      component: asyncComponent(() => import('container/stock/category/category-addedit'))
  },
  // 品名管理
  {
      path: '/stock/productname',
      component: asyncComponent(() => import('container/stock/productname/productname'))
  },
  // 品名管理 详情
  {
      path: '/stock/productname/addedit',
      component: asyncComponent(() => import('container/stock/productname/productname-addedit'))
  },
  // 出库管理
  {
      path: '/stock/outtreasury',
      component: asyncComponent(() => import('container/stock/outtreasury/outtreasury'))
  },
  // 出库管理 详情
  {
      path: '/stock/outtreasury/addedit',
      component: asyncComponent(() => import('container/stock/outtreasury/outtreasury-addedit'))
  },
  // 库存管理
  {
      path: '/stock/stock',
      component: asyncComponent(() => import('container/stock/stock/stock'))
  },
  // 库存管理 详情
  {
      path: '/stock/stock/addedit',
      component: asyncComponent(() => import('container/stock/stock/stock-addedit'))
  },
  // 通知公告
  // 公告管理
  {
      path: '/notice/notice',
      component: asyncComponent(() => import('container/notice/notice/notice'))
  },
  // 公告管理 详情
  {
      path: '/notice/notice/addedit',
      component: asyncComponent(() => import('container/notice/notice/notice-addedit'))
  },
  // 公司制度
  {
      path: '/notice/companysystem',
      component: asyncComponent(() => import('container/notice/companysystem/companysystem'))
  },
  // 公司制度 详情
  {
      path: '/notice/companysystem/addedit',
      component: asyncComponent(() => import('container/notice/companysystem/companysystem-addedit'))
  },
  //  行政审批
  //  车辆违章处理
  {
      path: '/administrative/carHandle',
      component: asyncComponent(() => import('container/administrative/carHandle/carHandle'))
  },
  //  车辆违章处理 详情
  {
      path: '/administrative/carHandle/addedit',
      component: asyncComponent(() => import('container/administrative/carHandle/carHandle-addedit'))
  },
  //  车辆违章处理 审核
  {
      path: '/administrative/carHandle/check',
      component: asyncComponent(() => import('container/administrative/carHandle/carHandle-check'))
  },
  //  福利发放申请
  {
      path: '/administrative/welfare',
      component: asyncComponent(() => import('container/administrative/welfare/welfare'))
  },
  //  福利发放申请 详情
  {
      path: '/administrative/welfare/addedit',
      component: asyncComponent(() => import('container/administrative/welfare/welfare-addedit'))
  },
  //  福利发放申请 审核
  {
      path: '/administrative/welfare/check',
      component: asyncComponent(() => import('container/administrative/welfare/welfare-check'))
  },
  // 办公用品申请
  {
      path: '/administrative/officeSupplies',
      component: asyncComponent(() => import('container/administrative/officeSupplies/officeSupplies'))
  },
  // 办公用品申请 详情
  {
      path: '/administrative/officeSupplies/addedit',
      component: asyncComponent(() => import('container/administrative/officeSupplies/officeSupplies-addedit'))
  },
  // 固定资产申请
  {
      path: '/administrative/fixedAssets',
      component: asyncComponent(() => import('container/administrative/fixedAssets/fixedAssets'))
  },
  // 固定资产申请 详情
  {
      path: '/administrative/fixedAssets/addedit',
      component: asyncComponent(() => import('container/administrative/fixedAssets/fixedAssets-addedit'))
  },
  // 领导请示申请
  {
      path: '/administrative/leader',
      component: asyncComponent(() => import('container/administrative/leader/leader'))
  },
  // 领导请示申请 详情
  {
      path: '/administrative/leader/addedit',
      component: asyncComponent(() => import('container/administrative/leader/leader-addedit'))
  },
  //  费用预支申请
  {
      path: '/administrative/cost',
      component: asyncComponent(() => import('container/administrative/cost/cost'))
  },
  //  费用预支申请 申请 审核
  {
      path: '/administrative/cost/addedit',
      component: asyncComponent(() => import('container/administrative/cost/cost-addedit'))
  },
  //  费用预支申请 详情
  {
      path: '/administrative/cost/detail',
      component: asyncComponent(() => import('container/administrative/cost/cost-detail'))
  },
  //  gps申领
  {
      path: '/administrative/applyGps',
      component: asyncComponent(() => import('container/postloantools/applyGps/applyGps'))
  },
  //  gps申领 详情
  {
      path: '/administrative/applyGps/addedit',
      component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-addedit'))
  },
  //  gps申领 申领
  {
      path: '/administrative/applyGps/apply',
      component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-apply'))
  },
  //  gps申领 GPS管理员审核
  {
      path: '/administrative/applyGps/check',
      component: asyncComponent(() => import('container/postloantools/applyGps/applyGps-check'))
  },
  //  gps库存管理
  {
      path: '/administrative/manageGps',
      component: asyncComponent(() => import('container/postloantools/manageGps/manageGps'))
  },
  //  gps库存管理 详情
  {
      path: '/administrative/manageGps/addedit',
      component: asyncComponent(() => import('container/postloantools/manageGps/manageGps-addedit'))
  },
  //  财务管理
  //  返点支付
  {
      path: '/carloanfinance/pointreturn',
      component: asyncComponent(() => import('container/carloanfinance/pointreturn/pointreturn'))
  },
  //  返点支付 详情
  {
      path: '/carloanfinance/pointreturn/addedit',
      component: asyncComponent(() => import('container/carloanfinance/pointreturn/pointreturn-addedit'))
  },
  //  返点支付 成员管理
  {
      path: '/carloanfinance/pointreturn/return',
      component: asyncComponent(() => import('container/carloanfinance/pointreturn/pointreturn-return'))
  }
];

export default ROUTES;
