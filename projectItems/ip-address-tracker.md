---
title: 'IP Address Tracker'
content: 'A web app that allow users to enter an IP address and retrieve the location and information of the IP address'
link: 'https://github.com/hny-codes/IP-Address-Tracker'
site: 'https://ip-address-tracker-hny-codes.vercel.app/'
src: '/images/projects/ip-tracker.png'
alt: 'ip address image'
skills:
  - Next
  - Tailwind
  - Typescript
  -
---

## IP Address Tracker

» [Full blog write-up here!](https://hny-blogs.vercel.app/posts/ip-address-tracker)

This is the **first** project done utilizing the new **app directory** feature in [Nextjs](https://nextjs.org/). When users enter in an IP address, the web application will display the following information:

- User's entered IP address
- Physical location
- Timezone
- ISP

In addition, the web application will also create a interactive map with a marker showing the physical location of the IP address. Users can drag and zoom in/out of the map to find additional information regarding the selected location.

This project is the solution to one of the [Frontend Mentor challenges](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

## The Challenge

Users **should** be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## APIs

Two APIs were used to create this project:

- [IP Geolocation API](https://geo.ipify.org/) - Grabs the data for the entered IP address
- [Leaflet](https://leafletjs.com/) - Create and mark down the physical location of the given IP address
