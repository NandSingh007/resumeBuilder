import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import arrow1 from '../images/arrow2.png';
import email from '../images/emmm.png';
import phone from '../images/phone.png';
import git1 from '../images/git3.png';
import web from '../images/web1.png';
import profile from '../images/profile3.jpg';
import linkdin from '../images/link2.png';
import map from '../images/map.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/resume.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumePageOne = () => {
    const dispatch = useDispatch();
    const [pdfName, setPdfName] = useState('download')
    const pdfContentRef = useRef(null);

    // Function to handle the PDF download
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
        setPdfName(value)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const portfolioDesign = screenWidth <= 650;

    const { cartitem1, cartitem, cartitem2, cartitem3 } = useSelector((State) => State.add);
    const { number, emaill, namme, inkdin, image, address, github, name_Title, Portfolio } = cartitem3;
    const { cgpas, collage, education, startdate, enddate, title_education, Branch } = cartitem1;
    const { comname, startdate1, enddate1, title, textbox } = cartitem;
    const { skills, other, skills_title } = cartitem2;

    return (
        <>
            {/* Resume content */}
            <div className='main_box' id="pdf-content" ref={pdfContentRef}>
                <div className='first_div'>
                    <p className='user_name'>{namme}</p>
                    <p className='user'>{title}</p>
                </div>
                <div className='second_div_main'>
                    <div className='second_div'>
                        <div className='mg'>
                            {/* Display user image or default profile image */}
                            {image ? <div><img src={image} alt="uploadedimage" width="130px" /></div> : <div><img src={profile} alt="SelectImage" /></div>}
                        </div>
                        <div className='potfolio'>
                            <ul className='portfolio_list'>
                                <li className='portfolioo'>{name_Title}</li>
                                <li className='port_list1'>{namme}</li>
                                <li className='port_list1'>{title}</li>
                                {Portfolio ? (
                                    <>
                                        {portfolioDesign ? (
                                            <li className='port_list1'>
                                                <a href="_" target='_blank'>
                                                    <img src={web} width="15px" alt="" />
                                                    Portfolio
                                                </a>
                                            </li>
                                        ) : (
                                            <li className='port_list1'>
                                                <a href="_" target='_blank'>
                                                    <img src={web} width="15px" alt="" />
                                                    {Portfolio}
                                                </a>
                                            </li>
                                        )}
                                    </>
                                ) : null}
                            </ul>
                        </div>
                        <div className='contact'>
                            <ul className='portfolio_list'>
                                <li className='portfolioo'>CONTACT</li>
                                <li className='port_list1'>
                                    <a href={`mailto:${emaill}`} rel="noopener noreferrer">
                                        <img src={email} alt="" width='13px' /> Email
                                    </a>
                                </li>
                                <li className='port_list1'> <img src={phone} alt="" width='12px' /> {number}</li>
                                <li className='port_list1'><img src={map} alt="" width='12px' /> {address}</li>
                                <li className='port_list1'><img src={linkdin} alt="" width='18x' /><a href={inkdin} rel="noopener noreferrer" target="_blank">Linkdin</a></li>
                                <li className='port_list1'><img src={git1} alt="" width='19px' /><a href={`https://github.com/${github}`} rel="noopener noreferrer" target="_blank">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container_text'>
                        <div className='Education'>
                            <ul className='portfolio_list1'>
                                <li className='portfolioo1'> <img src={arrow1} width='16px' alt="" /> {title_education}</li>
                                <li className='graduation_name'>{education}</li>
                                <li className='collage_name'>{collage}</li>
                                <li className='port_list2'>CGPA - {cgpas}</li>
                                <li className='port_list2'>Branch - {Branch}</li>
                                <li className='port_list2'> {"( " + startdate + " )"} - {"( " + enddate + " )"}</li>
                            </ul>
                        </div>
                        <div className='Work Experince'>
                            <div className='Skills'>
                                <ul className='portfolio_list1'>
                                    <li className='portfolioo1'> <img src={arrow1} width='16px' alt="" /> {skills_title}</li>
                                    <li className='port_list2'>{skills + ","}</li>
                                    <li className='port_list2'>{other}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Work_Project'>
                            <div className='Skills'>
                                <ul className='portfolio_list1'>
                                    <li className='portfolioo1'> <img src={arrow1} width='16px' alt="" /> Work </li>
                                    <li className='company_name'> {comname} </li>
                                    <li className='port_list2'>{title}</li>
                                    <li className='port_list2'>{textbox}</li>
                                    <li className='port_list2'>{"( " + startdate1 + " )"} - {"( " + enddate1 + " )"}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Key Skils'>
                            <div className='Skills'>
                                {Portfolio ? (
                                    <ul className='portfolio_list1'>
                                        <li className='portfolioo1'> <img src={arrow1} width='16px' alt="" /> Portfolio Link</li>
                                        <li className='port_list2'><a href="_" target='_blank'>{Portfolio}</a></li>
                                    </ul>
                                ) : null}
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

export default ResumePageOne;
