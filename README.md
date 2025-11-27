This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Local Auth (Firebase removed)

This project no longer uses Firebase for authentication. A small local auth system uses the browser's `localStorage` to store user accounts and the current session.

For now, there's a pre-defined account available for convenience:

- Email: `sai@gmail.com`
- Username: `sai`
- Password: `1234`

You can also register new accounts using the registration form; those accounts are stored in `localStorage` for local testing.

## Navigation updates (2025-11-27)

This project structure and navigation have been updated to reflect a simplified top-level menu and folder layout. The primary navigation now contains 6 main elements:

- Dashboard -> `/dashboard`
- Master Data -> `/master-data`
- Sales & Operations -> `/sales-and-operations/*`
- Finance & Billing -> `/finance-and-billing/*`
- Reports & Analytics -> `/reports-and-analytics`
- Administration -> `/administration/*`

Legacy dashboard routes under `/dashboard/*` are kept and redirect to the new top-level paths to preserve existing links during transition.

If you'd like the global navigation to appear even for non-authenticated pages, modify `components/NavBar.tsx` and remove the `useAuth` guard.

