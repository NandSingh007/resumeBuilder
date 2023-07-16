import React from 'react';
import { useParams } from 'react-router-dom';

// Importing different resume components
import Resume1 from '../component/Resume1';
import Resume2 from '../component/Resume2';
import Resume3 from '../component/Resume3';
import Resume4 from '../component/Resume4';

const Designe = () => {
  // Accessing the "id" parameter from the URL
  const { id } = useParams();

  // Function to determine the type of resume based on the "id" parameter
  const resumetype = () => {
    switch (id) {
      case "1":
        return <Resume1 />;
      case "2":
        return <Resume2 />;
      case "3":
        return <Resume3 />;
      case "4":
        return <Resume4 />;
      default:
        return null;
    }
  }

  return (
    <>
      <div>
        {resumetype()} {/* Rendering the appropriate resume component based on the "id" */}
      </div>
    </>
  )
}

export default Designe;
