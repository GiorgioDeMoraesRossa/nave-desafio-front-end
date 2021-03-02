import "./styles.css";

export default function NaverCard({ onClick }) {
  return (
    <div className="card-container">
      <img
        src="https://github.com/GiorgioDeMoraesRossa.png"
        alt={`Foto do Juliano Reis`}
        onClick={onClick}
      />
      <span>Juliano Reis</span>
      <p>Front-end dev</p>
      <div className="card-icons-div">
        <img src="/icons/deleteIcon.svg" />
        <img src="/icons/editIcon.svg" />
      </div>
    </div>
  );
}
