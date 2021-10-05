import React from 'react'

export default function PageWrapper(props) {
    return (
        <div>
            <div id="preloader">
                <img className="logo" src="images/logo1.png" alt="" width="119" height="58" />
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                        <div className="navbar-header logo">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <div id="nav-icon1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <a href="/"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
                        </div>
                        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/">Peliculas</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="top-search">
                        <select>
                            <option value="united">PELÍCULAS</option>
                            <option value="saab">Otros</option>
                        </select>
                        <input type="text" placeholder="Busque una película, un programa de televisión o una celebridad que esté buscando" />
                    </div>
                </div>
            </header>

            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1>LISTA DE PELÍCULAS</h1>
                                <ul className="breadcumb">
                                    <li className="active"><a href="/">Inicio</a></li>
                                    <li> <span className="ion-ios-arrow-right"></span> LISTA DE PELÍCULAS</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                <p><span> 1,608 películas </span> encontradas en total</p>
                                <label>Ordenar:</label>
                                <select>
                                    <option value="popularity">Popularidad descendente</option>
                                    <option value="popularity">Popularidad ascendente</option>
                                    <option value="rating">Clasificación descendente</option>
                                    <option value="rating">Calificación ascendente</option>
                                    <option value="date">Fecha de lanzamiento Descendente</option>
                                    <option value="date">Fecha de lanzamiento ascendente</option>
                                </select>
                                <a href="#" className="list"><i className="ion-ios-list-outline active"></i></a>
                                <a href="#" className="grid"><i className="ion-grid"></i></a>
                            </div>
                            {props.children}
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="searh-form">
                                    <h4 className="sb-title">Buscar película</h4>
                                    <form className="form-style-1" action="#">
                                        <div className="row">
                                            <div className="col-md-12 form-it">
                                                <label>Nombre de pelicula</label>
                                                <input type="text" placeholder="Ingrese palabras claves" />
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Género y subgénero</label>
                                                <div className="group-ip">
                                                    <select
                                                        name="skills" multiple="" className="ui fluid dropdown">
                                                        <option value="">Entrar para filtrar géneros</option>
                                                        <option value="Action1">Accion 1</option>
                                                        <option value="Action2">Accion 2</option>
                                                        <option value="Action3">Accion 3</option>
                                                        <option value="Action4">Accion 4</option>
                                                        <option value="Action5">Accion 5</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rango de clasificación</label>

                                                <select>
                                                    <option value="range">-- Seleccione el rango de clasificación a continuación --</option>
                                                    <option value="range">-- Seleccione el rango de clasificación a continuación --</option>
                                                    <option value="range">-- Seleccione el rango de clasificación a continuación --</option>
                                                    <option value="range">-- Seleccione el rango de clasificación a continuación --</option>
                                                </select>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Año de lanzamiento</label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <select>
                                                            <option value="range">De</option>
                                                            <option value="number">10</option>
                                                            <option value="number">20</option>
                                                            <option value="number">30</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select>
                                                            <option value="range">Hasta</option>
                                                            <option value="number">20</option>
                                                            <option value="number">30</option>
                                                            <option value="number">40</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 ">
                                                <input className="submit" type="submit" value="Enviar" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="ads">
                                    <img src="images/uploads/ads1.png" alt="" />
                                </div>
                                <div className="sb-facebook sb-it">
                                    <h4 className="sb-title">Encuentranos en Facebook</h4>
                                    <iframe src="#" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" height="315"  ></iframe>
                                </div>
                                <div className="sb-twitter sb-it">
                                    <h4 className="sb-title">Envíanos un tweet</h4>
                                    <div className="slick-tw">
                                        <div className="tweet item" id="">
                                        </div>
                                        <div className="tweet item" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="ht-footer">
                <div className="container">
                    <div className="flex-parent-ft">
                        <div className="flex-child-ft item1">
                            <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" /></a>
                            <p>5th Avenue st, manhattan<br />
                                New York, NY 10001</p>
                            <p>Call us: <a href="#">(+01) 202 342 6789</a></p>
                        </div>
                        <div className="flex-child-ft item2">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blockbuster</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item3">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item4">
                            <h4>Account</h4>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Watchlist</a></li>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">User Guide</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item5">
                            <h4>Newsletter</h4>
                            <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your email..." />
                            </form>
                            <a href="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>
                        </div>
                    </div>
                </div>
                <div className="ft-copyright">
                    <div className="ft-left">
                        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                    </div>
                    <div className="backtotop">
                        <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
