# 一个简单的脚手架
<!-- TOC -->

- [1. 安装](#1-安装)
- [2. 使用](#2-使用)
- [3. 其他命令](#3-其他命令)

<!-- /TOC -->

## 1. 安装

- 方法一

    ```sh
    npm install sedan-cli -g
    ```

- 方法二

    ```sh
    # git clone代码到本地，然后运行以下命令
    npm install
    npm link
    ```

## 2. 使用

```sh
# 创建一个基于React的PC版项目
# 使用模板https://github.com/Tracis/react-start-template
sedan-cli init react-start-template my-project
# 创建一个基于framework7-react的项目
# 使用模板https://github.com/Tracis/framework7-react-start-template
sedan-cli init framework7-react-start-template my-project
```

## 3. 其他命令

```sh
# 获取配置项
sedan-cli config get
# 设置配置项
sedan-cli config set type users
sedan-cli config set registry Tracis

# 获取使用方法
sedan-cli -h
```