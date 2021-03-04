import { useState, useEffect } from "react";

import api from "../../services/api";
import "./styles.css";
import { calculateTimeUntilNow } from "../../utils/calculateDate";

export default function NaverModal({
  setModal,
  naverId,
  handleEditClick,
  handleRemoveClick,
}) {
  const [naver, setNaver] = useState(null);

  useEffect(() => {
    api
      .get(`/navers/${naverId}`)
      .then((response) => setNaver(response.data))
      .catch((error) => console.log("HANDLE ERR"));
  }, [naverId]);

  return (
    <div className="modal-overlay">
      {naver && (
        <div className="modal-container">
          <img
            src="/icons/closeIcon.svg"
            alt="Close"
            id="closeButton"
            onClick={() => setModal(false)}
          />
          <img
            className="naver-card-profile-picture"
            src={`${naver.url}`}
            alt="foto de perfil"
          />

          <div className="modal-content">
            <div className="modal-data">
              <h2>{naver.name}</h2>
              <p>{naver.job_role}</p>
              <label>Idade</label>
              <p>{calculateTimeUntilNow(naver.birthdate).years}</p>
              <label>Tempo de empresa</label>
              <p>{`${
                calculateTimeUntilNow(naver.admission_date).years
              } anos e ${
                calculateTimeUntilNow(naver.admission_date).months
              } meses`}</p>
              <label>Projetos que participou</label>
              <p>{naver.project}</p>
            </div>
            <div className="card-icons-div">
              <img
                src="/icons/deleteIcon.svg"
                onClick={handleRemoveClick}
                alt="Deletar naver"
              />
              <img
                src="/icons/editIcon.svg"
                onClick={handleEditClick}
                alt="Editar naver"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
