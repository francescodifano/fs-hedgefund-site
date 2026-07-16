import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

const field = 'w-full border-0 border-b-2 border-navy/40 bg-transparent px-0 py-2 font-sans text-navy outline-none transition-colors focus:border-navy'

// Contact — responsive rebuild of the Figma "Contact us" form + mountain photo.
// The form is presentational for now (not wired to a backend).
export default function Contact() {
  usePageTitle('Contact')
  return (
    <Container className="py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-display text-h1 font-bold text-navy">Contact us</h1>
          <form className="mt-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-navy">First Name *</span>
                <input type="text" required className={`mt-2 ${field}`} />
              </label>
              <label className="block">
                <span className="text-navy">Last Name *</span>
                <input type="text" required className={`mt-2 ${field}`} />
              </label>
            </div>
            <label className="block">
              <span className="text-navy">Email *</span>
              <input type="email" required className={`mt-2 ${field}`} />
            </label>
            <label className="block">
              <span className="text-navy">Write a message</span>
              <textarea rows={4} className={`mt-2 resize-none ${field}`} />
            </label>
            <Button type="submit">Submit</Button>
          </form>
        </div>

        {/* Image follows the heading/form on mobile (title leads the page), sits right on desktop */}
        <div className="relative">
          <div className="absolute -bottom-3 -left-3 hidden h-full w-full bg-mist sm:block" aria-hidden />
          <img
            src={A('contact-mountain.jpg')}
            alt="Snow-capped mountain at sunset"
            className="relative aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  )
}
