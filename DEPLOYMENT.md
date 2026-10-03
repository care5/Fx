# COBRA FX deployment

This package is a static, responsive multi-page front end.

## Upload
Upload the contents of this folder to the public web root of your hosting account.
The entry page is `index.html`.

## Included
- 14 HTML pages
- Shared dark/cyan visual system
- Responsive mobile layout
- Dashboard
- Bot library
- Bot builder UI
- Analysis UI
- Manual trading UI
- Copy-trading UI
- Live chart placeholder
- Tutorials, guides and FAQ
- Login/signup/settings screens
- PWA manifest and service worker
- Small client-side interaction layer

## Production integrations still required
The UI intentionally does not fake real financial functionality. Before live use,
connect a secure server/API for authentication, market data, broker execution,
bot execution, account balances, payments and any copy-trading functionality.

Never put API secrets, broker tokens or private keys in browser JavaScript.
