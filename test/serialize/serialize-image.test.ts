import { defaultNodeTypes, serialize } from '../../src';

it('Serialize a image from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.image,
      url: 'https://avatars.githubusercontent.com/u/2148168',
      caption: "'Jack's profile picture'",
      children: [],
    })
  ).toMatchSnapshot();
});
