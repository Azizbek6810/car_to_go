import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {getCar} from "../redux/car/action";

const Cars = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {carData} = useSelector(state => state.car)


    useEffect(() => {
        dispatch(getCar())
    }, [dispatch])

    console.log(carData, 'carData')

    return (
        <div>
            <h1>Cars here</h1>
            {carData?.map((item, index) => (
                <div key={index} className="card" style={{width: "18rem"}}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Cars;