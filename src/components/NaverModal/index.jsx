import "./styles.css";

import { calculateDateUntilNow } from "../../utils/calculateDate";

export default function NaverModal({
  setModal,
  naver,
  handleEditClick,
  handleRemoveClick,
}) {
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
            <img src="/icons/deleteIcon.svg" onClick={handleRemoveClick} />
            <img src="/icons/editIcon.svg" onClick={handleEditClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
