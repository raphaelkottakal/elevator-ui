import React, { Component } from 'react';
import HexaCarousel from './HexaCarousel';
import Imager from './Imager';
import { trendingNow } from '../data';

class One extends Component {
	render() {

		const css = {
			wrapper: {
				position: 'relative',
				width: '100vw',
				height: '92vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundImage: 'url(http://assets.myntassets.com/w_480,q_60,fl_progressive/assets/images/lookbook/elevat2017/4/19/11492598236560-TrendingNow.jpg)',
				backgroundSize: 'cover'
				// border: '1px solid tomato'
			},
			hanger: {
				position: 'absolute',
				top: 0
			},
			join: {
			  position: 'absolute',
			  bottom: '2%',
			  left: 0,
			  padding: '16px 0',
			}
		}

		return (
			<div style={css.wrapper}>
				<Imager
					style={css.hanger}
					label="trend"
					src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492598734889-TrendingNowHB-min.png"
				/>
				<HexaCarousel data={trendingNow} ratio={491 / 480}/>
				<Imager
				  style={css.join}
				  gaAction="join"
				  href="http://www.myntra.com/u/myntrasneakerclub"
				  src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492600992052-JoinTheClub.png"
				/>
			</div>
		);
	}
}

export default One;