import axios from 'axios'
import dva from 'dva'
import createLoading from 'dva-loading'
import { createBrowserHistory as createHistory } from 'history'
import { Dispatch } from 'redux'
import test, { ITestState } from 'src/models/test'
// import config from 'src/utils/config'
import './index.scss'
import { router } from './router'

// 1. Initialize
const app = dva({
  history: createHistory()
})

// 2. Plugins
app.use(createLoading())

// 3. Model
//   app.model(m.default); // ts 导出格式包含default

app.model(test)

export let dispatch: Dispatch

app.model({
  namespace: 'init',
  state: {},
  subscriptions: {
    setup (obj) {
      dispatch = obj.dispatch
    }
  }
})

export interface IAllState {
  test: ITestState
}

// 4. Router
app.router(router)

// axios.defaults.baseURL = config.baseUrl
axios.defaults.withCredentials = true

// 5. Start
app.start('#root')
