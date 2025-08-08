function hitungMatriks() {
  const operasi = document.getElementById("operasi").value;

  // ambil nilai matriks A
  let a00 = parseFloat(document.getElementById("a00").value) || 0;
  let a01 = parseFloat(document.getElementById("a01").value) || 0;
  let a10 = parseFloat(document.getElementById("a10").value) || 0;
  let a11 = parseFloat(document.getElementById("a11").value) || 0;

  // ambil nilai matriks B
  let b00 = parseFloat(document.getElementById("b00").value) || 0;
  let b01 = parseFloat(document.getElementById("b01").value) || 0;
  let b10 = parseFloat(document.getElementById("b10").value) || 0;
  let b11 = parseFloat(document.getElementById("b11").value) || 0;

  let hasil = "";

  if (operasi === "tambah") {
    hasil = `
      [ ${a00 + b00}  ${a01 + b01} ]<br>
      [ ${a10 + b10}  ${a11 + b11} ]
    `;
  } else if (operasi === "kurang") {
    hasil = `
      [ ${a00 - b00}  ${a01 - b01} ]<br>
      [ ${a10 - b10}  ${a11 - b11} ]
    `;
  } else if (operasi === "kali") {
    let c00 = a00 * b00 + a01 * b10;
    let c01 = a00 * b01 + a01 * b11;
    let c10 = a10 * b00 + a11 * b10;
    let c11 = a10 * b01 + a11 * b11;

    hasil = `
      [ ${c00}  ${c01} ]<br>
      [ ${c10}  ${c11} ]
    `;
  }

  document.getElementById("hasil").innerHTML = hasil;
}
