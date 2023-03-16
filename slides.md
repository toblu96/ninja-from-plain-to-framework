---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: fade
# use UnoCSS
css: unocss
download: true
# new cover
layout: ninja-cover
date: "17.03.2023"
image: "/mockup-skeleton.png"
imageClass: "translate-y-6"
# githubUrl: "https://www.holynope.com"
---

# From Plain to Framework

#### Bridge the gap between plain implementation and framework based development

---
layout: image-right
image: /mockup-skeleton.png
---

# Agenda
Our focus for today

<br>

- Recap
- Bridge between plain implementation and framworks
- Discussion about tech stack
- Continue working on mockup



---

# Recap 
What did we do last time?

<br>

<!-- for more icons check here: https://icones.js.org/collection/all?s=construct -->
- <vscode-icons-file-type-html class="tab"/> **HTML** - bones of our website
- <vscode-icons-file-type-css class="tab"/> **CSS** - because style matters
- <vscode-icons-file-type-js class="tab"/> **JS** - would be boring without interactivity
- <twemoji-building-construction class="tab"/> **Web Page** - building our first webpage, learn basics of interacting with elements
- <arcticons-grid-drawing-for-artist class="tab"/> **Mockup** - basic functionality for MVP

<style>
  .tab {
    margin-right: 1rem;
  }
</style>
---
src: ./pages/plain-implementation.md
---
---
src: ./pages/framework-basics.md
---
---
src: ./pages/exercises.md
---

---

# Preparing for Discussion
Requirement ideas for tech stack

- TypeScript support
- Rich ecosystem
- Some o
- Error handling, data fetching, state handling, ...
- Easy to start with (good DX)
- ❓ Other things


---
layout: center
class: text-center
---

# Discussion
Tech stack

---

# Some Ideas

#### Framework
[Nuxt (Fullstack Framework)](https://nuxt.com/)

<br/>

#### UI Libs
[TailwindUI - Premade components and pages](https://tailwindui.com/)

[NaiveUI - Lot of functional controls](https://www.naiveui.com/en-US/os-theme)

[shadcn/ui - Modern theme](https://ui.shadcn.com/)

<br/>

#### Layout Ideas
[go-view - Report editor](https://github.com/dromara/go-view)

---

# Working on Mockup
Basic component structuring

<img src="/basic-mockup.jpg" class="h-75% shadow-md b-1">
