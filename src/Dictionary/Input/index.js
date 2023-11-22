import './Input.css'
export default function Input(props){
    
    const toEntered = (event) =>{
        props.toChange(event.target.value)
    }

    return (
        <>
            <input onChange={toEntered} required={props.mandatory} placeholder={props.placeholder} className='text-field'/>
        </>
    );
    
}