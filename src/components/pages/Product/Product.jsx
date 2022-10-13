import  { useEffect, useState } from 'react'
import productResponse from '../../../service/Product-service';
import ProductCard from '../../featurs/ProductCard/ProductCard';
function Product() {
  const [products,setProducts]=useState([]);
console.log(products);
  useEffect(()=>{
    productResponse().then((res)=>setProducts(res))
  })
    return (
    <div>
     {products.map((item, i) => (
                <ProductCard item={item} key={i} />
              ))}
    </div>
  )
}

export default Product
