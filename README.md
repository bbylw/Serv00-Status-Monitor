# Serv00-Status-Monitor (s00mon)

[![更新时间](https://img.shields.io/badge/更新时间-实时-brightgreen.svg)](https://github.com/yourusername/your-repo)

该项目提供了 Serv00 服务器的实时状态监控面板，集成了 IP 可用性检测和服务器性能监控两大功能。采用美化后的 Pornhub 风格设计，为用户提供直观的服务器状态展示界面。

## 🌐 项目特点

- 🎨 Pornhub 风格黑橙配色主题
- 📱 完全响应式设计，支持各种设备
- 🖼️ 双栏布局展示两个监控源
- ⚡ 实时数据展示，无需刷新
- 🔄 实时数据更新，无延迟监控

## 🌐 访问地址

- 状态监控页面 1: [https://s00c.pus.buzz/](https://s00c.pus.buzz/)
- 状态监控页面 2: [https://s00nz.pus.buzz/](https://s00nz.pus.buzz/)

## 📊 监控内容

### IP 可用性检测

通过实时检测来确认服务器的三个 IP 地址是否可用：

- IP 可用性数据来源: [https://ss.botai.us.kg/](https://ss.botai.us.kg/)

### 服务器性能监控

使用哪吒探针实时监控以下指标：

- ⏱️ 服务器在线状态和运行时间
- 🔄 CPU 使用率负载情况
- 💾 内存使用情况和占用率
- 💿 磁盘使用量和剩余空间
- 🌐 网络带宽使用情况
- 🌡️ 服务器温度监控（如果支持）

性能监控数据来源: [https://ssss.nyc.mn/](https://ssss.nyc.mn/)

## 🎨 界面特点

本项目采用精心设计的界面布局，具有以下特点：

- 🎨 Pornhub 经典黑橙配色方案
- 📱 完全响应式设计，支持各种设备
- 🖼️ 内嵌原版监控面板
- 🔗 快速跳转原站功能
- ⚡ 优化的加载速度
- 📊 实时数据更新，监控无延迟

## 📈 实时数据展示

> 注：数据每 1 分钟自动更新一次

### 服务器状态总览

| 指标 | 状态 |
|------|------|
| 在线状态 | ✅ 运行中 |
| CPU 负载 | ✅ 正常 |
| 内存使用 | ✅ 正常 |
| 网络状态 | ✅ 正常 |

## 🛠 部署建议

本项目提供了两种部署方式：

### 1. 直接部署

1. 克隆本仓库
2. 修改 `index.html` 中的监控源地址
3. 部署到任意静态网页托管服务

### 2. Worker 部署

1. 访问 [Cloudflare Workers](https://workers.cloudflare.com/)
2. 创建新的 Worker
3. 复制本项目中的 `worker.js` 代码并部署

> 提示：如果你对美化面板感兴趣，可以参考 [serv00nezha](https://github.com/bbylw/serv00nezha) 项目的设计方案。

## 📁 项目文件

### index.html

前端页面文件，包含：

- Pornhub 风格样式设计
- 响应式双栏布局
- iframe 嵌入监控源

### worker.js

Cloudflare Worker 代理文件，功能：

- 提供静态页面服务
- 处理跨域代理请求
- 支持多监控源配置

## 🙏 致谢

本项目基于以下项目和数据源：

- [ss.botai.us.kg](https://ss.botai.us.kg/) - IP 可用性检测
- [ssss.nyc.mn](https://ssss.nyc.mn/) - 服务器性能监控（基于哪吒监控）
- [serv00nezha](https://github.com/bbylw/serv00nezha) - 界面设计参考

## 📝 许可证

MIT License

## 🔄 自动更新

本项目数据通过 GitHub Actions 自动更新，确保监控数据的实时性。

---
本项目仅用于监控展示，实际数据来源于上述致谢网站
