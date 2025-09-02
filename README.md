# Next.js Performance Optimization: A Proof of Concept

## A proactive approach to web performance.

This repository serves as a live demonstration of how to tackle and solve common performance issues in Next.js applications. Instead of just talking about Core Web Vitals, I built this project to show them in action.

I noticed some performance opportunities on a leading software factory's website. With a PageSpeed score below of **49** and high metrics for **Total Blocking Time (TBT)**, **Cumulative Layout Shift (CLS)**, and a slow **Largest Contentful Paint (LCP)**, I saw a chance to provide value before even interviewing.

This PoC isn't just theory—it's a practical guide to turning low performance scores into a lightning-fast user experience.

-----

## 🚀 The Core Problems & Their Solutions

### 1\. Zeroing out Cumulative Layout Shift (CLS)

When images load without defined dimensions, they cause a visual "jump" that frustrates users. This PoC shows how the standard `<img>` tag leads to this problem, and how the **`next/image`** component elegantly solves it. The result is a rock-solid, stable layout from the first millisecond.

### 2\. Eliminating the Flash of Invisible Text (FOIT)

Text should never be invisible. We demonstrate how a traditional approach to web fonts can cause a distracting flicker. The solution lies in using the powerful **`@next/font`** module, which applies `font-display: 'swap'` by default. This ensures the browser shows a fallback font immediately, guaranteeing text is always visible.

### 3\. Boosting Initial Load Time with Static Site Generation (SSG)

A high TTFB score often points to slow Server-Side Rendering (SSR). This happens when a site renders on every request, waiting for slow API calls. We highlight this architectural flaw and show how migrating to **Static Site Generation (SSG)** is the a game-changer. By pre-rendering content at build time, the page is delivered almost instantly from a CDN, bypassing the server delay entirely.

-----

## ⚙️ How to Run This Demo

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Launch the dev server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser and navigate to `http://localhost:3000`.**

To see the magic happen, open your browser's **DevTools (F12)** and inspect the **Network** tab. You'll witness the difference in load times and resource handling between the "Problem" and "Solution" sections in real time.