import React, { Component } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import bg from "../assets/img/arena/1.jpg";
import pic2 from "../assets/img/arena/2.jpg";
import pic3 from "../assets/img/arena/3.jpg";



export class Arena extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="ui card" style={{ width:"80%", display: "flex", margin:"0 auto"}}>
                    <div class="image"><img src={bg} /></div>
                    <div class="content">
                        <div class="header">Lapangan GOR Sumantri</div>
                        <div class="meta">GOR</div>
                        <div class="description">
                        Address: RW., RT.2/RW.5, Karet Kuningan, Setia Budi, South Jakarta City, Jakarta 12940
    </div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i aria-hidden="true" class="user icon"></i>
                            16 People
    </a>
                    </div>
                </div>
                
                <div class="ui card" style={{ width:"80%", display: "flex", margin:"0 auto"}}>
                    <div class="image"><img src={pic2} /></div>
                    <div class="content">
                        <div class="header">GOR Bulu Tangkis</div>
                        <div class="meta">GOR</div>
                        <div class="description">
                        Address: Jl. Komp. Migas III No.69, RT.8/RW.1, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480
    </div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i aria-hidden="true" class="user icon"></i>
                            8 Friends
    </a>
                    </div>
                </div>
                <div class="ui card" style={{ width:"80%", display: "flex", margin:"0 auto"}}>
                    <div class="image"><img src={pic3} /></div>
                    <div class="content">
                        <div class="header">GOR Handayani Kemanggisan</div>
                        <div class="meta">GOR</div>
                        <div class="description">
                        Address: RT.10/RW.8, Kemanggisan, Palmerah, West Jakarta City, Jakarta 11480
    </div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i aria-hidden="true" class="user icon"></i>
                            5 People
    </a>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Arena
