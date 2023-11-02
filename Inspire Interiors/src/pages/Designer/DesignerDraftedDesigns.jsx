import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sketch from "../../assets/Designer/Sketch.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "../../constants/SessionContext";

function DesignerDraftedDesigns() {
  //get designer id from session
  const session = useSession();
  // console.log("User id is " + session.sessionData.userid);
  const id = session.sessionData.userid.toString();

  const [data, setData] = useState([]);
  const draftUrl =
    "http://localhost:8080/designer/designtool/getdesign/dra/" + id;

  function arrange(arr) {
    let arr1 = arr.sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );

    return arr1;
  }

  useEffect(() => {
    axios.get(draftUrl).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  let arr = arrange(data);
  return (
    <div className="col-lg-12 d-flex lex-wrap  bg-white rounded-3 p-4">
      <div className="d-flex  flex-row flex-lg-row flex-md-row flex-sm-column  flex-wrap gap-3">
        {arr.map((res) => (
          <div class="w-25">
            <Link to={"http://localhost:8000?id=" + res.id}>
              <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                <img
                  className="img-fluid"
                  src={Sketch}
                  class="card-img-top"
                  alt="blacksofa"
                />
                <div class="card-body m-0 p-0 mt-3">
                  <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                    <div className="d-flex flex-column">
                      <p
                        className="card-text m-0 fs-6 fw-semibold Cabin-text"
                        style={{ color: "#969696" }}
                      >
                        Design No {res.id}
                      </p>
                      <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                        Created On: {res.createdOn}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="align-items-center justify-content-center"
                      size="" // Adjust the size as needed
                      style={{
                        color: "white",
                        backgroundColor: "#035C94",
                        padding: "8px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerDraftedDesigns;
