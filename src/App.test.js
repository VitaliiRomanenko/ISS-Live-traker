import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome is exist', ()=>{
    render(<App />);
    const linkElement = screen.getByText(/Live Space Station Tracking Map/i);
    expect(linkElement).toBeInTheDocument()
})

//