import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import profile from '../images/profile3.jpg';
import '../styles/ResumeThird.css'
import call from '../images/call.png'
import email from '../images/email.png'
import add from '../images/address.png'
import website from '../images/website.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumePageThird = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screen width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const portfolioDesign = screenWidth <= 1050;
  const dispatch = useDispatch();
  const [pdfName, setPdfName] = useState('download')
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
  

  const handlePdfName = (e) => {
    const value = e.target.value;
    setPdfName(value)
  }

  const { cartitem1, cartitem, cartitem2, cartitem3 } = useSelector((State) => State.add);
  const { namme, emaill, image, number, inkdin, address, github, about_your } = cartitem3;
  const {
    education, collage, startdate, enddate, Branch,
    educationtwo, collagetwo, startdatetwo, enddatetwo,
  } = cartitem1;
  const {
    comname, enddate1, startdate1, title, textbox,
    comname1, enddate2, startdate2, title1, textbox1,
    comname2, enddate3, startdate3, title2, textbox2,
  } = cartitem;
  const { skills, other } = cartitem2;

  return (
    <>
      {/* Resume content */}
      <div className='main_resume_page_div' id="pdf-content" ref={pdfContentRef}>
        <div className='resume_header_div'>
          <div className='left_part_name'>
            <h1 className='left_part_name_heading'>{namme}</h1>
            <p className='left_part_title_heading'>Web developer</p>
          </div>
          <div className='right_part_img'>
            {image ? <div><img src={image} alt="uploadedimage" width="130px" /></div> : <div><img src={profile} alt="SelectImage" /></div>}
          </div>
        </div>
        <div className='inner_part'>
          <div className='inner_left_part'>
            <div className='inner_left_part_cont'>
              <div className='inner_contact'>contact</div>
              {/* Render contact details */}
              {portfolioDesign ? (
                <ul>
                  <li className='detail'><img src={call} width='20px' alt="" /> Number</li>
                  <li className='detail'><img src={email} width='18px' alt="" /> Email</li>
                  <li className='detail'><img src={add} width='18px' alt="" /> Address</li>
                  <li className='detail'><img src={website} width='18px' alt="" /> LinkedIn</li>
                  {github ? <li className='detail'><img src={website} width='18px' alt="" /> Github</li> : ''}
                </ul>
              ) : (
                <ul>
                  <li className='detail'><img src={call} width='20px' alt="" /> {number}</li>
                  <li className='detail'><img src={email} width='18px' alt="" /> {emaill}</li>
                  <li className='detail'><img src={add} width='18px' alt="" /> {address}</li>
                  <li className='detail'><img src={website} width='18px' alt="" /> {inkdin}</li>
                  {github ? <li className='detail'><img src={website} width='18px' alt="" /> {github}</li> : ''}
                </ul>
              )}
            </div>
            <div className='inner_left_part_cont'>
              <div className='inner_skills'>skills</div>
              {/* Render skills */}
              <ul>
                {skills[0].map((item, i) => (
                  <li key={i} className='skills_detail'>{item}</li>
                ))}
                <li className='skills_detail'>{other}</li>
              </ul>
            </div>
            <div className='education_area'>
              <div className='inner_education'>education</div>
              <div className='education_div1'>
                <p className='educatio_line1'>{education}</p>
                <p className='edication_detail1'>{collage}</p>
                <p className='edication_detail1'>{Branch}</p>
                <p className='edication_detail1'>{"(" + startdate + ")"} - {"(" + enddate + ")"}</p>
              </div>
              <div className='education_div1'>
                <p className='educatio_line1'>{educationtwo}</p>
                <p className='edication_detail1'>{collagetwo}</p>
                <p className='edication_detail1'>{"(" + startdatetwo + ")"} - {"(" + enddatetwo + ")"}</p>
              </div>
            </div>
          </div>
          <div className='inner_right_part'>
            <div className='right_profile'>profile</div>
            <div className='inner_right_part_profile'>
              <p className='about_yourself'>{about_your}</p>
            </div>
            <div className='right_work_experince'>work experience</div>
            <div className='work_experience_detail_div'>
              <div className='experience_first'>
                <h2 className='compny_name_line'>{comname}</h2>
                <p className='work_detail_title'>{title}</p>
                <p className='work_detail_date'>{"(" + startdate1 + ")"} - {"(" + enddate1 + ")"}</p>
                <p className='work_detail'>{textbox}</p>
              </div>
              <div className='experience_second'>
                <h2 className='compny_name_line'>{comname1}</h2>
                <p className='work_detail_title'>{title1}</p>
                <p className='work_detail_date'>{"(" + startdate2 + ")"} - {"(" + enddate2 + ")"}</p>
                <p className='work_detail'>{textbox1}</p>
              </div>
              <div className='experience_third'>
                <h2 className='compny_name_line'>{comname2}</h2>
                <p className='work_detail_title'>{title2}</p>
                <p className='work_detail_date'>{"(" + startdate3 + ")"} - {"(" + enddate3 + ")"}</p>
                <p className='work_detail'>{textbox2}</p>
              </div>
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
                <input
                  name="pdfName"
                  onChange={handlePdfName}
                  placeholder='Create File Name'
                  id="pdfName"
                />
              </form>
            </div>
            <div className='col-md-2 download_pdf_div'>
              <button onClick={downloadPDF} className='btn btn-primary'>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePageThird;
