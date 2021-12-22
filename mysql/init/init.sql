-- docker-compose 启动 mysql 时的初始化代码

select "init start...";

-- 设置 root 用户可外网访问
use mysql;
-- 解除安全模式，测试环境，没关系
SET SQL_SAFE_UPDATES=0; 
update user set host='%' where user='root';
flush privileges;
-- 密码参考 docker-compose.yml
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456'; 
flush privileges;

select "init end...";
