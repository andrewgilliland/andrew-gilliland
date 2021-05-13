---
title: Getting Started with Big O Notation
date: "2021-01-12T22:12:03.284Z"
description: Understanding big O notation can be tricky, hopefully this article helps.
tags: ["Algorithms", "JavaScript"]
---

If you are around computing, programming, and/or web development long enough, you will hear the term big O notation come up. So what's it about? And why should learn about it? That's what this article is here to help explain.

## Why Is Big O Notation Useful?

First, let's talk a little about why big O notation is might benefit your life. Learning big O notation might be something you need to learn for your college curriculum or you need to learn for the myriad of software interviews you are about to put yourself through.

Big O notation can be more useful than just those reasons. Let's say you want to compare efficiency of your code. Wouldn't it be nice to have a common way to express how well your code works? That is where big O comes in.

## What Is Big O Notation?

Big O notation is a way to express the efficiency of your code, functions or algorithms in terms of time and/or space complexity. In its representations, it will be defined in terms of the slowest time or maximum amount of space based off of the inputs.

## Common Representations

When you see big O notation, you will see it represented in terms such as: O(1), O(logn), O(n), O(nlogn), and O(n²). These representations can be pretty intimidating and look very math intensive, so let's talk about it and calm your nerves.

### O(1)
The representation O(1) means that a algorithm runs in constant time in relation to the input. As the input value increases, the time that it takes for the algorithm to run remains constant. Let's look at an example function:

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2
}
```

### O(logn)
Logarithmic

### O(n)
Linear

### O(nlogn)
Linearithmic

### O(n²)
Quadratic

## Resources
[Big O notation - Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
