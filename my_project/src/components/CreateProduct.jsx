import React, { useState } from "react";

const CreateProduct = () => {
  const [payload, setPayload] = useState([]);
  const [pName, setPName] = useState("");
  const [pDiscri, setPDiscri] = useState("");
  const [pQuantity, setQuantity] = useState();
  const [pPrice, setPPrice] = useState("");

  const [products, setProducts] = useState([]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("pName", pName);
    console.log("pDiscri", pDiscri);
    console.log("pQuantity", pQuantity);
    console.log("pPrice", pPrice);
    setPayload([
      ...payload,
      { pName: pName, pDiscri: pDiscri, pQuantity: pQuantity, pPrice: pPrice },
    ]);
    console.log(payload);
    setProducts(payload);
    console.log("products", products);
  };

  return (
    <>
      <div className="container w-50 ">
        {/* <form> */}
        <div className="form-group">
          <label for="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            onChange={(e) => setPName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="productDiscription"> Discription</label>
          <input
            type="text"
            className="form-control"
            id="productDiscription"
            onChange={(e) => setPDiscri(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="productQuntity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="productQuntity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="productPrice">Price</label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            onChange={(e) => setPPrice(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmitForm(e);
          }}
        >
          Add Product
        </button>
        {/* </form> */}
      </div>
      <hr></hr>
      <div className="container-fluid">
      <div className="row">
        {products.length > 0 ? (
          <>
            <h1>Products List</h1>
            {products.map((prod) => (
              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{prod.pName}</h5>
                    <p class="card-text">
                      {prod.pDiscri}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Show More Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h2>No Products</h2>
        )}
      </div>
      </div>
    </>
  );
};

export default CreateProduct