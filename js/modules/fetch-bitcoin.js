export default function initFetchBitcoin() {
  const span = document.querySelector(".btc-preco");

  function valorBTC() {
    fetch(`https://blockchain.info/ticker`)
      .then((response) => response.json())
      .then((body) => {
        span.innerText = (1000 / body.BRL.sell).toFixed(4);
      })
      .catch((erro) => {
        console.log(Error(erro));
      });
  }

  setInterval(() => {
    valorBTC();
  }, 30000);

  valorBTC();
}
