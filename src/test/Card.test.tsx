import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './../components/Card';
import { FileData } from './../types/FileData';

// Mock file data
const mockFileReady: FileData = {
  name: 'Sample File',
  cover: 'https://picsum.photos/300/200',
  languages: ['en', 'fr'],
  id: '123',
  status: 'ready',
  createdAt: '2024-07-26T11:02:20.451Z',
  updatedAt: '2024-07-26T11:02:38.223Z',
};

const mockFileError: FileData = {
  name: 'Error File',
  cover: 'https://picsum.photos/300/200',
  languages: ['en'],
  id: '456',
  status: 'error',
  createdAt: '2024-07-26T11:02:20.451Z',
  updatedAt: '2024-07-26T11:02:38.223Z',
};

const mockFileTranscribing: FileData = {
  name: 'Transcribing File',
  cover: 'https://picsum.photos/300/200',
  languages: ['de'],
  id: '789',
  status: 'transcribing',
  createdAt: '2024-07-26T11:02:20.451Z',
  updatedAt: '2024-07-26T11:02:38.223Z',
};

describe('Card Component', () => {
  // Test for rendering the card properly
  it('renders a card with correct file name', () => {
    render(<Card file={mockFileReady} />);
    const fileName = screen.getByText('Sample File');
    expect(fileName).toBeInTheDocument();
  });

  // Test for error status
  it('displays error message and buttons when status is "error"', () => {
    render(<Card file={mockFileError} />);

    const errorMessage = screen.getByText(
      'An error occurred while processing your file. Delete the file to try again, and report issue if the problem persists.'
    );
    const deleteButton = screen.getByText('Delete file');
    const reportIssueButton = screen.getByText('Report issue');
    const errorIcon = screen.getByAltText('Error icon');

    expect(errorMessage).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(reportIssueButton).toBeInTheDocument();
    expect(errorIcon).toBeInTheDocument();
  });

  // Test for ready status hover
  it('shows overlay with buttons when hovering over a "ready" card', () => {
    render(<Card file={mockFileReady} />);
    const cardImage = screen.getByAltText('Sample File');

    // Hover over the image
    fireEvent.mouseOver(cardImage);

    const editButton = screen.getByText('Edit');
    const topLeftButton = screen.getByText('x languages');
    const topRightButton = screen.getByText('Icon');

    expect(editButton).toBeInTheDocument();
    expect(topLeftButton).toBeInTheDocument();
    expect(topRightButton).toBeInTheDocument();
  });

  // Test for transcribing status
  it('displays "Transcribing subtitles" text and loading bar when status is "transcribing"', () => {
    render(<Card file={mockFileTranscribing} />);

    const transcribingText = screen.getByText('Transcribing subtitles');
    const loadingBar = screen.getByTestId('loading-bar');

    expect(transcribingText).toBeInTheDocument();
    expect(loadingBar).toBeInTheDocument();
  });
});