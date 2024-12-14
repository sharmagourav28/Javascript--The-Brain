function checkTriangle(n1, n2, n3) {
  if (n1 == n2 && n1 == n3) {
    if (n2 == n3) {
      console.log("Equi");
    }
  } else if (n1 == n2) {
    if (n1 != n3 && n2 != n3) {
      console.log("Iso");
    }
  } else if (n2 == n3) {
    if (n1 != n2 && n3 != n1) {
      console.log("Iso");
    }
  } else if (n1 == n3) {
    if (n1 != n2 && n3 != n2) {
      console.log("Iso");
    }
  } else {
    console.log("Scan");
  }
}

checkTriangle(2, 3, 1);
