import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import r1 from '../images/r1.jpg';
import r2 from '../images/r2.jpg';
import r3 from '../images/resumefour.png';
import r4 from '../images/resumethird.png';

const Home = () => {
  // State variables to manage the different experiences
  const [expFresher, setExpFresher] = useState(false);
  const [expOne, setExpOne] = useState(false);
  const [expTwo, setExpTwo] = useState(false);
  const [expThree, setExpThree] = useState(false);
  const [expAll, setExpAll] = useState(true);

  // Function to handle click on "Fresher" experience
  const handleClickExpFresher = () => {
    setExpFresher(true);
    setExpAll(false);
    setExpOne(false);
    setExpTwo(false);
    setExpThree(false);
  }

  // Function to handle click on "1+ Exp." experience
  const handleClickExpOne = () => {
    setExpOne(true);
    setExpAll(false);
    setExpFresher(false);
    setExpTwo(false);
    setExpThree(false);
  }

  // Function to handle click on "2+ Exp." experience
  const handleClickExpTwo = () => {
    setExpTwo(true);
    setExpAll(false);
    setExpOne(false);
    setExpThree(false);
    setExpFresher(false);
  }

  // Function to handle click on "3+ Exp." experience
  const handleClickExpThree = () => {
    setExpThree(true);
    setExpAll(false);
    setExpOne(false);
    setExpTwo(false);
    setExpFresher(false);
  }

  // Function to handle click on "All" experience
  const handleClickExpAll = () => {
    setExpAll(true);
    setExpOne(false);
    setExpTwo(false);
    setExpThree(false);
    setExpFresher(false);
  }

  return (
    <>
      <div className='container-fluid'>
        <div className="temp_div">
          <h1 className='Template'>Templates</h1>
          <p className='heading_text'>'Select a Template to get Started'</p>
        </div>
        <div className='experience'>
          <ul>
            {/* List items for different experiences */}
            <li className='exp' onClick={() => handleClickExpFresher()}>Fresher</li>
            <li className='exp' onClick={() => handleClickExpOne()}>1+ Exp.</li>
            <li className='exp' onClick={() => handleClickExpTwo()}>2+ Exp.</li>
            <li className='exp' onClick={() => handleClickExpThree()}>3+ Exp.</li>
            <li className='exp' onClick={() => handleClickExpAll()}>All</li>
          </ul>
        </div>
        {
          expAll ? (
            <div className='container'>
              <div className='row'>
                {/* Template 1 */}
                <div className='col-md-3 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/1"}>
                      <img src={r1} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Template 2 */}
                <div className='col-md-3 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/2"}>
                      <img src={r2} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Template 3 */}
                <div className='col-md-3 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/3"}>
                      <img src={r3} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Template 4 */}
                <div className='col-md-3 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/4"}>
                      <img src={r4} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : ''
        }

        {/* Conditional rendering for different experiences */}
        {
          expFresher ? (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/1"}>
                      <img src={r1} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-4'></div>
              </div>
            </div>
          ) : ''
        }

        {
          expOne ? (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/2"}>
                      <img src={r2} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-4'></div>
              </div>
            </div>
          ) : ''
        }

        {
          expTwo ? (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/3"}>
                      <img src={r3} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-4'></div>
              </div>
            </div>
          ) : ''
        }

        {
          expThree ? (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 box2'>
                  <div className='box1'>
                    <Link to={"/desgine/4"}>
                      <img src={r4} width="98%" alt="" />
                      <div className='use_temp'>
                        <div className='btnn'><button className='btn btn-primary'>Use Template</button></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-4'></div>
              </div>
            </div>
          ) : ''
        }
      </div>
    </>
  )
}

export default Home;
