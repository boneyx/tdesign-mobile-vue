export default {
  navs: {
    components: {
      title: '组件',
      url: 'components',
      docs: [
        {
          title: '开始',
          type: 'document', // 普通文档
          children: [
            {
              title: '说明',
              name: 'readme',
              component: () => import('@/../README.md'),
            },
            {
              title: '贡献指南',
              name: 'contributing',
              component: () => import('@/../CONTRIBUTING.md'),
            },
            {
              title: '更新日志',
              name: 'changelog',
              component: () => import('@/../CHANGELOG.md'),
            },
          ],
        },
        {
          title: '基础组件',
          type: 'component', // 组件文档
          children: [
            {
              title: 'Icon 图标',
              name: 'icon',
              component: () => import('@/icon/icon.md'),
            },
            {
              title: 'Button 按钮',
              name: 'button',
              component: () => import('@/button/button.md'),
            },
          ],
        },
        {
          title: '信息展示',
          type: 'component',
          children: [
            {
              title: 'Badge 徽标',
              name: 'badge',
              component: () => import('@/badge/badge.md'),
            },
            {
              title: 'Tag 标签',
              name: 'tag',
              component: () => import('@/tag/tag.md'),
            },
            {
              title: 'DropdownMenu 下拉菜单',
              name: 'dropdown-menu',
              component: () => import('@/dropdown-menu/dropdown-menu.md'),
            },
            {
              title: 'Collapse 折叠面板',
              name: 'collapse',
              component: () => import('@/collapse/collapse.md'),
            },
            {
              title: 'Cell 单元格',
              name: 'cell',
              component: () => import('@/cell/cell.md'),
            },
          ],
        },
        {
          title: '输入类组件',
          type: 'component',
          children: [
            {
              title: 'Stepper 步进器',
              name: 'stepper',
              component: () => import('@/stepper/stepper.md'),
            },
            {
              title: 'Slider 滑动选择器',
              name: 'slider',
              component: () => import('@/slider/slider.md'),
            },
            {
              title: 'Picker 选择器',
              name: 'picker',
              component: () => import('@/picker/picker.md'),
            },
            {
              title: 'Radio 单选框',
              name: 'radio',
              component: () => import('@/radio/radio.md'),
            },
            {
              title: 'Rate 评分',
              name: 'rate',
              component: () => import('@/rate/rate.md'),
            },
            {
              title: 'Switch 开关',
              name: 'switch',
              component: () => import('@/switch/switch.md'),
            },
            {
              title: 'CheckBox 复选框',
              name: 'checkbox',
              component: () => import('@/checkbox/checkbox.md'),
            },
            {
              title: 'Input 输入框',
              name: 'input',
              component: () => import('@/input/input.md'),
            },
            {
              title: 'Fab 悬浮按钮',
              name: 'fab',
              component: () => import('@/fab/fab.md'),
            },
            {
              title: 'SearchField 搜索框',
              name: 'search-field',
              component: () => import('@/search-field/search-field.md'),
            },
          ],
        },
        {
          title: '导航组件',
          type: 'component',
          children: [
            {
              title: 'Steps 步骤条',
              name: 'steps',
              component: () => import('@/steps/steps.md'),
            },
            {
              title: 'TabBar 标签栏',
              name: 'tabbar',
              component: () => import('@/tab-bar/tab-bar.md'),
            },
            {
              title: 'SegmentedControl 分段器',
              name: 'segmented-control',
              component: () => import('@/segmented-control/segmented-control.md'),
            },
            {
              title: 'ImageViewer 图片预览',
              name: 'image-viewer',
              component: () => import('@/image-viewer/image-viewer.md'),
            },
            {
              title: 'Drawer 抽屉',
              name: 'drawer',
              component: () => import('@/drawer/drawer.md'),
            },
            {
              title: 'Tabs 选项卡',
              name: 'tabs',
              component: () => import('@/tabs/tabs.md'),
            },
            {
              title: 'Navbar 导航条',
              name: 'navbar',
              component: () => import('@/navbar/navbar.md'),
            },
            {
              title: 'Indexes 索引',
              name: 'indexes',
              component: () => import('@/indexes/indexes.md'),
            },
          ],
        },
        {
          title: '消息提醒',
          type: 'component', // 组件文档
          children: [
            {
              title: 'Progress 进度条',
              name: 'progress',
              component: () => import('@/progress/progress.md'),
            },
            {
              title: 'ActionSheet 动作面板',
              name: 'actionsheet',
              component: () => import('@/action-sheet/action-sheet.md'),
            },
            {
              title: 'Toast 轻提示',
              name: 'toast',
              component: () => import('@/toast/toast.md'),
            },
            {
              title: 'Message 消息',
              name: 'message',
              component: () => import('@/message/message.md'),
            },
            {
              title: 'NoticeBar 公告栏',
              name: 'noticebar',
              component: () => import('@/noticebar/noticebar.md'),
            },
            {
              title: 'Dialog 弹出框',
              name: 'dialog',
              component: () => import('@/dialog/dialog.md'),
            },
            {
              title: 'Popup 弹出层',
              name: 'popup',
              component: () => import('@/popup/popup.md'),
            },
          ],
        },
      ],
    },
  },
};
