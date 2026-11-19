/**
 * PM2 进程管理配置 —— Speak 英语学习笔记（VitePress 静态文档站）
 *
 * 快速上手：
 *   1. 构建站点产物：      npm run docs:build
 *   2. 启动：              pm2 start ecosystem.config.js
 *   3. 查看状态：          pm2 status
 *   4. 查看日志：          pm2 logs speak-english
 *   5. 保存进程列表：      pm2 save
 *   6. 设置开机自启：      pm2 startup
 *
 * 常用管理命令：
 *   重载（零停机）：        pm2 reload speak-english
 *   停止：                 pm2 stop speak-english
 *   重启：                 pm2 restart speak-english
 *   删除：                 pm2 delete speak-english
 */
module.exports = {
  apps: [
    {
      // 进程名（pm2 列表中的显示名，也用于 pm2 logs/stop 等命令定位）
      name: 'speak-english',

      // 直接调用 VitePress CLI 的 preview 命令，serve 构建产物 docs/.vitepress/dist
      script: 'node_modules/vitepress/bin/vitepress.js',
      args: 'preview docs --host 0.0.0.0 --port 4173',

      // 工作目录（保证相对路径 docs / node_modules 可正确解析）
      cwd: __dirname,

      // 单实例 fork 模式（静态文件服务为 I/O 密集，单实例即可）
      instances: 1,
      exec_mode: 'fork',

      // 崩溃自动重启
      autorestart: true,
      max_restarts: 10,
      restart_delay: 4000,

      // 内存超过 300M 自动重启（防内存泄漏）
      max_memory_restart: '300M',

      // 环境变量
      env: {
        NODE_ENV: 'production',
      },

      // 日志（目录 logs/ 会在首次启动时自动创建）
      out_file: './logs/pm2-out.log',
      error_file: './logs/pm2-error.log',
      merge_logs: true,
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',

      // 生产环境关闭文件监听，避免误重启
      watch: false,
      ignore_watch: [
        'node_modules',
        'docs/.vitepress/cache',
        'docs/.vitepress/dist',
        'logs',
      ],
    },
  ],
};
