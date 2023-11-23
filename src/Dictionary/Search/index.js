import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
    const [definitionsValue, setDefinitions] = useState([]);

    useEffect(() => {
        async function buscarDados(wordToSearch) {
            try {
                const resultado = await axios.get(
                    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`
                );
                console.log(resultado);
                return resultado.data;
            } catch (error) {
                return error.response.status;
            }
        }

        buscarDados(props.toSearch).then((res) => setDefinitions(res));
    }, [props.toSearch]);

    return (
        <>
            {!(definitionsValue === 404)
                ? definitionsValue.map((res, index) => {
                      return index === 0 ? (
                          <h2 className="search-word"> {res.word}</h2>
                      ) : (
                          ""
                      );
                  })
                : <div className="no-word-found">Palavra não encontrada</div>}
            {!(definitionsValue === 404) &&
                definitionsValue.map((res) =>
                    res.meanings.map((r, index) => {
                        return (
                            <div className="search-container">
                                <div key={index} className="response-container">
                                    <div className="partOfSpeech-container">
                                        <span className="partOfSpeech">
                                            {r.partOfSpeech}
                                        </span>
                                        <hr />
                                    </div>
                                    <ul>
                                        <div className="meanings-container">
                                            <span className="meanings">
                                                Meanings
                                            </span>
                                            <li className="definition">
                                                {r.definitions.map((d) => {
                                                    return (
                                                        <li>{d.definition}</li>
                                                    );
                                                })}
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                {r.synonyms.length >= 1 && (
                                    <div className="synonyms-container">
                                      <span className="synonyms">Synonimy</span> 
                                      <span className="synonyms-content">{r.synonyms}</span> 
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
        </>
    );
}
