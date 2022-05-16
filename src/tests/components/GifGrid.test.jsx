import { render, renderHook, waitFor } from '@testing-library/react';
import GifGrid from '../../components/Gif/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
import { screen } from '@testing-library/react';


describe('GifGrid component', () => {
  const category = "One Piece";
  test('should show correctly', () => {
    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });

  test('should show gifs from category', async () => {
    const {result} = renderHook(() => useFetchGifs(category));
    render(<GifGrid category={category} />);
    await waitFor(() => {
      const elements = screen.getAllByTestId('title');
      expect(result.current.data.length).toEqual(10);
      expect(elements.length).toBe(10);
    });
    
    // expect(result.current.data).toBe(true);
  });

});
