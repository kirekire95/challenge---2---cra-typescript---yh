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

- Add Image Upload in backend + drag and drop functionality in frontend?
- Handle expired tokens as well as refresh tokens with the help of reactsecurity
- Should be able to edit user without providing everything and just changing what I want, maybe just username

### Learnings

- You can not use `@ts-ignore` for a block in TS. https://stackoverflow.com/questions/51145180/how-to-use-ts-ignore-for-a-block. But as a workaround you can use a comment at the top of a file to disable type-checking for that file like this:

```ts
// @ts-nocheck
```
