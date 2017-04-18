import React, { Component, PropTypes } from 'react';
import Linker from './Linker';

class Imager extends Component {
	constructor(props) {
		super(props);

		const src = this.rewriteUrl();

		this.state = {
			loaded: !props.overlay,
			loadingHeight: 0,
			src
		}
	}
	insertString(str0,idx, rem, str) {
	    return str0.slice(0, idx) + str + str0.slice(idx + Math.abs(rem));
	};
	rewriteUrl() {
		let src = this.props.src;
		if (this.props.src.indexOf('http://assets.myntassets.com/') !== -1 &&
			this.props.src.indexOf('http://assets.myntassets.com/w_') === -1) {

			src = this.insertString(this.props.src,29,0,'w_480,q_60,fl_progressive/');
		}
		return src;
	}
	componentDidMount() {

		// const width = this.refs.loading.clientWidth;
		// this.setState({loadingHeight: width * this.props.ratio});

		const image = new Image();
		image.src = this.state.src;
		image.onload = () => {
			this.setState({loaded: true});
		}
	}
	render() {

		const css = {
			loading: {
				width: '100%',
				height: this.state.loadingHeight,
				backgroundColor: 'gray',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 20,
				textTransform: 'uppercase',
				color: 'white'
			}
		}

		if (this.state.loaded) {
			if (this.props.href) {

				return(
					<Linker gaAction={this.props.gaAction} href={this.props.href}>
						<img style={this.props.style} src={this.state.src} alt="Myntra" />
					</Linker>
				);
			}
				return(
					<img style={this.props.style} src={this.state.src} alt="Myntra" />
				);
		}

		return(
			<div style={css.loading} ref="loading">
				Loading&hellip;
			</div>
		);
	}
}

Imager.propTypes = {
	src: PropTypes.string.isRequired,
	href: PropTypes.string,
	ratio: PropTypes.number,
	gaAction: PropTypes.string,
	overlay: PropTypes.bool,
	style: PropTypes.object
}

Imager.defaultProps = {
	ratio: 1,
	gaAction: 'Banner',
	overlay: false
}

export default Imager;
