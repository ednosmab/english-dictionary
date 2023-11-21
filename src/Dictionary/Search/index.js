import { useEffect, useState } from "react"
import axios from "axios"

export default function Search(props){
    const [definitionsValue, setDefinitions] = useState([])

    useEffect(() =>{

      async function buscarDados(wordToSearch){
        try {
          const resultado = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`)
          console.log(resultado)
          return resultado.data
          
        } catch (error) {
          return error.response.status
        }
  
      }

      buscarDados(props.toSearch).then(res => setDefinitions(res))

    }, [props.toSearch])

      return (
        <>
          <ul>
            {
              !(definitionsValue === 404) ?
              definitionsValue.map((res, index) => {
                return index === 0 ? <h2>Word: {res.word}</h2> : ""
              }) : "Palavra não encontrada"
            }
            {
              !(definitionsValue === 404) &&
              definitionsValue.map(res => 
                  res.meanings.map((r, index) => {
                    return (
                      <>
                        <li key={index}>
                          {r.partOfSpeech}
                          <ul>
                            <li>{r.definitions.map(d => {
                              return(
                                <li>{d.definition}</li>
                              )
                            })}</li>  
                          </ul>  
                        </li>
                        {console.log(r.synonyms.length)} {r.synonyms.length >= 1 && <h3>Synonimy: {r.synonyms}</h3>}
                      </>
                    )
                  }))
              
            }
          </ul>
        </>
      );
}