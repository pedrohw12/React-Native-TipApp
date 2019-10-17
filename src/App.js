import React, { useState } from 'react';

import { 
  Page, 
  HeaderText, 
  Input, 
  CalcButton, 
  ResultArea, 
  ResultItem,
  ResultItemTitle,
} from './styles/styles';


export default() => {
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill) {
      setTip( nBill*0.10 );
    } else {
      alert('Digite o valor da conta');
    }
  }
  

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder='Quanto deu a conta ?'
        keyboardType='numeric'
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
      <CalcButton title='Calcular' onPress={calc} />
       {tip > 0 &&
       <ResultArea>
         <ResultItemTitle>Valor da conta</ResultItemTitle>
         <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

         <ResultItemTitle>Valor da gorjeta</ResultItemTitle>
         <ResultItem>R$ {tip.toFixed(2)}</ResultItem>

         <ResultItemTitle>Valor da total</ResultItemTitle>
         <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
       </ResultArea>
      }
    </Page>
  );
}

