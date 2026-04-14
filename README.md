# Angry King

一个基于 Phaser 3 的 2D 像素风格小游戏，国王大战小猪！

## 项目特性

- 使用 Phaser 3 游戏引擎
- 像素风格的游戏画面
- 多种游戏角色和道具
- 完整的游戏场景管理
- TypeScript 类型支持
- Vitest 测试框架
- Docker 部署支持

## 游戏特色

### 角色
- **国王 (King)** - 玩家控制的主角
- **小猪 (Pig)** - 基础敌人
- **小猪王 (Pig King)** - 强大的 Boss
- **其他变种小猪** - PigBox, PigBoom, PigHide

### 道具
- **箱子 (Box)** - 可破坏的障碍物
- **大炮 (Cannon)** - 发射炮弹的武器
- **金币 (Coin)** - 收集品
- **门 (Door)** - 通关门
- **生命 (Live)** - 生命值恢复

## 技术栈

- Phaser 3
- TypeScript
- Vite
- Vitest
- ESLint
- Docker
- Nginx

## 环境要求

- Node.js: 16.20.2
- pnpm: 8.8.0

## 安装

```bash
# 安装依赖
pnpm install
```

## 项目结构

```
angry-king/
├── src/
│   ├── Base/                  # 基础类
│   │   └── GameSceneBase.ts
│   ├── Scene/                 # 游戏场景
│   │   └── GameStart.ts
│   ├── Sprite/                # 游戏精灵
│   │   ├── Config/            # 配置管理
│   │   ├── Element/           # 游戏元素
│   │   └── Role/              # 游戏角色
│   ├── Test/                  # 测试场景
│   ├── assets/                # 游戏资源
│   │   ├── Aseprite/          # Aseprite 源文件
│   │   ├── AsepriteJson/      # Aseprite 导出的 JSON
│   │   ├── AsepriteSheet/     # 精灵表图片
│   │   ├── MapSource/         # 地图资源
│   │   └── Kings and Pigs.png
│   └── Preloader.ts
├── docker/                    # Docker 配置
├── nginx/                     # Nginx 配置
├── public/                    # 公共资源
├── index.html                 # 入口 HTML
├── main.ts                    # 入口文件
├── vite.config.ts             # Vite 配置
├── vitest.config.ts           # Vitest 配置
├── tsconfig.json              # TypeScript 配置
├── .eslintrc.cjs              # ESLint 配置
└── package.json               # 项目依赖
```

## 可用脚本

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 运行测试
pnpm test
```

## 游戏开发

游戏资源使用 Aseprite 制作，源文件位于 `src/assets/Aseprite/` 目录。

## 部署

项目支持 Docker + Nginx 部署，配置文件位于 `docker/` 和 `nginx/` 目录。

## License

Private
