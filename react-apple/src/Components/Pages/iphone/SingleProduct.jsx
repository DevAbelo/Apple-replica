import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./iphone.css"; 

function SingleProduct() {
  const { id } = useParams();
  const [iphone, setIphone] = useState([]);

  useEffect(() => {
    fetch("/iphones.json") 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const result = data.items;
        const single = result.filter((item) => item.product_url === id);
        setIphone(single);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  if (iphone.length) {
    return (
      <>
        {iphone.map(
          (
            {
              product_url,
              product_img,
              product_name,
              product_brief_description,
              starting_price,
              price_range,
            },
            i
          ) => (
            <div
              key={i}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className="col-sm-12 col-md-6 my-auto order-2">
                <div className="product-title">{product_name}</div>
                <div className="product-brief">{product_brief_description}</div>
                <div className="starting-price">
                  {`Starting at ${starting_price}`}
                </div>
                <div className="monthly-price">{price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={product_url}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 order-1">
                <div className="product-image singleproduct">
                  <img src={product_img} alt={product_name} />
                </div>
              </div>
            </div>
          )
        )}
      </>
    );
  } else {
    return <Error />;
  }
}

export default SingleProduct;
