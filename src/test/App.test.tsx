import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './../App';

describe('Filter Tests', () => {
  it('filters by status', () => {
    render(<App />);

    // Find the status filter dropdown and change its value
    const statusFilter = screen.getByLabelText('All Status');
    fireEvent.change(statusFilter, { target: { value: 'error' } });

    // Check that only the error files are displayed
    const errorFile = screen.getByText('Error File');
    expect(errorFile).toBeInTheDocument();

    const readyFile = screen.queryByText('Sample File');
    expect(readyFile).not.toBeInTheDocument(); // Ready file should not appear when filtering for errors
  });

  it('filters by language', () => {
    render(<App />);

    // Find the language filter dropdown and change its value
    const languageFilter = screen.getByLabelText('All Languages');
    fireEvent.change(languageFilter, { target: { value: 'fr' } });

    // Check that only the French-language file is displayed
    const frenchFile = screen.getByText('Sample File');
    expect(frenchFile).toBeInTheDocument();

    const otherFiles = screen.queryByText('Error File');
    expect(otherFiles).not.toBeInTheDocument(); // Other language files should not appear
  });
});
