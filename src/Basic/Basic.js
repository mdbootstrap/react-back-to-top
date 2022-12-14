import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

function Basic() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <MDBContainer fluid>
      <MDBBtn
        onClick={backToTop}
        id="btn-back-to-top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }}
        className="btn-floating"
        color="danger"
        size="lg"
      >
        <MDBIcon fas icon="arrow-up" />
      </MDBBtn>

      <div className="container mt-4 text-center" style={{ height: "2000px" }}>
        <p>
          Start scrolling the page and a strong
          <strong> "Back to top" button </strong> will appear in the
          <strong> bottom right corner</strong> of the screen.
        </p>

        <p>Click this button and you will be taken to the top of the page.</p>
      </div>

      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
    </MDBContainer>
  );
}

export default Basic;
