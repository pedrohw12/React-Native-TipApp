import React, { useState, useEffect } from 'react';

import { 
  Page, 
  HeaderText, 
  Input, 
  CalcButton, 
  ResultArea, 
  ResultItem,
  ResultItemTitle,
  PctArea,
  PctItem,
} from './styles/styles';


export default() => {
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState(0);
  const [ pct, setPct ] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill) {
      setTip( (pct/100)*nBill );
    } 
  }
  
  useEffect(() => {
    calc();
  }, [pct] );

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder='Quanto deu a conta ?'
        keyboardType='numeric'
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
      <PctArea>
        <PctItem title='5%' onPress={()=>setPct(5)} />
        <PctItem title='10%' onPress={()=>setPct(10)} />
        <PctItem title='15%' onPress={()=>setPct(15)} />
        <PctItem title='20%' onPress={()=>setPct(20)} />
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
       {tip > 0 &&
       <ResultArea>
         <ResultItemTitle>Valor da conta</ResultItemTitle>
         <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

         <ResultItemTitle>Valor da gorjeta</ResultItemTitle>
         <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

         <ResultItemTitle>Valor da total</ResultItemTitle>
         <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
       </ResultArea>
      }
    </Page>
  );
}

