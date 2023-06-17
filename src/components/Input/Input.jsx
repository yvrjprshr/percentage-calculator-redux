import './Input.css';
import { useDispatch, useSelector } from 'react-redux';
import ip1 from '../../actions/ip1';
import ip2 from '../../actions/ip2';
import ans from '../../actions/ans';


const Input = ()=>{
    const {x, y, z} = useSelector((state)=>{
        return state
    })
    const dispatch = useDispatch();
    return (
        <>
            <div className="ip-box">
                <h2>
                    <input type="number" name="" id="" value={x} onChange={(e)=>{dispatch(ip1((e.target.value)))}}/>
                    &nbsp;
                    % 
                    of
                    &nbsp;
                    <input type="number" name="" id="" value={y} onChange={(e)=>{dispatch(ip2((e.target.value)))}}/>
                    &nbsp;
                    = 
                    &nbsp;
                    <span className='res'>{z}</span>
                </h2>
                <button onClick={()=>{dispatch(ans())}}>calculate</button>
            </div>
        </>
    )
}

export default Input;