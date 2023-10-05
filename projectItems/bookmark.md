---
title: 'Bookmark Landing Page'
content: 'A landing page example featuring various components with a contact form'
link: 'https://github.com/hny-codes/bookmark-landing-page'
site: 'https://hny-bookmark-landing.vercel.app/'
src: '/images/projects/bookmark.png'
alt: 'bookmark landing page image'
skills:
  - Astro
  - Tailwind
  - Typescript
  - React
  - Cypress
  -
---

This is a landing page that utilizes various libraries for its creation. Similar to other websites, this landing page has a hero section, a content section, multiple call-to-actions, a form, and a footer.

In addition, this is one of my **earliest projects** where I incorporated [Cypress](https://www.cypress.io/), **an end-to-end(E2E) testing framework**, into my workflow.

This project is the solution to one of the [Frontend Mentor challenges](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

## Components

For the content section, **three various components** are used:

- accordion
- tabs
- list of cards

These components are created with the [shadcn/ui component collection](https://ui.shadcn.com/).

## Form

The form section is created with the [React Hook Form library](https://react-hook-form.com/). **Input validation is provided through this library.**

## The Challenge

Users **should** be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly
