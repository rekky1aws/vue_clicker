# Vue Clicker

A little clicker project made with Vue.js 3 to learn how to really use it.
Following this [tutorial](https://prismic.io/blog/try-tutorial-vue-pinia) and improving it.

For now it doesn't have any way to save progress but I plan to implement it using cookies and/or local storage.

## Run
To run this on your side, you'll need to do two small things (like every other npm project) :
 - install dependencies :
```bash
npm install
```
 - compile :
```bash
npm run build
```

# Hot Module Reloading / Watch Mode
If you want the build to refresh each time you change a file, you can buy using :
```bash
npm run watch
```
The HMR will run the builder on each file save and you can refresh on your browser to see the changes apply.

### HMR for Windows Users

Since HMR is not working in WSL2, run `npm run watch` in PowerShell instead.

An alternative would be to start your IDE / Code Editor from WSL.