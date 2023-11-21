# VitePackageTemplate 
# 个人组件库项目
# Monorepo环境项目
### 项目使用pnpm包管理器
### 项目使用Vite前端构建工具
### 项目使用Vue3+TypeScript开发
### 项目使用vite-plugin-dts工具添加*.d.ts声明文件

# 项目结构
### examples 用于包测试
### packages 包文件存放处，所有包项目都在这个目录下例如此模板中的wnview包

# 使用流程
### 1.在根目录&examples&packages/wnview三处分别执行pnpm i
### 2.examples目录下执行pnpm run serve 测试wnview包中的button组件
### 3.在wnview目录下执行pnpm run build 打包wnview包
### 4.在examples和wnview安装新的插件的时需要追加 -w 参数eg:pnpm i vue3-lottie -D -w