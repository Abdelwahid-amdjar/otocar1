import "./home.css"
import HeaderImg from "../../Images/image10.jpg"
import Details from "../../Images/image4.png"
import SecondHeaderImg from "../../Images/image9.jpg"
import custom1 from "../../Images/image5.png"
const Home = () =>{
    return(
        <>
            {/* Header */}
            <div className="header">
                <div>
                    <div className="img">
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="HeaderImgOverlay"></div>
                </div>
                <div className="HeaderContent">
                    <h6><span>C</span>ars</h6>
                    <p>Toute notre équipe et ses partenaires vous accomagnent pour trouver la voiture qui vous convient le mieux.
                         Plusieurs outils d'aide à la décision sont mis à votre disposition : nos «Test Drive», les specs détaillées, 
                         l'avis d'experts, les expériences utilisateurs...</p>
                </div>
            </div>

            {/* Details Section StarT */}
            <div className="details_home container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={Details} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h6>Attitude is Everything...</h6>
                        <h5>Change <br /> Your Attitude Just <span>Buy</span></h5>
                        <p>Non, vous ne vous trompez pas. Le ludospace que vous découvrez est bien un Mercedes. 
                            Il s’agit du Citan Combi version longue,
                             avec 2 portes arrière coulissantes, et arborant fièrement l’étoile Mercedes.</p>
                    </div>
                </div>
            </div>

            {/* Details Second */}
            <div className="details_home_second">
                <dev className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="box">
                                <h6>To Change YourSelf</h6>
                                <p>Amdjar Abdelwahid
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-4 mid">
                            <div className="box">
                                <h6>To Change YourSelf</h6>
                                <p>
                                AY-cars
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="box">
                                <h6>To Change YourSelf</h6>
                                <p> Benjiama Yassir
                                </p>
                            </div>
                        </div>
                    </div>
                </dev>
            </div>

            {/* Details Section End */}

            {/* Second Header */}
            <div className="second_header">
                <div>
                    <div className="img">
                        <img src={SecondHeaderImg} alt="" />
                    </div>
                    <div className="SecondHeaderOve"></div>
                </div>
                <div className="SecondHeaderContent">
                    <h6>Just Take it....</h6>
                </div>
            </div>

            {/* Custom section Start */}
            <div className="custom_section container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box">

                            {/*  */}

                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img src={custom1} className="ig-fluid" alt="" />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;