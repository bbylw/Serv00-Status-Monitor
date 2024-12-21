# Serv00-Status-Monitor (s00mon)

[![更新时间](https://img.shields.io/badge/更新时间-实时-brightgreen.svg)](https://github.com/yourusername/your-repo)

该项目提供了 Serv00 服务器的实时状态监控，包括 IP 可用性检测和服务器性能监控。监控面板采用美化后的 Pornhub 风格设计。

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
- 🔄 CPU 使用率和负载情况
- 💾 内存使用情况和占用率
- 💿 磁盘使用量和剩余空间
- 🌐 网络带宽使用情况
- 🌡️ 服务器温度监控（如果支持）

性能监控数据来源: [https://ssss.nyc.mn/](https://ssss.nyc.mn/)

## 🎨 界面特点

本项目使用了 [serv00nezha](https://github.com/bbylw/serv00nezha) 提供的美化面板，具有以下特点：

- 🎨 Pornhub 经典黑橙配色方案
- 📱 完全响应式设计，支��各种设备
- 🖼️ 内嵌原版监控面板
- 🔗 快速跳转原站功能
- ⚡ 基于 Cloudflare Workers 部署，访问速度快
- 📊 实时数据更新，监控无延迟

## 📈 实时数据展示

> 注：数据每 1 分钟自动更新一次

### 服务器状态总览

| 指标 | 状态 |
|------|------|
| 在线状态 | ✅ 运行中 |
| CPU 负载 | - |
| 内存使用 | - |
| 网络状态 | - |

## 🛠 部署自己的监控面板

如果你想部署类似的监控面板，可以访问 [serv00nezha](https://github.com/bbylw/serv00nezha) 项目获取详细的部署指南和源代码。该项目提供了完整的 Cloudflare Workers 部署方案。

## 🙏 致谢

本项目基于以下项目和数据源：

- [ss.botai.us.kg](https://ss.botai.us.kg/) - IP 可用性检测
- [ssss.nyc.mn](https://ssss.nyc.mn/) - 服务器性能监控（基于哪吒监控）
- [serv00nezha](https://github.com/bbylw/serv00nezha) - 哪吒面板美化项目

## 📝 许可证

MIT License

## 🔄 自动更新

本项目数据通过 GitHub Actions 自动更新，确保监控数据的实时性。

---
本项目仅用于监控展示，实际数据来源于上述致谢网站
