import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi'
function FaceBook() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
    try {
    const params = { _page: 1, _limit: 10 };
    const response = await productApi.getAll(params);
    console.log('Fetch products successfully: ', response);
    setProductList(response.data);
    } catch (error) {
      console.log('error', error.response)
    console.log('Failed to fetch product list: ', error);
    }
    }
    getProductList();
    }, []);
    return (
      <div>dadad</div>
    )
}

export default FaceBook;
