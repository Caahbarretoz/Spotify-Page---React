import React from "react";
import './Section.css';
import Card1 from '../pictures/playlists/1.jpeg'
import Card2 from '../pictures/playlists/2.png'
import Card3 from '../pictures/playlists/3.jpeg'
import Card4 from '../pictures/playlists/4.jpeg'
import Card5 from '../pictures/playlists/5.jpeg'
import Card6 from '../pictures/playlists/6.jpeg'
import Card7 from '../pictures/playlists/7.jpeg'
import Card8 from '../pictures/playlists/8.jpeg'
import Card9 from '../pictures/playlists/9.jpeg'
import Card10 from '../pictures/playlists/10.jpeg'
import Card11 from '../pictures/playlists/11.jpeg'
import Card12 from '../pictures/playlists/12.jpeg'
import Card13 from '../pictures/playlists/13.jpeg'
import Card14 from '../pictures/playlists/14.jpeg'
import Card15 from '../pictures/playlists/15.jpeg'

const Section = () => {
    return (
        <section class="main-conteiner_section">
                <div id="result-playlists">
                    <div class="main-conteiner_section_titles">
                        <h1>Boa noite</h1>
                        <h2>Navegar por todas as seções</h2>
                    </div>

                    <div class="offer_scroll-container">
                        <div class="offer_list">
                            <section class="offer_list-item">

                                <a href="" class="cards">
                                    <div class="cards card1">
                                        <img src={Card1} alt=""/>
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card2">
                                        <img src={Card2} alt=""/>
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card3">
                                        <img src={Card3} alt=""/>
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card4">
                                        <img src={Card4} alt=""/>
                                        <span>Creators</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card5">
                                        <img src={Card5} alt=""/>
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card6">
                                        <img src={Card6} alt=""/>
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card7">
                                        <img src={Card7} alt=""/>
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card8">
                                        <img src={Card8} alt=""/>
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card9">
                                        <img src={Card9} alt=""/>
                                        <span>Funk</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card10">
                                        <img src={Card10} alt=""/>
                                        <span>MPB</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card11">
                                        <img src={Card11} alt=""/>
                                        <span>Rock</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card12">
                                        <img src={Card12} alt=""/>
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card13">
                                        <img src={Card13} alt=""/>
                                        <span>Indie</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card14">
                                        <img src={Card14} alt=""/>
                                        <span>Relax</span>
                                    </div>
                                </a>

                                <a href="" class="cards">
                                    <div class="cards card15">
                                        <img src={Card15} alt=""/>
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                      <div class="artist-card" id="">
                        <div class="card-img">
                          <img id="artist-img" class="artist-img" />
                          <div class="play">
                            <span class="fa fa-solid fa-play"></span>
                          </div>
                        </div>
                        <div class="card-text">
                          <a title="Foo Fighters" class="vst" href=""></a>
                          <span class="artist-name" id="artist-name"></span>
                          <span class="artist-categorie">Artista</span>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
    );
}

export default Section;