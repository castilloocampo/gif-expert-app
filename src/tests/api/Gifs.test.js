import { getGifs } from '../../api/Gifs';

describe('Gifs ', () => {
  test('should bring 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should bring empty Array', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
  
});
