import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class InstructionStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getInstructions,
    delete: Api.deleteInstruction,
    post: Api.postInstruction,
    put: Api.putInstruction,
    puts: Api.putInstructions,
  }
  static fromJS(array = []) {
    return new InstructionStore()
  }
}

