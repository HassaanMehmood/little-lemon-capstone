import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  // Test for HTML5 validation attributes
  it("should apply required attributes to form elements", () => {
    render(<BookingForm />);

    // Check for the 'required' attribute on each input field
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(dateInput).toHaveAttribute("required");
    expect(timeInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("required");
    expect(occasionSelect).toHaveAttribute("required");
  });

  // Test for form validation (valid state)
  it("should submit the form with valid inputs", () => {
    render(<BookingForm />);

    // Fill in valid values
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-05-01" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    // Check that submit button is enabled and click it
    const submitButton = screen.getByText(/submit reservation/i);
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    // Check that the form submission was triggered, e.g., by checking for a confirmation message
    // Add your assertion based on how the form reacts on submission
    expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument(); // Assuming such a message is shown
  });

  // Test for form validation (invalid state)
  it("should prevent submission with invalid inputs", () => {
    render(<BookingForm />);

    // Fill in invalid values (e.g., empty fields)
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "" },
    });

    // Check that submit button is disabled
    const submitButton = screen.getByText(/submit reservation/i);
    expect(submitButton).toBeDisabled();
  });
});
