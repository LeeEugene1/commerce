import Button from '@/components/Button'
import { Product } from '@/src/interface'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

const TAKE = 9

export default function Products() {
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(`/api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])
  const getProducts = useCallback(() => {
    const next = skip + TAKE
    fetch(`/api/get-products?skip=${next}&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(products.concat(data.items)))
    setSkip(next)
  }, [skip, products]) //useCallback을 통해 skip, products가 변경될때마다 함수 재생성을 막음
  return (
    <div>
      {products &&
        products.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.name}({item.price}$)
              </p>
              {item.image_url.includes('nyxcosmetics') && (
                <img src={item.image_url} alt="" />
              )}
              {!item.image_url.includes('nyxcosmetics') && (
                <Image
                  priority={true}
                  width={200}
                  height={200}
                  src={
                    item.image_url.includes('purpicks')
                      ? '/next.svg'
                      : item.image_url
                  }
                  alt=""
                />
              )}
            </div>
          )
        })}
      {/* <Button /> */}
      <button onClick={getProducts}>더보기</button>
    </div>
  )
}
