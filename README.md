### Notes

- Start with Auth0, and if I need to create my own Auth through Node.js with MongoDB, then use JWT in that case.
- Moved @types from dependencies to devDependencies. By default they were installed to dependencies but I see online that they should be moved to devDependencies.
- within the theme.tsx I suppose I can only use theme directly and not props.theme, because that did not seem to work.

### Errors

- Fixed tons of typescript errors, but theme values don't seem to work on styled components with emotion, not sure why. For example this does not work for some reason:

```jsx
 color: ${(theme: ThemeProps) => theme?.colors?.text};
```

- I probably don't know enough about TypeScript, because it does work with props: any, like this:

```jsx
  color: ${(props: any) => props.theme.colors.text};
```

### Todo

- Create Apollo Server Node.js + MongoDB Backend with JWT Authentication
