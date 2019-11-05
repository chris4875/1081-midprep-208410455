function changeColor(index) {
  const p = document.getElementById("section");
  console.log(p);
  // if (index === 1) p.style.backgroundColor = "yellow";
  // else if (index === 2) p.style.backgroundColor = "azure";
  // else if (index === 3) p.style.backgroundColor = "cornflowerblue";

  switch (index) {
    case 1:
      p.style.backgroundColor = "yellow";
      break;
    case 2:
      p.style.backgroundColor = "azure";
      break;
    case 3:
      p.style.backgroundColor = "cornflowerblue";
      break;
  }
}
