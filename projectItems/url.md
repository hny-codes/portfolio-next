---
title: 'Shortly Landing Page'
content: 'A web app that allow users to paste in any link/URL they wished to shorten, powered by shrtcode API'
link: 'https://github.com/hny-codes/shortly-landing-page'
site: 'https://hny-shortly-landing-page.vercel.app/'
src: '/images/projects/url.png'
alt: 'shortly landing page image'
skills:
  - Astro
  - Tailwind
  - Typescript
  - React
  - Cypress
  -
---

## Shortly Landing Page

A landing page that also doubles as a web application that allow users to shorten their desired links/URLs. This is another early project where I incorporated [Cypress](https://www.cypress.io/) into my development, **boosting my overall productivity** when it came to testing the API needed for this project.

This project is the solution to one of the [Frontend Mentor challenges](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## API

This project utilized the [shrtcode API](https://shrtco.de/) in order to shorten any given link. Whenever a user clicks the button to shorten their link, a **fetch request** is sent to this API and in return, the data (the shortened link) is returned as a **component for the user to copy to their clipboard**.

## Form

The form section is created with the [React Hook Form library](https://react-hook-form.com/). **Input validation is provided through this library.**

## The Challenge

Users **should** be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if:
  - The input field is empty
