var demoData = [
  {
    key: '0_0',
    title: '设计复杂程度调整',
    description: '操作指南：直接双击或者单击后点击选择',
    list_title: '2.矿山采选工程1',
    list_options_title: '坑内采矿',
    list_options_select_lable:
      'I级/n\n              1.地形、地质、水文条件简单；/n\n              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n\n              3.矿石品种单一，不分采的采矿工程/n',
    list_options_select_value: '1',
    list_options_select_type: 'text'
  },
  {
    key: '0_1',
    title: '设计复杂程度调整',
    description: '操作指南：直接双击或者单击后点击选择',
    list_title: '2.矿山采选工程2',
    list_options_title: '坑内采矿',
    list_options_select_lable:
      'I级/n\n              1.地形、地质、水文条件简单；/n\n              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n\n              3.矿石品种单一，不分采的采矿工程/n',
    list_options_select_value: '1',
    list_options_select_type: 'text'
  },
  {
    key: '0_0',
    title: '设计复杂程度调整1',
    description: '操作指南：直接双击或者单击后点击选择',
    list_title: '2.矿山采选工程1',
    list_options_title: '坑内采矿',
    list_options_select_lable:
      'I级/n\n              1.地形、地质、水文条件简单；/n\n              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n\n              3.矿石品种单一，不分采的采矿工程/n',
    list_options_select_value: '1',
    list_options_select_type: 'text'
  },
  {
    key: '0_1',
    title: '设计复杂程度调整1',
    description: '操作指南：直接双击或者单击后点击选择',
    list_title: '2.矿山采选工程2',
    list_options_title: '坑内采矿',
    list_options_select_lable:
      'I级/n\n              1.地形、地质、水文条件简单；/n\n              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n\n              3.矿石品种单一，不分采的采矿工程/n',
    list_options_select_value: '1',
    list_options_select_type: 'text'
  }
]

var result = {
  title: '',
  description: '',
  list: [
    {
      title: '',
      options: [
        {
          title: '',
          select: [
            {
              label: '',
              value: '',
              type: ''
            }
          ]
        }
      ]
    }
  ]
}

var res = _.groupBy(demoData, (v, k) => {
  return v.list_title
})
var res1 = _.map(res, (v, k) => {
  return {
    [k]: _.groupBy(v, val => {
      return val.list_options_title
    })
  }
})

const res2 = _.map(res1, (v, k) => {
  return {
    title: k,
    options: 
  }
  _.map(v, (val ,key) => {
    return {
      ...v,
    }
  })
})