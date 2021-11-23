import { render, screen } from '@testing-library/react';
import Header from "./Header";


describe("NavBar testing", ()=>{
  let links = [
    {
      id: 0,
      name: 'HOME'
    },
    {
      id: 1,
      name: "GALLERY"
    },
    {
      id: 2,
      name: "CONTACTS"
    }]
  test.each(links)('NavLink is exists', (links) => {
    render(<Header />);
    const linkElement = screen.getAllByText(links.name);
    expect(linkElement).toHaveLength(2)
  });
  test('HOME is active', ()=>{
    render(<Header />);
    const linkElement = screen.getAllByText("HOME")[0];
    expect(linkElement).toHaveAttribute("class", "active")
  })
})

