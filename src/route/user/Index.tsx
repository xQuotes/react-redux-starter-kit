import * as React from 'react'
import { inject } from 'mobx-react'

export interface UserPops {
  userStore: any
}

export interface UserState {}

@inject('userStore')
export default class User extends React.Component<UserPops, UserState> {
  constructor(props?: UserPops) {
    super(props)
    console.log(props.userStore.getServer())
  }
  render() {
    console.log(this.props.userStore)
    return <div>a</div>
  }
}
