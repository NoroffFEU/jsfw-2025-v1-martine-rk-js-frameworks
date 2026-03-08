# JavaScript Framworks Course Assignment

Martine Reppesgård Karlsen

## Brief

Retrived from course assignment Brief:

### Description

Build a fully functional online shop using React and Next.js. The app must fetch products from a REST API, display them in a user-friendly layout, provide product detail pages, implement search and sorting behaviour, and include a complete shopping cart and checkout flow. You must also create a validated contact form and ensure the full site works well on desktop and mobile.

The application allows users to:

- Browse a list of products
- View detailed information about each product
- Search for products from the homepage
- Add and remove items from a shopping cart
- Adjust quantities and view total cost
- Complete a checkout flow
- Send a message through a validated contact form

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Prototype

Before I begun with creating the online shop website, I created high-fideltiy prototypes in Figma. I started with the mobile-first approach and later created the desktop version. In addition, I created a design system for consistent design throughout the website.

[Prototype](https://www.figma.com/design/4dW3fTp1S1C8q578PEWW9U/JavaScript-Frameworks-online-shop?node-id=1-2&t=UU7UeSd7ILNvUelF-1)

## Live Website

[Live website](https://theselection.netlify.app/)

## Technology stack

- React/Next.js
- Typescript
- Tailwind CSS
- React Hot Toast (notifications)
- Flowbite (Spinning loader, not-found page)

## Known issues

- Checkout input fields are not functional and are disabled, shown only for demonstration.

## AI Usage

During this course assignment I used AI as a guidance and helping tool.

Tool used: ChatGPT
Date: 16 February 2026
Purpose: Get suggestions for name to the Online shop
Outcome: Found a suitable name to use for the Online shop.

Tool used: Stitch AI
Date: 16 February 2026
Purpose: Asked it to give examples on how to display products in an online shop.
Outcome: It helped me get the ideas flowing, and gave me an idea starting point.

Tool used: Claude AI
Date: 20 February 2026
Purpose: Asked for guidance on what could be the reason for that the Tailwind styling was not working/updating.
Outcome: Got a suggestion to clear the Next.js build cache and restart with “npm run dev”, which solved the issue.

Tool used: ChatGPT
Date: 26 February 2026
Purpose: Asked about a React error. Snippet from the error: “ A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.“
Outcome: Found out the cause of the error was from the extension Grammarly.

Tool used: ChatGPT
Date: 27 February 2026
Purpose: Asked about a TypeScript error.
Outcome: Explained the TypeScript error and provided examples of possible causes, which helped me solve the error.

Tool used: ChatGPT
Date: 1 March 2026
Purpose: Asked what could be the cause of an error.
Outcome: Found out the problem was that I had forgotten “use client”.

Tool used: Google AI
Date: 6 March 2026
Purpose: Asked how to calculate the percentage of a discounted price.
Outcome: Got the mathematical formula on how to calculate it.

## Placeholder text

I used Lorem Ipsum placeholder text on following pages: About, Sustainability and Terms of use.

## Banner image

Retrived from Pexels:
Photo by Tara Winstead: https://www.pexels.com/nb-no/bilde/anlegg-plante-stilleben-sukkulent-7663195/
