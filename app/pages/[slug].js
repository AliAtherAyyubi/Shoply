import { useRouter } from 'next/router'
import React from 'react'

export default function Post() {
    const router= useRouter();
  return (
    <div>This is slug {router.query.slug}</div>
  )
}
