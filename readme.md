# Speak 英语学习笔记库

<p align="center">
  <strong>中英对照 · IPA 音标 · CEFR 分级</strong><br>
  基于欧标 A1–C2 的英语口语学习笔记库，覆盖日常沟通、旅行、校园与商务场景。
</p>

<p align="center">
  <a href="https://lancecryp.github.io/speak_english/">
    <img src="https://img.shields.io/badge/在线阅读-立即访问-42b883?style=for-the-badge&logo=readthedocs&logoColor=white" alt="在线阅读">
  </a>
  &nbsp;
  <a href="https://github.com/lanceCryp/speak_english">
    <img src="https://img.shields.io/badge/源码-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub 源码">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CEFR-A1--C2-4c8bf5?style=flat-square" alt="CEFR">
  <img src="https://img.shields.io/badge/VitePress-文档站-646cff?style=flat-square&logo=vitepress" alt="VitePress">
  <img src="https://img.shields.io/badge/部署-GitHub%20Pages-2088ff?style=flat-square&logo=github" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/课程-9%20级主线%20%2F%205%20门拓展-ff7e5f?style=flat-square" alt="课程规模">
</p>

---

## 在线阅读

完整文档已部署为在线站点，左侧分级导航、顶部全文检索，每节课包含完整学习流程。

> **https://lancecryp.github.io/speak_english/**

---

## 课程体系

按 CEFR 欧标等级组织，从 A1 基础到 C1 高级逐级进阶，并配套多门场景实战拓展课。

### 主线课程 · A 级（基础）

| 级别 | 课程 | 能力目标 |
| --- | --- | --- |
| A1 | 基础入门级 | 掌握必备沟通技巧：描述自己、问路和表达时间 |
| A2 | 初级一 | 解锁讲故事技能，聊你的一天、过去经历和未来计划 |
| A2 | 初级二 | 驾驭常见语境：在用餐、购物和制定计划时流畅表达 |

### 主线课程 · B 级（中级）

| 级别 | 课程 | 能力目标 |
| --- | --- | --- |
| B1 | 中级一 | 应对现实生活中的挑战：做出比较、描述病情和处理日常事务 |
| B1 | 中级二 | 自信地表达自己：分享观点、做出决定和提供建议 |
| B1 | 中级三 | 展开更深入的话题：回顾遗憾、分享回忆和阐明价值观 |
| B2 | 中高级一 | 深入探讨：像母语者一样自信表达观点、比较优缺点、展开辩论 |
| B2 | 中高级二 | 更上一层楼：探索细微差异、提出解决方案、驾驭复杂情况 |

### 主线课程 · C 级（高级）

| 级别 | 课程 | 能力目标 |
| --- | --- | --- |
| C1 | 高级 | 炉火纯青：谈判斡旋、给予反馈、化解分歧，灵活驾驭复杂话题 |

### 拓展课程 · 场景实战

| 级别 | 课程 | 能力目标 |
| --- | --- | --- |
| B2 | 商务英语 | 进阶升级：像母语者一样与同事讨论、演讲展示和拿下面试 |
| A2 | 旅游英语一 | 轻松出国游：玩转机场、酒店和旅游景点 |
| B1 | 旅游英语二 | 解锁非凡旅行：掌握用餐、购物及与当地人交谈的实用表达 |
| B1 | 校园英语一 | 留学高分通关：自信满满地与教授和同学交流互动 |
| B2 | 校园英语二 | 留学轻松无碍：游刃有余地参与辩论和小组讨论 |

### 参考资料

| 类型 | 内容 | 说明 |
| --- | --- | --- |
| 词汇 | 生词本 | IPA 音标标注的难点单词，随时检索复习 |
| 参考 | CEFR 分级 | 欧标 A1–C2 各级能力对照、词汇量与考试对标 |
| 阅读 | 分级阅读 | A1–C2 分级可背诵短文，中英对照 · 重点词汇 |
| 阅读 | 分级阅读-new | 覆盖驱动的新版分级阅读：108 篇正文 + 6945 条分级短语专项清单 |

---

## 每节课包含什么

每个课程文件围绕同一场景展开，包含以下小节：

- **视频课**：核心句型与地道表达，逐句可背诵
- **口语操练**：同义替换与场景变体，反复操练到脱口而出
- **词汇积累**：高频词 + IPA 音标 + 中英对照
- **语法重点**：随文标注语法点，附额外例句
- **智能复习 / 角色扮演**：巩固记忆与场景实战

---

## 目录结构

```
docs/
├── A1_基础入门级/
├── A2_初级A/                 A2_初级B/
├── B1_中级A/  B1_中级B/  B1_中级C/
├── B2_中高级_A/              B2_中高级_B/
├── C1_高级/
├── O_A2_旅游英语A/           O_A2_旅游英语B/
├── O_B1_校园英语A/           O_B2_校园英语B/
├── O_B2_商务英语/
├── 分级阅读/                  分级阅读-new/
├── 复习/
├── CEFR分级.md
├── 难点单词.md
└── index.md
```

---

## 本地开发

```bash
npm install        # 安装依赖
npm run docs:dev   # 本地预览
npm run docs:build # 构建静态站点
```

构建产物推送至 `main` 分支后，由 GitHub Actions 自动部署到 GitHub Pages。
