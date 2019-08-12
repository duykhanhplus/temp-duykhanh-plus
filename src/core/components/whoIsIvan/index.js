import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import './index.scss';

import { sourceDomain } from "../../configs/url_configs";

class WhoIsIvan extends Component {

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
							<li><a href={`${sourceDomain}#intro`} className="active js-scroll-trigger">Home</a></li>
							<li><a href={`${sourceDomain}#whoIsIvan`} className="js-scroll-trigger">Who's iVan?</a></li>
							<li><a href={`${sourceDomain}#anImportantOf`} className="js-scroll-trigger">An important part of</a></li>
							<li><a href={`${sourceDomain}#meAndMore`} className="js-scroll-trigger">Me and more</a></li>
							<li><a href={`${sourceDomain}#talkBehindMyWork`} className="js-scroll-trigger">Talk behind my work</a></li>
							<li><a href={`${sourceDomain}#callMeMaybe`} className="js-scroll-trigger">Call me maybe</a></li>
							<li><a href={`${sourceDomain}#intro`} className="js-scroll-trigger">I do... lazzy</a></li>
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
							</div>
						</div>
					</article>
					<article id="education" className="main-content bg-green education">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt07.png`} alt="EDUCATION" /></h2>
						<div className="content">
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico01.png`} /></p>
								<div className="cont">
									<h4>2011 - 2012</h4>
									<p className="text"><i><u>Cultural tourism</u></i> at <strong>SaiGon University</strong></p>
								</div>
							</div>
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico02.png`} /></p>
								<div className="cont">
									<h4>2012 - 2015</h4>
									<p className="text"><i><u>Infomation technology</u></i> at <strong>The University of Science HCMC</strong></p>
								</div>
							</div>
						</div>
					</article>
					<article id="experience" className="main-content bg-yellow experience">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt08.png`} alt="EXPERIENCE" /></h2>
						<div className="content">
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico03.png`} /></p>
								<div className="cont">
									<h4>2014 - 2015</h4>
									<p className="text"><i><u>Intern</u></i> & <i><u>Update</u></i><br /><i><u>UI / UX Designer</u></i> at<br /><strong>Stage Group / Prostage LLC</strong></p>
								</div>
							</div>
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico04.png`} /></p>
								<div className="cont">
									<h4>2016 - 2017</h4>
									<p className="text"><i><u>Front-end Web developer</u></i> at<br /><strong>Stage Group / Prostage LLC</strong></p>
								</div>
							</div>
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico05.png`} /></p>
								<div className="cont">
									<h4>~2018</h4>
									<p className="text"><i><u>Freelancer</u></i><br /><i><u>UI / UX Developer</u></i> at<br /><strong>QA Solutions</strong></p>
								</div>
							</div>
							<div className="line">
								<p className="icon"><img src={`${sourceDomain}images/ico06.png`} /></p>
								<div className="cont">
									<h4>2018 - 2019</h4>
									<p className="text"><i><u>UX Dev</u></i> / <i><u>Landings Implement</u></i> at<br /><strong>MobiClix / Weventure LLC</strong></p>
								</div>
							</div>
						</div>
					</article>
					<article id="skill" className="main-content bg-green skill">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt09.png`} alt="SKILL" /></h2>
						<div className="content">
							<div className="software">
								<div>Adobe Photoshop</div>
								<div>Adobe Illustrator</div>
								<div>Adobe XD</div>
								<div>Wireframe Tool</div>
								<div>Documents</div>
								<div>Git</div>
							</div>
							<div className="technical">
								<div className="skill">
									<h5>HTML</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "95%" }}></p>
									</div>
								</div>
								<div className="skill">
									<h5>CSS</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "95%" }}></p>
									</div>
								</div>
								<div className="skill">
									<h5>JAVASCRIPTS / JQUERY</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "85%" }}></p>
									</div>
								</div>
								<div className="skill">
									<h5>JS FRAMWORK</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "70%" }}></p>
									</div>
								</div>
								<div className="skill">
									<h5>BACK END KNOWLEDGE</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "50%" }}></p>
									</div>
								</div>
								<div className="skill">
									<h5>UI / UX KNOWLEDGE</h5>
									<div className="bar">
										<p className="full"></p>
										<p className="level" style={{ width: "80%" }}></p>
									</div>
								</div>
							</div>
						</div>
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

export default WhoIsIvan;
