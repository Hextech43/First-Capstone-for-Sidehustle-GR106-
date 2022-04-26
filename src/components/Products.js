import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit";

function Product() {
  return (
    <div>
      <MDBRow className="mt-5">
        <MDBCol md="4"></MDBCol>

        <MDBCol md="8">
          <MDBRow>
            <MDBCol md="4" className="col-example">
              <MDBCard>
                <MDBCardImage
                  src="./images/menu1.png"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Italian Source Mushroom</MDBCardTitle>
                  <MDBBtn outline color="success">
                    $19.00
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="col-example">
              <MDBCard>
                <MDBCardImage
                  src="./images/menu2.png"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Salted Fried Chicken</MDBCardTitle>
                  <MDBBtn outline color="success">
                    $19.00
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="col-example">
              <MDBCard>
                <MDBCardImage
                  src="./images/menu3.png"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Fried Potato w/Garlic</MDBCardTitle>
                  <MDBBtn outline color="success">
                    $19.00
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="col-example">
              <MDBCard>
                <MDBCardImage
                  src="./images/menu4.png"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Shrimp and Olive</MDBCardTitle>
                  <MDBBtn outline color="success">
                    $19.00
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Product;
