# The Top-Notch React+Next.js Notes - Ansh Singh Sonkhia

https://www.youtube.com/watch?v=HxxN6AdEop0

## Two Way Binding

In React, two-way binding refers to the synchronization of data between a form input element and the component's state. It allows changes made to the input field by the user to automatically update the component's state, and vice versa. 

Here's how two-way binding can be achieved in React:

1. **State Initialization**: Initialize a state property in the component to hold the value of the input field.

   ```javascript
   import React, { useState } from 'react';

   function MyComponent() {
     const [value, setValue] = useState('');

     // Other component logic...

     return (
       <input
         type="text"
         value={value}
         onChange={(e) => setValue(e.target.value)}
       />
     );
   }
   ```

2. **Binding Value and onChange Event**: Bind the value of the input field to the state property using the `value` attribute, and handle changes to the input field using the `onChange` event.

   - The `value` attribute sets the initial value of the input field to the value stored in the component's state.
   - The `onChange` event updates the state with the new value entered by the user.

By setting the value of the input field to the component's state and updating the state in response to user input, React ensures that changes made to the input field are reflected in the component's state, and vice versa, achieving two-way binding.

- We can create separate `layout.js` file inside every folder for the pages, with `page.js`

## App Routing in Next.js

25:09

## `fetch` vs `axios` APIs

Here are the key differences between Fetch API and Axios in brief:

1. **Fetch API**:
   - Built-in browser API for making HTTP requests.
   - Lightweight and native to the browser.
   - Provides a low-level interface with less built-in functionality.
   - Requires additional steps for tasks like JSON parsing and error handling.

2. **Axios**:
   - External library for making HTTP requests in both browser and Node.js environments.
   - Offers a more intuitive and feature-rich API.
   - Simplifies common tasks such as JSON parsing, error handling, and request cancellation.
   - Provides additional features like interceptors and request/response transformation.

In summary, Fetch API is lightweight and native to the browser, while Axios is a standalone library with a more user-friendly API and additional features. The choice between them depends on your project requirements and preferences.

## Context API

```js
createContext()
```

- We don't want mediators in our conversation between 2 components. Otherwise, these mediators will have access to our data, thus decreasing security of app data.

```js
import React, { createContext } from 'react';
export const MyContext = createContext()
```

-- `layout.js` would look like this:

```js
import { Inter } from "next/font/google";
import "./globals.css";
import MyContext from "@/Helper/Context";   // <--

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body suppressHydrationWarning className={inter.className}>
            <MyContext> 
                {children}
            </MyContext>
        </body>
    </html>
  );
}
```

- Remember, MyContext should be imported like this:

```js
import MyContext from "@/Helper/Context"; 
```

- access data using `useContext()`

```js
const user = useContext(MyContext)
```

## Showing Flash Messages (React Toastify)

## Server Side Rendering (SSR) vs Client Side Rendering (CSR)

## Deployment options:

- onRender (Render .com)
- Netlify
- Vercel