/* Modal para confirmações, atualmente só confirma remoção de usuário */
import "./styles.css";

export default function ConfirmationModal({ setModal, confirmationFunction }) {
  return (
    <div className="modal-overlay">
      <div className="confirmation-modal-container">
        <h1>Excluir Naver</h1>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <div className="buttons-div">
          <button onClick={() => setModal(false)}>Cancelar</button>
          <button onClick={confirmationFunction}>Excluir</button>
        </div>
      </div>
    </div>
  );
}
