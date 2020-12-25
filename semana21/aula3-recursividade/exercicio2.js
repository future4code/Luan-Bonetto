function calculateSumTo(numero, acc = 0){
    if (numero === 0) {
      return acc;
    }
    return calculateSumTo(numero - 1, acc + numero);
  };

  console.log(calculateSumTo(5));
  console.log(calculateSumTo(25));
  console.log(calculateSumTo(1000));