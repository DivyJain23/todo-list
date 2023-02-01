import React from 'react'

export const Footer = () => {

  let footerStyles = {
    position : "absolute",
    top : "100vh",
    width : "100%"
  }

  return (
    <div className="bg-dark text-light py-4" style={footerStyles}>
      <p className="text-center">
        Copyright &copy; MyTodoList.com
      </p>
    </div>
  )
}
