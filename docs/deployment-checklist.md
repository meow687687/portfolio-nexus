# Deployment checklist

## Before deployment

- [ ] Confirm the final portfolio content, including the provisional project shortlist, against an approved content audit.
- [ ] Resolve the Kiln license discrepancy and keep the public status labeled unavailable until confirmed.
- [ ] Select and approve a hosting provider and canonical domain. Neither is configured.
- [ ] Set the canonical metadata base to the approved HTTPS domain; add canonical URLs and `og:url` values for the five public routes.
- [ ] Add a branded Open Graph/Twitter preview image and verify the preview on the live domain. Current metadata provides page-specific titles and descriptions, but no social image is configured.
- [ ] Confirm the GitHub and LinkedIn destinations from the account owner. The GitHub profile responded successfully during this audit; LinkedIn returned HTTP 999 (request blocked), so its destination could not be independently checked.
- [ ] Review font delivery/runtime requirements for the selected host; `next/font/google` currently fetches font data during the build.
- [ ] Review and resolve dependency audit findings according to the chosen release policy.

## Release gate

- [ ] `npm ci`
- [ ] `npm run lint`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] Run automated tests when a test suite is available (none is currently configured).
- [ ] Check all five routes, internal navigation, external links, keyboard focus, reduced motion, and representative mobile/tablet/desktop layouts against the production build.
- [ ] Check browser console and server logs for runtime errors and warnings.
- [ ] Verify page titles, descriptions, robots/indexing behavior, canonical URLs, and social previews on the approved live domain.
- [ ] Confirm rollback/redeployment procedure with the selected host.
- [ ] Obtain explicit deployment approval before publishing.
