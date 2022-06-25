import React from 'react';
import {useSelector} from "react-redux";

const Order = () => {
    const {orderData} = useSelector(state => state.car)


    return (
        <div>

        </div>
    );
};

export default Order;