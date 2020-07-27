module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'ReactJS',
      collapsed: true,
      items: [
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
        'reactJS/moreTopics',
        'reactJS/redux',
        'reactJS/extra',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      collapsed: false,
      items: ['git/git', 'git/gitignore', 'git/gitcommands'],
    },
  ],
};
