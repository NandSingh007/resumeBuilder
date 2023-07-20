import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { setRef } from '@mui/material';
import profile from '../images/profile3.jpg';
import InputTeg from './InputTeg';
import styless from '../styles/Designer.module.css';
import '../styles/extraRequired.css';

const Resume1 = () => {
  const { id } = useParams();
  const obj = {
    info: "Personal Detail",
    workEx: "Work Experience",
    edu: "Education",
    keySkills: "Key Skills"
  };

  const { cartitem3 } = useSelector((state) => state.add);
  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(obj)[0]);
  const [mge, setMge] = useState('');

  const [storage, setStorage] = useState({
    comname: "",
    enddate1: "",
    textbox: "",
    startdate1: "",
    title: "",
    id,
    title_personal: "WORK EXPERIENCE"
  });

  const [storag2, setstorag2] = useState({
    education: "",
    collage: "",
    cgpas: "",
    startdate: "",
    enddate: "",
    id,
    Branch: "",
    title_education: "EDUCATION"
  });

  const [storag3, setstorag3] = useState({
    skills: "",
    other: "",
    id,
    skills_title: "SKILLS"
  });

  const [storag4, setstorag4] = useState({
    namme: "",
    emaill: "",
    number: '',
    inkdin: "",
    image: '',
    address: "",
    github: "",
    id,
    portfolio: "",
    name_title: "PROFILE",
    mge: ""
  });

  const handleImageChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setstorag4({ ...storag4, [name]: reader.result });
      setMge(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstorag4({ ...storag4, [name]: value });
  };
  const handleInput1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStorage({ ...storage, [name]: value });
  };

  const handleInput2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstorag2({ ...storag2, [name]: value });
  };

  const handleInput3 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstorag3({ ...storag3, [name]: value });
  };

  const dispatch = useDispatch();

  function submit1() {
    if (storage.comname !== '' && storage.title !== '' && storage.textbox !== '') {
      dispatch({
        type: "add_to_cart",
        payload: storage
      });
      setActiveSectionKey(Object.keys(obj)[2]);
    } else {
      alert("please fill the form");
    }
  }

  function submit2() {
    if (storag2.education !== '' && storag2.collage !== '' && storag2.cgpas !== '' && storag2.Branch !== '') {
      dispatch({
        type: "add_to_cart1",
        payload: storag2
      });
      setActiveSectionKey(Object.keys(obj)[3]);
    } else {
      alert("please fill the form");
    }
  }

  function submit3() {
    if (storag3.other !== '') {
      dispatch({
        type: "add_to_cart2",
        payload: storag3
      });
    } else {
      alert("please fill the form");
    }
  }

  function submit4() {
    if (storag4.namme !== '' && storag4.emaill !== '' && storag4.number !== null) {
      dispatch({
        type: "add_to_cart3",
        payload: storag4
      });
      setActiveSectionKey(Object.keys(obj)[1]);
    } else {
      alert("please fill the form");
    }
  }


  const personInfo = (
    <div className="row">
    <h2 className={styless.profile_title_heading}>{storag4.title_personal}</h2>
      <div className='col-md-12'>
        {mge ? <div className={styless.mg}><img src={mge} alt="uploadedimage" width="130px" /></div> : <div className={styless.mg}><img src={profile} alt="SelectImage" /></div>}
        <InputTeg
          type='file'
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <div className='col-md-12'>
        {/* name input */}
        <label className={styless.lb}>full name</label>
        <InputTeg
          placeholder="Enter Your Name"
          name="namme"
          value={storag4.namme}         // defult namme
          onChange={handleInput}        //  onchange predefined function "HandelIput"
        />
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className='col-md-6'>
            {/* email input */}
            <label className={styless.lb}>Email</label>
            <InputTeg
              name="emaill"
              placeholder="Enter Your Email"
              value={storag4.emaill}          // defult emaill
              onChange={handleInput}          //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* number input */}
            <label className={styless.lb}>number</label>
            <InputTeg
              placeholder="Enter Your number"
              name="number"
              value={storag4.number}           // defult number
              onChange={handleInput}           //  onchange predefined function "HandelIput"
            />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        {/* address input */}
        <label className={styless.lb}>Address</label>
        <InputTeg
          placeholder="Enter Your Address"
          name="address"
          value={storag4.address}           // defult address
          onChange={handleInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Linkdin</label>
            {/* linkdin input */}
            <InputTeg
              type="link"
              placeholder="Enter Your Linkdin url"
              name="inkdin"
              value={storag4.inkdin}          // defult inkdin
              onChange={handleInput}           //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* github input */}
            <label className={styless.lb}>Github</label>
            <InputTeg
              type="link"
              name="github"
              value={storag4.github}
              onChange={handleInput}
              placeholder="Enter Your GitHub URL"
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        {/* portfolio input */}
        <label className={styless.lb}>Portfolio Link</label>
        <InputTeg
          type="link"
          placeholder="Enter Your Portfolio url / if you have"
          name="Portfolio"
          value={storag4.Portfolio}        // defult portfolio
          onChange={handleInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          {/* <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button> */}
          <button onClick={submit4} className={styless.btn1} >next</button>
        </div>
      </div>
    </div>
  )
  // personal information end
  // workinformation part start

  const workinfo = (
    <div className="row">
      <h2 className={styless.profile_title_heading}>Work / Internship</h2>
      <div className="col-md-12">
        {/* title input */}
        <label className={styless.lb}>Job Title</label>
        <InputTeg
          name="title"
          value={storage.title}        // defult title
          onChange={handleInput1}      //  onchange predefined function "HandelIput1"
          placeholder="Enter Tilte eg. Frontend Developer" />
      </div>
      <div className='col-md-12'>
        {/* company name input */}
        <label className={styless.lb}>Organization Name</label>
        <InputTeg
          name="comname"
          value={storage.comname}          // defult comname
          onChange={handleInput1}        //  onchange predefined function "HandelIput1"
          placeholder="Enter Company Name eg. amazon" />
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Start Date</label>
            {/* startdate1 input */}
            <InputTeg
              type="date"
              name="startdate1"
              value={storage.startdate1}      // defult startdate1
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter start date of work" />
          </div>
          <div className='col-md-6'>
            {/* title_personal input */}
            <label className={styless.lb}>End date</label>
            <InputTeg
              name="enddate1"
              type="date"
              value={storage.enddate1}         // defult enddate1
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter end date of work" />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <label className={styless.lb}>Your Role</label>
        {/* textbox input */}
        <InputTeg placeholder="Small Descrimination About Your Role / Optional"
          name="textbox"
          type="text"
          value={storage.textbox}          // defult textbox
          onChange={handleInput1}           //  onchange predefined function "HandelIput1"
        />
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>Previus</button>
          <button onClick={submit1} className={styless.btn1} >next</button>
        </div>
      </div>
    </div>
  )
  // workinformation part end

  // education part start
  const education = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>{storag2.title_education}</h2>
      <div className='col-md-12'>
        {/* education input */}
        <label className={styless.lb}>Education</label>
        <InputTeg
          name="education"
          value={storag2.education}        // defult education
          onChange={handleInput2}          //  onchange predefined function "HandelIput2"
          placeholder="Enter Qualification"
        />
      </div>
      <div className='col-md-12'>
        {/* collage input */}
        <label className={styless.lb}>Collage Name</label>
        <InputTeg
          name="collage"
          value={storag2.collage}      // defult collage
          onChange={handleInput2}      //  onchange predefined function "HandelIput2"
          placeholder="Enter University Name"
        />
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>CGPA</label>
            {/* cgpa input */}
            <InputTeg
              type="text"
              name="cgpas"
              value={storag2.cgpas}       // defult cgpas
              onChange={handleInput2}     //  onchange predefined function "HandelIput2"
              placeholder="Enter CGPA"
            />
          </div>
          <div className='col-md-6'>
            <label className={styless.lb}>Branch</label>
            {/* branch input */}
            <InputTeg
              type="text"
              name="Branch"
              value={storag2.Branch}      // defult Branch
              onChange={handleInput2}     //  onchange predefined function "HandelIput2"
              placeholder="Enter Branch"
            />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Starting Year</label>
            {/* startdate input */}
            <InputTeg
              type="date"
              name="startdate"
              placeholder="Enter Starting date"
              value={storag2.startdate}     // defult startdate
              onChange={handleInput2}       //  onchange predefined function "HandelIput2"
            />
          </div>
          <div className='col-md-6'>
            <label className={styless.lb}>Ending Year</label>
            {/* enddate input */}
            <InputTeg
              name="enddate"
              type="date"
              value={storag2.enddate}       // defult enddate
              onChange={handleInput2}       //  onchange predefined function "HandelIput2"
              placeholder="Enter End date"
            />
          </div>
        </div>
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[1])}>Previus</button>
          <button className={styless.btn1} onClick={submit2} >Next</button>
        </div>
      </div>
    </div>
  )
  // education part end
  //keyskills part start
  const keyskills = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>{storag3.skills_title}</h2>
      <div className='col-md-12'>
        {/* skills input */}
        <label className={styless.lb}>Key_Skills</label>
        <InputTeg
          name="skills"
          value={storag3.skills}  // defualt skills
          onChange={handleInput3}   // onchange predefined function "handleInput3"
          placeholder="Enter skills"
        />
      </div>
      <div className='col-md-12'>
        {/* other skills input */}
        <label className={styless.lb}>Other</label>
        <InputTeg
          name="other"
          value={storag3.other}   // defualt other skills
          onChange={handleInput3}   // onchange predefined function "handleInput3"
          placeholder="Enter Other Details"
        />
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[2])}>Previus</button>
          <button onClick={submit3} className={styless.btn1} > <Link className={styless.link} to={`/resumefirst/${cartitem3}`}>Final</Link></button>
        </div>
      </div>
    </div>
  )
  //keyskills part end
  const generateBody = () => {
    switch (obj[activeSectionKey]) {
      case obj.info: return personInfo;
      case obj.workEx: return workinfo;
      case obj.edu: return education;
      case obj.keySkills: return keyskills;
      default: return null;
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className={styless.detail_page}>
            <div className='col-md-3 col-sm-12'>
              <div className={styless.left_page}>
                <ul>
                  {Object.keys(obj)?.map((item) => (
                    <li
                      className={`${styless.section} ${activeSectionKey === item ? styless.activee : ""}`}
                      key={item}
                    // onClick={() => setActiveSectionKey(item)}
                    >
                      {obj[item]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-md-9 col-sm-12'>
              <div className={styless.right_page}>
                {generateBody()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume1;