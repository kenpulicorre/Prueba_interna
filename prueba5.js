let a = "";
for (let l = 0; l <= 8; l++) {
  if (l == 0 || l == 4 || l == 8) {
    if (l != 0) {
      a = a.concat("\n");
    }
    for (let i = 0; i <= 10; i++) {
      a = a.concat("*");
    }
  } else {
    if (l == 1 || l == 3 || l == 4 || l == 5 || l == 7) {
      a = a.concat("\n");
      for (let i = 0; i <= 10; i++) {
        if (i == 0 || i == 10 / 2 || i == 10) {
          a = a.concat("*");
        } else a = a.concat(" ");
      }
    } else {
      a = a.concat("\n");
      for (let i = 0; i <= 10; i++) {
        if (i == 0 || i == 10) {
          a = a.concat("*");
        } else a = a.concat(" ");
      }
    }
  }
}

console.log(a);
