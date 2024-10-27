import './aktienlanding.css'
import { Link } from 'react-router-dom';




function aktienLanding() {

    console.log("Looking for some Stocks?")
    return (

<div className="aktienLandingBody">

<div className='finderTop'>Aktien nach Themen</div>
<div className='FinderLine'></div>

    <div className='FinderBody'>

        <Link to="/findStocks/luxus">
        <div className='FinderBox'>
            <p className='finderTopLine'>Luxus</p>
            <img src={`/img/aktienfinder/NiftyFinance-Luxus.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/sports">
        <div className='FinderBox'>
            <p className='finderTopLine'>Sport</p>
            <img src={`/img/aktienfinder/NiftyFinance-Sports.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/railroads">
        <div className='FinderBox'>
            <p className='finderTopLine'>Eisenbahnen</p>
            <img src={`/img/aktienfinder/NiftyFinance-Eisenbahnen.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/sin">
        <div className='FinderBox'>
            <p className='finderTopLine'>Sin Stocks</p>
            <img src={`/img/aktienfinder/NiftyFinance-Sin.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/food">
        <div className='FinderBox'>
            <p className='finderTopLine'>Food</p>
            <img src={`/img/aktienfinder/NiftyFinance-Food.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/cars">
        <div className='FinderBox'>
            <p className='finderTopLine'>Autos</p>
            <img src={`/img/aktienfinder/NiftyFinance-Cars.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/gaming">
        <div className='FinderBox'>
            <p className='finderTopLine'>Gaming</p>
            <img src={`/img/aktienfinder/NiftyFinance-Gaming.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/green">
        <div className='FinderBox'>
            <p className='finderTopLine'>Green</p>
            <img src={`/img/aktienfinder/NiftyFinance-Green.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/kids">
        <div className='FinderBox'>
            <p className='finderTopLine'>Kids</p>
            <img src={`/img/aktienfinder/NiftyFinance-Kids.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/daily">
        <div className='FinderBox'>
            <p className='finderTopLine'>Daily</p>
            <img src={`/img/aktienfinder/NiftyFinance-Daily.jpg`}></img>
        </div>
        </Link>



    </div>


    <div className='finderTop'>Aktien nach Ländern</div>
<div className='FinderLine'></div>

    <div className='FinderBody'>

        <Link to="/findStocks/Deutschland">
        <div className='FinderBox'>
            <p className='finderTopLine'>Deutschland</p>
            <img src={`/img/aktienfinder/NiftyFinance-Deutschland.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/USA">
        <div className='FinderBox'>
            <p className='finderTopLine'>USA</p>
            <img src={`/img/aktienfinder/NiftyFinance-USA.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/Kanada">
        <div className='FinderBox'>
            <p className='finderTopLine'>Kanada</p>
            <img src={`/img/aktienfinder/NiftyFinance-Kanada.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/Schweiz">
        <div className='FinderBox'>
            <p className='finderTopLine'>Schweiz</p>
            <img src={`/img/aktienfinder/NiftyFinance-Schweiz.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/China">
        <div className='FinderBox'>
            <p className='finderTopLine'>China</p>
            <img src={`/img/aktienfinder/NiftyFinance-China.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/Japan">
        <div className='FinderBox'>
            <p className='finderTopLine'>Japan</p>
            <img src={`/img/aktienfinder/NiftyFinance-Japan.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/England">
        <div className='FinderBox'>
            <p className='finderTopLine'>England</p>
            <img src={`/img/aktienfinder/NiftyFinance-England.jpg`}></img>
        </div>
        </Link>

        <Link to="/findStocks/Frankreich">
        <div className='FinderBox'>
            <p className='finderTopLine'>Frankreich</p>
            <img src={`/img/aktienfinder/NiftyFinance-Frankreich.jpg`}></img>
        </div>
        </Link>

    </div>

</div>
    );
}

export default aktienLanding;