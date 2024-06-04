Confstellation is a full-featured conference theme built on top of the [Astro](https://astro.build) framework.
This guide will help you get started with a new project.

## Quick Start

### Create a new project

Create a new Astro + Confstellation project by running the following command in your terminal:

```sh
npm create astro@latest -- --template astrolicious/confstellation-template
```

:warning: For production deployment SSR is required, choose an adapter of your choice and add it to the project. :warning:

### Start the development server

When working locally, [Astro’s development server](https://docs.astro.build/en/reference/cli-reference/#astro-dev) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the development server:

```sh
npm run dev
```

This will log a message to your terminal with the URL of your local preview.
Open this URL to start browsing your site.

### Add content

Starlight is ready for you to add new content, or bring your existing files!

Add new pages to your site by creating Markdown files in the `src/content/documentation/` directory.
