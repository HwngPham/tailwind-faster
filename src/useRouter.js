import { useState, useEffect } from 'react'

export function useRouter(patterns) {
  const [currentPage, setCurrentPage] = useState(patterns['/'])
  const { pathname } = window?.location

  useEffect(() => {
    setCurrentPage(patterns[pathname])
  }, [pathname])

  return {
    currentPage,
  }
}
