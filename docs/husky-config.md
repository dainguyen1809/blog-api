## 🚀 Husky?

- Husky help run scripts automatically before/between/after commits or push such as:
  - Format code
  - Check for errors (lint)
  - Check if commit messages are correct
  - Run tests before push

### ⚙️ 1. Install Husky

```
npm install -D husky
```

- `husky`: create a hook for Git
- `lint-staged`: only format the files just edited

### ⚙️ 2. Active Husky

```
npx husky
```

- Then, open **package.json**, and add this script:

```
"scripts": {
  "prepare": "husky install"
}
```
