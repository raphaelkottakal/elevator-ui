import React, { Component } from 'react';
import Imager from './Imager';
import Columner from './Columner';

class Four extends Component {
	render() {

		const css = {
			wrapper: {
				position: 'relative',
				width: '100vw',
				height: '92vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundImage: 'url(http://assets.myntassets.com/w_480,q_60,fl_progressive/assets/images/lookbook/elevat2017/4/19/11492598236599-PickYourType.jpg)',
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
					label="pick"
					src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492598734922-PickYourTypeHB-min.png"
				/>
				<div>
					<Columner>
						<Imager
							gaAction="1"
							href="http://www.myntra.com/sneakerclubht"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599179070-MSC_SIS_02_02.png"
						/>
						<Imager
							gaAction="1"
							href="http://www.myntra.com/sneakerclubmt"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599179055-MSC_SIS_02_03.png"
						/>
					</Columner>
					<Columner>
						<Imager
							gaAction="3"
							href="http://www.myntra.com/sneakerclublt"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599178974-MSC_SIS_02_04.png"
						/>
						<Imager
							gaAction="4"
							href="http://www.myntra.com/sneakerclubath"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599179033-MSC_SIS_02_05.png"
						/>
					</Columner>
					<Columner>
						<Imager
							gaAction="5"
							href="http://www.myntra.com/sneakerclubsp"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599179005-MSC_SIS_02_06.png"
						/>
						<Imager
							gaAction="6"
							href="http://www.myntra.com/sneakerclubcn"
							src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/19/11492599178991-MSC_SIS_02_07.png"
						/>
					</Columner>
					<Imager
					  gaAction="shop all"
					  href="https://www.myntra.com/sneakercluball"
					  src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/27/11493294769644-ShopAll.png"
					/>
				</div>
				
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

export default Four;