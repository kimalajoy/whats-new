import React from 'react'
import NewsArticle from './NewsArticle'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
  it('renders correctly', () => {
    const {getByText} = render(
    <NewsArticle 
    headline='This is the heading'
    url="http://www.google.com"
    description='This is the description'
    />)

    expect(getByText('This is the heading')).toBeInTheDocument();
        expect(getByText('This is the description')).toBeInTheDocument();
  });
});

