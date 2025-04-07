import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    // Handle VSCode browser query parameters
    const handleVSCodeParams = () => {
      if (typeof window !== 'undefined' && window.location.search.includes('vscodeBrowserReqId')) {
        const cleanUrl = window.location.pathname
        window.history.replaceState({}, document.title, cleanUrl)
      }
    }
    
    // Run once on initial load
    handleVSCodeParams()

    // Fix for navigation errors - prevent hard navigations to the same URL
    const handleRouteChange = (url) => {
      // Clean both URLs for comparison (remove vscodeBrowserReqId)
      const currentPathname = window.location.pathname
      const targetPathname = url.split('?')[0]
      
      if (currentPathname === targetPathname && window.location.search.includes('vscodeBrowserReqId')) {
        // If navigating to the same path with VSCode params, prevent the navigation
        router.events.emit('routeChangeError')
        throw new Error('Prevented redundant navigation')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])
  
  return <Component {...pageProps} />
}

export default MyApp
