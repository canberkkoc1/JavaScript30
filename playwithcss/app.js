const img = document.getElementById("img-id");
function chngProp() {
  const size = document.getElementById("size-in").value;
  const color = document.getElementById("color-in").value;
  const blur = document.getElementById("blur-in").value;
  console.log(color);
  console.log(size);
  img.style.filter = `blur(${blur / 15}px)`;
  img.style.border = `${size}px solid ${color}`;
}
