import "./DarkMode.css";

export default function Darkmode() {
    const setTrilho = () => {
        document.getElementById("trilho").setAttribute("data-trilho", "trilho");
    };
    const removeAttribute = () => {
        document.getElementById("trilho").setAttribute("data-trilho", "");
    };
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    
    const toggleTheme = () => {
        
        const attribute = document.getElementById("trilho").getAttribute("data-trilho")
        
        if (attribute === "") {
            setTrilho()
            setDarkMode();
        } else{
            removeAttribute()
            setLightMode();
        }

    };

    return (
        <div className="dark_mode">
            <div className="trilho" id="trilho" data-trilho="" onClick={toggleTheme}>
                <div className="indicador" id="indicador" ></div>
            </div>
        </div>
    );
}
