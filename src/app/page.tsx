'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE, Collapse, Dropdown } = await import(
        'tw-elements'
      )
      initTWE({ Tooltip, initTWE, Collapse, Dropdown })
    }
    init()
  }, [])

  return (
    <main>
      
    </main>
  )
}
