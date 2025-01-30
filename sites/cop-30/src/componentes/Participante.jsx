function ParticipanteCard (props) {
  return (
    <div class='row' id='main'>
      <div class="col s3" style={{fontFamily: 'Vale Sans'}}>
        <div class="card" style= {Imgparticipante}>
          <div class="card-image" >
            <img src={props.participanteImg} style= {Imgparticipante}/>
          </div>
        </div>
        <div style={{textAlign:'center'}} >
          <h3>{props.nome}</h3>
        </div>
        <div style={{textAlign:'center'}} >
          <h5>{props.matricula}</h5>
        </div>
      </div>
      <div class="col s3" style={{fontFamily: 'Vale Sans'}}>
        <div class="card" style= {Imgparticipante}>
          <div class="card-image" >
            <img src={props.participanteImg2} style= {Imgparticipante}/>
          </div>
        </div>
        <div style={{textAlign:'center'}} >
          <h3>{props.nome2}</h3>
        </div>
        <div style={{textAlign:'center'}} >
          <h5>{props.matricula2}</h5>
        </div>
      </div>
      <div class="col s3" style={{fontFamily: 'Vale Sans'}}>
        <div class="card" style= {Imgparticipante}>
          <div class="card-image" >
            <img src={props.participanteImg3} style= {Imgparticipante}/>
          </div>
        </div>
        <div style={{textAlign:'center'}} >
          <h3>{props.nome3}</h3>
        </div>
        <div style={{textAlign:'center'}} >
          <h5>{props.matricula3}</h5>
        </div>
      </div>
      <div class="col s3" style={{fontFamily: 'Vale Sans'}}>
        <div class="card" style= {Imgparticipante}>
          <div class="card-image" >
            <img src={props.participanteImg4} style= {Imgparticipante}/>
          </div>
        </div>
        <div style={{textAlign:'center'}} >
          <h3>{props.nome4}</h3>
        </div>
        <div style={{textAlign:'center'}} >
          <h5>{props.matricula4}</h5>
        </div>
      </div>
    </div>
  );
}
export default ParticipanteCard;
const Imgparticipante = {
  borderRadius: '100%', 
}