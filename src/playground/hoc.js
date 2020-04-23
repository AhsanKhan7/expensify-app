// HOC = higher order component {A component which takes another component to make new component}
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <h3>the info is: {props.info}</h3>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return  (props) => (
        <div>
            <WrappedComponent {...props} />
            { props.isAdmin && <p>This is private info, please dont share</p> }
        </div>
    )
}

const requireAuthenication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenicated ? <WrappedComponent {...props}/> : <p>sign in to view</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthenication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='this is privilage record'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenicated={true} info='this is privilage record'/>, document.getElementById('app'))