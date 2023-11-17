import { useState } from "react"
import axios from "axios"

export default function Search(props){
    const [definitionsValue1, setDefinitions1] = useState('')
    const [definitionsValue2, setDefinitions2] = useState('')
    const [definitionsValue3, setDefinitions3] = useState('')
    const [synonymsValue, setSynonyms] = useState('')

    async function buscarDados(wordToSearch){
      const resultado = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`)
      return resultado.data

    }

    let dados = buscarDados(props.toSearch)
                  .then(res => res.map(res => res.meanings))
                  .then(res2 => res2.map(res3 => res3.map(res4 => res4)))
                       
    let definitions = Promise.resolve(dados.then(res => res[0][0].definitions))
    definitions.then(res => res[0] ? setDefinitions1(res[0].definition) : setDefinitions1(''))
    definitions.then(res => res[1] ? setDefinitions2(res[1].definition) : setDefinitions2(''))
    definitions.then(res => res[2] ? setDefinitions3(res[2].definition) : setDefinitions3(''))
    
    let synonyms = Promise.resolve(dados.then(res => res[0][0].synonyms[0]))
    synonyms.then(res => setSynonyms(res))
    
    console.log(dados.length)

    return (
      <>
          <ul>
              {definitionsValue1 && <li>{definitionsValue1}</li>}
              {definitionsValue2 && <li>{definitionsValue2}</li>}
              {definitionsValue3 && <li>{definitionsValue3}</li>}
              {synonymsValue && <li>{synonymsValue}</li>}
          </ul>
      </>
    );
    
}