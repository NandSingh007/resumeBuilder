import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/resumeFour.css';
import call from '../images/call.png';
import email from '../images/email.png';
import profile from '../images/profile3.jpg';
import add from '../images/address.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import website from '../images/website.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumePageFourth = () => {
  // State to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screen width on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine if the portfolio design should be used based on the screen width
  const portfolioDesign = screenWidth <= 1050;

  const dispatch = useDispatch();
  const [pdfName, setPdfName] = useState('download');
  const pdfContentRef = useRef(null);

  const downloadPDF = () => {
    setPdfName('');
    const input = document.getElementById('pdf-content');
    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: inputWidth > inputHeight ? 'l' : 'p',
        unit: 'px',
        format: [inputWidth, inputHeight],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, inputWidth, inputHeight);
      pdf.save(pdfName);
      const updatedPdfUrl = imgData;
      dispatch({
        type: 'add_to_cart5',
        payload: updatedPdfUrl,
      });
  
      // If the download is successful
      toast.success('Download Successful!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };
  
  // Function to handle changes in the PDF file name input
  const handlePdfName = (e) => {
    const value = e.target.value;
    setPdfName(value);
  };

  // Extract necessary data from the Redux store using the useSelector hook
  const { cartitem1, cartitem, cartitem2, cartitem3 } = useSelector((State) => State.add);
  const { namme, emaill, image, number, inkdin, address, github } = cartitem3;
  const { education, collage, startdate, enddate, Branch, educationtwo, collagetwo, startdatetwo, enddatetwo } = cartitem1;
  const { comname, enddate1, startdate1, title, textbox, comname1, enddate2, startdate2, title1, textbox1, comname2, enddate3, startdate3, title2, textbox2, comname3, enddate4, startdate4, title3, textbox3 } = cartitem;
  const { skills, other } = cartitem2;

  return (
    <>
      {/* Resume content */}
      <div className='main_resume_page' id="pdf-content" ref={pdfContentRef}>
        <div className='left_part'>
          <div className='user_image'>
            {/* Display user image or default profile image */}
            {image ? <div><img src={image} alt="uploadedimage" /></div> : <div><img src={profile} alt="SelectImage" /></div>}
          </div>
          <div className='left_div_of_contact'>
            <h3 className='cont_heading'>contact</h3>
            {/* Display contact information based on the portfolio design */}
            {portfolioDesign ? (
              <ul>
                <li className='left_detail_div'><img src={call} width='20px' alt="" /> Number</li>
                <li className='left_detail_div'><a href={`mailto:${emaill}`} rel="noopener noreferrer">
                  <img src={email} alt="" width='13px' /> Email
                </a></li>
                <li className='left_detail_div'><img src={add} width='18px' alt="" /> Address</li>
                <li className='left_detail_div'><a href={inkdin} rel="noopener noreferrer" target="_blank"><img src={website} width='18px' alt="" /> Linkdin</a></li>
              </ul>
            ) : (
              <ul>
                <li className='left_detail_div'><img src={call} width='20px' alt="" /> {number}</li>
                <li className='left_detail_div'><a href={`mailto:${emaill}`} rel="noopener noreferrer">
                  <img src={email} alt="" width='13px' /> {emaill}
                </a></li>
                <li className='left_detail_div'><img src={add} width='18px' alt="" /> {address}</li>
                <li className='left_detail_div'><a href={inkdin} rel="noopener noreferrer" target="_blank"><img src={website} width='18px' alt="" /> {inkdin}</a></li>
                <li className='left_detail_div'><a href={`https://github.com/${github}`} rel="noopener noreferrer" target="_blank"><img src={website} width='18px' alt="" />  Github</a></li>
              </ul>
            )}
          </div>
          <div className='left_div_of_education'>
            <h3 className='educ_heading'>Education</h3>
            <div className='education1_div'>
              <p className='education_line'>{education}</p>
              <p className='education_line'>{Branch}</p>
              <p className='education_detail_div'>{collage}</p>
              <p className='education_detail_div'>{"(" + startdate + ")"} - {"(" + enddate + ")"}</p>
            </div>
            <div className='education1_div2'>
              <p className='education_line'>{educationtwo}</p>
              <p className='education_detail_div'>{collagetwo}</p>
              <p className='education_detail_div'>{"(" + startdatetwo + ")"} - {"(" + enddatetwo + ")"}</p>
            </div>
          </div>
          <div className='skills_div'>
            <h3 className='educ_heading'>Skills</h3>
            <ul>
              {/* Display skills and other details */}
              {skills[0].map((item, i) => (
                <li key={i} className='skills_detail_div'>{item}</li>
              ))}
              <li className='skills_detail_div'>{other}</li>
            </ul>
          </div>
        </div>
        <div className='right_part'>
          <div className='heading_part_div'>
            <h2 className='heading_line'>{namme}</h2>
            <p className='title_line_div'>{title3}</p>
          </div>
          <div className='work_detail_div'>
            <h3 className='work_details'>Work Experience</h3>
            <div className='first_work_div'>
              <h2 className='compny_name_line_div'>{comname}</h2>
              <p className='work_detail_title_div'>{title}</p>
              <p className='work_detail_date_div'>{"(" + startdate1 + ")"} - {"(" + enddate1 + ")"}</p>
              <p className='work_detail_div'>{textbox}</p>
            </div>
            <div className='second_work_div'>
              <h2 className='compny_name_line_div'>{comname1}</h2>
              <p className='work_detail_title_div'>{title1}</p>
              <p className='work_detail_date_div'>{"(" + startdate2 + ")"} - {"(" + enddate2 + ")"}</p>
              <p className='work_detail_div'>{textbox1}</p>
            </div>
            <div className='third_work_div'>
              <h2 className='compny_name_line_div'>{comname2}</h2>
              <p className='work_detail_title_div'>{title2}</p>
              <p className='work_detail_date_div'>{"(" + startdate3 + ")"} - {"(" + enddate3 + ")"}</p>
              <p className='work_detail_div'>{textbox2}</p>
            </div>
            <div className='five_work_div'>
              <h2 className='compny_name_line_div'>{comname3}</h2>
              <p className='work_detail_title_div'>{title3}</p>
              <p className='work_detail_date_div'>{"(" + startdate4 + ")"} - {"(" + enddate4 + ")"}</p>
              <p className='work_detail_div'>{textbox3}</p>
            </div>
          </div>
        </div>
      </div>

      {/* PDF download container */}
      <div className='container'>
        <div className='col-md-12 download_divsion'>
          <div className='row'>
            <div className='col-md-10 Input_div'>
              <form action="">
                <p className='para_div'><label htmlFor="">Create File Name</label></p>
                {/* Input field to enter the PDF file name */}
                <input name="pdfName" onChange={handlePdfName} placeholder='Create File Name' id="pdfName" />
              </form>
            </div>
            <div className='col-md-2 download_pdf_div'>
              {/* Button to trigger PDF download */}
              <button onClick={downloadPDF} className='btn btn-primary'>Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePageFourth;
