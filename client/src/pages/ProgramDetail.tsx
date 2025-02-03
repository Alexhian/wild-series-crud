import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgramsDeleteForm from "../components/ProgramDeleteForm";

type Programs = {
  id: number;
  title: string;
};

function ProgramsDetails() {
  const { id } = useParams();
  const [programs, setPrograms] = useState(null as null | Programs);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Programs) => {
        setPrograms(data);
      });
  }, [id]);

  return (
    programs && (
      <>
        <h1>{programs.title}</h1>
        <Link to={`/programs/${programs.id}/edit`}>Modifier</Link>
        <ProgramsDeleteForm id={programs.id}>Supprimer</ProgramsDeleteForm>
      </>
    )
  );
}

export default ProgramsDetails;
