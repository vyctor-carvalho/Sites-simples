import { useState } from 'react';
function Cards(props) {
  const [expandir, setExpandir] = useState(false);
  const aparecer = () => {
    setExpandir((prev) => !prev);
  };
  const [expandir2, setExpandir2] = useState(false);
  const aparecer2 = () => {
    setExpandir2((prev) => !prev);
  };
  const [expandir3, setExpandir3] = useState(false);
  const aparecer3 = () => {
    setExpandir3((prev) => !prev);
  };
  const [expandir4, setExpandir4] = useState(false);
  const aparecer4 = () => {
    setExpandir4((prev) => !prev);
  };
  return (
    <div class="row" id="main">
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h3 style={titulostilo}>{props.titulocard}</h3>
      </div>
      <hr></hr>
      <div class="col s3">
        <div class="card" style={cardstilo}>
          <div class="card-image">
            <img src={props.cardImg} style={cardimg} />
            <span class="card-title" style={CardSpan}>
              {props.tituloImg}
            </span>
          </div>
          <div style={cardresumo}>
            <p>{props.descricaoCard}</p>
          </div>
          <div style={cardfont}>
            <button onClick={aparecer} style={buttonstilo}>
              <span class="span">{expandir ? 'Menos' : 'Mais'}</span>
            </button>
            {expandir && (
              <div style={expandirP}>
                <p style={{ fontFamily: 'Vale Sans' }}>{props.detalhescard}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="col s3">
        <div class="card" style={cardstilo}>
          <div class="card-image">
            <img src={props.cardImg2} style={cardimg} />
            <span class="card-title" style={CardSpan}>
              {props.tituloImg2}
            </span>
          </div>
          <div style={cardresumo}>
            <p>{props.descricaoCard2}</p>
          </div>
          <div class="card-action" style={cardfont}>
            <button onClick={aparecer2} style={buttonstilo}>
              <span class="span">{expandir2 ? 'Menos' : 'Mais'}</span>
            </button>
            {expandir2 && (
              <div style={expandirP}>
                <p style={{ fontFamily: 'Vale Sans' }}>{props.detalhescard2}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="col s3">
        <div class="card" style={cardstilo}>
          <div class="card-image">
            <img src={props.cardImg3} style={cardimg} />
            <span class="card-title" style={CardSpan}>
              {props.tituloImg3}
            </span>
          </div>
          <div style={cardresumo}>
            <p>{props.descricaoCard3}</p>
          </div>
          <div class="card-action" style={cardfont}>
            <button onClick={aparecer3} style={buttonstilo}>
              <span class="span">{expandir3 ? 'Menos' : 'Mais'}</span>
            </button>
            {expandir3 && (
              <div style={expandirP}>
                <p style={{ fontFamily: 'Vale Sans' }}>{props.detalhescard3}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="col s3">
        <div class="card" style={cardstilo}>
          <div class="card-image">
            <img src={props.cardImg4} style={cardimg} />
            <span class="card-title" style={CardSpan}>
              {props.tituloImg4}
            </span>
          </div>
          <div style={cardresumo}>
            <p>{props.descricaoCard4}</p>
          </div>
          <div class="card-action" style={cardfont}>
            <button onClick={aparecer4} style={buttonstilo}>
              <span class="span">{expandir4 ? 'Menos' : 'Mais'}</span>
            </button>
            {expandir4 && (
              <div style={expandirP}>
                <p style={{ fontFamily: 'Vale Sans' }}>{props.detalhescard4}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

const cardstilo = {
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '',
};
const cardimg = {
  borderRadius: '10px 10px 0px 0px',
};
const cardfont = {
  borderRadius: '0px 0px 10px 10px',
  border: 'none',
  alingItens: 'center',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const expandirP = {
  padding: '10px',
  backgroundColor: '#e8f1f1',
  borderRadius: '20px',
  marginTop: '10px',
  fontFamily: 'Vale Sans',
  textAlign: 'auto',
  fontWeight: '500 ',
};
const cardresumo = {
  padding: '20px',
  fontFamily: 'Vale Sans',
  textAlign: 'auto',
  fontWeight: '500',
};
const CardSpan = {
  color: '',
  fontWeight: '500',
  textShadow: 'black 2px 2px',
  padding: '5px',
};
const titulostilo = {
  fontFamily: 'Vale Sans',
  color: '#333333',
  fontWeight: '500',
};
const buttonstilo = {
  fontFamily: 'Vale Sans',
};
