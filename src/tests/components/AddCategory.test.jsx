import { fireEvent, render } from '@testing-library/react';
import AddCategory from '../../components/Category/AddCategory';
import { screen } from '@testing-library/react';

describe('AddCategory', () => {

  const obj = {
    onSetCategories: jest.fn()
  }

  test('should show correctly', () => {
    const { container } = render(<AddCategory {...obj} />);
    expect(container).toMatchSnapshot();
  });

  test('should change input textBox', () => {
    render(<AddCategory {...obj} />);
    const input = screen.getByRole("textbox");
    const value = "uno";
    fireEvent.change(input, { target: { value } });
    expect(input.getAttribute('value')).toBe(value);
  });

  test("should'n submit information", () => {
    render(<AddCategory {...obj} />);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "h2" } });
    fireEvent.submit(form);
    expect(obj.onSetCategories).not.toHaveBeenCalled();
  });

  test("should submit information", () => {
    render(<AddCategory {...obj} />);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    // simular inputChange
    fireEvent.change(input, { target: { value: "Mario" } });

    // simular submit
    fireEvent.submit(form);

    // onSetCategories se llamo
    expect(obj.onSetCategories).toHaveBeenCalledWith( expect.any(Function));

    // value se vació
    expect(input.getAttribute('value')).toBe('');
  });

});
