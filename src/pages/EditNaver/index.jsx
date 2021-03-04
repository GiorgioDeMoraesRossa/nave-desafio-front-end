/* 
Página para criação ou edição de um naver (nome de rota 'create' ou 'edit' 
define se é criação ou edição) 
*/
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import MessageModal from "../../components/MessageModal";
import {
  calculateTimeUntilNow,
  calculateDateFromNow,
  formatDate,
} from "../../utils/calculateDate";
import "./styles.css";
import api from "../../services/api";

export default function EditNaver({ handleEditClick }) {
  const location = useLocation();
  const naver = location.state ? location.state.naver : null;
  const history = useHistory();
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState(null);
  const [tempEmpresa, setTempEmpresa] = useState(null);
  const [projetos, setProjetos] = useState("");
  const [url, setUrl] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    // VALIDAÇÃO

    // faz requisição para a api
    if (location.pathname === "/create") {
      // post
      //checa se todos foram digitados
      await api
        .post("/navers", {
          name,
          job_role: cargo,
          admission_date: calculateDateFromNow(tempEmpresa),
          birthdate: calculateDateFromNow(idade),
          project: projetos,
          url,
        })
        .then()
        .catch((error) => console.log("HANDLE ERROR"));

      setIsMessageModalOpen(true);

      setTimeout(() => {
        setIsMessageModalOpen(false);
        history.push("/");
      }, 1500);
    } else {
      // put
      await api
        .put(`/navers/${naver.id}`, {
          name: name === "" ? naver.name : name,
          job_role: cargo === "" ? naver.job_role : cargo,
          admission_date:
            tempEmpresa === null
              ? formatDate(new Date(naver.admission_date))
              : calculateDateFromNow(tempEmpresa),
          birthdate:
            idade === null
              ? formatDate(new Date(naver.birthdate))
              : calculateDateFromNow(idade),
          project: projetos === "" ? naver.project : projetos,
          url: url === "" ? naver.url : url,
        })
        .then()
        .catch((error) => console.log("HANDLE ERROR"));

      setIsMessageModalOpen(true);

      setTimeout(() => {
        setIsMessageModalOpen(false);
        history.push("/");
      }, 1500);
    }
  }

  return (
    <>
      <Header />
      {isMessageModalOpen && (
        <MessageModal
          setModal={setIsMessageModalOpen}
          type={location.pathname === "/create" ? "create" : "edit"}
        />
      )}
      <div className="edit-container">
        <div className="edit-content">
          <div className="edit-header">
            <img
              src="/icons/arrowIcon.svg"
              onClick={history.goBack}
              alt="Botao para voltar"
            />
            {location.pathname === "/create" ? (
              <h1>Adicionar Naver</h1>
            ) : (
              <h1>Editar Naver</h1>
            )}
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder={naver != null ? `${naver.name}` : "Nome"}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cargo">Cargo</label>
                  <input
                    type="text"
                    id="cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    placeholder={naver != null ? `${naver.job_role}` : "Cargo"}
                  />
                </div>
              </div>

              <div className="field-group">
                <div className="field">
                  <label htmlFor="idade">Idade</label>
                  <input
                    type="number"
                    id="idade"
                    onChange={(e) => setIdade(Number(e.target.value))}
                    placeholder={
                      naver != null
                        ? `${calculateTimeUntilNow(naver.birthdate).years}`
                        : "Idade"
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="tempoEmpresa">Tempo de empresa</label>
                  <input
                    type="number"
                    id="tempoEmpresa"
                    onChange={(e) => setTempEmpresa(Number(e.target.value))}
                    placeholder={
                      naver != null
                        ? `${calculateTimeUntilNow(naver.admission_date).years}`
                        : "Tempo de empresa"
                    }
                  />
                </div>
              </div>

              <div className="field-group">
                <div className="field">
                  <label htmlFor="projetos">Projetos que participou</label>
                  <input
                    type="text"
                    id="projetos"
                    onChange={(e) => setProjetos(e.target.value)}
                    placeholder={
                      naver != null
                        ? `${naver.project}`
                        : "Projetos que participou"
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="url">URL da foto do Naver</label>
                  <input
                    type="text"
                    id="url"
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={
                      naver != null ? `${naver.url}` : "URL da foto do Naver"
                    }
                  />
                </div>
              </div>
            </fieldset>
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </>
  );
}
