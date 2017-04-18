import React, { PropTypes } from 'react';
import { assignIn } from 'lodash';

const Columner = (props) => {

	const childWidth = 100 / props.children.length;
	const css = {
		wrapper: {
			lineHeight: 0
		},
		column: {
			width: childWidth + '%',
			height: 'auto',
			float: 'left'
			// display: 'inline-block'
		}
	}

	if (props.style) {
		assignIn(css.wrapper, props.style);
	}

	const output = props.children.map((val,i)=>{
		return(
			<div style={css.column} key={i}>
				{val}
			</div>
		);
	});

	return (
		<div style={css.wrapper}>
			{output}
		</div>
	);
}

Columner.propTypes = {
	children: PropTypes.array.isRequired,
	style: PropTypes.object,
}

Columner.defaultProps = {
	// newWindow: true,
	// gaAction: 'Linker'
}

	export default Columner;