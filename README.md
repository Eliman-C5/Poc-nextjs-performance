Next.js Performance Optimization PoC
This project is a Proof of Concept (PoC) demonstrating common performance bottlenecks in Next.js applications and their recommended solutions. The goal is to illustrate how core features of Next.js can be leveraged to improve user experience and achieve higher scores on performance metrics like Core Web Vitals.

Motivation
This PoC was created after analyzing the performance of a real-world website. The site showed a low PageSpeed Insights score and issues with key metrics, including Total Blocking Time (TBT), Cumulative Layout Shift (CLS), and a slow Largest Contentful Paint (LCP).

This repository provides working examples of these problems and demonstrates elegant, framework-native solutions.

The Performance Problems and Their Solutions
This project addresses three specific areas of performance improvement. Each section in the code compares a common issue with its optimized solution.

1. The Problem: Cumulative Layout Shift (CLS)
An <img> tag without explicit width and height attributes can cause the page layout to shift as the image loads, creating a jarring user experience.

The Solution: The next/image component is the correct approach. By requiring image dimensions, it reserves the necessary space on the page immediately, eliminating CLS. Additionally, it handles image optimization, lazy loading, and serving modern formats like WebP automatically.

2. The Problem: Flash of Invisible Text (FOIT)
When a web font is loaded, the browser may initially hide the text until the font file is fully downloaded. This results in a "flash of invisible text" that negatively affects the user's perception of speed.

The Solution: The @next/font component resolves this by automatically applying the font-display: 'swap' property. This instructs the browser to immediately render text with a fallback font, which is then seamlessly swapped with the web font once it's ready.

3. The Problem: Slow Server-Side Rendering (SSR)
While Next.js's Server-Side Rendering (SSR) is powerful, it can cause performance issues if a page with mostly static content is forced to re-render on every request. This often happens when a slow API call is made during the SSR process, adding unnecessary latency to the Time to First Byte (TTFB).

The Solution: The ideal solution for pages with static content is to use Static Site Generation (SSG). Next.js can pre-render the entire page at build time. This eliminates the need for repeated API calls on the server, allowing the page to be served from a CDN instantly and dramatically improving initial page load times.

How to Run the Project
To see the PoC in action, follow these steps:

1. Clone this repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies:

npm install

3. Run the development server:

npm run dev
Open your browser and navigate to http://localhost:3000.

To best observe the performance differences, use your browser's DevTools (F12) to inspect the Network tab during a hard refresh (Cmd/Ctrl + Shift + R). You will be able to see the optimized loading behavior for images and fonts in real time.