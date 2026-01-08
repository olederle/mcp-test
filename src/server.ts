import { FastMCP } from 'fastmcp';

const server = new FastMCP({
    name: "Office Hours Appointment Booking",
    version: "1.0.0"
});


server.start({
    transportType: "stdio",
});