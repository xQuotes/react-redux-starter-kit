export const utilization = 'u' // 利用率系统

const Url = {
  ads: '/',
  index: `/${utilization}/reports/table`,
  login: '/login',
  logout: '/logout',
  register: '/register',

  // 利用率
  reportTable: `/${utilization}/reports/table`,
  reportHcharts: `/${utilization}/reports/hcharts`,
  reportView: `/${utilization}/report`
}

export default Url