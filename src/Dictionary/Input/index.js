export default function Input(props){
    
    const toEntered = (event) =>{
        props.toChange(event.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={toEntered} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    );
    
}