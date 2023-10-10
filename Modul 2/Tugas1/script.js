const angka1Input = document.getElementById('angka1');
const angka2Input = document.getElementById('angka2');
const hasilSpan = document.getElementById('hasil');

function hitung(operator) {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  let hasil;

  hasil = angka1 + angka2;

  alert('hasil penjumlahan = ' + hasil);
}    
function reset() {
    angka1Input.value = '';
    angka2Input.value = '';
    hasilSpan.textContent = '';
  }
  document.getElementById('reset').addEventListener('click', reset);  