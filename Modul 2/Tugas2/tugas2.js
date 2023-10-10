function Check() {
  const name = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("alamat").value;

  if (name === "" || email === "" || address === "") {
    alert("Anda harus mengisi data dengan lengkap!");
  } else {
    alert("Success");
  }
}