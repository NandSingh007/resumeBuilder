import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyResume = () => {
  // Accessing the cartitem5 state from Redux store
  const { cartitem5 } = useSelector((state) => state.add);

  // State variable to store the PDF URL
  const [pdfUrl, setPdfUrl] = useState('');

  // Update the pdfUrl whenever cartitem5 changes
  useEffect(() => {
    setPdfUrl(cartitem5 || '');
  }, [cartitem5]);

  return (
    <div>
      {/* Conditional rendering based on the pdfUrl */}
      {
        pdfUrl ? (
          <div style={{ margin: '100px 0px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={pdfUrl} type="application/pdf" width="600px" alt="Resume PDF" />
            </div>
          </div>
        ) : (
          <div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '65px', marginTop: '260px' }}>No Download PDF available</h1>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '25px', marginTop: '16px' }}>Please Select Template and Download First</h1>
          </div>
        )
      }
    </div>
  );
};

export default MyResume;
