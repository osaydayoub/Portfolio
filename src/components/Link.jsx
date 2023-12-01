import React from 'react'

function Link(props) {
  return (
    <a className="link-btn" href={props.href}>{props.children}</a>
  )
}

export default Link