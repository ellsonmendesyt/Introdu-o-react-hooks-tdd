import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import Quotes from './components/Quotes'
import Button from './components/Button'
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello/i);
//   expect(linkElement).toBeInTheDocument();
// });

/*
const quote = 'teste quote';
const speaker='random speaker';

test('Exibir o app com  uma citação e um botão', ()=>{
  render(<App/>);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/hello/i);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();

})



test('renders recebeu quote, speaker and a button', ()=>{

  render(<Quotes quote={quote} speaker={speaker} />);

  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);
  const buttonEl = screen.getByRole('button');

 expect(quoteEl).toBeInTheDocument();
 expect(speakerEl).toBeInTheDocument();
 expect(buttonEl).toBeInTheDocument();

})



test('renderizar um botao com texto click', ()=>{

  render(<Button>click</Button>);

  const buttonEl = screen.getByText(/CLICK/i);
  expect(buttonEl).toBeInTheDocument();
})
*/

test('chama um callback quando o botao for pressionado', ()=>{

  ///espiao spy
  const callback = jest.fn();

  render(<Quotes quote='minha citação'  speaker='elson'  onUpdate={callback}/>);

  const buttonEl = screen.getByRole('button');
 fireEvent.click(buttonEl);

 expect(callback).toHaveBeenCalledTimes(1);


})