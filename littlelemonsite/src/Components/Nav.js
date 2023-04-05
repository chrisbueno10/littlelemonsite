export default function Nav(props){
    return(
        <>
            <nav className={props.className}>
                <ul>
                    <li>
                        <Link to="/home" >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" >
                            MENU
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookings" >
                            RESERVATIONS
                        </Link>
                    </li>
                    <li>
                        <Link to="/order" >
                            ORDER ONLINE
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" >
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}