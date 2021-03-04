/* Modal utilizado para informar o usuário, apenas mostra uma mensagem
possui um tipo que define qual mensagem mostrar
*/
import "./styles.css";

export default function MessageModal({ setModal, type }) {
  const text =
    type === "remove"
      ? "excluído"
      : type === "create"
      ? "criado"
      : "atualizado";

  return (
    <div className="modal-overlay">
      <div className="message-modal-container">
        <img
          src="/icons/closeIcon.svg"
          alt="Close"
          id="closeButton"
          onClick={() => setModal(false)}
        />
        <h1>Naver {text}</h1>
        <p>Naver {text} com sucesso!</p>
      </div>
    </div>
  );
}
