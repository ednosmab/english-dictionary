import './Button.css'
export default function MyButton(props){
    return(
        <button>
            {props.children}
        </button>
    )
}