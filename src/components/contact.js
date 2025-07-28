import React, { useRef } from "react";

import "./contact.css";

const Contact = (props) => {



  const form = useRef();
  const [loading, setLoading] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current);
    try {
      const response = await fetch("https://formspree.io/f/xovlwlbo", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (response.ok) {
        setShowPopup(true);
        form.current.reset();
      } else {
        setShowPopup(true);
      }
    } catch (err) {
      setShowPopup(true);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container scroller" onClick={props.fn}>
        {loading && (
          <div className="page-loader-overlay">
            <div className="page-loader-spinner"></div>
          </div>
        )}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <span className="popup-message">Message sent! Thank you.</span>
              <button className="popup-close" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
        <div>
          <div className="formdiv">
            <h3 className="contactme">Contact me</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
              <p style={{ width: "40px", height: "8px", backgroundColor: "red", borderRadius: "10px" }}></p>
              <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
            </div>
            <form
              className="row g-3 needs-validation"
              noValidate
              ref={form}
              onSubmit={sendEmail}
              action=""
            >
              <label htmlFor="validationCustom01" className="form-label ">
                <strong style={{ color: "#343a40" }}> Your name </strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="from_name"
                required
                style={{ margin: "0px" }}
              />
              <div className="valid-feedback">Looks good!</div>

              <label htmlFor="validationCustomUsername" className="form-label ">
                <strong style={{ color: "#343a40" }}> Email Address </strong>
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="user_email"
                  required
                  style={{ margin: "0px" }}
                />
                <div className="invalid-feedback light">Please Enter email</div>
              </div>

              <div className="mb-3">
                <label htmlFor="validationTextarea" className="form-label ">
                  <strong style={{ color: "#343a40" }}> Your message</strong>
                </label>
                <textarea
                  className="form-control "
                  id="validationTextarea"
                  placeholder="Write here"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button className="mybtns buttons" type="submit" disabled={loading}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
