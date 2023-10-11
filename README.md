# @kirklin/prettier-config

[![npm](https://img.shields.io/npm/v/@kirklin/prettier-config?color=f03e3e)](https://npmjs.com/package/@kirklin/prettier-config)
[![star](https://img.shields.io/github/stars/kirklin/prettier-config?color=1c7ed6)](https://github.com/kirklin/prettier-config)
[![license](https://img.shields.io/npm/l/@kirklin/prettier-config?color=37b24d)](https://github.com/kirklin/prettier-config/blob/main/LICENSE)

My personal Prettier config ( 我的 Prettier 配置 )

## Configs ( 配置 )

- Use semi ( 使用分号 )
- Use double quotes ( 使用双引号 )
- Ignore space around HTML tags ( 忽略 HTML 标签周围空格 )
- Ignore `pnpm-lock.yaml` file ( 忽略 `pnpm-lock.yaml` 文件 )

## Install ( 安装 )

```bash
npm i -D prettier @kirklin/prettier-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
// config
"prettier": "@kirklin/prettier-config"

// script
"scripts": {
  "format": "prettier --cache --write ."
}
```
