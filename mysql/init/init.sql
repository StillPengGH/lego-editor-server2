--docker-compose 启动 mysql 服务时初始化代码

select "init start ..."

-- 设置 root 用户可外网访问
use mysql;
SET SQL_SAFE_UPDATES=0; --解除安全模式，测试环境，没关系
update user set host='%' where user='root';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; -- 密码参考 docker-compose 设置的
flush privileges;

select "init end ..."