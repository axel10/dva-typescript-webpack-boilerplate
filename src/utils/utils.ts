import history from '../history'

export function historyPush (url) {
  history.push(url)
}

export function historyGoBack () {
  history.goBack()
}
