const MainSection=() =>{
    return(
        <main className="main container" >
            <div className="main-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, numquam voluptatum expedita quas similique voluptatem? Laboriosam, architecto. Natus dolorum in ullam aut tenetur placeat temporibus, amet velit ratione beatae illo.
                </p>
            <div className="main-btn">
                <button>Shop Now </button>
                <button className="secondary-btn"> Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="amazon-logo" />
                </div>
            </div>
            </div>
            <div className="main-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    );
};

export default MainSection;