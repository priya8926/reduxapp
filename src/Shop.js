import React from 'react';
import { useDispatch } from 'react-redux';
import  {bindActionCreators} from 'redux';
import  {actionCreators} from "./state/index";
import { useSelector } from 'react-redux';

const Shop = () => {
    const balance = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h3 className='mt-2'>Deposite/withdraw money</h3>
            <button className='btn btn-primary my-2 mx-2' onClick={() => withdrawMoney(100)}>-</button>
            Update balance :({balance})
            <button className='btn btn-primary  my-2 mx-2' onClick={() => depositMoney(100)}>+</button>
        </div>
    )
}

export default Shop;
