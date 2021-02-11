import React, { PureComponent } from 'react'

export default class MyPureComponent extends PureComponent {
    render() {
        return <div>This is a {this.props.type}</div>
    }
}
