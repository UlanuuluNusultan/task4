import React, { useReducer } from 'react'
import Item from '../components/item/Item'
import data from '../data'
import style from './Home.module.css'
// import styled from 'styled-components'

const Home = () => {
  return (
    <div className={style.container}>
        <h1>All Items</h1>
        <section>
            <div className={style.home}>
                {data.productData?.map((item, index)=>{
                    return(
                        <Item 
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            item={item}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default Home