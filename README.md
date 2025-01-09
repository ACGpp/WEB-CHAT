# AI Chat Web Application

## 项目介绍
这是一个基于React和TypeScript开发的AI对话应用。用户可以选择不同的AI模型，与之进行实时对话。

## 功能说明

### 1. 管理对话
- 使用侧边栏选择不同的AI模型。
- 在聊天页面与所选模型进行对话，并查看聊天历史记录。
- 可以清空聊天历史记录。

### 2. AI模型集成
- 支持多种AI模型，包括Anthropic、OpenAI、Google等。
- 用户选择模型后，在主内容区域内嵌相应的模型网址，进行互动。

## 使用方法

### 1. 克隆项目

```bash
git clone https://github.com/您的用户名/项目名.git
cd 项目名
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 访问应用

打开浏览器，访问 `http://localhost:5173` 进行使用。

## 项目架构
```
src/
  ├── components/        # 组件目录
  │   ├── Layout/        # 布局组件
  │   │   └── Sidebar.tsx # 侧边栏组件
  ├── pages/             # 页面组件
  │   └── Chat.tsx       # 聊天页面，内嵌模型网址
  ├── types/             # TypeScript 类型定义
  │   └── chat.ts        # 类型定义
  ├── index.css          # 全局样式
  ├── App.css            # 应用级样式
  └── App.tsx            # 应用入口
```

## 技术细节

### 1. 路由管理

使用**React Router**进行路由管理，配置聊天页面的路由。

### 2. 样式与布局

使用**Tailwind CSS**进行快速样式开发，确保响应式设计和一致的用户体验。

## 注意事项

- **模型可用性**：
  - 请确保选择的模型支持内嵌`iframe`，否则可能无法正常加载。

- **浏览器要求**：
  - 建议使用现代浏览器（Chrome, Firefox, Edge等）以获得最佳体验。

- **浏览器设置**：
  - 请确保允许浏览器加载`iframe`内容，避免因安全策略导致模型无法加载。

## 许可证

[MIT](LICENSE)