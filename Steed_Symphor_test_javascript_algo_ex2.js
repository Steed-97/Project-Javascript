const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function F21(A) {


//Grille vide
const sudoku = []

function  F21(A) {
  // Récuperer toutes les valeurs
  let sudoku = [...array]
  for ( let i = newArray.length - 1; i > 0; i-- ) {
      const j = Math.floor( Math.random() * ( i + 1 ) );
      [ newArray[ i ], newArray[ j ] ] = [ newArray[ j ], newArray[ i ] ];
  }
  return newArray;
  }

  // Vérifier que les chiffres vont bien de 1 à 9 en lignes
  // Parcourir les lignes
  for (let ligne = 0; ligne < 9; ligne += 1) {
    const liste = new Set()
    // Parcourir les éléments de la ligne
  for (let col = 0; col < 9; col += 1) {
    const valeur = sudoku[ligne][col]
    if (valeur === [1-9]) {
        return true
    } else {
      return false
    }
  }
}
  // Vérifier que les chiffres vont bien de 1 à 9 en colonnes
  // Parcourir les colonnes
  for (let col = 0; col < 9; col += 1) {
    const liste = new Set()
    // Parcourir les éléments de la ligne
    for (let ligne = 0; ligne < 9; ligne += 1) {
      const valeur = sudoku[ligne][col]
      if (valeur === [1-9]) {
          return true
      } else {
        return false
      }
    }
  }


//Parcourir valeur pour veifier qu'elles sont toutes différentes
for ( let i = 0; i <= 8; i++ ) {
    for ( let j = 0; j <= 8; j++ ) {
        if ( A[i] = A[j] ) {
            return false;
        }else {
          return true
        }
      }
    }
}
