import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepik from './Stepik';

test('renders Stepik component with title and description', () => {
    const title = 'Example Title';
    const description = 'Example Description';

    render(<Stepik title={title} description={description} />);

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
});


