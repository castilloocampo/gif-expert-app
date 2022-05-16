import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import GifGridItem from '../../components/Gif/GifGridItem';

describe('GifGridItem', () => {
  const gifItem = {
    title: "Un título",
    url: "http://localhost/algo.png"
  }

  test('should show Correctly', () => {
    const { container } = render(<GifGridItem {...gifItem} />);
    expect(container).toMatchSnapshot();
  });
  
  test('should has paragraph with the title', () => {
    render(<GifGridItem {...gifItem} />);
    expect(screen.getByTestId('title').innerHTML.trim()).toBe(gifItem.title);
    // exp
  });

  test('should be img-source = url prop', () => {
    render(<GifGridItem {...gifItem} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", gifItem.url);
    expect(screen.getByRole("img")).toHaveAttribute("alt", gifItem.title);
  });
  
  test('should has animate__fadeIn class', () => {
    render(<GifGridItem {...gifItem} />);
    expect(screen.getByTestId("gif-grid-item")).toHaveClass("animate__fadeIn");
  });
});
