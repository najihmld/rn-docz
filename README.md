# Front-end Mobile (React Native CLI) Boilerplate


## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Configure environment variables.  
   Create `.env` file (or modify `.env.example` and save as `.env`).
4. Run `yarn android` or `yarn ios`.


## Scripts

- `yarn start` - Start Metro (the JavaScript bundler that ships with React Native)
- `yarn android` - Run Android app
- `yarn ios` - Run IOS app
- `yarn lint` - Run [ESLint](https://eslint.org/)
- `yarn lint:fix` - Fix codes from ESLint errors
- `yarn test` - Run [jest](https://jestjs.io/) and collect test coverage


## File Structure

```raw
.
├── 📂 android/
├── 📂 ios/
├── 📂 locales/                JSON files for internationalization (i18n)
├── 📂 src/
│   ├── 📂 api/                API-related functions
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/        Common components
│   │   ├── ⚛️ forms/          Common components which is used specifically for user input
│   │   ├── ⚛️ layouts/        Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer)
│   │   └── ⚛️ sections/       Components which create a block/section of a page
│   ├── 📂 config/
│   ├── ⚛️ hooks/              Custom hooks
│   ├── ⚛️ navigations/
│   ├── ⚛️ screens/
│   ├── 📂 store/              Global states
│   ├── 📂 utils/              Utility functions
│   └── app.js                  Root component
├── .env                        Put environment variables here
├── .eslintignore
├── .eslintrc.js                ESLint configuration
├── .gitattributes
├── .gitignore
├── package.json
├── styles.json                 Custom tailwind styles generated from npx create-tailwind-rn
├── tailwind.config.js          Tailwind configuration
└── tailwind.js                 tailwind-rn's utility function

Notes:
📂: Folder
⚛️: React-related folder
```


## File & Folder Naming

- In general, **kebab-case** is prefered for folder & file naming.
- Use **kebab-case** and **.js** extension for react component file naming.  
  You can create component file directly like `some-component.js`, or create a folder `some-component/index.js`, as long as it is consistent.
- Use **kebab-case** and **.spec.js** for test file naming.


## Tools

- **Styling**: [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn)
- **Global State Management**: [Zustand](https://github.com/pmndrs/zustand/)
- **Server State Management**: [React Query](https://react-query.tanstack.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Date & Time Utility**: [date-fns](https://date-fns.org/)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **Internationalization (i18n)**: [i18n-js](https://www.npmjs.com/package/i18n-js)
- **Fallback UI**: [React Native Error Boundary](https://github.com/carloscuesta/react-native-error-boundary)
- **Linting**:
  - Ecma Version: 12 (es2021) 
  - Plugin: Airbnb, react, jsx-a11y
- **Error logging**: [Sentry](https://sentry.io/)


## Naming Conventions

- Variable name:
  - Should be camelCase.
  - For boolean variable, use "is", "can", or "has" prefix.  
    Example: `isExpired`, `isDeleted`, `canEditSomething`, `hasSomething`.
- Function name:
  - Should be camelCase.
  - Should starts with verb 1, and don't abbreviate that verb.  
    ✅ Correct example: `createAccount`, `validateForm`  
    ❌ Incorrect example: `creatingAccount`, `vldtForm`
  - For event-handler function, you can use "on" or "handle" prefix.  
    Example: `onScroll` / `handleScroll`, `onSave` / `handleSave`
- React component:
  - Should be PascalCase.
- React Query hook:
  - Should use "query" or "mutation" prefix. Example:  
    ✅ Correct example:  
    ```javascript
    const queryProducts = useQuery();
    const queryProductById = useQuery();
    const queryUsers = useQuery();
    const mutationProduct = useMutation();
    const mutationUser = useMutation();
    ```
    ❌ Incorrect example:  
    ```javascript
    // Don't destructure since the destructured variables name will conflict
    // You will end up renaming many variables
    const {
      data: dataProduct, isLoading: isLoadingProduct, error: errorProduct, refetch: refetchProduct,
    } = useQuery();
    const {
      data: dataUser, isLoading: isLoadingUser, error: errorUser, refetch: refetchUser,
    } = useQuery();
    const {
      data: dataMutationUser, isLoading: isLoadingMutationUser, error: errorMutationUser, mutate: mutateUser,
    } = useMutation();
    ```
