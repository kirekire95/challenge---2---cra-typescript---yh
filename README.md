### Notes

- Start with Auth0, and if I need to create my own Auth through Node.js with MongoDB, then use JWT in that case.

### Errors

- Fixed tons of typescript errors, but theme values don't seem to work on styled components with emotion, not sure why. For example this does not work for some reason:

```jsx
 color: ${(theme: ThemeProps) => theme?.colors?.text};
```
