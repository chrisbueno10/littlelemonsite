export default function Header(){
    return(
        <header>
            <Link to ="/home">
                <img
                src={require("../logo.png")}
                alt="logo"
                className="logo-image"/>
            </Link>
        </header>
    );
}