/* Card utilizado para mostrar os navers na Home, com botões de remover e editar, e com imagem clicável */
import "./styles.css";

export default function NaverCard({
  naver,
  onClick,
  handleEditClick,
  handleRemoveClick,
}) {
  return (
    <div className="card-container">
      <img src={`${naver.url}`} alt="foto de perfil" onClick={onClick} />
      <span>{naver.name}</span>
      <p>{naver.job_role}</p>
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
  );
}
