import './Button.css'

export default function (props){
    return (
        <div>
            <button className="btn">{props.name}</button>
        </div>
    )
}