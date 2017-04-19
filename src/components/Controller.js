import React, { Component } from 'react';
import Columner from './Columner';

class Controller extends Component {

	componentDidMount() {
		this.refs.wrapper.addEventListener('touchmove', (e) => {
		  e.preventDefault();
		}, false);
	}
	
	handelClick(floor) {
		this.props.gotoFloor(floor);
	}

	render() {

		const css = {
			wrapper: {
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
        		// background: 'tomato'
			},
			buttons: {
				position: 'absolute',
				top: 0,
				left: 0
			}
		}

		return (
			<div ref="wrapper" style={css.wrapper}>
				<img
					alt="bg"
					src="http://assets.myntassets.com/w_480,q_60,fl_progressive/assets/images/lookbook/elevat2017/4/18/11492522580432-buttonBgWithOutShadow.png"
				/>
				<div style={css.buttons}>
					<Columner>
						<img
							onClick={this.handelClick.bind(this, '0')}
							alt="select"
							src={
								(this.props.floor === 0) ?
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525846512-ButtonsActive_01.png" :
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492522920623-BUttons_01.png"
								}
						/>
						<img
							onClick={this.handelClick.bind(this, '1')}
							alt="select"
							src={
								(this.props.floor === 1) ?
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525846497-ButtonsActive_02.png" :
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492522920597-BUttons_02.png"
								}
						/>
						<img
							onClick={this.handelClick.bind(this, '2')}
							alt="select"
							src={
								(this.props.floor === 2) ?
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525846454-ButtonsActive_03.png" :
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492522920580-BUttons_03.png"
								}
						/>
						<img
							onClick={this.handelClick.bind(this, '3')}
							alt="select"
							src={
								(this.props.floor === 3) ?
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525846480-ButtonsActive_04.png" :
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492522920549-BUttons_04.png"
								}
						/>
						<img
							onClick={this.handelClick.bind(this, '4')}
							alt="select"
							src={
								(this.props.floor === 4) ?
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525846465-ButtonsActive_05.png" :
								"http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492522920567-BUttons_05.png"
								}
						/>
					</Columner>
				</div>
        	</div>
		);
	}
}

export default Controller;