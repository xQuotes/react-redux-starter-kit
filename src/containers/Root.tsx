import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from '../route/Index'

export interface Props {}

export default (props: Props) => (
  <Index {...props} compiler="TypeScript" framework="React" />
)
