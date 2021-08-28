import { useState } from 'react'
import './Select.css'


export default function Select (props) {

    const { data, handelFilter } = props;
    const [ option, updateOption ] = useState();

    const handleOption = (e) => {
        const currentType = data.find((item) => item.value === e.target.value);
        updateOption(e.target.value);
        handelFilter(currentType);
    };

    return (
        <div>
            <select value={option} onChange={handleOption} className="select">
                {data.map((item) => <option key={item.id}>{item.value} </option>)}
            </select>
        </div>
    )
}