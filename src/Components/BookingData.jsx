import React from 'react';
import { Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const BookingData = ({ bookings }) => {
  return (
    <Box maxWidth="800px" mx="auto" p={4}>
      <Typography variant="h5" fontWeight="bold">
        Booking Data
      </Typography>
      <Box mt={2} width="100%">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Facility</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>Price (INR)/Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{booking.facility}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.startTime}</TableCell>
                  <TableCell>{booking.endTime}</TableCell>
                  <TableCell>{booking.message ? booking.message : booking.totalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BookingData;
