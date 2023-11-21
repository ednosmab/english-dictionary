import { useState } from "react";
import Input from "../Input";
import MyButton from "../MyButton";
import Search from "../Search";

export default function Form(props){

    const [search, setSearch] = useState('')
    const [mySearch, setMySearch] = useState('')

    function toSearch(event){
        event.preventDefault()
        setMySearch(search)
    }
    
    return (
        <>
            <form onSubmit={toSearch}>
                <Input 
                    placeholder="Digite aqui a sua pesquisa" 
                    mandatory={true} 
                    label="Palavra"
                    myValue={search}
                    toChange={value => setSearch(value)}
                    />
                <MyButton>
                    Pesquisar
                </MyButton>
            </form>
            {mySearch !== '' && <Search toSearch={mySearch}/>}
        </>
    )
}
