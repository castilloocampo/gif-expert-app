import { render, waitFor, renderHook, act, screen } from '@testing-library/react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifExpertApp from '../GifExpertApp';
import GifGrid from '../components/Gif/GifGrid';

describe('useFetchGifs', () => {
  test('should return initial state', async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

 test('should return array and loading as false', async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toEqual(true);
    await waitFor(() => {
      const { data, loading } = result.current;
      expect(data.length).toEqual(10);
      expect(loading).toEqual(false);
    });
  });


});
