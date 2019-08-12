import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import './index.scss';

import { sourceDomain } from "../../configs/url_configs";

class TalkBehindMyWork extends Component {

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
					<article id="talkBehindMyWork" className="main-content bg-white talkBehindMyWork">
						<h2 className="dktitle"><img src={`${sourceDomain}images/tt04.png`} alt="" /></h2>
						<div className="content">
							<img src={`${sourceDomain}images/dkimg03.jpg`} className="img_blog" alt="" />
							<p className="date">04/21/2014</p>
							<h3><img src={`${sourceDomain}images/tt04_sub01.png`} alt="" /></h3>
							<div className="text">
								<h5>Đêm...</h5>
								<p>Lan can trống trãi, đâu đó là ngỗn ngang những chậu những thau của bọn sinh viên. Mái hiên nhỏ nhưng cũng đủ lớn để chứa 3 hàng đồ đạc còn đang phơi dỡ, chúng buông dài xuống, theo gió phất phơ che gần kín những khoãng không nhìn lên bầu trời. Nhưng không bởi lẽ thế mà bầu trời bị che kín hết. Ngồi vắt vẽo trên lan can, thả 2 chân buông thoải mái và nhìn lên cao. Bầu trơi hôm nay cao và trong, trăng không tròn nhưng vẫn tỏa đủ sáng để biết rằng tối nay là 1 đêm đẹp. Đường phố dài sáng chói đèn đường và đằng sau là những ngôi nhà đen đúa trong màu tối của đêm. Có lẽ hầu hết mọi người đều đã yên ấm thoải mái trong chăn, thư thả với 1 ngày cuối tuần, nhưng đâu đó vẫn là những ô nhà sáng đèn, nhất là những khu trọ của bọn sinh viên, dường như chúng nó chả bao giờ ngủ cả. Và tại đây, trên lan can này, là tôi. Không phải là lúc tâm trạng hay sến súa tản mạn về đêm. Mà chỉ là 1 lúc bình tâm, đặt nhẹ lòng mình lại và ngẫm về cuộc sống, những gì mình đã, đang và sẽ theo đuổi...</p>
								<h5>Sợ...</h5>
								<p>Có 1 cảm giác gọi là trống trãi. Cảm giác ấy không chỉ đơn thuần là khi 1 người cảm thấy cô đơn vì ở 1 nơi mà chỉ có 1 mình, nó còn đáng sợ hơn, khi mà người đó không có, không biết ai để mà nghĩ đến. Có lẽ loving way Sắc màu tình yêu với nhưng gam màu xám xịt làm tôi có những suy nghĩ này chăng? Hay đơn giản, bầu trời đêm nay quá dài, quá rộng, lan đến cả tâm hồn, đến những suy nghĩ trong tôi?</p>
								<p>"Hạnh phúc là gì? Chỉ đơn giản là khi ta thấy vui, thấy thoải mái và toại nguyện. Hạnh phúc không phải của riêng ai, nhưng nó chỉ dành cho những ai biết níu giữ..."</p>
								<p>Tôi thường dùng những câu từ này để bắt đầu cho các bài tập làm văn của mình thời phổ thông. Bởi lẽ ngày ấy trong tôi hạnh phúc không phải là một thứ gì đó quá xa xỉ, tôi chỉ nghĩ đơn giản rằng mình làm tốt mọi thứ thì mọi người sẽ yêu thương mình và mang hạnh phúc đến cho mình. Giờ ngẫm lại, không biết nó có còn đúng hay đã trở nên quá trẻ con với 1 người dường như già trước tuổi như tôi. Cuộc sống không phải lúc nào cũng như ta muốn. Đôi lúc tự hỏi rằng cuộc sống này do ta làm chủ, hay là do 1 cái gì đó gọi là "số mệnh" chi phối chăng? Tôi vẫn chưa trả lời được câu hỏi đó.</p>
								<p>Đôi khi mãi chìm đắm trong công việc, mãi ngụp lặn trong mớ hỗn độn của cuộc sống mà ta như quên đi rằng hiện tại bản thân đang ở đâu? Để rồi khi bình tâm lại, cảm thấy ta trơ trọi giữa những dòng tấp nập. Cuộc sống vẫn cứ vận động, thời gian vẫn cứ trôi đi và ta vẫn đang sống</p>
								<p>Có thể bạn sẽ vui...</p>
								<p>- Khi đạt được những thành công và những lời khen ngợi<br />- Khi đạt được những thành công và những lời khen ngợi<br />- Khi một buổi sáng thức dậy không bởi 1 tiếng chuông báo thức khó chịu từ cái điện thoại, mà ngược lại đó là 1 âm thanh tin nhắn quen thuộc từ người thương "Buổi sáng vui vẻ nhen!". Hay một buổi tối dạo công viên với những cái nắm tay và cái hôn tạm biệt "... ngủ ngon nha"</p>
								<p>Và có thể sẽ buồn...</p>
								<p>- Khi gặp 1 khó khăn nào đó không thể vượt qua<br />- Khi mà cả ngày chờ đợi chả thấy ấy đâu, nhìn mãi cái nick đen thui mà cái chấm tròn màu xanh vẫn chưa chịu sáng.</p>
								<h5>Nhưng...</h5>
								<p>Cuộc sống của chúng ta thú vị, bởi lẽ chúng ta không biết trước được ngày mai của mình sẽ ra sao. Và dù có thế nào, xám xịt đầy mưa hay trong trẽo như đêm nay, thì ta hãy sống hết mình, luôn cố gắng vượt qua, trân trọng những gì mà cuộc sống mang lại.</p>
								<p className="text-right"><i>Sài Gòn - 04/21/2014</i></p>
							</div>
							{/* <div className="dkbtn">
								<a href="#" className="btn bg-yellow">view more...</a>
							</div> */}
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

export default TalkBehindMyWork;
