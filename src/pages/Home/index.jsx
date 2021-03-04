/* Pagina principal da aplicação, mostra a listagem de navers utilizando o componente NaverCard */
import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import NaverCard from "../../components/NaverCard";

/* Modal para mostrar o naver em detalhe*/
import NaverModal from "../../components/NaverModal";
/* Modal para confirmar remoção de um naver*/
import ConfirmationModal from "../../components/ConfirmationModal";
/* Modal para informar o usuário do sucesso de alguma ação */
import MessageModal from "../../components/MessageModal";

import { AuthContext } from "../../contexts/authContext";
import api from "../../services/api";
import "./styles.css";

export default function Home() {
  /* controle dos modais */
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  /* controle da interação com os cards */
  const [selectedNaverIndex, setSelectedNaverIndex] = useState(0);
  const [navers, setNavers] = useState([]);

  const history = useHistory();
  const { token } = useContext(AuthContext);

  /* Após o login (token ser setado) busca os navers */
  useEffect(() => {
    api
      .get("/navers")
      .then((response) => {
        setNavers(response.data);
      })
      .catch((error) =>
        alert("Ocorreu um erro interno, tente novamente mais tarde")
      );
  }, [token]);

  /* Abre o modal de navers */
  function handleCardClick(naverIndex) {
    setSelectedNaverIndex(naverIndex);

    setIsNaverModalOpen(true);
  }

  /* Redireciona para a página de update de um naver */
  function handleEditClick(naverIndex) {
    history.push({ pathname: "/edit", state: { naver: navers[naverIndex] } });
  }

  /* Abre o modal de confirmação sobre a remoção de um naver */
  function handleRemoveClick(naverIndex) {
    setSelectedNaverIndex(naverIndex);
    setIsConfirmationModalOpen(true);
  }

  /* Remove um naver */
  async function handleRemoveNaver() {
    // chamda a API para remover o naver (a partir do selectedNaverIndex)
    const removeResponse = await api
      .delete(`navers/${navers[selectedNaverIndex].id}`)
      .then((response) => response.data)
      .catch((error) => {
        alert("Não foi possível excluir o naver, tente novamente mais tarde");
        return error;
      });

    if (removeResponse.deleted) {
      // deu certo, remove do array atual
      navers.splice(selectedNaverIndex, 1);
      setSelectedNaverIndex(0);

      // Retira os modais de confirmação e do naver(se existia)
      setIsConfirmationModalOpen(false);
      if (isNaverModalOpen) {
        setIsNaverModalOpen(false);
      }

      /* Mostra (por 1,5 segundos) o modal de mensagem confirmando a ação*/
      setIsMessageModalOpen(true);
      setTimeout(() => {
        setIsMessageModalOpen(false);
      }, 1500);
    }
    // deu errado, só tira o modal de confirmação
    setIsConfirmationModalOpen(false);
  }

  return (
    <div>
      <Header />
      {/* Modais que podem aparecer por cima dos outros elementos */}
      {isNaverModalOpen && (
        <NaverModal
          setModal={setIsNaverModalOpen}
          naverId={navers[selectedNaverIndex].id}
          handleEditClick={() => handleEditClick(selectedNaverIndex)}
          handleRemoveClick={() => handleRemoveClick(selectedNaverIndex)}
        />
      )}
      {isConfirmationModalOpen && (
        <ConfirmationModal
          setModal={setIsConfirmationModalOpen}
          confirmationFunction={handleRemoveNaver}
        />
      )}
      {isMessageModalOpen && (
        <MessageModal setModal={setIsMessageModalOpen} type="remove" />
      )}
      {/* pagina inicial com cabeçalho para adição de naver e listagem dos existentes */}
      <div className="home-container">
        <div className="home-header">
          <h1>Navers</h1>
          <Link to="/create">
            <span>Adicionar Naver</span>
          </Link>
        </div>
        <div className="navers-container">
          {navers.length === 0 && <p>Não existe nenhum naver no sistema!</p>}
          {navers.map((naver, index) => (
            <NaverCard
              key={naver.id}
              naver={naver}
              onClick={() => handleCardClick(index)}
              handleEditClick={() => handleEditClick(index)}
              handleRemoveClick={() => handleRemoveClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
