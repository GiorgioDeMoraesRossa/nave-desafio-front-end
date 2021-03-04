/* 
Página para criação ou edição de um naver (nome de rota 'create' ou 'edit' 
define se é criação ou edição) 
*/
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { calculateDateUntilNow } from "../../utils/calculateDate";
import Header from "../../components/Header";
import "./styles.css";
import MessageModal from "../../components/MessageModal";

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

  function handleSubmit(event) {
    event.preventDefault();

    // checa se todos foram digitados
    // faz requisição para a api

    if (location.pathname == "/create") {
      // post
      setIsMessageModalOpen(true);
      setTimeout(() => {
        setIsMessageModalOpen(false);
        history.push("/");
      }, 1500);
    } else {
      setIsMessageModalOpen(true);
      setTimeout(() => {
        setIsMessageModalOpen(false);
        history.push("/");
      }, 1500);
      //put
    }
  }

  return (
    <>
      <Header />
      {isMessageModalOpen && (
        <MessageModal
          setModal={setIsMessageModalOpen}
          type={location.pathname == "/create" ? "create" : "edit"}
        />
      )}
      <div className="edit-container">
        <div className="edit-content">
          <div className="edit-header">
            <img src="/icons/arrowIcon.svg" onClick={history.goBack} />
            {location.pathname == "/create" ? (
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
                    placeholder={naver != null ? `${naver.name}` : "Nome"}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cargo">Cargo</label>
                  <input
                    type="text"
                    id="cargo"
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
                    placeholder={
                      naver != null
                        ? `${calculateDateUntilNow(naver.birthdate).years}`
                        : "Idade"
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="tempoEmpresa">Tempo de empresa</label>
                  <input
                    type="number"
                    id="tempoEmpresa"
                    placeholder={
                      naver != null
                        ? `${calculateDateUntilNow(naver.admission_date).years}`
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
