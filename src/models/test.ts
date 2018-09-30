import { Model } from 'dva'
import testService from 'src/services/testService'
import { User } from 'src/types/Index/User'

export interface ITestState {
  users: User[]
}

const initState: ITestState = {
  users: []
}

export interface IModel extends Model {
  state: ITestState
}

const TestModel: IModel = {
  namespace: 'test',

  state: initState,

  effects: {
    *getUser (p, { put, call }) {
      const data = yield call(testService.getList)
      yield put({ type: 'setData', key: 'users', val: data })
    }
  },

  reducers: {
    setData (state: ITestState, { key, val }) {
      state[key] = val
      return { ...state }
    }
  }
}

export default TestModel
