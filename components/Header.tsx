import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="flex gap-2">
      <Link href="/">Logo</Link>
      <Link href="/">장바구니</Link>
    </div>
  )
}
