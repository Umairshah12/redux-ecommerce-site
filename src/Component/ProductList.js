import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShopIcon from "@material-ui/icons/Shop";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { SingleImageClicked } from "../Redux/actions/cartAction";
import { AddToCart } from "../Redux/actions/cartAction";
import currencyFormater from "currency-formatter";
import { useDispatch } from "react-redux";
import FilterItems from "./FilterItems";
// first branch changes

function ProductList() {
  const products = useSelector((state) => state.CartItemReducer.products);
  const filterImages = useSelector(
    (state) => state.CartItemReducer.filteredItem
  );

  const size = useSelector((state) => state.CartItemReducer.size);
  const dispatch = useDispatch();
  return (
    <>
      <Slider />
      <FilterItems products={products} filterImages={filterImages} />

      <div className="cart-img">
        <div className="container">
          <div className="row">
            {size === "" ? (
              <>
                {products &&
                  products.map((item) => {
                    return (
                      <div className="col-3 my-4" key={item.id}>
                        <div className="product">
                          <div className="product-image">
                            <Link to={`/singleitem/${item.id}`}>
                              <img
                                src={item.prodImg}
                                onClick={() =>
                                  dispatch(SingleImageClicked(item.id))
                                }
                                alt="product-image"
                              />
                            </Link>
                          </div>
                          <div className="product-name">{item.prodTitle}</div>
                          <div className="row">
                            <div className="col-12">
                              <div className="product-price">
                                {currencyFormater.format(item.prodPrice, {
                                  code: "USD",
                                })}
                              </div>
                              <div className="product-description">
                                {item.prodDetail}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mt-2">
                              <Link to={`/singleitem/${item.id}`}>
                                <Button
                                  size="small"
                                  disabled={item.inCart ? true : false}
                                  variant="contained"
                                  color="primary"
                                  onClick={() =>
                                    dispatch(SingleImageClicked(item.id))
                                  }
                                >
                                  {item.inCart ? (
                                    <p
                                      className="text-capitalize  mb-0"
                                      disabled
                                    >
                                      inCart
                                    </p>
                                  ) : (
                                    <>
                                      <p>shop</p>
                                      {/* <ShopIcon className="mx-2" /> */}
                                    </>
                                  )}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            ) : (
              <>
                {filterImages &&
                  filterImages.map((item) => {
                    return (
                      <div className="col-3 my-4" key={item.id}>
                        <div className="product">
                          <div className="product-image">
                            <Link to={`/singleitem/${item.id}`}>
                              <img
                                src={item.prodImg}
                                onClick={() =>
                                  dispatch(SingleImageClicked(item.id))
                                }
                                alt="product-image"
                              />
                            </Link>
                          </div>
                          <div className="product-name">{item.prodTitle}</div>
                          <div className="row">
                            <div className="col-12">
                              <div className="product-price">
                                {currencyFormater.format(item.prodPrice, {
                                  code: "USD",
                                })}
                              </div>
                              <div className="product-description">
                                {item.prodDetail}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mt-2">
                              <Link to={`/singleitem/${item.id}`}>
                                <Button
                                  size="small"
                                  disabled={item.inCart ? true : false}
                                  variant="contained"
                                  color="primary"
                                  onClick={() =>
                                    dispatch(SingleImageClicked(item.id))
                                  }
                                >
                                  {item.inCart ? (
                                    <p
                                      className="text-capitalize  mb-0"
                                      disabled
                                    >
                                      inCart
                                    </p>
                                  ) : (
                                    <>
                                      <p>shop</p>
                                      {/* <ShopIcon className="mx-2" /> */}
                                    </>
                                  )}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
