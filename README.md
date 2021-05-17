# Login Form for Undisclosed Bank Support

## Technologies Used

- Normalize SCSS
- Vue 3
- Vue CLI
- Jest + @testing-library/vue

## Code Structure

- `src/App.vue` – entry point
- `src/fonts/` – font files used (Helvetica Neue + custom icon font)
- `src/styles/` – global styles (webfonts and icons)
- `src/styles/_variables.scss` – extensively used SCSS variables
- `src/components` – every app component
- `src/components/LoginForm.vue` – core logic component
- `src/components/Base*.vue` – reuseable presentational components
- `src/components/LoginForm*.vue` – components, specific to login form
- `tests/unit/LoginForm.spec.js` – unit tests

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
