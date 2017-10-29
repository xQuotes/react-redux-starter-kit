import * as React from 'react'
import { Row, Col, Button } from 'antd'
import Echarts from '../../../components/Echarts/'

export default class Standard extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="main-standard">
        <Col span={24} className="main-title">
          计算规范
        </Col>
        <Col span={15}>
          <Echarts
            style={{
              width: '550px',
              height: '550px'
            }}
          />
        </Col>
        <Col span={9} className="main-content">
          <h3>新疆造价规范</h3>
          <Button.Group>
            <Button type="primary">定额</Button>
            <Button className="default">清单</Button>
          </Button.Group>
          <article>
            <p>
              凭借文字处理软件巨人汉卡发家的史玉柱，在巨人大厦上遭遇滑铁卢，这座办公大楼盖到地面三层全面停工，购买了楼花的债主天天堵门要求退款，巨人有3亿多的应收款烂在外面。人们普遍认为，真正拖垮史玉柱的不是巨人大厦，而是他把生意铺得太广，领域太多，管理不善，坏债太多。正是由于这段失败的经历，才让史玉柱对多元化战略有了更深刻的思考。
              一、不要多元化 不要搞多元化，尤其企业不大的时候。
            </p>
            <p>
              我觉得能少干一件就少干一件，不但不要多元化，而且创业的时候最好主攻一个方向，要做就做一个产品。你要做这个产品还不能说平均用力，一定要把你的核心竞争力那一点用足。
              聚焦聚焦再聚焦。凡是你想干的事越多，你失败的越快。
            </p>
            <p>
              我授权比一般的老板会彻底一点。就是下属非常坚持的，如果我不是100%有把握的，我一般不会否决他。我只是觉得，我也没有把握100%会失败，最后它也不能完全说失败，但是称不上成功，称不上大成功，所以我觉得花那么多精力比起来不太合算。我还是觉得，选中了人，然后给予授权，给予科学的一些监督，就行。
            </p>
          </article>
        </Col>
      </Row>
    )
  }
}
