import React from 'react'

// Function Component

export default function navbar() {
  return (
    <div>
        <h2>NationalLibrary</h2>
        <ul>
          <li>Home</li>
          <li>Booklist</li>
          <li>Bookshelf</li>
        </ul>
    </div>
  )
}

// Class Component

// import React, { Component } from 'react'
// export default class navbar extends Component {
//   render() {
//     return (
//       <div>navbar</div>
//     )
//   }
// }

// Arrow Function
// export default const navbar = () => {
//   return (
//     <div>navbar</div>
//   )
// }