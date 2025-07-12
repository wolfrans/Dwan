// let takeItOff = document.querySelectorAll(".num p");
// for (let i = 0; i < takeItOff.length; i++) {
//   takeItOff[i].textContent = "";
// };
document.querySelectorAll('.num p').forEach(p => {
  let text = p.textContent.trim().toLowerCase();

  if (text === 'sumor' || text === 'sumor-fie') {
    p.style.color = 'red';
    p.textContent = "Taboo";
  } else {
    p.textContent = "working day";
     p.style.color = "rgb(0, 204, 255)";
  }
});

