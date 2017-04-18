import React, { Component } from 'react';
import HexaCarousel from './HexaCarousel';
import { apparel } from '../data';

class Zero extends Component {
	render() {

		const css = {
			wrapper: {
				width: '100vw',
				height: '92vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				border: '1px solid tomato'
			}
		}

		return (
			<div style={css.wrapper}>
				<HexaCarousel data={apparel} />
			</div>
		);
	}
}

export default Zero;