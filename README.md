# CRA Web Starter

The title says it all. Boilerplate for future react projects on the web.

# Packages

-   Tailwind CSS
-   CRACO (Since Create React App doesn't let you override the PostCSS configuration natively, needed to install CRACO to be able to configure Tailwind amongst other things)
-   ESLint
-   Prettier
-   urql
-   Typescript

# Running

To run in development mode:

```bash
yarn dev
```

Note that unless you have the GraphQL server up and running (specified in `codegen.yml` under key `schema`), the "prestart" generate step will fail.

# Environment Variables

There is currently only one environment variable, `REACT_APP_API_URL`, this should specify the API URL. Note **do not** include `/graphql` as for the resources requiring such an endpoint, this is added automatically.
