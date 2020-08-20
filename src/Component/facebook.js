import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi'
function FaceBook() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const params = { _page: 1, _limit: 10 };
    productApi.getAll(params).then( (rs) => {
      setProductList(rs.data);
    }).catch(err => {
      console.log('err', err.response.status)
    })
    }, []);

    return (
    <div>{productList}</div>
    )
}

export default FaceBook;
