/* */
import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import NaverCard from "../../components/NaverCard";
import NaverModal from "../../components/NaverModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import MessageModal from "../../components/MessageModal";

import { AuthContext } from "../../contexts/authContext";
import api from "../../services/api";
import "./styles.css";

export default function Home() {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedNaverIndex, setSelectedNaverIndex] = useState(0);
  const [navers, setNavers] = useState([]);
  const history = useHistory();

  const { token } = useContext(AuthContext);

  useEffect(() => {
    api.get("/navers").then((response) => {
      setNavers(response.data);
    });
  }, [token]);

  function handleCardClick(naverIndex) {
    setSelectedNaverIndex(naverIndex);

    setIsNaverModalOpen(true);
  }

  function handleEditClick(naverIndex) {
    history.push({ pathname: "/edit", state: { naver: navers[naverIndex] } });
  }

  function handleRemoveClick(naverIndex) {
    setSelectedNaverIndex(naverIndex);
    setIsConfirmationModalOpen(true);
  }

  async function handleRemoveNaver() {
    // chamda a API para remover o naver (a partir do selectedNaverIndex)
    await api
      .delete(`navers/${navers[selectedNaverIndex].id}`)
      .then()
      .catch((error) => console.log("Handle error:", error.message));

    // remover do array atual
    navers.splice(selectedNaverIndex, 1);
    setSelectedNaverIndex(0);

    setIsConfirmationModalOpen(false);
    if (isNaverModalOpen) {
      setIsNaverModalOpen(false);
    }
    setIsMessageModalOpen(true);

    setTimeout(() => {
      setIsMessageModalOpen(false);
    }, 1500);
  }

  return (
    <div>
      <Header />

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
      <div className="home-container">
        <div className="home-header">
          <h1>Navers</h1>
          <Link to="/create">
            <span>Adicionar Naver</span>
          </Link>
        </div>
        <div className="navers-container">
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
