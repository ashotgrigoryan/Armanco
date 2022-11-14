import React, {useContext} from 'react';
import {Context} from "./wrapper";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "../../assets/css/layouts/style.css";
import Flagam from "../../assets/img/am.webp";
import Flagru from "../../assets/img/ru.webp";
import Flagen from "../../assets/img/uusa.png";

function Lang() {
    const context = useContext(Context);
    // const sectionStyle = {
    //     width: "30px",
    //     height: "31px",
    //     backgroundImage: "url(" + { EnFlag } + ")",
    //     backgroundSize:'cover',
    //     backgroundPosition:'center',
    //     zIndex:'0'
    // };
    return (
        <>
            <div>
                <Select
                    value = {context.locale} onChange={context.selectLanguage}
                >

                    <MenuItem value={'en'} className="usa" id={'aaa'}  style={{zIndex:'99999999999999999999999999999999999999999999999999999999999999999999999999999999999 !important'}}>
                        <img src={Flagen} />
                    </MenuItem>
                    <MenuItem value={'am'} className="arm">
                        <img src={Flagam} />
                    </MenuItem>
                    <MenuItem value={'ru'} className="rus">
                        <img src={Flagru} />
                    </MenuItem>
                </Select>
            </div>

        </>
    )
}
export default Lang