import App from './App';
 import {screen,render} from '@testing-library/react';

 describe("tests for app",async()=>{
  render(<App/>)
  const elem = await screen.findByTestId('main')
  expect(elem).toHaveStyle('height: "100vh", overflowY: "auto"')
 })