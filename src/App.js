import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import './App.scss';

import { sourceDomain } from "./core/configs/url_configs";

class App extends Component {

	componentDidMount() {

	}

	render() {
		return (
			<div id="wrapper" className="sidebar">
				<Helmet>
					<title>Khánh Duy Lê 's Site</title>

					<link href={`${sourceDomain}css/lightbox.css`} rel="stylesheet" type="text/css" media="all" />
					<script src={`${sourceDomain}js/isotope.pkgd.min.js`}></script>
					<script src={`${sourceDomain}js/jquery.easing.min.js`}></script>
					<script src={`${sourceDomain}js/lightbox.js`}></script>
					<script src={`${sourceDomain}js/script.js`}></script>
				</Helmet>
				<aside id="main-sidebar"><a href={sourceDomain} className="brand"><span className="name"><img src={`${sourceDomain}images/logo.png`} width="100%" /></span></a>
					<div className="responsive-nav">
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					<nav className="main-nav">
						<ul>
							{/* <li>
								<a href="#" className="active">Menu 01</a>
								<ul className="dropdown">
									<li><a href="#">Home - Unique scroll</a>
									</li>
								</ul>
							</li> */}
							<li><Link to="#intro" className="active js-scroll-trigger">Home</Link></li>
							<li><Link to="#whoIsIvan" className="active js-scroll-trigger">Who's iVan?</Link></li>
							<li><Link to="#anImportantOf" className="active js-scroll-trigger">An important part of</Link></li>
							<li><Link to="#meAndMore" className="active js-scroll-trigger">Me and more</Link></li>
							<li><Link to="#talkBehindMyWork" className="active js-scroll-trigger">Talk behind my work</Link></li>
							<li><Link to="#callMeMaybe" className="active js-scroll-trigger">Call me maybe</Link></li>
							<li><Link to="#intro" className="active js-scroll-trigger">I do... lazzy</Link></li>
						</ul>
					</nav>
				</aside>
				<section className="main">
					<article id="intro" className="main-content bg-yellow intro">
						{/* <video muted={true} autoPlay={true} playsInline={true} loop={true} width="100%" height="100%">
						<source src={`${sourceDomain}video/intro.mp4`} />
					</video> */}
						<img src={`${sourceDomain}images/intro-img.jpg`} />
					</article>
					<article id="whoIsIvan" className="main-content bg-green whoIsIvan">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt01.png`} alt="Who's IVan?" /></h2>
						<div className="imgIvan ivan01">
							<p className="img"><img src={`${sourceDomain}images/dkimg01.jpg`} width="100%" /></p>
							<div className="content">
								<div className="cont">
									<p>
										‘’Hi there. iVan is... ME! <br />I’m SEO of myself - I’m also a UX Creative & Frontend Developer.‘’
								</p>
								</div>
							</div>
						</div>
						<div className="imgIvan ivan02">
							<p className="img"><img src={`${sourceDomain}images/dkimg02.jpg`} width="100%" /></p>
							<div className="content">
								<div className="cont">
									<p>
										‘’I love to bring my ideas to life and show them with everyone. <br />
										I belive they’re really awsome!‘’
								</p>
								</div>
								<div className="dkbtn">
									<Link to="/whoIsIvan" className="btn bg-green">view more...</Link>
								</div>
							</div>
						</div>
					</article>
					<article id="anImportantOf" className="main-content bg-green anImportantOf">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt02.png`} /></h2>
						<div className="filters clearfix">
							<div className="filter clearfix">
								<ul>
									<li><a href="#classall" data-filter="*">Show all</a></li>
									<li><a href="#class1" className="active" data-filter=".class1">Entertainment</a></li>
									<li><a href="#class2" data-filter=".class2">Sport</a></li>
									<li><a href="#class3" data-filter=".class3">Shopping</a></li>
									<li><a href="#class4" data-filter=".class4">Security</a></li>
									<li><a href="#class5" data-filter=".class5">Landing pages</a></li>
									<li><a href="#class6" data-filter=".class6">Others</a></li>
								</ul>
								<div className="clear"></div>
							</div>

							<div className="clear"></div>
							<div className="clearfix">
								<ul className="filter-container clearfix">
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/01-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/01-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.babystep-mobile.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/02-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/02-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.hopster-mobile.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class4">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/03-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/03-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.mcafeemena.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/04-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/04-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://moco4k.com" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/05-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/05-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.mocoplay.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class4">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/06-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/06-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.m-security.io/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/07-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/07-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.vanguard-cardfight.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1 class2">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/08-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/08-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.wwesea.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1 class2">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/09-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/09-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://gameonpass.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class4">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/10-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/10-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://qa-solutions.net/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp01.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp01.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp02.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp02.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp03.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp03.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp04.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp04.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp05.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp05.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp06.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp06.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp07.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp07.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp08.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp08.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp09.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp09.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp10.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp10.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp11.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp11.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp12.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp12.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp13.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp13.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp14.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp14.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp15.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp15.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp16.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp16.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class5">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/lp17.gif`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/lp17.gif`}>Sort preview</a>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/11-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/11-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.mrtjp.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/12-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/12-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.dentsu-sys.co.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class3">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/13-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/13-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.hanakou-hanaten.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/14-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/14-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.yotsuba-gr.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class3">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/15-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/15-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.food-p.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/16-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/16-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.cb-wing.org/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/17-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/17-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.n-est.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/18-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/18-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.makibaen.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/19-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/19-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.mandk.info/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class3">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/20-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/20-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.bolks.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class3">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/21-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/21-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.opti-sun.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/22-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/22-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.m2-corporation.co.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/23-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/23-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.ienn.or.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/24-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/24-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.e-bonito.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/25-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/25-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.pof.or.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/26-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/26-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.kyowaopt.co.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class3">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/27-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/27-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.adachiya-meat.co.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/28-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/28-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.sunmeck.net/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/29-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/29-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.kaden-otasuke.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/30-02.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/30-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.tyrol.ed.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1 class2">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/31-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/31-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.peacock-golf.com/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class1">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/32-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/32-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="https://www.tokuda-photo.co.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="class6">
										<div className="view view-two">
											<img src={`${sourceDomain}images/IMGFinal/33-01.jpg`} alt="" />
											<div className="mask">
												<div className="i-icons">
													<div className="dkbtn">
														<a className="btn bg-green" rel="lightbox" href={`${sourceDomain}images/IMGFinal/33-03.jpg`}>Sort preview</a>
													</div>
													<div className="dkbtn">
														<a href="http://www.kusuhara-womens.jp/" target="_blank" className="btn bg-green">View Website</a>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="clear"></div>
							</div>
						</div>
						{/* <div className="dkbtn">
							<a href="#" className="btn bg-yellow">view more...</a>
						</div> */}
						<div className="copyright">
							Note:<br />
							- All of the images above are just proof that I have contributed a part in building that products, images's copyright belongs to the company or the website's producer.<br />
							- Tất cả hình ảnh phía trên chỉ mang tính chất chứng minh rằng tôi có đóng góp một phần vào việc xây dựng sản phẩm, bản quyền hình ảnh thuộc về công ty hoặc đơn vị sản xuất trang web
						</div>
					</article>

					<article id="meAndMore" className="main-content bg-yellow meAndMore">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt03.png`} alt="" /></h2>
						<div className="content">
							<div className="line line01">
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore06.jpg`}><img src={`${sourceDomain}images/dkmore06.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore02.jpg`}><img src={`${sourceDomain}images/dkmore02.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore05.jpg`}><img src={`${sourceDomain}images/dkmore05.jpg`} className="img_more" /></a>
							</div>
							<div className="line line02">
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore03.jpg`}><img src={`${sourceDomain}images/dkmore03.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore04.jpg`}><img src={`${sourceDomain}images/dkmore04.jpg`} className="img_more" /></a>
							</div>
							<div className="line line02">
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore10.jpg`}><img src={`${sourceDomain}images/dkmore10.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore09.jpg`}><img src={`${sourceDomain}images/dkmore09.jpg`} className="img_more" /></a>
							</div>
							<div className="line line03">
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore07.jpg`}><img src={`${sourceDomain}images/dkmore07.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore08.jpg`}><img src={`${sourceDomain}images/dkmore08.jpg`} className="img_more" /></a>
								<a className="ov_hover" rel="lightbox" href={`${sourceDomain}images/dkmore01.jpg`}><img src={`${sourceDomain}images/dkmore01.jpg`} className="img_more" /></a>
							</div>
						</div>
						{/* <div className="dkbtn">
							<a href="#" className="btn bg-green">view more...</a>
						</div> */}
					</article>

					<article id="talkBehindMyWork" className="main-content bg-white talkBehindMyWork">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt04.png`} alt="" /></h2>
						<div className="content">
							<img src={`${sourceDomain}images/dkimg03.jpg`} className="img_blog" alt="" />
							<p className="date">04/21/2014</p>
							<h3><img src={`${sourceDomain}images/tt04_sub01.png`} alt="" /></h3>
							<div className="text">
								<h5>Đêm...</h5>
								<p>Lan can trống trãi, đâu đó là ngỗn ngang những chậu những thau của bọn sinh viên. Mái hiên nhỏ nhưng cũng đủ lớn để chứa 3 hàng đồ đạc còn đang phơi dỡ, chúng buông dài xuống, theo gió phất phơ che gần kín những khoãng không nhìn lên bầu trời. Nhưng không bởi lẽ thế mà bầu trời bị che kín hết. Ngồi vắt vẽo trên lan can, thả 2 chân buông thoải mái và nhìn lên cao. Bầu trơi hôm nay cao và trong, trăng không tròn nhưng vẫn tỏa đủ sáng để biết rằng tối nay là 1 đêm đẹp. Đường phố dài sáng chói đèn đường và đằng sau là những ngôi nhà đen đúa trong màu tối của đêm. Có lẽ hầu hết mọi người đều đã yên ấm thoải mái trong chăn, thư thả với 1 ngày cuối tuần, nhưng đâu đó vẫn là những ô nhà sáng đèn, nhất là những khu trọ của bọn sinh viên, dường như chúng nó chả bao giờ ngủ cả. Và tại đây, trên lan can này, là tôi. Không phải là lúc tâm trạng hay sến súa tản mạn về đêm. Mà chỉ là 1 lúc bình tâm, đặt nhẹ lòng mình lại và ngẫm về cuộc sống, những gì mình đã, đang và sẽ theo đuổi...</p>
							</div>
							<div className="dkbtn">
								<Link to="/talkBehindMyWork" className="btn bg-yellow">view more...</Link>
							</div>
						</div>
					</article>

					<article id="callMeMaybe" className="main-content bg-yellow callMeMaybe">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt05.png`} alt="" /></h2>
						<ul className="content">
							<li><a href="https://www.facebook.com/duykhanhplus" target="_blank"><img src={`${sourceDomain}images/Icon/1.png`} alt="" /></a></li>
							<li><a href="mailto:duykhanhplus@gmail.com" target="_blank"><img src={`${sourceDomain}images/Icon/15.png`} alt="" /></a></li>
							<li><a href="tel:84362038604" target="_blank"><img src={`${sourceDomain}images/Icon/8.png`} alt="" /></a></li>
							<li><a href="https://www.linkedin.com/in/duykhanhplus" target="_blank"><img src={`${sourceDomain}images/Icon/13.png`} alt="" /></a></li>
							<li><a href="https://www.instagram.com/duykhanhplus/" target="_blank"><img src={`${sourceDomain}images/Icon/11.png`} alt="" /></a></li>
						</ul>
					</article>

					<article className="intro moco-vimeo">
						{/* <video muted={true} autoPlay={true} playsInline={true} loop={true} width="100%" height="100%">
						<source src={`${sourceDomain}video/intro.mp4`} />
					</video> */}
					</article>


					<div className="scroll-to-top position-fixed" style={{ bottom: "10px", right: "10px", display: "none", zIndex: "999" }}>
						<a className="js-scroll-trigger text-center text-white rounded" href="#wrapper">
							<img src={`${sourceDomain}images/next.png`} alt="pagetop" />
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
