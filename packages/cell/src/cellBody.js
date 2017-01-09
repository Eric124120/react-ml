/**
 * Created by huangchengwen on 17/1/9.
 */
import React from 'react';

export default class CellBody extends React.Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, ...others} = this.props;
		return(
				<Component className="ml-list-body" {...others}>
					{ children }
				</Component>
		)
	}
}