import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

test('renders App without crashing', () => {
  rtl.render(<App />);
});

test('Form submit displays its values', () => {

  //Arrange
  rtl.render(<App />);

  //Act

  const fn = rtl.screen.getByLabelText(/First Name/i);
  const ln = rtl.screen.getByLabelText(/Last Name/i);
  const email = rtl.screen.getByLabelText(/Email/i);
  const message = rtl.screen.getByLabelText(/Message/i);
  const submit = rtl.screen.getByTestId(/submit/i);

  rtl.act(() => {

    rtl.fireEvent.change(fn, { target: { value: 'Ana' } });
    rtl.fireEvent.change(ln, { target: { value: 'Guevara' } });
    rtl.fireEvent.change(email, { target: { value: 'something@gmail.com' } });
    rtl.fireEvent.change(message, { target: { value: 'some message here' } });

  });


  rtl.fireEvent.click(submit)

  //const data = rtl.screen.getByTestId('displayed-data');




  
  //Assert


  
});