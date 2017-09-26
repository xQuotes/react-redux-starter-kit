import * as React from 'react'

import Index from '../route/Index'

export interface Props {}

export default (props: Props) => (
  <Index {...props} compiler="TypeScript" framework="React" />
)
