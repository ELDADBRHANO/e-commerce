import {  render,screen } from "@testing-library/react";
import Footer from './Footer';

describe("test for footer",()=>{
it("check if SPAN is on display",async()=>{
  render(<Footer/>)
  const elem =  await screen.findByTestId('spanFooter')
  expect(elem).toBeInTheDocument()
})
it("check if h6 have class",async()=>{
  render(<Footer/>)
  const title =  await screen.findByTestId('Title')
  expect(title).toHaveClass('text-uppercase fw-bold mb-4')
})
})

