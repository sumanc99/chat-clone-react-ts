
function Header({text="Suman Chat", style=""}){
    return(
        <p className={`${style}`}>
            {text}
        </p>
    )
}


export default Header