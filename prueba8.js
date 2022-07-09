let a = "CODIGO";
let b = "ODOCIG";
let p = []; //palabra
let n = a.length;
let m = b.length;
let meter = true;
function posicion(params) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (a[i] == b[k]) {
        meter = true;
        for (let j = 0; j < p.length; j++) {
          if (k == p[j]) {
            meter = false;
            break;
          }
        }

        if (meter) {
          p.push(k);
          break;
        }
      }
    }
  }

  if (p.length != n) {
    return false;
  } else {
    return p;
  }
}
console.log(posicion());
