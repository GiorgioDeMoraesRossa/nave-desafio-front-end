import "./styles.css";

export default function NaverCard({
  naver,
  onClick,
  handleEditClick,
  handleRemoveClick,
}) {
  return (
    <div className="card-container">
      <img
        src="https://github.com/GiorgioDeMoraesRossa.png"
        alt={`Foto do Juliano Reis`}
        onClick={onClick}
      />
      <span>{naver.name}</span>
      <p>{naver.job_role}</p>
      <div className="card-icons-div">
        <img src="/icons/deleteIcon.svg" onClick={handleRemoveClick} />
        <img src="/icons/editIcon.svg" onClick={handleEditClick} />
      </div>
    </div>
  );
}
