# Getting started with Vercel Web Analytics

This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

**Select your framework to view instructions on using the Vercel Web Analytics in your project**.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:
  <CodeBlock>
  <Code tab="pnpm">
  `bash
  pnpm i vercel
  `
  </Code>
  <Code tab="yarn">
  `bash
  yarn i vercel
  `
  </Code>
  <Code tab="npm">
  `bash
  npm i vercel
  `
  </Code>
  <Code tab="bun">
  `bash
  bun i vercel
  `
  </Code>
  </CodeBlock>

- ### Enable Web Analytics in Vercel
  On the [Vercel dashboard](/dashboard), select your Project and then click the **Analytics** tab and click **Enable** from the dialog.
  > **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`)
  > after your next deployment.

> For ['nextjs', 'nextjs-app', 'sveltekit', 'remix', 'create-react-app', 'nuxt', 'vue', 'other', 'astro']:

- ### Add `@vercel/analytics` to your project

  Using the package manager of your choice, add the `@vercel/analytics` package to your project:
  <CodeBlock>
  <Code tab="pnpm">
  `bash
  pnpm i @vercel/analytics
  `
  </Code>
  <Code tab="yarn">
  `bash
  yarn i @vercel/analytics
  `
  </Code>
  <Code tab="npm">
  `bash
  npm i @vercel/analytics
  `
  </Code>
  <Code tab="bun">
  `bash
  bun i @vercel/analytics
  `
  </Code>
  </CodeBlock>

- > For [ >   'nextjs',
  >   'nextjs-app',
  >   'remix',
  >   'create-react-app',
  >   'nuxt',
  >   'vue',
  >   'astro',
  >   ]:

  ### Add the `Analytics` component to your app

  > For ['sveltekit']:

  ### Call the `injectAnalytics` function in your app

  > For ['other']:

  ### Call the `inject` function in your app

  > For ['html']:

  ### Add the `script` tag to your site

  > For ['nextjs']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.

  If you are using the `pages` directory, add the following code to your main app file:

  ```tsx {2, 8} filename="pages/_app.tsx" framework=nextjs
  import type { AppProps } from "next/app";
  import { Analytics } from "@vercel/analytics/next";

  function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }

  export default MyApp;
  ```

  ```jsx {1, 7} filename="pages/_app.js" framework=nextjs
  import { Analytics } from "@vercel/analytics/next";

  function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }

  export default MyApp;
  ```

  > For ['nextjs-app']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.

  Add the following code to the root layout:

  ```tsx {1, 15} filename="app/layout.tsx" framework=nextjs-app
  import { Analytics } from "@vercel/analytics/next";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    );
  }
  ```

  ```jsx {1, 11} filename="app/layout.jsx" framework=nextjs-app
  import { Analytics } from "@vercel/analytics/next";

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    );
  }
  ```

  > For ['remix']:
  > The `Analytics` component is a wrapper around the tracking script, offering a seamless integration with Remix, including route detection.

  Add the following code to your root file:

  ```tsx {9, 21} filename="app/root.tsx" framework=remix
  import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "@remix-run/react";
  import { Analytics } from "@vercel/analytics/remix";

  export default function App() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Analytics />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  ```

  ```jsx {9, 21} filename="app/root.jsx" framework=remix
  import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "@remix-run/react";
  import { Analytics } from "@vercel/analytics/remix";

  export default function App() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Analytics />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  ```

  > For ['nuxt']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Nuxt, including route support.

  Add the following code to your main component.

  ```tsx {2,6} filename="app.vue" framework=nuxt
  <script setup lang="ts">
  import { Analytics } from '@vercel/analytics/nuxt';
  </script>

  <template>
    <Analytics />
    <NuxtPage />
  </template>
  ```

  ```jsx {2,6} filename="app.vue" framework=nuxt
  <script setup>
  import { Analytics } from '@vercel/analytics/nuxt';
  </script>

  <template>
    <Analytics />
    <NuxtPage />
  </template>
  ```

  > For ['sveltekit']:
  > The `injectAnalytics` function is a wrapper around the tracking script, offering more seamless integration with SvelteKit.js, including route support.

  Add the following code to the main layout:

  ```ts filename="src/routes/+layout.ts" framework=sveltekit
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });
  ```

  ```js filename="src/routes/+layout.js" framework=sveltekit
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });
  ```

  > For ['astro']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Astro, including route support.

  Add the following code to your base layout:

  ```tsx {2, 10} filename="src/layouts/Base.astro" framework=astro
  ---
  import Analytics from '@vercel/analytics/astro';
  {/* ... */}
  ---

  <html lang="en">
  	<head>
      <meta charset="utf-8" />
      <!-- ... -->
      <Analytics />
  	</head>
  	<body>
  		<slot />
    </body>
  </html>
  ```

  ```jsx {2, 10}  filename="src/layouts/Base.astro" framework=astro
  ---
  import Analytics from '@vercel/analytics/astro';
  {/* ... */}
  ---

  <html lang="en">
  	<head>
      <meta charset="utf-8" />
      <!-- ... -->
      <Analytics />
  	</head>
  	<body>
  		<slot />
    </body>
  </html>
  ```

  > For ['astro']:
  > The `Analytics` component is available in version `@vercel/analytics@1.4.0` and later.
  > If you are using an earlier version, you must configure the `webAnalytics` property of the Vercel adapter in your `astro.config.mjs` file as shown in the code below.
  > For further information, see the [Astro adapter documentation](https://docs.astro.build/en/guides/integrations-guide/vercel/#webanalytics).

  ```ts {7-9} filename="astro.config.mjs" framework=astro
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
    output: "server",
    adapter: vercel({
      webAnalytics: {
        enabled: true, // set to false when using @vercel/analytics@1.4.0
      },
    }),
  });
  ```

  ```js {7-9} filename="astro.config.mjs" framework=astro
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
    output: "server",
    adapter: vercel({
      webAnalytics: {
        enabled: true, // set to false when using @vercel/analytics@1.4.0
      },
    }),
  });
  ```

  > For ['html']:
  > For plain HTML sites, you can add the following script to your `.html` files:

  ```ts filename="index.html" framework=html
  <script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/insights/script.js"></script>
  ```

  ```js filename="index.html" framework=html
  <script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/insights/script.js"></script>
  ```

  > For ['html']:
  > **💡 Note:** When using the HTML implementation, there is no need to install the
  > `@vercel/analytics` package. However, there is no route support.
  > For ['other']:
  > Import the `inject` function from the package, which will add the tracking script to your app. **This should only be called once in your app, and must run in the client**.

  > **💡 Note:** There is no route support with the `inject` function.

  Add the following code to your main app file:

  ```ts filename="main.ts" framework=other
  import { inject } from "@vercel/analytics";

  inject();
  ```

  ```js filename="main.js" framework=other
  import { inject } from "@vercel/analytics";

  inject();
  ```

  > For ['create-react-app']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with React.
  > **💡 Note:** When using the plain React implementation, there is no route support.
  > Add the following code to the main app file:

  ```tsx {1, 7} filename="App.tsx" framework=create-react-app
  import { Analytics } from "@vercel/analytics/react";

  export default function App() {
    return (
      <div>
        {/* ... */}
        <Analytics />
      </div>
    );
  }
  ```

  ```jsx {1, 7} filename="App.jsx" framework=create-react-app
  import { Analytics } from "@vercel/analytics/react";

  export default function App() {
    return (
      <div>
        {/* ... */}
        <Analytics />
      </div>
    );
  }
  ```

  > For ['vue']:
  > The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Vue.
  > **💡 Note:** Route support is automatically enabled if you're using `vue-router`.
  > Add the following code to your main component:

  ```tsx {2,6} filename="src/App.vue" framework=vue
  <script setup lang="ts">
  import { Analytics } from '@vercel/analytics/vue';
  </script>

  <template>
    <Analytics />
    <!-- your content -->
  </template>
  ```

  ```jsx {2,6} filename="src/App.vue" framework=vue
  <script setup>
  import { Analytics } from '@vercel/analytics/vue';
  </script>

  <template>
    <Analytics />
    <!-- your content -->
  </template>
  ```

- ### Deploy your app to Vercel

  Deploy your app using the following command:

  ```bash filename="terminal"
  vercel deploy
  ```

  If you haven't already, we also recommend [connecting your project's Git repository](/docs/git#deploying-a-git-repository),
  which will enable Vercel to deploy your latest commits to main without terminal commands.

  Once your app is deployed, it will start tracking visitors and page views.

  > **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR
  > request in your browser's Network tab from `/_vercel/insights/view` when you
  > visit any page.

- ### View your data in the dashboard

  Once your app is deployed, and users have visited your site, you can view your data in the dashboard.

  To do so, go to your [dashboard](/dashboard), select your project, and click the **Analytics** tab.

  After a few days of visitors, you'll be able to start exploring your data by viewing and [filtering](/docs/analytics/filtering) the panels.

  Users on Pro and Enterprise plans can also add [custom events](/docs/analytics/custom-events) to their data to track user interactions such as button clicks, form submissions, or purchases.

Learn more about how Vercel supports [privacy and data compliance standards](/docs/analytics/privacy-policy) with Vercel Web Analytics.

## Next steps

Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:

- [Learn how to use the `@vercel/analytics` package](/docs/analytics/package)
- [Learn how to set update custom events](/docs/analytics/custom-events)
- [Learn about filtering data](/docs/analytics/filtering)
- [Read about privacy and compliance](/docs/analytics/privacy-policy)
- [Explore pricing](/docs/analytics/limits-and-pricing)
- [Troubleshooting](/docs/analytics/troubleshooting)
