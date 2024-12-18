
const Button = (props) => {
    return (
        <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor : props.label}} onClick={props.onClick}>{props.label}</button>
    )
}
export default Button;