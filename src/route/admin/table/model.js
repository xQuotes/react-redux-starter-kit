export const defaultOptionsValue = {
  title: '设计复杂程度调整',
  description: '操作指南：直接双击或者单击后点击选择',
  list: [
    {
      key: 1,
      title: '2.矿山采选工程',
      options: [
        {
          key: 11,
          title: '坑内采矿',
          selects: [
            {
              key: 12,
              lable: `I级/n
              1.地形、地质、水文条件简单；/n
              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n
              3.矿石品种单一，不分采的采矿工程/n`,
              value: '1',
              type: 'text' //input
            }
          ]
        },
        {
          key: 14,
          title: '坑内采矿1',
          selects: [
            {
              key: 13,
              lable: `I级/n
              1.地形、地质、水文条件简单；/n
              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n
              3.矿石品种单一，不分采的采矿工程/n`,
              value: '1',
              type: 'text' //input
            }
          ]
        }
      ]
    },
    {
      key: 2,
      title: '2.矿山采选工程2',
      options: [
        {
          key: 15,
          title: '坑内采矿',
          selects: [
            {
              key: 16,
              lable: `I级/n
              1.地形、地质、水文条件简单；/n
              2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n
              3.矿石品种单一，不分采的采矿工程/n`,
              value: '1',
              type: 'text' //input
            }
          ]
        }
      ]
    }
  ]
}
