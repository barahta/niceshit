import style from './styles/Main.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import AboutUs from "../components/about/AboutUs";
import NewsBlock from "../components/news/NewsBlock";
import Projects from "../components/projects/Projects";
import NewHeader from "../components/newheader/NewHeader";
import TwoBlocks from "../components/animation/TwoBlocks";
import Group from "../components/groupcompany/Group";
import NewAbout from "../components/newabout/NewAbout";
import Actives from "../components/activeholding/Actives";
import Footer from "../components/footer/Footer";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Cosmos from "../components/cosmos/Cosmos";
import Planet from "../components/planet/Planet";
import Prices from "../components/prices/Prices";

function Main () {


    return (
        <div className={style.bodymain}>
            <div className={style.logoaminate}>
                <div className={style.shitlogo}>
                    <div className={style.shitsix}></div>
                    <div className={style.shitfive}></div>
                    <div className={style.shitfour}></div>
                    <div className={style.shitthree}></div>
                    <div className={style.shittwo}></div>
                    <div className={style.shitone}></div>
                </div>
                <div className={style.name}>
                    <div className={style.nicename}>
                        <p>N</p>
                        <p>I</p>
                        <p>C</p>
                        <p>E</p>
                    </div>
                    <div className={style.shitname}>
                        <p>S</p>
                        <p>H</p>
                        <p>I</p>
                        <p>T</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main