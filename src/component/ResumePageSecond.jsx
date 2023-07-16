import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/resumeTwo.css'
import profile from '../images/profile3.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumePageSecond = () => {
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
    const { namme, emaill, number, inkdin, image, address, about_your } = cartitem3;
    const {
        education, collage, startdate, enddate, Branch,
        educationtwo, collagetwo, startdatetwo, enddatetwo,
    } = cartitem1;
    const {
        comname, Domain, enddate1, startdate1, textbox,
        comnameTwo, DomainTwo, enddate2, startdate2, textboxTwo
    } = cartitem;
    const { skills, other } = cartitem2;

    return (
        <>
            {/* Resume content */}
            <div className='second2resume' id="pdf-content" ref={pdfContentRef}>
                <div className='header_part2'>
                    <div className='img_second_resume'>
                        {image ? <div><img src={image} alt="uploadedimage" /></div> : <div><img src={profile} alt="SelectImage" /></div>}
                    </div>
                    <div className='text_second_resume'>
                        <h2 className='heading_name'>{namme}</h2>
                        <p className='title'>{Domain}</p>
                    </div>
                </div>

                <div className='second_part_resume'>
                    <div className='left_second_resume'>
                        <div className='Profile'>
                            <h3 className='profile_name'>Profile</h3>
                            <p className='about_your'>{about_your}</p>
                        </div>
                        <div className='education'>
                            <h3 className='profile_name'>Education</h3>
                            <div className='education_div'>
                                <p className='educatio_line'>{education}</p>
                                <p className='edication_detail'>{collage}</p>
                                <p className='edication_detail'>{Branch}</p>
                                <p className='edication_detail'>{"(" + startdate + ")"} - {"(" + enddate + ")"}</p>
                            </div>
                            <div className='education_div'>
                                <p className='educatio_line'>{educationtwo}</p>
                                <p className='edication_detail'>{collagetwo}</p>
                                <p className='edication_detail'>{"(" + startdatetwo + ")"} - {"(" + enddatetwo + ")"}</p>
                            </div>
                        </div>
                        <div className='skills'>
                            <h3 className='profile_name'>Skills</h3>
                            <ul>
                                {skills[0].map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                <li>{other}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='right_second_resume'>
                        <div className='second_resume_initial'>
                            <h2 className='exp'>Experience</h2>
                            <div className='work'>
                                <p className='company_name'>{comname}</p>
                                <p className='domain'>{Domain}</p>
                                <p className='domain'>{textbox}</p>
                                <p className='work_period'>{"(" + startdate1 + ")"} - {"(" + enddate1 + ")"}</p>
                            </div>
                            <div className='work'>
                                <p className='company_name'>{comnameTwo}</p>
                                <p className='domain'>{DomainTwo}</p>
                                <p className='domain'>{textboxTwo}</p>
                                <p className='work_period'>{"(" + startdate2 + ")"} - {"(" + enddate2 + ")"}</p>
                            </div>
                        </div>
                        <div className='second_resume_initial_contact'>
                            <h2 className='contact'>Contact</h2>
                            <p className='icon'>
                                <span className='contact_icon'>Email :</span>
                                <a href={`mailto:${emaill}`} rel="noopener noreferrer">{emaill}</a>
                            </p>
                            <p className='icon'>
                                <span className='contact_icon'>Number :</span>{number}
                            </p>
                            <p className='icon'>
                                <span className='contact_icon'>Address :</span>{address}
                            </p>
                            <p className='icon_linkdin'>
                                <span className='contact_icon'>LinkedIn :</span>
                                <a href={inkdin} rel="noopener noreferrer" target="_blank">{inkdin}</a>
                            </p>
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

export default ResumePageSecond;
