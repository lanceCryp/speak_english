import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Speak 英语学习笔记',
  description: '基于 CEFR 欧标等级的 Speak 英语口语学习笔记（A1-B2）',
  base: '/speak_english/',

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
          { text: '给出简单的回应', link: '/A1_基础入门级/1_给出简单的回应' },
          { text: '聊聊天气', link: '/A1_基础入门级/2_Be动词上' },
          { text: '介绍你的物品', link: '/A1_基础入门级/3_Be动词下' },
          { text: '聊你平常做什么', link: '/A1_基础入门级/4_习惯和喜好' },
          { text: '询问对方的工作', link: '/A1_基础入门级/5_你的朋友和兄弟姐妹' },
          { text: '谈论通勤方式', link: '/A1_基础入门级/6_时间、日期和路线' },
          { text: '表达需求', link: '/A1_基础入门级/7_需要和想要' }
        ]
      },
      {
        text: 'A2 · 初级A',
        collapsed: true,
        items: [
          { text: '讨论过去', link: '/A2_初级A/1_过去发生的事' },
          { text: '讨论当前活动', link: '/A2_初级A/2_现在发生的事情' },
          { text: '买票', link: '/A2_初级A/3_到处走走' },
          { text: '谈论未来的计划', link: '/A2_初级A/4_未来的计划' },
          { text: '描述你的能力', link: '/A2_初级A/5_与朋友见面' },
          { text: '主动提出做某事', link: '/A2_初级A/6_承诺与意图' }
        ]
      },
      {
        text: 'A2 · 初级B',
        collapsed: true,
        items: [
          { text: '分享你的兴趣', link: '/A2_初级B/1_兴趣与特长' },
          { text: '说出你出生的地方', link: '/A2_初级B/2_家乡和学校' },
          { text: '浅谈日常安排', link: '/A2_初级B/3_日常习惯' },
          { text: '邀请对方一起玩', link: '/A2_初级B/4_周末计划' },
          { text: '订位', link: '/A2_初级B/5_在餐厅用餐' },
          { text: '去购物', link: '/A2_初级B/6_去购物' }
        ]
      },
      {
        text: 'B1 · 中级A',
        collapsed: true,
        items: [
          { text: '权衡你的选择', link: '/B1_中级A/1_考虑各种选择' },
          { text: '说说你要生病了', link: '/B1_中级A/2_身体不舒服' },
          { text: '做预约', link: '/B1_中级A/3_看医生与去药房' },
          { text: '谈论糟糕的一天', link: '/B1_中级A/4_出现状况' },
          { text: '讨论家务', link: '/B1_中级A/5_家务和杂事' },
          { text: '询问老朋友的情况', link: '/B1_中级A/6_朋友的近况' }
        ]
      },
      {
        text: 'O · 旅游英语',
        collapsed: true,
        items: [
          { text: '在飞机上', link: '/O_A2_旅游英语A/1.人在机场' }
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
      level: [2, 3]
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
