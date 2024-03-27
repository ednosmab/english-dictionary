import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Input from "../Input";
import MyButton from "../MyButton";
import Search from "../Search";
import "./Form.css";

export default function Form(props) {
    const [search, setSearch] = useState("");
    const [mySearch, setMySearch] = useState("");

    function toSearch(event) {
        event.preventDefault();
        setMySearch(search);
    }

    return (
        <>
            <form onSubmit={toSearch}>
                <div className="form-container">
                    <Input
                        placeholder="Enter the word to be searched"
                        mandatory={true}
                        label="Palavra"
                        myValue={search}
                        toChange={(value) => setSearch(value)}
                    />
                    <MyButton>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="font-awesome"
                        />
                    </MyButton>
                </div>
            </form>
            {mySearch !== "" && <Search toSearch={mySearch} />}
        </>
    );
}
