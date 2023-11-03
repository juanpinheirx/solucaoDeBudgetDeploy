import { useState } from 'react';
import './App.css';

function App() {
  const orcamento = {
    manufatura: 40,
    material: 5,
    alimentacao: 15,
    energia: 5,
    transporte: 10,
  };
  const PP = {
    tamanho: 'PP',
    top: 2,
    cropped: 2,
    blusa: 3,
    saia: 5,
    vestido: 8,
    conjunto: 8,
  };
  const P = {
    tamanho: 'P',
    top: 2,
    cropped: 2,
    blusa: 4,
    saia: 6,
    vestido: 9,
    conjunto: 9,
  };
  const M = {
    tamanho: 'M',
    top: 3,
    cropped: 3,
    blusa: 5,
    saia: 7,
    vestido: 10,
    conjunto: 10,
  };
  const G = {
    tamanho: 'G',
    top: 4,
    cropped: 4,
    blusa: 6,
    saia: 8,
    vestido: 11,
    conjunto: 11,
  };
  const GG = {
    tamanho: 'GG',
    top: 5,
    cropped: 5,
    blusa: 7,
    saia: 9,
    vestido: 12,
    conjunto: 12,
  }
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState(0);
  return (
    <>
    <p id='title1'>Fofuliinhas</p>
      <form id='form' />
      <h4>Cheque aqui seu tamanho:</h4>
      <section id='tamanhos'>
        <input
          onClick={(e) => setResult(e.target.value)}
          type='radio'
          id='PP'
          name='size'
          value={PP.tamanho}
        />
        <label htmlFor='PP'>Tamanho PP</label>
        <input
          onClick={(e) => setResult(e.target.value)}
          type='radio'
          id='P'
          name='size'
          value='P'
        />
        <label htmlFor='P'>Tamanho P</label>
        <input
          onClick={(e) => setResult(e.target.value)}
          type='radio'
          id='M'
          value='M'
          name='size'
        />
        <label htmlFor='M'>Tamanho M</label>
        <input
          onClick={(e) => setResult(e.target.value)}
          type='radio'
          id='G'
          value='G'
          name='size'
        />
        <label htmlFor='G'>Tamanho G</label>
        <input
          onClick={(e) => setResult(e.target.value)}
          type='radio'
          id='GG'
          value='GG'
          name='size'
        />
        <label htmlFor='GG'>Tamanho GG</label>
      </section>
      <hr id='line' />
      <h4>Agora selecione o modelo:</h4>
      <section id='pecas'>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='top'
          className='input-hidden'
          value='top'
        />
        <label htmlFor='top'>
          <img src={'assets/37ccb816eebff5940d2e19f508882586.jpg'} alt='top' />
        </label>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='cropped'
          className='input-hidden'
          value='cropped'
        />
        <label htmlFor='cropped'>
          <img
            src={'assets/71171b0efcd3b633c6698b943f76c8b7.jpg'}
            alt='cropped'
          />
        </label>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='vestido'
          className='input-hidden'
          value='vestido'
        />
        <label htmlFor='vestido'>
          <img
            src={'assets/cb7073e13a16498e96a1cc3a5486d8dd.jpg'}
            alt='vestido'
          />
        </label>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='conjunto'
          className='input-hidden'
          value='conjunto'
        />
        <label htmlFor='conjunto'>
          <img src={'assets/fe2971a36b501e5fbffd284cfedbe51d.jpg'} alt='top' />
        </label>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='saia'
          className='input-hidden'
          value='saia'
        />
        <label htmlFor='saia'>
          <img src={'assets/26aee3bb069f1be8b97ca28563043cb4.jpg'} alt='saia' />
        </label>
        <input
          onClick={(e) => setResult2(e.target.value)}
          type='radio'
          name='peca'
          id='blusa'
          value='blusa'
          className='input-hidden'
        />
        <label htmlFor='blusa'>
          <img src={'assets/7795ca1975133f720b3f5ecced2c4e2f.jpg'} alt='blusa' />
        </label>
      </section>
      <hr id='line' />
      <input onClick={() => {
        (result2 === 'saia' && result === PP.tamanho) && setResult3((orcamento.material * PP.saia) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'saia' && result === P.tamanho) && setResult3((orcamento.material * P.saia) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'saia' && result === M.tamanho) && setResult3((orcamento.material * M.saia) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'saia' && result === G.tamanho) && setResult3((orcamento.material * G.saia) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'saia' && result === GG.tamanho) && setResult3((orcamento.material * GG.saia) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'cropped' && result === PP.tamanho) && setResult3((orcamento.material * PP.cropped) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 2) + orcamento.transporte);
        (result2 === 'cropped' && result === P.tamanho) && setResult3((orcamento.material * P.cropped) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 2) + orcamento.transporte);
        (result2 === 'cropped' && result === M.tamanho) && setResult3((orcamento.material * M.cropped) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 2) + orcamento.transporte);
        (result2 === 'cropped' && result === G.tamanho) && setResult3((orcamento.material * G.cropped) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 2) + orcamento.transporte);
        (result2 === 'cropped' && result === GG.tamanho) && setResult3((orcamento.material * GG.cropped) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 2) + orcamento.transporte);
        (result2 === 'blusa' && result === PP.tamanho) && setResult3((orcamento.material * PP.blusa) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'blusa' && result === P.tamanho) && setResult3((orcamento.material * P.blusa) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'blusa' && result === M.tamanho) && setResult3((orcamento.material * M.blusa) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'blusa' && result === G.tamanho) && setResult3((orcamento.material * G.blusa) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'blusa' && result === GG.tamanho) && setResult3((orcamento.material * GG.blusa) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 3) + orcamento.transporte);
        (result2 === 'vestido' && result === PP.tamanho) && setResult3((orcamento.material * PP.vestido) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'vestido' && result === P.tamanho) && setResult3((orcamento.material * P.vestido) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'vestido' && result === M.tamanho) && setResult3((orcamento.material * M.vestido) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'vestido' && result === G.tamanho) && setResult3((orcamento.material * G.vestido) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'vestido' && result === GG.tamanho) && setResult3((orcamento.material * GG.vestido) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'conjunto' && result === PP.tamanho) && setResult3((orcamento.material * PP.conjunto) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'conjunto' && result === P.tamanho) && setResult3((orcamento.material * P.conjunto) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'conjunto' && result === M.tamanho) && setResult3((orcamento.material * M.conjunto) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'conjunto' && result === G.tamanho) && setResult3((orcamento.material * G.conjunto) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'conjunto' && result === GG.tamanho) && setResult3((orcamento.material * GG.conjunto) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 4) + orcamento.transporte);
        (result2 === 'top' && result === PP.tamanho) && setResult3((orcamento.material * PP.top) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 1) + orcamento.transporte);
        (result2 === 'top' && result === P.tamanho) && setResult3((orcamento.material * P.top) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 1) + orcamento.transporte);
        (result2 === 'top' && result === M.tamanho) && setResult3((orcamento.material * M.top) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 1) + orcamento.transporte);
        (result2 === 'top' && result === G.tamanho) && setResult3((orcamento.material * G.top) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 1) + orcamento.transporte);
        (result2 === 'top' && result === GG.tamanho) && setResult3((orcamento.material * GG.top) + orcamento.alimentacao + orcamento.energia + (orcamento.manufatura * 1) + orcamento.transporte);
        

      }} id='submit' type='submit' value='Veja seu orçamento!' />
      <section>
        <h4>Seu modelo custará: </h4>
        <h5 onChange={() => {
          result3
        }} id='result'>R${result3},00</h5>
      </section>
    </>
  );
}

export default App;
