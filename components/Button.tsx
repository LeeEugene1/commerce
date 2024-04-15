import React from 'react'
import { css } from '@emotion/css'

export default function Button() {
  const color = 'white'
  // const handleGetItem = () => {
  //   fetch(`/api/get-item`)
  //     .then((e) => e.json())
  //     .then((res) => {
  //       console.log(res.message)
  //     })
  // }
  const handleGetItem = () => {
    fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`,
    )
      .then((e) => e.json())
      .then((res) => console.log(res))
  }
  // const handleAddItem = () => {
  //   fetch(`/api/add-item?name=White Pants`, {
  //     method: 'POST',
  //     // body: JSON.stringify({ name: 'jacket' }),
  //   })
  //     .then((e) => e.json())
  //     .then((res) => {
  //       debugger
  //       alert(res?.message)
  //     })
  //     .catch((err) => {
  //       alert(err?.message)
  //     })
  // }
  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
      // onClick={handleAddItem}
      onClick={handleGetItem}
    >
      Hover to change color.
    </div>
  )
}
