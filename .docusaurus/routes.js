import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/writing_doco/docs',
    component: ComponentCreator('/writing_doco/docs', 'cd0'),
    routes: [
      {
        path: '/writing_doco/docs',
        component: ComponentCreator('/writing_doco/docs', 'd9d'),
        routes: [
          {
            path: '/writing_doco/docs',
            component: ComponentCreator('/writing_doco/docs', '165'),
            routes: [
              {
                path: '/writing_doco/docs/chapter-1',
                component: ComponentCreator('/writing_doco/docs/chapter-1', '851'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-10',
                component: ComponentCreator('/writing_doco/docs/chapter-10', '12d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-2',
                component: ComponentCreator('/writing_doco/docs/chapter-2', 'c0c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-3',
                component: ComponentCreator('/writing_doco/docs/chapter-3', '56a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-4',
                component: ComponentCreator('/writing_doco/docs/chapter-4', 'f63'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-5',
                component: ComponentCreator('/writing_doco/docs/chapter-5', 'e40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-6',
                component: ComponentCreator('/writing_doco/docs/chapter-6', 'd0d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-7',
                component: ComponentCreator('/writing_doco/docs/chapter-7', '82b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-8',
                component: ComponentCreator('/writing_doco/docs/chapter-8', '764'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/writing_doco/docs/chapter-9',
                component: ComponentCreator('/writing_doco/docs/chapter-9', 'f7a'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/writing_doco/',
    component: ComponentCreator('/writing_doco/', 'ee6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
