Products Grid
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage displays a list of products for people to browse.

Please read the instructions below to setup the app.

Features
----

- products are displayed in a grid.
- gives the user an option to sort the products in ascending order. Can sort by "size", "price" or "id".
- each product has :
  - a "size" field, which is the font-size (in pixels) that the faces are displayed to give customers a realistic impression of what they're buying.
  - a "price" field, in cents.
  - a "date" field, which is the date the product was added to the catalog. Dates are displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date is displayed.
- the product grid automatically loads more items as you scroll down.
- displays an animated "loading..." message while the user waits for the data to load.
- when the user reaches the end and there are no more products to display, the message "~ end of catalogue ~" is shown on screen.

### Ads features

- after every 20 products an random advertisement is inserted from one of our sponsors which changes when user scrolls down to load new items.

FAQ
----

### How do I start the app?

`cd` to the root folder and type `npm install`, then type `cd frontend && yarn install`. `cd` back to the root folder and type `npm run build`. The app is programmed in a way that the command will start both the backend and ReactJs server and then you can open the site on localhost:3000 if thats the default port on your device.

### What are the libraries/frameworks, packages, tools used?

React.js as the main js library
Bootstrap for the layout and some of the components used
Date formatting and Product loading is done by plain ES6 Javascript