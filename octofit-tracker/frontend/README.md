# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/creation-template-react-ts) for TypeScript + ESLint

## Environment variables

This project supports running against a backend hosted in a Codespace preview.
Set `VITE_CODESPACE_NAME` (for example in `.env.local`) to the Codespace name
so the frontend builds API calls against:

	https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev

If `VITE_CODESPACE_NAME` is not set the frontend will fall back to
`http://localhost:8000/api/...` for local development.
