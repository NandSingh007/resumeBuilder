import React from 'react'
import styless from '../styles/Designer.module.css'
import '../styles/extraRequired.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import InputTeg from './InputTeg'
import TextBox from './TextBox'
import profile from '../images/profile3.jpg';
import { useDispatch, useSelector } from 'react-redux'
const Resume2 = () => {
  const { id } = useParams();
  // default obj 
  const obj = {
    info: "PersonalInfo",
    WorkEx: "WorkExperience",
    edu: "Education",
    KeySkills: "KeySkills"
  }
  //cartitem1, cartitem, cartitem2,
  const { cartitem3 } = useSelector((State) => State.add);
  // const { number, emaill, namme, inkdin, address, github } = cartitem3;
  // console.log(number, emaill, namme, inkdin, address, github);
  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(obj)[0]);
  const [image, setImage] = useState('');
  const [addWork, setAddWork] = useState(false)
  const [addEdu, setAddEdu] = useState(false)

  // state for workinformation which have by default value is null
  const [storage, setStorage] = useState({
    comname: "", Domain: '', enddate1: "", startdate1: "", title: "", id, Title_personal: "Work Information", textbox: '',
    comnameTwo: "", DomainTwo: '', enddate2: "", startdate2: "", titleTwo: "", textboxTwo: ''
  });

  // state for education which have by default value is null
  const [storag2, setstorag2] = useState({
    education: "", collage: "", cgpas: "", startdate: "", enddate: "", id, Branch: "", title_education: "Education",
    educationtwo: "", collagetwo: "", startdatetwo: "", enddatetwo: "", Branchtwo: "",
  });

  // state for skills which have by default value is null
  const [storag3, setstorag3] = useState({
    skills: [], other: "", id, skills_title: "Skills"
  });

  // state for personal information which have by default value is null
  const [storag4, setstorag4] = useState({
    namme: "", emaill: "", number: '', inkdin: "", image: '', address: "", github: "", id, Portfolio: "", name_Title: "Personal Info", about_your: ""
  });


  let name, value;
  const handleImageChange = (e) => {
    name = e.target.name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setstorag4({ ...storag4, [name]: reader.result })
      setImage(reader.result)
      //setImage(reader.result);
      console.log(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };  // onchange function end for profile image

  // HandelInput onchange function
  const HandelInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "about_your") {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 30) {
        alert("About Your Self should not exceed 30 words");
        return;
      }
    }
    setstorag4({ ...storag4, [name]: value })
  }
  // HandelInput1 onchange function
  const HandelInput1 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStorage({ ...storage, [name]: value })
  }
  // HandelInput2 onchange function
  const HandelInput2 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setstorag2({ ...storag2, [name]: value })
  }
  // HandelInput3 onchange function
  const HandelInput3 = (e) => {
    name = e.target.name;
    value = e.target.value.split(",");
    setstorag3({ ...storag3, [name]: [value] })
  }

  // redux toolkit dispacth function
  const dispatch = useDispatch()

  function submit1() {
    if (storage.comname !== '' && storage.Domain !== '' && storage.DomainTwo !== '' && storage.textbox !== '' && storage.comnameTwo !== '' && storage.textboxTwo !== '') {
      dispatch({
        type: "add_to_cart",
        payload: storage
      })
      setActiveSectionKey(Object.keys(obj)[2])
      // setStorage({ comname:"",link:"",location:"",enddate1:"",startdate:"",title:""})
    } else {
      // Display an error message
      alert("please fill the form")
    }
  }


  function submit2() {
    if (storag2.education !== '' && storag2.educationtwo !== '' && storag2.collagetwo !== '' && storag2.collage !== '' && storag2.cgpas !== '' && storag2.Branch !== '') {
      dispatch({
        type: "add_to_cart1",
        payload: storag2
      })
      setActiveSectionKey(Object.keys(obj)[3])
      // setstorag2({ education:"",collage:"",cgpas:null,startdate:"",enddate:""})
    } else {
      // Display an error message
      alert("please fill the form")
    }
  }


  function submit3() {
    if (storag3.other !== '') {
      // Submit the form
      dispatch({
        type: "add_to_cart2",
        payload: storag3
      })
      // setActiveSectionKey(Object.keys(obj)[0])
      // setstorag3({ skills: [], other: "" })
    } else {
      // Display an error message
      alert("please fill the form")
    }
  }


  function submit4() {
    if (storag4.namme !== '' && storag4.emaill !== '' && storag4.number !== null) {
      // Submit the form
      dispatch({
        type: "add_to_cart3",
        payload: storag4
      })
      setActiveSectionKey(Object.keys(obj)[1])
    } else {
      // Display an error message
      alert("please fill the form")
    }
  }


  const add_more = () => {
    setAddWork(true)
  }

  const reomve = () => {
    setAddWork(false)
  }

  const add_more_edu = () => {
    setAddEdu(true)
  }

  const remove_edu = () => {
    setAddEdu(false)
  }


  // personal information part start
  const personInfo = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>{storag4.name_Title}</h2>
      <div className='col-md-12'>
        {image ? <div className={styless.mg}><img src={image} alt="uploadedimage" width="130px" /></div> : <div className={styless.mg}><img src={profile} alt="SelectImage" /></div>}
        <InputTeg
          type='file'
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <div className='col-md-12'>
        {/* namme input */}
        <label className={styless.lb}>full name</label>
        <InputTeg
          placeholder="Enter Your Name"
          name="namme"
          value={storag4.namme}     // defult namme
          onChange={HandelInput}       //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            {/* email input */}
            <label className={styless.lb}>Email</label>
            <InputTeg
           
              name="emaill"
              placeholder="Enter Your Email"
              value={storag4.emaill}        // defult emaill
              onChange={HandelInput}        //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* number input */}
            <label className={styless.lb}>Number</label>
            <InputTeg
            name='number'
              placeholder="Enter Your number"
              value={storag4.number}        // defult number
              onChange={HandelInput}           //  onchange predefined function "HandelIput"
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
          value={storag4.address}          // defult address
          onChange={HandelInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='col-md-12'>
        {/* inkdin input */}
        <label className={styless.lb}>Linkdin</label>
        <InputTeg
          type="link"
          placeholder="Enter Your Linkdin url"
          name="inkdin"
          value={storag4.inkdin}       // defult inkdin
          onChange={HandelInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='col-md-12'>
        {/* about input */}
        <label className={styless.lb}>About YourSelf</label>
        <TextBox
          label="About Your Self"
          name="about_your"
          placeholder="Breif Information About Your Self"
          value={storag4.about_your}     // defult about_your
          onChange={HandelInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button>
          <button onClick={submit4} className={styless.btn1} >next</button>
        </div>
      </div>
    </div>
  )
  //personal information part end

  //workinformation part start
  const workinfo = (
    <>
      <div className='row'>
        <h2 className={styless.profile_title_heading}>{storage.Title_personal}</h2>
        <div className='col-md-12'>
          {/* company name input  */}
          <label className={styless.lb}>Organization Name</label>
          <InputTeg
            name="comname"
            value={storage.comname}      // defult comname
            onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
            placeholder="Enter Company Name eg. amazon" />
        </div>
        <div className='col-md-12'>
        <label className={styless.lb}>Domain</label>
          <InputTeg
            name="Domain"
            value={storage.Domain}      // defult comname
            onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
            placeholder="Enter Your Domain Name eg. Software Developer" />
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              {/* startdate1 input */}
              <label className={styless.lb}>StartDate</label>
              <InputTeg
                type="date"
                name="startdate1"
                value={storage.startdate1}    // defult startdate1
                onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                placeholder="Enter start date of work" />
            </div>
            <div className='col-md-6'>
              {/* enddate1 input */}
              <label className={styless.lb}>EndDate</label>
              <InputTeg
                name="enddate1"
                type="date"
                value={storage.enddate1}     // defult enddate1
                onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                placeholder="Enter end date of work" />
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          {/* textbox input */}
          <label className={styless.lb}>Your Role</label>
          <InputTeg placeholder="Your Role"
            name="textbox"
            type="text"
            value={storage.textbox}           // defult textbox
            onChange={HandelInput1}           //  onchange predefined function "HandelIput1"
          />
        </div>
        {
          addWork ? <div className='row'>
            <div className='col-md-10'></div>
            <div className='col-md-2' onClick={reomve}><button className={styless.btn} >Remove</button></div>
          </div> : <div className='row btn_group'>
            <div className='col-md-5 btn_group_main_new'>
              <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button>
              <button onClick={submit1} className={styless.btn1} >next</button>
            </div>
            <div className='col-md-7 add_more_btnn'>
              <button onClick={add_more} className={styless.add_more_btn} >Add More</button>
            </div>
          </div>
        }
      </div>
      <div>
        {
          addWork ?

            <div className='row'>
              <div className='col-md-12'>
                {/* company name input  */}
                <label className={styless.lb}>Organization Name</label>
                <InputTeg
                  name="comnameTwo"
                  value={storage.comnameTwo}      // defult comname
                  onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                  placeholder="Enter Company Name eg. amazon" />
              </div>
              <div className='col-md-12'>
              <label className={styless.lb}>Domain</label>
                <InputTeg
                  name="DomainTwo"
                  value={storage.DomainTwo}      // defult comname
                  onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                  placeholder="Enter Your Domain Name eg. Software Developer" />
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    {/* startdate1 input */}
                    <label className={styless.lb}>StartDate</label>
                    <InputTeg
                      type="date"
                      name="startdate2"
                      value={storage.startdate2}    // defult startdate1
                      onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                      placeholder="Enter start date of work" />
                  </div>
                  <div className='col-md-6'>
                    {/* enddate1 input */}
                    <label className={styless.lb}>EndDate</label>
                    <InputTeg
                    name='enddate2'
                      type="date"
                      value={storage.enddate2}     // defult enddate1
                      onChange={HandelInput1}      //  onchange predefined function "HandelIput1"
                      placeholder="Enter end date of work" />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                {/* textbox input */}
                <label className={styless.lb}>Your Role</label>
                <InputTeg placeholder="Your Role"
                  type="text"
                  name='textboxTwo'
                  value={storage.textboxTwo}           // defult textbox
                  onChange={HandelInput1}           //  onchange predefined function "HandelIput1"
                />
              </div>
              <div className='row btn_group'>
                <div className='col-md-7'>
                </div>
                <div className='col-md-5 btn_group_main'>
                  <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button>
                  <button onClick={submit1} className={styless.btn1} >next</button>
                </div>
              </div>
            </div>
            : ''
        }
      </div>
    </>
  )
  //workinformation part end

  //education part start

  const education = (
    <>
      <div className='row'>
        <h2 className={styless.profile_title_heading}>{storag2.title_education}</h2>
        <div className='col-md-12'>
          {/* education input */}
          <label className={styless.lb}>Education</label>
          <InputTeg
            name="education"
            value={storag2.education}       // defult education
            onChange={HandelInput2}          //  onchange predefined function "HandelIput2"
            placeholder="Enter Qualification"
          />
        </div>
        <div className='col-md-12'>
          {/* collage input */}
          <label className={styless.lb}>Collage</label>
          <InputTeg
            name="collage"
            value={storag2.collage}        // defult collage
            onChange={HandelInput2}         //  onchange predefined function "HandelIput2"
            placeholder="Enter Name"
          />
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              {/* cgpa input */}
              <label className={styless.lb}>CGPAS</label>
              <InputTeg
                type="text"
                name="cgpas"
                value={storag2.cgpas}        // defult cgpas
                onChange={HandelInput2}       //  onchange predefined function "HandelIput2"
                placeholder="Enter CGPA"
              />
            </div>
            <div className='col-md-6'>
              {/* Branch input */}
              <label className={styless.lb}>Branch</label>
              <InputTeg
                type="text"
                name="Branch"
                value={storag2.Branch}       // defult Branch
                onChange={HandelInput2}       //  onchange predefined function "HandelIput2"
                placeholder="Enter Branch"
              />
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              {/* startdate input */}
              <label className={styless.lb}>StatDate</label>
              <InputTeg
                type="date"
                name="startdate"
                value={storag2.startdate}      //defult startdate
                placeholder="Enter Starting date"
                onChange={HandelInput2}         // onchange predefined function "HandelIput2"
              />
            </div>
            <div className='col-md-6'>
              {/* enddate input */}
              <label className={styless.lb}>EndDate</label>
              <InputTeg
                name="enddate"
                type="date"
                value={storag2.enddate}      // defult enddate
                onChange={HandelInput2}       //  onchange predefined function "HandelIput2"
                placeholder="Enter End date"
              />
            </div>
          </div>
        </div>
        {
          addEdu ? <div className='row'>
            <div className='col-md-10'></div>
            <div className='col-md-2' onClick={remove_edu}><button className={styless.btn} >Remove</button></div>
          </div> : <div className='row btn_group'>
            <div className='col-md-5 btn_group_main_new'>
              <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[1])}>previus</button>
              <button onClick={submit2} className={styless.btn1} >next</button>
            </div>
            <div className='col-md-7 add_more_btnn'>
              <button onClick={add_more_edu} className={styless.add_more_btn} >Add More</button>
            </div>
          </div>
        }
      </div>

      {
        addEdu ?
          <div className='row'>
            <div className='col-md-12'>
              {/* education input */}
              <label className={styless.lb}>Education</label>
              <InputTeg
                name="educationtwo"
                value={storag2.educationtwo}       // defult education
                onChange={HandelInput2}          //  onchange predefined function "HandelIput2"
                placeholder="Enter Qualification"
              />
            </div>
            <div className='col-md-12'>
              {/* collage input */}
              <label className={styless.lb}>Institute</label>
              <InputTeg
                name="collagetwo"
                value={storag2.collagetwo}        // defult collage
                onChange={HandelInput2}         //  onchange predefined function "HandelIput2"
                placeholder="Enter Name"
              />
            </div>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-6'>
                  {/* startdate input */}
                  <label className={styless.lb}>StartDate</label>
                  <InputTeg
                    type="date"
                    name="startdatetwo"
                    value={storag2.startdatetwo}      //defult startdate
                    placeholder="Enter Starting date"
                    onChange={HandelInput2}         // onchange predefined function "HandelIput2"
                  />
                </div>
                <div className='col-md-6'>
                  {/* enddate input */}
                  <label className={styless.lb}>EndDate</label>
                  <InputTeg
                    name="enddatetwo"
                    type="date"
                    value={storag2.enddatetwo}      // defult enddate
                    onChange={HandelInput2}       //  onchange predefined function "HandelIput2"
                    placeholder="Enter End date"
                  />
                </div>
              </div>
            </div>
            {
              <div className='row btn_group'>
                <div className='col-md-7'>
                </div>
                <div className='col-md-5 btn_group_main'>
                  <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[1])}>previus</button>
                  <button onClick={submit2} className={styless.btn1} >next</button>
                </div>
              </div>
            }
          </div>
          : ''
      }
    </>
  )
  //education part end

  //keyskills part start
  const keyskills = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>{storag3.skills_title}</h2>

      <div className='col-md-12'>
        {/* skills input */}
        <label className={styless.lb}>Skills</label>
        <InputTeg
          name="skills"
          value={storag3.skills}  // defualt skills
          onChange={HandelInput3}   // onchange predefined function "HandelInput3"
          placeholder="Enter skills"
        />
      </div>
      <div className='col-md-12'>
        {/* other skills input */}
        <label className={styless.lb}>Other</label>
        <InputTeg
          name="other"
          value={storag3.other}   // defualt other skills
          onChange={HandelInput3}   // onchange predefined function "HandelInput3"
          placeholder="Enter Other Details"
        />
      </div>
      <div className='row btn_group'>
        <div className='col-md-7'></div>
        <div className='col-md-5 btn_group_main'>
          <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[2])}>previus</button>
          <button onClick={submit3} className={styless.btn1} ><Link className={styless.link} to={`/resumesecond/${cartitem3}`}>Final</Link></button>
        </div>
      </div>

    </div>
  )
  //keyskills part end


  const genratebody1 = () => {
    switch (obj[activeSectionKey]) {
      case obj.info: return personInfo;  // if key is "info" then return "personInfo object"
      case obj.WorkEx: return workinfo;  // if key is "WorkEx" then return "personInfo object"
      case obj.edu: return education;    // if key is "edu" then return "personInfo object"
      case obj.KeySkills: return keyskills;  // if key is "KeySkills" then return "personInfo object"
      default: return null;
    }
  }


  return (
    <>
      {/* html part start */}

      <div className='container-fluid'>   {/* container are divided into two parts  */}
        <div className='row'>
          <div className={styless.detail_page}>
            <div className='col-md-3 col-sm-12'>  {/* first is keyword in list */}
              <div className={styless.left_page}>
                <ul>
                  {
                    Object.keys(obj)?.map((item) => (
                      <li
                        className={`${styless.section} ${activeSectionKey === item ? styless.activee : ""}`}
                        key={item}
                      // onClick={() => setActiveSectionKey(item)}
                      >
                        {obj[item]}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='col-md-9 col-sm-12'>   {/* second is input feild for resume  */}
              <div className={styless.right_page}>
                {genratebody1()}   {/* genratebody1 function  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume2;