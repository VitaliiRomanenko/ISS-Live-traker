import { render, screen } from '@testing-library/react';
import App from './App';


describe("NavBar testing", ()=>{
  test('link "HOME" is exists', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/HOME/i);
    expect(linkElement).toHaveLength(2)
  });
  test('link "GALLERY" is exists', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/GALLERY/i);
    expect(linkElement).toHaveLength(2)
  });
  test('link "CONTACTS" is exists', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/CONTACTS/i);
    expect(linkElement).toHaveLength(2)
  });
})

