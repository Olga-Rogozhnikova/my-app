import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react";
import BookingPage, { timesFromDate } from './components/BookingPage';

describe('Test suite', () => {

    it('Renders the BookingPage heading', () => {
        render(<BookingPage />);
        const headingElement = screen.getByText("Reserve a table");
        expect(headingElement).toBeInTheDocument();
    });
    
    it('should return the even time array when the day is even', () => {
        const date = { day: 2 };
        const expectedTimes = [
          { id: 1, value: '17:00' },
          { id: 2, value: '19:00' },
          { id: 3, value: '20:00' },
        ];

        expect(timesFromDate(date)).toEqual(expectedTimes);
      });
    
      it('should return the odd time array when the day is odd', () => {
        const date = { day: 3 };
        const expectedTimes = [
          { id: 1, value: '18:00' },
          { id: 2, value: '21:00' },
          { id: 3, value: '22:00' }
        ];
        expect(timesFromDate(date)).toEqual(expectedTimes);
      });

})