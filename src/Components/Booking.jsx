import React, { useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import '../App.css';


const facilities = [
    {
        name: 'Clubhouse',
        slots: [
            { startTime: '10:00', endTime: '16:00', price: 100 },
            { startTime: '16:00', endTime: '22:00', price: 500 },
        ],
    },
    {
        name: 'Tennis Court',
        slots: [{ startTime: '00:00', endTime: '23:59', price: 50 }],
    },
];

 function Booking(){
      const [facility, setFacility] = useState(facilities[0].name);
    const [date, setDate] = useState('2023-08-01');
    const [startTime, setStartTime] = useState('10:00');
    const [endTime, setEndTime] = useState('11:00');
    const [bookings, setBookings] = useState([]);


  const isSlotAvailable = (facility, date, startTime, endTime) => {
        return !bookings.some(
            (booking) =>
                booking.facility === facility &&
                booking.date === date &&
                ((startTime >= booking.startTime && startTime < booking.endTime) ||
                    (endTime > booking.startTime && endTime <= booking.endTime) ||
                    (startTime <= booking.startTime && endTime >= booking.endTime))
        );
    };
    const handleBooking = () => {
        if (!isSlotAvailable(facility, date, startTime, endTime)) {
            alert('Booking Failed,  Already Booked');
            setBookings([
                ...bookings,
                { facility, date, startTime, endTime, message: 'Booking Failed, Already Booked' },
            ]);
            return;
        }

        const facilityCon = facilities.find((config) => config.name === facility);
        if (!facilityCon) {
            alert('Invalid facility selected.');
            return;
        }

        const start = new Date(`2000-01-01T${startTime}:00`);
        const end = new Date(`2000-01-01T${endTime}:00`);
        const bookingDuration = (end - start) / (1000 * 60 * 60); // in hours

        let totalPrice = 0;
        for (const slot of facilityCon.slots) {
            const slotStart = new Date(`2000-01-01T${slot.startTime}:00`);
            const slotEnd = new Date(`2000-01-01T${slot.endTime}:00`);
            const slotDuration = (slotEnd - slotStart) / (1000 * 60 * 60); // in hours

            if (start >= slotStart && end <= slotEnd && bookingDuration <= slotDuration) {
                totalPrice = slot.price * bookingDuration;
                break;
            }
        }

        if (totalPrice > 0) {
            setBookings([...bookings, { facility, date, startTime, endTime, totalPrice }]);

            alert(`Booked, Rs. ${totalPrice}`);
        } else {

            alert('Booking Failed, Invalid Slot');
        }


    };


    
return(
      <Box maxWidth="800px" mx="auto" p={4}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h5" fontWeight="bold">Facility Booking App</Typography>
      <Box mt={2} width="100%">
      <FormControl fullWidth  mt={2}>
      <FormControl fullWidth style={{ marginTop: '16px' }}>
      <InputLabel id="facility-label">Select Facility:</InputLabel>
      <Select
        labelId="facility-label"
        label="Select Facility"
        color="secondary"
        value={facility}
        onChange={(e) => setFacility(e.target.value)}
      >
      {facilities.map((facility) => (
      <MenuItem key={facility.name} value={facility.name}>
        {facility.name}
      </MenuItem>
    ))}
      </Select> 
      </FormControl>
      </FormControl>
      <FormControl fullWidth  style={{ marginTop: '16px', opacity: 0, animation: 'fadeIn 1s forwards' }}>    
      <TextField label="Select Date:"type="date" value={date} onChange={(e) => setDate(e.target.value)} />
     </FormControl> 
     <FormControl fullWidth  style={{ marginTop: '16px' }}>
      <TextField label="Start Time" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </FormControl>
      <FormControl fullWidth  style={{ marginTop: '16px' }}>  
      <TextField label="End Time"  type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </FormControl>
      <Button
      variant="contained"
      color="primary"   
      style={{ marginTop: '16px', backgroundColor: '#4caf50', color: 'white' }}
      onClick={handleBooking}
      >
      Book
      </Button>
        </Box>
        <Box mt={4} width="100%">
          <Typography variant="h5" fontWeight="bold" style={{ marginTop: '16px', backgroundColor: '#4caf50', color: 'white' }} >Booking Data</Typography>
           <Paper elevation={3} style={{ marginTop: '16px' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell>Facility</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Price (INR)/Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow key={index} style={{ marginTop: '16px', backgroundColor: '#4caf50', color: 'white' }} >
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
          </Paper>
        </Box>
      </Box>
    </Box>
  );


 }

 
 export default Booking
 