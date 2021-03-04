export function calculateTimeUntilNow(dateString) {
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

/* 
Função para estimar data a partir da quantidade de tempo
Usada para descobrir a data de nascimento e admissão a partir da quantidade de anos
*/
export function calculateDateFromNow(years, months = 0) {
  const now = new Date();

  const initialDate = new Date(
    now.getTime() -
      years * 365.25 * 24 * 60 * 60 * 1000 -
      months * 30 * 24 * 60 * 60 * 1000
  );

  return formatDate(initialDate);
}

export function formatDate(date) {
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
  const ano = date.getFullYear();
  return dia + "/" + mes + "/" + ano;
}
