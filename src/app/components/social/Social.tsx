import React from 'react'

import './social.css'
import { IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoXing } from 'react-icons/io5'
import { SiGmail } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";





export const Social = () => { 
	return (
		<>


			<div className="social">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://twitter.com/puentesdig" target="_blank" className="icon-twitter"><BsTwitterX  size={27}/></a></li>

				</ul>

			</div>
			<div className="social1">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://www.linkedin.com/in/leonardofdev/" target="_blank" className="icon-linkedin"><IoLogoLinkedin size={27}/></a></li>

				</ul>

			</div>
			<div className="social2">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://www.instagram.com/puentesdigitales.com.ar/" target="_blank" className="icon-instagram"><IoLogoInstagram size={27} /></a></li>

					{/* <li><a href="https://wa.me/+541536038167" target="_blank" className="icon-whatsapp"><WhatsAppIcon/> </a></li>
			<li><a href="mailto:infoplataformaweb@gmail.com" target="_blank" className="icon-mail"><MailOutlineIcon/> </a></li>	 */}

				</ul>

			</div>
			<div className="social3">
				<ul>				
					<li><a href="https://www.threads.net/@puentesdigitales.com.ar" target="_blank" className="icon-threads"><FaThreads size={27} /></a></li>
	
				</ul>

			</div>

			<div className="social4">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}

					<li><a href="mailto:infoplataformaweb@gmail.com" target="_blank" className="icon-mail"><SiGmail size={27}/>Contact </a></li>
				</ul>

			</div>
		</>
	)
}