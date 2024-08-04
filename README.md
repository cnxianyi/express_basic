# init

## 目录说明

- **`.husky/`**: 包含 Git 钩子配置文件，设置 `pre-commit`钩子。配置 `husky` 来自动运行 `lint-staged` 以在提交前自动检查代码质量。

```
# pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```

```json
// package.json
"lint-staged": {
    "src/**/*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
```

- **`logs/`**: 存放应用程序的日志文件。此目录用于记录应用程序的运行时信息和错误日志。

- **`node_modules/`**: 存放项目的所有 npm 依赖包。这个目录由 `npm` 或 `pnpm` 自动管理，不应手动修改。

- **`src/`**: 包含项目的源代码文件。所有业务逻辑、组件和功能代码都应该放在这个目录中。

- **`.editorconfig`**: 配置文件，用于统一项目中不同编辑器的代码风格设置。

- **`.gitignore`**: 指定 Git 应忽略的文件和目录。通常用于排除 `node_modules`、构建文件和敏感信息等。

- **`.prettierrc`**: Prettier 配置文件，用于定义代码格式化规则。例如，是否使用分号、单双引号等。

- **`eslint.config.js`**: ESLint 配置文件，用于设置代码检查规则和插件。包括代码风格、语法规则等。

- **`jest.config.js`**: Jest 配置文件，用于设置 Jest 测试框架的选项和设置。

- **`nodemon.json`**: Nodemon 配置文件，用于设置 Nodemon 以自动重启 Node.js 应用程序，通常在开发过程中使用。

- **`package.json`**: 包含项目的基本信息、依赖、脚本和版本等信息。项目的核心配置文件。

- **`pnpm-lock.yaml`**: 记录项目的依赖树及其确切版本，以确保一致的依赖安装。由 `pnpm` 自动生成和管理。

- **`README.md`**: 项目的自述文件，通常包含项目的介绍、安装和使用说明、贡献指南等信息。