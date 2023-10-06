import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and update when clicked', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  //click the button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the buton text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();

})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: "Disable button" });
  const button = screen.getByRole('button', { name: 'Change to blue' })

  //check the checkbox
  fireEvent.click(checkbox)

  //check that the checkbox is now checked
  expect(checkbox).toBeChecked();

  //check the button is disabled
  expect(button).toBeDisabled();

  //check the checkbox
  fireEvent.click(checkbox)

  //check the button is now enabled
  expect(button).toBeEnabled();

})
