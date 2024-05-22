# Personal Portfolio

![](/public/screenshots/portfolio2.png)

A personal portfolio website, made with Next and Contentlayer. 

## Table of Contents

- [Purpose](#purpose)
- [Setup](#setup)
- [Built with](#built-with)
  - [Project](#projects)
- [My Process](#my-process)
- [Resources](#resources)

## Purpose

The purpose of this project is to build a personal portfolio for myself as well as try out new libraries to help assist on building it - a combination of building and learning as I go.

## Setup

To run this project locally, install the necessary dependencies using NPM:

```
$ npm install
```

Afterward, run the project in dev mode:

```
$ npm run dev
```

## Built with

Here are the libraries I used to build this portfolio. Outside basic React with JavaScript, everything used here is a new learning experience for me.

- [Next.js 14.2.3](https://nextjs.org/) using App router
- Typescript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion Animation Library](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide-Icons](https://lucide.dev/)
- [Lottie React](https://lottiereact.com/)
- [Contentlayer.dev](https://contentlayer.dev/)

### Projects

Individual project pages are created dynamically from markdown files. The usage of Contentlayer allowed fetching of markdown content as data directly into each page.

All that is needed is to create the Contentlayer config file, edit the Next + Typescript config file, define the content schema (in this case, a schema for projects) and that's it. Afterwards, it is simply a matter of importing that data directly into my project files as needed.

**Project Schema**:

| field   | type     | notes                                   |
| ------- | -------- | --------------------------------------- |
| title   | string   |                                         |
| content | string   | Small description of the project        |
| link    | string   | GitHub repo link                        |
| site    | string   | Live site link                          |
| src     | string   | location of image src                   |
| alt     | string   | alt name for image src                  |
| skills  | string[] | list of skills utilized for the project |

As long as all of the fields are fulfilled when creating a new markdown project file, any new markdown files in the `projectItems` directory will automatically be imported so there are no code configuration to do to add it into the project list.

## My Process

My process for developing the portfolio can be easily summed up as 3 steps:

1. Research
2. Prototype
3. Development
4. The Future

### Research

In order to create a portfolio, I wanted some inspiration on what some modern portfolios looked like, especially one with a focus on development like mine.

For this stage in development, I went and researched designs on these 2 sites:

- [Dribble](https://dribbble.com/)
- [Site Inspire](https://www.siteinspire.com/)

Doing this research allowed me to gain some insight as to how to design my portfolio and taken the right steps on creating it.

### Prototype

After the research stage, I decided to make a rough prototype of my site using [Figma](https://www.figma.com/) design tools. Nothing too deep on the prototype, just a simple markup for what I wanted my portfolio to potentially look like, the layout, colors, etc.

### Development

Once I had an idea of what I wanted my project to look like, I went on and gather the tools I needed in order to create the design I wanted. At the same time, I also wanted to try out various libraries that I came across in my development journey, which is the secondary purpose of this project.

### The Future

This is not a one-and-done project, as I plan on updating the site and content sometime in the future when necessary. This may include:

- Adding more projects
- Bug fixes
- UI improvements

## Resources

### Prototyping

- [Figma](https://www.figma.com/) for prototyping
- [Coolers](https://coolors.co/) to help generate a color palette for my portfolio
- [Site Inspire](https://www.siteinspire.com/) for research
- [Dribble](https://dribbble.com/) for research

### Content

- [Contentlayer.dev Documentation](https://contentlayer.dev/docs/getting-started-cddd76b7)

### UI and Assets

- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction) to edit shadcn components
- [Skill Icons](https://skillicons.dev/) for SVG icons
- [Background Texture by Simon Fairhurst](https://www.figma.com/community/file/1184852075345917340)
