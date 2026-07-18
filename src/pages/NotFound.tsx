import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <Container className="flex min-h-[55vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-sans text-sm font-bold tracking-wide text-navy/60">404</p>
      <h1 className="mt-4 font-display text-h1 font-bold text-navy">Page not found</h1>
      <p className="mt-4 max-w-xl text-balance text-lead text-navy/70">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/" className="mt-8">Back to home</Button>
    </Container>
  )
}
