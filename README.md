# Svelte Form UI
`npm install @tuentyfaiv/svelte-form-ui @tuentyfaiv/svelte-form`

## Imports
- ### Config 
  ```typescript
  import { setConfig } from "@tuentyfaiv/svelte-form-ui";
  ```
- ### Build-in forms
  ```typescript
  // Forms components
  import {
    SigninForm,
    SignupForm,
    ContactForm,
  } from "@tuentyfaiv/svelte-form-ui";
  // Forms schemas
  import {
    fieldsSignin,
    fieldsSignup,
    fieldsContact,
  } from "@tuentyfaiv/svelte-form-ui";
  ```
- ### Utils
  ```typescript
  // Functions
  import { getTexts } from "@tuentyfaiv/svelte-form-ui";
  // Regex
  import {
    NUMBERS,
    REGEX_PASSWORD,
    REGEX_PHONE,
    REGEX_PHONE_CODE,
  } from "@tuentyfaiv/svelte-form-ui";
  ```
- ### Types
  ```typescript
  import type {
    ConfigForm,
    FieldInputForm,
    FormStyles,
    GlobalFormProps,
    TextsProp,
    SigninValues,
    SignupValues,
    ContactValues,
  } from "@tuentyfaiv/svelte-form-ui";
  ```