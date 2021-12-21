#FROM:项目基于什么开发（node、java等）
#WORKDIR:指定容器的工作目录，即项目在容器位置
#COPY:将项目copy到容器
FROM node:14
WORKDIR /app
COPY . /app

#构建镜像时执行内容 START
#设置时区
RUN  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
#安装依赖
RUN npm set registry https://registry.npm.taobao.org
RUN npm install
RUN npm install pm2
#构建镜像时执行内容 END

#通过镜像run的时候执行，只有一个CMD命令 START
#启动，注：npx pm2 log 是为了阻塞控制台命令
#CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev
CMD npm run prd-dev && npx pm2 log
#通过镜像run的时候执行，只有一个CMD命令 END

#环境变量
ENV SERVER_NAME="lego-editor-server"
ENV AUTHOR_NAME="still"
