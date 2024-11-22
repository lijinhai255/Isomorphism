# Isomorphism 项目

## 概述
**Isomorphism** 项目是一个基于 [Next.js](https://nextjs.org/)（版本 15.0.3）构建的 Web 应用程序。它利用 React 框架来创建服务端渲染（SSR）和静态 Web 应用程序。该项目还包括 TypeScript 用于类型安全，Tailwind CSS 用于样式，以及 ESLint 用于代码检查。

## 项目结构
项目具有以下重要的文件和目录：

- **`app/`**: 包含主应用程序组件和页面。
- **`node_modules/`**: 存储项目依赖项。
- **`.env`**: 环境变量文件。
- **`next.config.ts`**: Next.js 的配置文件。
- **`tailwind.config.ts`**: Tailwind CSS 的配置文件。
- **`tsconfig.json`**: TypeScript 配置文件。
- **`package.json`**: 包含项目的元数据、脚本和依赖项。

## 安装
要开始使用，您需要克隆此代码库并安装依赖项。运行以下命令：

```bash
# 克隆代码库
git clone <repository-url>

# 进入项目目录
cd isomorphism

# 安装依赖项
npm install
```

## 脚本
以下脚本可在 `package.json` 中找到，并可以使用 `npm run <script>` 运行：

- **`dev`**: 启动带有热重载的开发服务器。
- **`build`**: 构建生产环境应用程序。
- **`start`**: 启动生产服务器。
- **`lint`**: 运行 ESLint 对代码库进行检查。

## 依赖项
- **React** (`19.0.0-rc`): 主要的 UI 库。
- **React DOM** (`19.0.0-rc`): 提供 React 的 DOM 特定方法。
- **Next.js** (`15.0.3`): 用于服务端渲染和静态网站生成的框架。
- **TypeScript** (`^5`): 为 JavaScript 添加类型安全。
- **Tailwind CSS** (`^3.4.1`): 实用优先的 CSS 框架，用于样式。
- **ESLint** (`^8`): JavaScript 和 TypeScript 的代码检查工具。

## 运行应用程序
要运行开发服务器：

```bash
npm run dev
```

此命令将在 `http://localhost:3000` 启动应用程序。您可以在浏览器中查看应用程序的运行效果。

要构建和运行生产版本的应用程序：

```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 代码检查
为了确保代码质量和一致性，使用以下命令运行 ESLint：

```bash
npm run lint
```

## 配置
- **Tailwind CSS**: 可以在 `tailwind.config.ts` 中修改配置，以自定义主题、颜色等。
- **TypeScript**: TypeScript 编译器的设置位于 `tsconfig.json` 中。
- **Next.js**: 你可以在 `next.config.ts` 中配置其他 Next.js 设置。

## 许可证
本项目采用 [MIT 许可证](LICENSE) 授权。

