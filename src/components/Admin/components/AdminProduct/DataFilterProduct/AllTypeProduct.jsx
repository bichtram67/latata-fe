import React, { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

// import { useDispatch, useSelector } from "react-redux";
// import { deleteTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";

export default function AllTypeProduct() {
  // const dispatch = useDispatch();
  // const { List } = useSelector((state) => state.allTypeProduct);

  // useEffect(() => {
  //   dispatch(getAllTypeProduct());
  // }, [dispatch]);

  // const handleRemoveItem = async (item) => {
  //   await dispatch(deleteTypeProduct(item))
  //   dispatch(getAllTypeProduct())
  

  const MenuFirmProduct = (firmItem) => (
    <div className="filter-menu-firm-item">
      <img src='https://res.cloudinary.com/dx8xengfd/image/upload/v1666243178/avatars/avatar-gau-cute_1_bkhh1v.jpg'></img>
      <div className="filter-menu-firm-item-delete">
        <span>
          <CloseOutlined></CloseOutlined>
        </span>
      </div>
    </div>
  );


  return (
    <div>
      <div className="filter-menu-firm">
        {/* {List ? List.map((item) => MenuFirmProduct(item)) : ""} */}

        <MenuFirmProduct/>
      </div>
    </div>
  );

}