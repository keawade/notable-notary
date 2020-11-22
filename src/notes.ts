export interface INote {
  id: string;
  title: string;
  content: string;
}

export const notes: INote[] = [
  {
    id: '73834b0f-414f-4688-8a9a-fb37cdd466fd',
    title: 'A note',
    content: `
# Howdy

This is markdown
    `.trim(),
  },
  {
    id: '2c5d26b6-3be3-429b-a2b9-c8ea4ddaabf4',
    title: 'A note',
    content: `
- list a
- list b
- list c
    `.trim(),
  },
  {
    id: 'd7f92b0d-6fc1-4f94-8f95-78d404e5845d',
    title: 'A note',
    content: `
[ ] check a
[x] check b
[ ] check c
    `.trim(),
  },
  {
    id: '39434704-84ee-43e8-8fa3-a1c0bc39f039',
    title: 'A note',
    content: `
# Howdy

This is markdown

- list a
- list b
- list c

[ ] check a
[x] check b
[ ] check c
    `.trim(),
  },
];
