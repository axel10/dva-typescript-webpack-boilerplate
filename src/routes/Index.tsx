import { connect } from 'dva'
import React from 'react'
import { ITestState } from 'src/models/test'
import { IBaseProps } from 'src/types/Common/Interface/IBaseProps'

interface IProps extends IBaseProps {
  test: ITestState
}

class Index extends React.Component<IProps> {
  private dispatch = this.props.dispatch

  constructor (props) {
    super(props)
    this.dispatch({ type: 'test/getUser' })
  }

  public render () {
    const { users } = this.props.test
    return (
      <div className='Index'>
        <ul>
          {users.map((o, i) => (
            <li key={i}>
              {o.name} {o.email}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect((state) => {
  return { ...state }
})(Index)
