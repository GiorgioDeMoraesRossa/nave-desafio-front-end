export function calculateDateUntilNow(dateString) {
  const now = new Date();
  const before = new Date(dateString);

  // diferença em segundos, divide por dias, divide por 365.
  const years = Math.floor(
    (now.getTime() - before.getTime()) / 1000 / (60 * 60 * 24) / 365.25
  );

  // diferença em segundos, divide por dias, divide por 30 (quantidade de meses).
  // multiplica por 12 os anos passados e faz a diferença
  const months = Math.round(
    (now.getTime() - before.getTime()) / 1000 / (60 * 60 * 24) / 30 - years * 12
  );

  return { years, months };
}
