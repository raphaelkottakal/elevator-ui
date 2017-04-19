import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';

const Linker = (props) => {

	const handelClick = (e) => {
		const href = e.target.closest('a').href;
		ReactGA.event({
	      category: 'Radium',
	      action: props.gaAction,
	      label : href
	    });
	}

	return (
		<a
			onClick={handelClick}
			style={props.style}
			href={props.href}
			target={(props.newWindow)?'_blank':'_self'}>
			{props.children}
		</a>
	);
}

Linker.propTypes = {
	href: PropTypes.string.isRequired,
	newWindow: PropTypes.bool,
	style: PropTypes.object,
	gaAction: PropTypes.string
}

Linker.defaultProps = {
	newWindow: true,
	gaAction: 'Linker'
}

export default Linker;