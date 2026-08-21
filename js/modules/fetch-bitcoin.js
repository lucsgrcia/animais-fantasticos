export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((body) => {
      const span = document.querySelector(target);

      span.innerText = (1000 / body.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

setInterval(() => {
  valorBTC();
}, 30000);
