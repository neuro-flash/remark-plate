import { serialize } from '../../src';

it('Serializes real editor object into markdown document', () => {
  expect(slateTree.map((v) => serialize(v)).join('')).toMatchSnapshot();
});

const slateTree = [
  {
    children: [
      {
        text: 'Markdown syntax guide',
      },
    ],
    type: 'h1',
    id: '51v99',
  },
  {
    children: [
      {
        text: 'Headers',
      },
    ],
    type: 'h2',
    id: '6rsd7',
  },
  {
    children: [
      {
        text: 'This is a Heading h1',
      },
    ],
    type: 'h1',
    id: 'fv6ak',
  },
  {
    children: [
      {
        text: 'This is a Heading h2',
      },
    ],
    type: 'h2',
    id: 'aj5nf',
  },
  {
    children: [
      {
        text: 'Emphasis',
      },
    ],
    type: 'h2',
    id: 'jn1su',
  },
  {
    children: [
      {
        italic: true,
        text: 'This text will be italic',
      },
      {
        text: '. ',
      },
      {
        italic: true,
        text: 'This will also be italic',
      },
    ],
    type: 'p',
    id: 'n3vm2',
  },
  {
    children: [
      {
        bold: true,
        text: 'This text will be bold',
      },
      {
        text: '. ',
      },
      {
        bold: true,
        text: 'This will also be bold',
      },
    ],
    type: 'p',
    id: '3u7bu',
  },
  {
    children: [
      {
        italic: true,
        text: 'You ',
      },
      {
        italic: true,
        bold: true,
        text: 'can',
      },
      {
        italic: true,
        text: ' combine them',
      },
    ],
    type: 'p',
    id: '929dp',
  },
  {
    children: [
      {
        text: 'Lists',
      },
    ],
    type: 'h2',
    id: 'teclj',
  },
  {
    children: [
      {
        text: 'Unordered',
      },
    ],
    type: 'h3',
    id: 'smh8r',
  },
  {
    children: [
      {
        text: 'Item 1',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'disc',
    id: '9daha',
  },
  {
    children: [
      {
        text: 'Item 2',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'disc',
    listStart: 2,
    id: 'b2v56',
  },
  {
    children: [
      {
        text: 'Item 2a',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'disc',
    listStart: 3,
    id: 'gjk3n',
  },
  {
    children: [
      {
        text: 'Item 2b',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'disc',
    listStart: 4,
    id: 'yg2je',
  },
  {
    children: [
      {
        text: 'Ordered',
      },
    ],
    type: 'h3',
    id: 'd3m0c',
  },
  {
    children: [
      {
        text: 'Item 1',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'decimal',
    id: 'purg5',
  },
  {
    children: [
      {
        text: 'Item 2',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'decimal',
    listStart: 2,
    id: 'lwl6s',
  },
  {
    children: [
      {
        text: 'Item 3',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'decimal',
    listStart: 3,
    id: 'm6m6a',
  },
  {
    children: [
      {
        text: 'Item 3a',
      },
    ],
    type: 'p',
    indent: 2,
    listStyleType: 'decimal',
    id: 'bv8zz',
  },
  {
    children: [
      {
        text: 'Item 3b',
      },
    ],
    type: 'p',
    indent: 2,
    listStyleType: 'decimal',
    listStart: 2,
    id: 'pdp8v',
  },
  {
    children: [
      {
        text: 'Images',
      },
    ],
    type: 'h2',
    id: 'sjb9o',
  },
  {
    caption: [
      {
        text: 'This is an alt text.',
      },
    ],
    children: [
      {
        text: '',
      },
    ],
    type: 'img',
    url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: '7st6v',
  },
  {
    children: [
      {
        text: 'Links',
      },
    ],
    type: 'h2',
    id: 'lplna',
  },
  {
    children: [
      {
        text: 'You may be using ',
      },
      {
        children: [
          {
            text: 'Markdown Live Preview',
          },
        ],
        type: 'a',
        url: 'https://markdownlivepreview.com/',
        id: 'glew1',
      },
      {
        text: '.',
      },
    ],
    type: 'p',
    id: '0mpxj',
  },
  {
    children: [
      {
        text: 'Blockquotes',
      },
    ],
    type: 'h2',
    id: 'kh38s',
  },
  {
    children: [
      {
        text: 'Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.',
      },
    ],
    type: 'blockquote',
    id: 'ihgp0',
  },
  {
    children: [
      {
        text: 'Tables',
      },
    ],
    type: 'h2',
    id: '9gw5y',
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    text: 'Left columns',
                  },
                ],
                type: 'p',
                id: '0eiyv',
              },
            ],
            type: 'th',
            id: '0e0gr',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Right columns',
                  },
                ],
                type: 'p',
                id: '9zef1',
              },
            ],
            type: 'th',
            id: 'rbckx',
          },
        ],
        type: 'tr',
        id: '7lwf7',
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    text: 'left foo',
                  },
                ],
                type: 'p',
                id: 'b5512',
              },
            ],
            type: 'td',
            id: 'whvbr',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'right foo',
                  },
                ],
                type: 'p',
                id: 'b0vep',
              },
            ],
            type: 'td',
            id: 'z0o20',
          },
        ],
        type: 'tr',
        id: '7zh15',
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    text: 'left bar',
                  },
                ],
                type: 'p',
                id: '5b3np',
              },
            ],
            type: 'td',
            id: 'ycjvg',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'right bar',
                  },
                ],
                type: 'p',
                id: 'k4clh',
              },
            ],
            type: 'td',
            id: 'xstka',
          },
        ],
        type: 'tr',
        id: '1r9de',
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    text: 'left baz',
                  },
                ],
                type: 'p',
                id: '48dy5',
              },
            ],
            type: 'td',
            id: 'o00a2',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'right baz',
                  },
                ],
                type: 'p',
                id: 'gv72u',
              },
            ],
            type: 'td',
            id: '24gsi',
          },
        ],
        type: 'tr',
        id: 'qz134',
      },
    ],
    type: 'table',
    id: '9ser8',
  },
  {
    children: [
      {
        text: 'Blocks of code',
      },
    ],
    type: 'h2',
    id: 'rkc79',
  },
  {
    children: [
      {
        children: [
          {
            text: "let message = 'Hello world';",
          },
        ],
        type: 'code_line',
        id: '29y5a',
      },
      {
        children: [
          {
            text: 'alert(message);',
          },
        ],
        type: 'code_line',
        id: 'aj7aa',
      },
    ],
    lang: 'js',
    type: 'code_block',
    id: 'c6pzo',
  },
  {
    children: [
      {
        text: 'Inline code',
      },
    ],
    type: 'h2',
    id: '8434t',
  },
  {
    children: [
      {
        text: 'This website is using ',
      },
      {
        code: true,
        text: 'plate',
      },
      {
        text: '.',
      },
    ],
    type: 'p',
    id: 'mjakg',
  },
  {
    children: [
      {
        text: 'GitHub Flavored Markdown',
      },
    ],
    type: 'h2',
    id: 'so9yz',
  },
  {
    children: [
      {
        text: 'Task Lists',
      },
    ],
    type: 'h3',
    id: '8vk46',
  },
  {
    children: [
      {
        text: 'Completed task',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'todo',
    checked: true,
    id: 'xcuvy',
  },
  {
    children: [
      {
        text: 'Incomplete task',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'todo',
    checked: false,
    listStart: 2,
    id: 'drrqm',
  },
  {
    children: [
      {
        text: '@mentions , ',
      },
      {
        children: [
          {
            text: 'links',
          },
        ],
        type: 'a',
        url: 'https://platejs.org',
        id: 'gjkun',
      },
      {
        text: ', ',
      },
      {
        bold: true,
        text: 'formatting',
      },
      {
        text: ', and ',
      },
      {
        strikethrough: true,
        text: 'tags',
      },
      {
        text: ' supported',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'todo',
    checked: false,
    listStart: 3,
    id: '94510',
  },
  {
    children: [
      {
        text: 'list syntax required (any unordered or ordered list supported)',
      },
    ],
    type: 'p',
    indent: 1,
    listStyleType: 'todo',
    checked: false,
    listStart: 4,
    id: '1gpz4',
  },
  {
    children: [
      {
        text: 'Strikethrough',
      },
    ],
    type: 'h3',
    id: 'hd59z',
  },
  {
    children: [
      {
        strikethrough: true,
        text: 'This text is strikethrough',
      },
    ],
    type: 'p',
    id: 'mfhri',
  },
  {
    children: [
      {
        text: 'Autolinks',
      },
    ],
    type: 'h3',
    id: 'h48dv',
  },
  {
    children: [
      {
        text: 'Visit ',
      },
      {
        children: [
          {
            text: 'https://github.com',
          },
        ],
        type: 'a',
        url: 'https://github.com',
        id: 'f6o38',
      },
      {
        text: ' automatically converts to a link\nEmail ',
      },
      {
        children: [
          {
            text: 'example@example.com',
          },
        ],
        type: 'a',
        url: 'mailto:example@example.com',
        id: 'zwxir',
      },
      {
        text: ' also converts automatically',
      },
    ],
    type: 'p',
    id: 'u9275',
  },
  {
    children: [
      {
        text: 'Emoji',
      },
    ],
    type: 'h3',
    id: 'r2n6q',
  },
  {
    children: [
      {
        text: '😄 ❤️',
      },
    ],
    type: 'p',
    id: '4c19i',
  },
];
