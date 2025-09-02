// /src/app/page.js or /pages/index.js
import Image from 'next/image';
import { Roboto } from 'next/font/google';

// Configure the font with Next.js optimization
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  // By default, next/font applies `display: 'swap'`
  // You can omit this line if you don't need a different value
  display: 'swap',
});

export default function HomePage() {
  
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '1500px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    }}>
      <h1>Performance Analysis and PoC in Next.js</h1>

      <section>
        <h2 className="title">1. Problem: Missing Image Dimensions (Causes CLS)</h2>
        <p style={{ marginBottom:  '1rem'}}>
          An image without &quot;width&quot; and &quot;height&quot; causes &quot;layout shift&quot; or design change,
          as the browser cannot reserve space before the image loads.
          <a href="/no-optimized-cat.jpg">
            (Click here to view the unoptimized image)
          </a>
        </p>
        <img src="/no-optimized-cat.jpg" alt="Unoptimized cat photo" />
      </section>

      <hr />

      <section>
        <h2 className="title">Solution: Use the &quot;next/image&quot; Component</h2>
        <p style={{ marginBottom:  '1rem'}}>
          The Next.js &quot;Image&quot; component eliminates CLS by requiring dimensions. Additionally,
          it automatically optimizes images, uses lazy loading, and serves modern
          formats like WebP.
        </p>
        <Image
          src="/no-optimized-cat.jpg"
          alt="Cat photo optimized with next/image"
          width={2558}
          height={3158}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </section>

      <hr />

      <section>
        <h2 className="title">2. Problem: Flash of Invisible Text (FOIT)</h2>
        <p>
          When using external fonts without &quot;font-display&quot;, the text remains invisible until
          the font is downloaded, which negatively impacts the user experience.
        </p>
        <p className="font-problem" style={{ fontSize: '2rem' }}>
          This text simulates the font loading problem.
        </p>
      </section>

      <hr />

      <section>
        <h2 className="title">Solution: Use &quot;@next/font&quot; with &quot;font-display: swap&quot;</h2>
        <p>
          The &quot;font-display: swap&quot; property shows a fallback font immediately,
          avoiding the &quot;flash&quot; of invisible text. The Next.js &quot;@next/font&quot; component
          handles this automatically and optimizes font loading.
        </p>
        <p style={{ fontSize: '2rem' }} className={roboto.className}>
          This text uses @next/font with font-display: swap. It renders immediately.
        </p>
      </section>

      <hr />

      <section>
        <h2 className="title">3. Problem: Slow Server-Side Rendering (SSR)</h2>
        <p>The site is using Server-Side Rendering (SSR) for the main page, which, for a site with mostly static content, is the main cause of its initial poor performance.</p>
        <p>The issue lies in the server having to make an API request to fetch the page content on every user visit. This two-step process creates a bottleneck, adding a 500ms delay to the Time to First Byte (TTFB) and negatively impacting the Largest Contentful Paint (LCP), one of the most important Core Web Vitals.</p>
        <p>The ideal solution, which is the Next.js standard for this type of content, is to migrate the page to Static Site Generation (SSG). By using SSG, the page data is fetched only once during the project build. This eliminates the need for API requests on each visit, allowing the page to be served instantly from the Content Delivery Network (CDN).</p>
      </section>

      <hr /> 

    </main>
  );
}