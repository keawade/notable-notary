export interface INote {
  title: string;
  content: string;
}

export const notes: INote[] = [
  {
    title: 'A note',
    content: `
# Howdy

This is markdown
    `.trim(),
  },
  {
    title: 'A note',
    content: `
- list a
- list b
- list c
    `.trim(),
  },
  {
    title: 'A note',
    content: `
[ ] check a
[x] check b
[ ] check c
    `.trim(),
  },
  {
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
