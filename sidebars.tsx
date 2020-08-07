module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Javascript',
      collapsed: true,
      items: [
        'javascript/js_index',
        {
          Modules: [
            'javascript/modules/module1_basic',
            'javascript/modules/module2_object',
            'javascript/modules/module3_datatypes',
            'javascript/modules/module4_function',
            'javascript/modules/module5_prototype',
            'javascript/modules/module6_classes',
            'javascript/modules/module7_destruct',
            'javascript/modules/module9_promise',
            'javascript/modules/module10_generator',
            'javascript/modules/module11_module',
            'javascript/modules/module13_set_weakset',
            'javascript/modules/module14_map_weakmap',
            'javascript/modules/module15_async_await',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ReactJS',
      collapsed: true,
      items: [
        {
          React_Hooks: [
            'reactJS/hooks/hooks_intro',
            {
              'Built-in Hooks': [
                'reactJS/hooks/hooks_state',
                'reactJS/hooks/hooks_effect',
                'reactJS/hooks/hooks_ctx',
                'reactJS/hooks/hooks_memo',
                'reactJS/hooks/hooks_reducer',
              ],
            },
            'reactJS/hooks/hooks_rules',
          ],
        },
        {
          Extra: ['reactJS/extra', 'reactJS/moreTopics'],
        },
        {
          Redux: ['reactJS/redux'],
        },
        'reactJS/react_profile',
        'reactJS/about',
        'reactJS/jsx',
        'reactJS/components',
        'reactJS/lifeCycle',
        'reactJS/propsState',
        'reactJS/events',
        'reactJS/dom',
        'reactJS/styles',
        'reactJS/refs',
        'reactJS/hoc',
        'reactJS/ReactRouter',
        'reactJS/createReactApp',
        'reactJS/lazySuspense',
        'reactJS/testing',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      collapsed: true,
      items: ['git/git', 'git/gitignore', 'git/gitcommands'],
    },
    {
      type: 'category',
      label: '📋 Interview Hub 📋',
      collapsed: true,
      items: [
        'questions/js',
        'questions/ts',
        'questions/html',
        'questions/style',
        'questions/dom',
        'questions/web',
        'questions/design_pattern',
      ],
    },
    {
      type: 'category',
      label: '💎 Gem Box 💎',
      items: [
        'gemBox/ui_res',
        'gemBox/learning_res',
        'gemBox/hosting_res',
        'gemBox/css_res',
        'gemBox/browser_res',
        'gemBox/react_res',
      ],
    },
  ],
};
