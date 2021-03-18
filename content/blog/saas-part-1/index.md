---
title: "Building a Subscription SaaS: Part 1"
date: "2021-03-18T22:12:03.284Z"
description: The start of a subscription SaaS project through egghead.io's portfolio project club.  
tags: ["Next.js"]
---

This is the start of a series of articles going over the process of building a subscription SaaS (Software as a service) product. The undertaking of this project is through [egghead](https://egghead.io/)'s portfolio project club. I decided to tackle this project for multiple reasons. First, it has allowed me to collaborate with developers of all experience levels (mostly more experienced than myself) and to see how they would attempt to solve this problem. The project is also allowing me to get more familiar with technologies known and unknown. And I look at this as an opportunity to build a unique project for my portfolio to show to potential employers. Now you know why I've started this project, let's talk about the technologies used and reasons behind these choices.

## The Tech behind the SaaS

Through the portfolio club we were given guidance as a tech stack to use:

- React
- Next.js
- Firebase Authentication
- Firebase Cloud Firestore
- Subscription payments with Stripe
- Vercel
- TypeScript
- Cypress
- Tailwind

Since I had some familiarity with most of these technologies (with the exception of TypeScript and Cypress), I figured I would give it a go. I plan on integrating TypeScript and Cypress with my project as I go and I want to use this as an opportunity to learn both.

While one may debate this is not the perfect technology stack for such an application, there are some good reasons behind the choices made here. Using these technologies all together, it a form of Jamstack architecture. But talking about the benefits of the Jamstack architecture could be an article all in itself. Let's talk about why each one of these choices is a good fit for this project.

### React

React is a great JavaScript framework (or library depending on who you talk to) for developing user interfaces. It handles the rendering of data and encapsulates all of it into components that can help make a massive project much more feasible.

### Next.js

Next.js is a React Framework that gives you lots of tools out of the box to build apps with. Tools like routing built in, static and server rending, and minimal configuration.

### Firebase Authentication

Firebase is a Google platform that is for developing web and mobile apps. One feature Firebase has is Authentication. Some would debate this choice, but to get auth up and running with minimal developers working on a project, this makes sense. You can just plug it in and choose what providers you want to use for authentication.

### Firebase Cloud Firestore

Firestore is the cloud database that comes with Firebase. Keeping your database of products and users together keeps the project complexity down.

### Subscription payments with Stripe

Stripe is used to authorize recurring payments of the users. Stripe gives you the user interface to handle all payments and backend set up your products. You just need to configure and enjoy.

### Vercel

Vercel developed Next.js, so Vercel is set up to host Next.js projects. This makes the best choice for a hosting platform in my opinion.

### Tailwind

Design is important, but when you just need to worry about functionality, you don't want to create a whole design system. Tailwind allows you to start adding CSS into your Next.js project with minimal configuration.

## Conclusion

While some of these technologies may not be the best overall to achieve this project, one may debate this allows you to get up and running the quickest. This stack is great in terms of initial cost fiscally and developer time.