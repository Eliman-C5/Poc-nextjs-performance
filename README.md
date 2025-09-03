# Next.js Performance Optimization: A Proof of Concept

## A proactive approach to web performance.

This repository serves as a live demonstration of how to tackle and solve common performance issues in Next.js applications. Instead of just talking about Core Web Vitals, I built this project to show them in action.

I noticed some performance opportunities on a leading company website. With a PageSpeed score below of **49** and high metrics for **Total Blocking Time (TBT)**, **Cumulative Layout Shift (CLS)**, and a slow **Largest Contentful Paint (LCP)**, I saw a chance to provide value before even interviewing.

<img width="1798" height="950" alt="Screenshot 2025-09-02 at 8 41 46 PM" src="https://github.com/user-attachments/assets/f9842827-6941-48a8-968b-e60e85c036f8" />

This PoC isn't just theory—it's a practical guide to turning low performance scores into a lightning-fast user experience.

-----

## 🚀 The Core Problems & Their Solutions

### 1\. Zeroing out Cumulative Layout Shift (CLS)

When images load without defined dimensions, they cause a visual "jump" that frustrates users. This PoC shows how the standard `<img>` tag leads to this problem, and how the **`next/image`** component elegantly solves it. The result is a rock-solid, stable layout from the first millisecond.

<img width="965" height="644" alt="Screenshot 2025-09-02 at 8 36 23 PM" src="https://github.com/user-attachments/assets/abc5d2e2-900f-4867-b9e1-e18c98ddd0ef" />


### 2\. Eliminating the Flash of Invisible Text (FOIT)

Text should never be invisible. We demonstrate how a traditional approach to web fonts can cause a distracting flicker. The solution lies in using the powerful **`@next/font`** module, which applies `font-display: 'swap'` by default. This ensures the browser shows a fallback font immediately, guaranteeing text is always visible.

<img width="962" height="395" alt="Screenshot 2025-09-02 at 8 37 36 PM" src="https://github.com/user-attachments/assets/39b8a9a7-ce65-4b34-bd20-82b01b1e2a12" />



### 3\. Boosting Initial Load Time with Static Site Generation (SSG)

A high TTFB score often points to slow Server-Side Rendering (SSR). This happens when a site renders on every request, waiting for slow API calls. We highlight this architectural flaw and show how migrating to **Static Site Generation (SSG)** is the a game-changer. By pre-rendering content at build time, the page is delivered almost instantly from a CDN, bypassing the server delay entirely.

<img width="965" height="644" alt="Screenshot 2025-09-02 at 8 36 04 PM" src="https://github.com/user-attachments/assets/faa5565f-50a9-4d1b-b140-6ba4e250cd77" />

-----

## ⚙️ How to Run This Demo

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Eliman-C5/Poc-nextjs-performance.git
    cd poc-nextjs-performance
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
