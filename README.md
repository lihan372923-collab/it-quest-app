# IT 小白闯关营 Final：一次部署版

## 这版解决的问题
以后不用反复升级部署代码。课程内容、命令、排查案例、项目、词典都可以在 App 内“数据管理”里导入导出 JSON。

## 包含功能
- 100 关循序渐进课程
- 每关 3 道测试题
- 每关任务清单
- 每关学习笔记
- 学习路线
- 闯关地图
- 全局搜索
- 命令速查 + 收藏
- 故障排查工具箱
- 实战项目详情
- 术语词典
- 错题本
- 成就系统
- 数据导入导出
- 进度导入导出
- PWA 手机桌面版
- 纯静态部署，无数据库，无后端

## 部署
```bash
unzip it-quest-app-final.zip
sudo mkdir -p /var/www/it-quest
sudo cp -r it-quest-app-final/* /var/www/it-quest/
```

Nginx 配置：
```nginx
server {
    listen 80;
    server_name 你的域名或服务器IP;

    root /var/www/it-quest;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

重载：
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 以后怎么更新内容
打开 App → 数据管理 → 导出完整数据 → 编辑 JSON → 导入完整数据。

不需要重新上传代码。
