import React from 'react'
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
const BookingsList = ({ bookings }) => {
  return (
    <Box mt={4} width="100%">
      <Typography variant="h5" fontWeight="bold">
        Bookings
      </Typography>
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
              <TableRow key={index}style={{ marginTop: '16px', backgroundColor: '#4caf50', color: 'white' }}>
                <TableCell>{booking.facility}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.startTime}</TableCell>
                <TableCell>{booking.endTime}</TableCell>
                <TableCell>
                  {booking.message ? booking.message : booking.totalPrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookingsList
