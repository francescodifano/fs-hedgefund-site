import { useEffect } from 'react'

const SUFFIX = 'FS Student Hedge Fund'

// Sets the document title per page (SEO + screen-reader page announcement).
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Frankfurt School`
  }, [title])
}
