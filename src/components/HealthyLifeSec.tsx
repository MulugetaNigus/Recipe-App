import React from "react";

const HealthyLifeSec = () => {
  return (
    <>
      <p
        className="text-center fw-bold display-2"
        style={{ marginTop: "120px" }}
      >
        Promote Your{" "}
        <span style={{ color: "rgb(233 ,119 ,48)" }}>Healthy!</span>{" "}
      </p>
      <div
        className="row mb-5"
        style={{
          //   backgroundColor: "rgb(243, 243, 243)",
          padding: "5px",
        }}
      >
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-5499.jpg?t=st=1716217866~exp=1716221466~hmac=affd6dc0ed90f39a102d256c92c1e3909c44c90fe0a6c3ca280cd1b67116cdc7&w=740"
            alt="side_img_with_fun"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-5 mt-2 d-flex align-items-center justify-content-center">
          <p
            className="fw-light display-3"
            style={{
              color: "rgb(233 ,119 ,48)",
            }}
          >
            Your Daily Healthy Recipe Leads To Healthy Life, Don't MissOut !
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default HealthyLifeSec;
