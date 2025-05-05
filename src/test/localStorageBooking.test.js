// src/__tests__/localStorageBooking.test.js

describe("Local Storage Booking Tests", () => {
  const testBooking = {
    date: "2025-05-06",
    time: "18:00",
    guests: 2,
    occasion: "Anniversary",
  };

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test("writes a new booking to local storage", () => {
    // Simulate existing bookings
    const existingBookings = [];
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    // Add a new booking
    const updatedBookings = [...existingBookings, testBooking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Retrieve and verify
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));
    expect(savedBookings).toHaveLength(1);
    expect(savedBookings[0]).toEqual(testBooking);
  });

  test("reads bookings from local storage", () => {
    // Store a booking first
    localStorage.setItem("bookings", JSON.stringify([testBooking]));

    // Simulate reading it later
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));
    expect(savedBookings).toBeDefined();
    expect(savedBookings.length).toBe(1);
    expect(savedBookings[0].occasion).toBe("Anniversary");
  });
});
