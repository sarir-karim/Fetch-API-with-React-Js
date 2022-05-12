import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";

const UseEffectApi = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    setUser( await response.json())
    // const data = await response.json()
    // console.log(data)
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {user.map((currEle) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={currEle.thumbnailUrl} alt="" />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-2 textLeft">{currEle.title}</h4>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="article">200</span><span className="number1">10</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="follwers">200</span><span className="number1">20</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">200</span><span className="number1">30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
