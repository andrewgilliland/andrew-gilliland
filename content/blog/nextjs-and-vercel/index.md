---
title: Creating a Next.js App and Deploying with Vercel
date: "2021-03-10T22:12:03.284Z"
description: How to get a Next.js project up and running with Vercel  
tags: ["Next.js"]
---

> This article is a beginning of a series on my steps to create a SaaS product. As much as this is a guide to help me trace my thoughts, it will hopefully benefit those who look to go through the same journey. I am developing the SaaS project along with an [egghead.io](https://egghead.io/) portfolio project club.

There's a variety of ways to get web sites and web apps up and deployed, but creating and deploying a Next.js app on Vercel is a true delight. If you are wanting to get a static site up and running on the internet, this is a great solution. But don't think just because you have a static site created you can't have dynamic data coming in. With Vercel's serverless functions and/or using services in tandem with a Jamstack architecture, you can create web app functionality. And one of the best parts is that you can get a project up and going for free. Let's get started.

## Goals 🐳

- Learn how to deploy a Next.js app on Vercel
- Learn how to get your Next.js project on your local machine to start development

## Requirements 🦕

- A [Vercel](https://vercel.com/) account
- A [Github](https://github.com/) account

🙂 Note: Having your Vercel account linked to your Github account will make this very smooth

## Starting a New Project Vercel

First, log in to your Vercel dashboard. Click on the `New Project` button. The next page will offer you two options. You can either select an existing repository from your Github account, or you can start from a new project template. Select the Next.js template. The next page will select the scope of the project. On the Vercel free tier, your Github account is the only available option to select. Then you get to the page for creating the git repo, select Github. Create a name for the new repo that is about to be created in Github. The next page will have more details to enter, feel free to rename the project here, but the defaults for Next.js will work great. Click `Deploy` and enjoy. Your Next.js app will be deployed and a new Github reposititory has been created.

## Getting the Project Locally

You now have a deployed Next.js app and a Github repo, great, but now you need to be able to start coding. Go to your Github account and you will see a new repo created. Select the created repo and click the `Code` button. Copy the URL given to you in the clone section. Now go to the directory in your command line you wish to create the project in and insert:

```jsx
git clone https://github.com/github-account-name/project-name.git
```

After your repo has been cloned locally, go into the project directory in your command line, and type `npm install` to install all of the package dependencies. Once the dependencies are installed, run the development server with `npm run dev`, go to https://localhost:3000, and see your project alive in the browser. Start coding to see the effects take place immediately with Next.js Fast Refresh and enjoy.

## Conclusion

There we go, a Next.js project is up and running locally, deployed to Vercel, and a Github repo were created in these few steps. Now the fun happens. Go build something awesome my friends.
