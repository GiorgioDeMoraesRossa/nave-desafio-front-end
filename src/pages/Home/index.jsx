/* */
import { useState } from "react";
import Header from "../../components/Header";
import NaverCard from "../../components/NaverCard";
import NaverModal from "../../components/NaverModal";
import "./styles.css";

const navers = [
  {
    id: "3b6be004-2afe-4522-b718-d1b1e472731a",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "95383132-0c14-4a10-ae47-89bd6506eb4a",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "02a7fb92-c3c9-46c4-84c1-43bece923459",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "ebe9383e-2388-44e3-90f6-c408184ffd63",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "c1d18928-9c6e-4716-b5f7-461235ae61c7",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "7280e08e-2bda-4f4f-a025-094b9ee11433",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "4279937d-e15e-4b2f-a17d-38daec748847",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "7be705da-bfe1-4428-af8e-c3c6bc2efd3e",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "4716b604-9133-4ad0-816c-997da3ec986a",
    name: "Christian Tavares",
    admission_date: "2018-08-19T00:00:00.000Z",
    job_role: "Desenvolvedor",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "Project Backend Test",
    birthdate: "1992-04-12T00:00:00.000Z",
    url: "test-path/image-test.png",
  },
  {
    id: "325c6a8a-17ea-454a-9d17-c776a6fcdc81",
    name: "Vitor Adriano",
    admission_date: "2000-01-01T00:00:00.000Z",
    job_role: "Desenvolvedor Fullstack",
    user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
    project: "@ovitoradriano",
    birthdate: "1995-12-21T00:00:00.000Z",
    url:
      "https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/e35/135206100_778847962720212_2130325948316377660_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=sGohm2EeWeUAX-3pgWC&tp=1&oh=ea6e77389bc5d6b52a4aec36aec4f53c&oe=604B6FF6",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNaverIndex, setSelectedNaverIndex] = useState(0);

  function handleCardClick(naverIndex) {
    setSelectedNaverIndex(naverIndex);
    console.log(selectedNaverIndex);
    console.log(navers[selectedNaverIndex]);

    setIsModalOpen(true);
  }

  return (
    <div>
      <Header />
      {isModalOpen && (
        <NaverModal
          setModal={setIsModalOpen}
          naver={navers[selectedNaverIndex]}
        />
      )}
      <div className="home-container">
        <div className="home-header">
          <h1>Navers</h1>
          <button>Adicionar Naver</button>
        </div>
        <div className="navers-container">
          {navers.map((naver, index) => (
            <NaverCard key={naver.id} onClick={() => handleCardClick(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}
