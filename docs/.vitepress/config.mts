import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Speak 英语学习笔记',
  description: '基于 CEFR 欧标等级的 Speak 英语口语学习笔记（A1-B2）',
  base: '/speak_english/',

  markdown: {
    config: (md) => {
      // IPA 音标高亮：在 core 阶段后处理 token 流，把 /ˈtʃɪli/ 这类音标拆为 <span class="ipa">，不改源文件。
      // 注意：不能用 inline.ruler——text 规则排在首位且 '/' 非其终止符，会先吞掉整段文本，自定义规则轮不到。
      const IPA_RE = /^\/[^/\n]{1,48}\/$/
      const IPA_CHAR = /[\u00E6\u00F0\u014B\u03B8\u0250-\u02FF]/
      md.core.ruler.push('ipa_highlight', (state: any) => {
        for (const token of state.tokens) {
          if (token.type !== 'inline' || !token.children) continue
          const next: any[] = []
          for (const child of token.children) {
            if (child.type !== 'text') {
              next.push(child)
              continue
            }
            const parts = child.content.split(/(\/[^/\n]{1,48}\/)/)
            for (const part of parts) {
              if (!part) continue
              if (IPA_RE.test(part) && IPA_CHAR.test(part)) {
                const html = new state.Token('html_inline', '', 0)
                html.content = '<span class="ipa">' + part + '</span>'
                next.push(html)
              } else {
                const text = new state.Token('text', '', 0)
                text.content = part
                next.push(text)
              }
            }
          }
          token.children = next
        }
      })
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '生词本', link: '/难点单词' }
    ],

    sidebar: [
      {
        text: 'A1 · 基础入门级',
        collapsed: false,
        items: [
          { text: '1. 给出简单的回应', link: '/A1_基础入门级/1_给出简单的回应' },
          { text: '2. Be动词上', link: '/A1_基础入门级/2_Be动词上' },
          { text: '3. Be动词下', link: '/A1_基础入门级/3_Be动词下' },
          { text: '4. 习惯和喜好', link: '/A1_基础入门级/4_习惯和喜好' },
          { text: '5. 你的朋友和兄弟姐妹', link: '/A1_基础入门级/5_你的朋友和兄弟姐妹' },
          { text: '6. 时间、日期和路线', link: '/A1_基础入门级/6_时间、日期和路线' },
          { text: '7. 需要和想要', link: '/A1_基础入门级/7_需要和想要' }
        ]
      },
      {
        text: 'A2 · 初级A',
        collapsed: true,
        items: [
          { text: '1. 过去发生的事', link: '/A2_初级A/1_过去发生的事' },
          { text: '2. 现在发生的事情', link: '/A2_初级A/2_现在发生的事情' },
          { text: '3. 到处走走', link: '/A2_初级A/3_到处走走' },
          { text: '4. 未来的计划', link: '/A2_初级A/4_未来的计划' },
          { text: '5. 与朋友见面', link: '/A2_初级A/5_与朋友见面' },
          { text: '6. 承诺与意图', link: '/A2_初级A/6_承诺与意图' }
        ]
      },
      {
        text: 'A2 · 初级B',
        collapsed: true,
        items: [
          { text: '1. 兴趣与特长', link: '/A2_初级B/1_兴趣与特长' },
          { text: '2. 家乡和学校', link: '/A2_初级B/2_家乡和学校' },
          { text: '3. 日常习惯', link: '/A2_初级B/3_日常习惯' },
          { text: '4. 周末计划', link: '/A2_初级B/4_周末计划' },
          { text: '5. 在餐厅用餐', link: '/A2_初级B/5_在餐厅用餐' },
          { text: '6. 去购物', link: '/A2_初级B/6_去购物' }
        ]
      },
      {
        text: 'B1 · 中级A',
        collapsed: true,
        items: [
          { text: '1. 考虑各种选择', link: '/B1_中级A/1_考虑各种选择' },
          { text: '2. 身体不舒服', link: '/B1_中级A/2_身体不舒服' },
          { text: '3. 看医生与去药房', link: '/B1_中级A/3_看医生与去药房' },
          { text: '4. 出现状况', link: '/B1_中级A/4_出现状况' },
          { text: '5. 家务和杂事', link: '/B1_中级A/5_家务和杂事' },
          { text: '6. 朋友的近况', link: '/B1_中级A/6_朋友的近况' }
        ]
      },
      {
        text: 'B1 · 中级B',
        collapsed: true,
        items: [
          { text: '1. 建议', link: '/B1_中级B/1.建议' },
          { text: '2. 做出决定', link: '/B1_中级B/2.做出决定' },
          { text: '3. 告诫和建议', link: '/B1_中级B/3.告诫和建议' },
          { text: '4. 选择与左右为难', link: '/B1_中级B/4.选择与左右为难' },
          { text: '5. 金钱和支出', link: '/B1_中级B/5.金钱和支出' },
          { text: '6. 计划变更', link: '/B1_中级B/6.计划变更' }
        ]
      },
      {
        text: 'B1 · 中级C',
        collapsed: true,
        items: [
          { text: '1. 经历与遗憾', link: '/B1_中级C/1.经历与遗憾' },
          { text: '2. 期望与现实', link: '/B1_中级C/2.期望与现实' },
          { text: '3. 可能性', link: '/B1_中级C/3.可能性' },
          { text: '4. 冲突与解决方案', link: '/B1_中级C/4.冲突与解决方案' },
          { text: '5. 追忆过去', link: '/B1_中级C/5.追忆过去' },
          { text: '6. 目标与价值观', link: '/B1_中级C/6.目标与价值观' }
        ]
      },
      {
        text: 'B2 · 中高级A',
        collapsed: true,
        items: [
          { text: '1. Connecting With People', link: '/B2_中高级_A/1.ConnectingWithPeople' },
          { text: '2. Interesting Hobbies', link: '/B2_中高级_A/2.InterestingHobbies' },
          { text: '3. Travel Talk', link: '/B2_中高级_A/3.TravelTalk' },
          { text: '4. Movies TV Beyond', link: '/B2_中高级_A/4.MoviesTVBeyond' }
        ]
      },
      {
        text: 'B2 · 中高级B',
        collapsed: true,
        items: [
          { text: '1. Your Travel Style', link: '/B2_中高级_B/1.YourTravelStyle' },
          { text: '2. Your Best Self', link: '/B2_中高级_B/2.YourBestSelf' },
          { text: '3. Speaking Up at Work', link: '/B2_中高级_B/3.SpeakingUpatWork' },
          { text: '4. Exploring New Endeavors', link: '/B2_中高级_B/4.ExploringNewEndeavors' }
        ]
      },
      {
        text: 'C1 · 高级',
        collapsed: true,
        items: [
          { text: '1. Finding a Middle Ground', link: '/C1_高级/1.FindingAMiddleGround' },
          { text: '2. Negotiating', link: '/C1_高级/2.Negotiating' },
          { text: '3. Giving Constructive Feedback', link: '/C1_高级/3.GivingConstructiveFeedback' },
          { text: '4. Making Amends', link: '/C1_高级/4.MakingAmends' }
        ]
      },
      {
        text: '商务英语 · B2',
        collapsed: true,
        items: [
          { text: '1. 职场术语精要', link: '/O_B2_商务英语/1.职场术语精要' },
          { text: '2. 会议', link: '/O_B2_商务英语/2.会议' },
          { text: '3. 与同事协作', link: '/O_B2_商务英语/3.与同事协作' },
          { text: '4. 讲演技巧', link: '/O_B2_商务英语/4.讲演技巧' },
          { text: '5. 求职面试与社交', link: '/O_B2_商务英语/5.求职面试与社交' },
          { text: '6. 办公室闲聊', link: '/O_B2_商务英语/6.办公室闲聊' }
        ]
      },
      {
        text: '旅游英语一 · A2',
        collapsed: true,
        items: [
          { text: '1. 人在机场', link: '/O_A2_旅游英语A/1.人在机场' },
          { text: '2. 人在酒店', link: '/O_A2_旅游英语A/2.人在酒店' },
          { text: '3. 旅游观光', link: '/O_A2_旅游英语A/3.旅游观光' },
          { text: '4. 吃吃喝喝', link: '/O_A2_旅游英语A/4.吃吃喝喝' }
        ]
      },
      {
        text: '旅游英语二 · B1',
        collapsed: true,
        items: [
          { text: '1. 餐厅用餐1', link: '/O_A2_旅游英语B/1.餐厅用餐1' },
          { text: '2. 餐厅用餐2', link: '/O_A2_旅游英语B/2.餐厅用餐2' },
          { text: '3. 逛街购物', link: '/O_A2_旅游英语B/3.逛街购物' },
          { text: '4. 和当地人聊天', link: '/O_A2_旅游英语B/4.和当地人聊天' }
        ]
      },
      {
        text: '校园英语一 · B1',
        collapsed: true,
        items: [
          { text: '1. 新学期', link: '/O_B1_校园英语A/1.新学期' },
          { text: '2. 课程和咨询时间', link: '/O_B1_校园英语A/2.课程和咨询时间' },
          { text: '3. 宿舍&用餐', link: '/O_B1_校园英语A/3.宿舍&用餐' },
          { text: '4. 交朋友', link: '/O_B1_校园英语A/4.交朋友' }
        ]
      },
      {
        text: '校园英语二 · B2',
        collapsed: true,
        items: [
          { text: '1. 课堂讨论', link: '/O_B2_校园英语B/1.课堂讨论' },
          { text: '2. 与同学合作', link: '/O_B2_校园英语B/2.与同学合作' },
          { text: '3. 汇报演讲', link: '/O_B2_校园英语B/3.汇报演讲' },
          { text: '4. 新学期', link: '/O_B2_校园英语B/4.新学期' }
        ]
      },
      {
        text: '分级阅读',
        collapsed: true,
        items: [
          { text: 'A1 · 入门级', link: '/分级阅读/A1_入门级' },
          { text: 'A2 · 初级', link: '/分级阅读/A2_初级' },
          { text: 'B1 · 中级', link: '/分级阅读/B1_中级' },
          { text: 'B2 · 中高级', link: '/分级阅读/B2_中高级' },
          { text: 'C1 · 高级', link: '/分级阅读/C1_高级' },
          { text: 'C2 · 精通级', link: '/分级阅读/C2_精通级' },
          { text: '完成情况统计', link: '/分级阅读/完成情况统计' },
          { text: 'CEFR 覆盖率对比', link: '/分级阅读/CEFR覆盖率对比' },
          { text: '多维覆盖率对比', link: '/分级阅读/多维覆盖率对比' }
        ]
      },
      {
        text: '分级阅读-new',
        collapsed: false,
        items: [
          { text: '总体规划', link: '/分级阅读-new/00_总体规划' },
          { text: 'A1 · 入门级（阅读）', link: '/分级阅读-new/A1_入门级' },
          { text: 'A1 · 短语清单', link: '/分级阅读-new/A1_短语清单' },
          { text: 'A2 · 初级（阅读）', link: '/分级阅读-new/A2_初级' },
          { text: 'A2 · 短语清单', link: '/分级阅读-new/A2_短语清单' },
          { text: 'B1 · 中级（阅读）', link: '/分级阅读-new/B1_中级' },
          { text: 'B1 · 短语清单', link: '/分级阅读-new/B1_短语清单' },
          { text: 'B2 · 中高级（阅读）', link: '/分级阅读-new/B2_中高级' },
          { text: 'B2 · 短语清单', link: '/分级阅读-new/B2_短语清单' },
          { text: 'C1 · 高级（阅读）', link: '/分级阅读-new/C1_高级' },
          { text: 'C1 · 短语清单', link: '/分级阅读-new/C1_短语清单' },
          { text: 'C2 · 精通级（阅读）', link: '/分级阅读-new/C2_精通级' },
          { text: 'C2 · 短语清单', link: '/分级阅读-new/C2_短语清单' }
        ]
      },
      {
        text: '新概念英语',
        collapsed: false,
        items: [
          { text: '第二册 · Practice and Progress', link: '/新概念第二册' }
        ]
      },
      {
        text: 'CEFR 分级',
        collapsed: false,
        items: [
          { text: 'CEFR 分级说明', link: '/CEFR分级' }
        ]
      },
      {
        text: '生词本',
        collapsed: false,
        items: [
          { text: '难点单词', link: '/难点单词' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    outline: {
      label: '本页目录',
      level: [1, 2]
    },

    docFooter: {
      prev: '上一课',
      next: '下一课'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lanceCryp/speak_english' }
    ],

    footer: {
      message: '基于 CEFR 欧标等级的英语口语学习笔记',
      copyright: 'Powered by VitePress'
    }
  }
})
