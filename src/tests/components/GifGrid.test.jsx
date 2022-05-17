import { render, renderHook, waitFor } from '@testing-library/react';
import GifGrid from '../../components/Gif/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
import { screen } from '@testing-library/react';


describe('GifGrid component', () => {
  const category = [
    {
      name: "One Piece"
    },
    {
      name: "Black Clover"
    }

  ];
  test('should show correctly', () => {
    const { container } = render(<GifGrid category={category[0].name} />);
    expect(container).toMatchSnapshot();
  });

  test('should show gifs from category[0].name', async () => {
    // const { result } = renderHook(() => useFetchGifs(category[0].name));
    const { container } = render(<GifGrid category={category[0].name} />);
    expect( screen.getByText(/Loading/i) ).toHaveTextContent("Loading");
    // expect(result.current.loading).toEqual(true);
    await waitFor(() => {
      const elements = screen.getAllByTestId('gif-grid-item');
      expect(container).toMatchSnapshot();
      // expect(result.current.data.length).toEqual(10);
      // expect(result.current.loading).toEqual(false);
      expect(elements.length).toBe(10);
    });
  });

/*
  test('should load multiple categories', async () => {
    category.map(({name}) => {
      renderHook(() => useFetchGifs(name));
    });
    const { container } = render(<GifGrid category={category[0].name} />);

  });
*/
});
