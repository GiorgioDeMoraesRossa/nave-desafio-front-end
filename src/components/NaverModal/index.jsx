import "./styles.css";

function calculateDateUntilNow(dateString) {
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

export default function NaverModal({ setModal, naver }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img
          src="/icons/closeIcon.svg"
          alt="Close"
          id="closeButton"
          onClick={() => setModal(false)}
        />
        <img src="https://github.com/GiorgioDeMoraesRossa.png" />
        {/* trocar para naver.url */}
        <div className="modal-content">
          <div className="modal-data">
            <h2>{naver.name}</h2>
            <p>{naver.job_role}</p>
            <label>Idade</label>
            <p>{calculateDateUntilNow(naver.birthdate).years}</p>
            <label>Tempo de empresa</label>
            <p>{`${calculateDateUntilNow(naver.admission_date).years} anos e ${
              calculateDateUntilNow(naver.admission_date).months
            } meses`}</p>
            <label>Projetos que participou</label>
            <p>{naver.project}</p>
          </div>
          <div className="card-icons-div">
            <img src="/icons/deleteIcon.svg" />
            <img src="/icons/editIcon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
