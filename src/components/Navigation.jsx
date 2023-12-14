const Navigation = () =>{
    return(
        <nav className="container">
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>

                <div>
                    <ul>
                    <li href="#" className="list">Menu</li>
                    <li href="#" className="list">Location</li>
                    <li href="#" className="list">About</li>
                    <li href="#" className="list">Contact</li>
                    </ul>
                </div>

                    <button>login</button>
            </nav>
    );
};

export default Navigation;