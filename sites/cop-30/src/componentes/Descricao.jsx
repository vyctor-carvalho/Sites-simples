function Descricao() {
  return (
    <div class="descricao" style={descricaostilo}>
      <p>
      O acúmulo de lixo nas ruas de Belém prejudica a saúde pública, o meio ambiente e a infraestrutura urbana. Para resolver esse problema, é essencial a conscientização da população sobre possíveis soluções como: o descarte correto e a coleta seletiva. A educação ambiental pode promover uma cultura de responsabilidade coletiva, tornando a cidade mais limpa e sustentável.
      </p>
    </div>
  );
}
export default Descricao;
const descricaostilo = {
  fontFamily: 'Vale Sans',
  color: '#333333',
  textAlign: 'justify',
  width: '90%',
  fontSize: '18px',
  marginLeft: '20px',
  margin: '0 auto',
};
