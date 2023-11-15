#VitePackageTemplate 
#包库项目模板 
#组件库项目模板 
#Monorepo环境项目

##项目使用pnpm包管理器
##项目使用Vite前端构建工具
##项目使用Vue3+TypeScript开发
##项目使用vite-plugin-dts工具添加*.d.ts声明文件

#项目结构
##examples 用于包测试
##packages 包文件存放处，所有包项目都在这个目录下例如此模板中的wn-ui包

#使用流程
##1.在根目录&examples&packages/wn-ui三处分别执行pnpm i
##2.examples目录下执行pnpm run serve 测试wn-ui包中的button组件
##3.在wn-ui目录下执行pnpm run build 打包wn-ui包