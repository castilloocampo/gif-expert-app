
import { render, screen, waitFor } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';
describe('GifExpertApp', () => {
  const categories = [
    "One Piece",
    "Black Clover",
    "Attack on Titan"
  ];

  test('should show correctly', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('should show a categories list', () => {
    const { container } = render(<GifExpertApp defaultCategories={categories}/>);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(categories.length);
    waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(screen.getAllByTestId("gif-grid-item").length).toBe(categories.length*10);
    })
  });
});