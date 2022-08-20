import React from 'react'

function Tombol(props) {
  const munculkanAlert = (props) => {
    alert(`Anda telah mengklik tombol ${props.name}`)
  }

  return (
    // <button onClick={() => munculkanAlert(props)}>Tombol</button>
    
    <button onClick={() => alert(`Anda telah mengklik tombol ${props.name}`)}>Tombol</button>
  )
}

export default Tombol