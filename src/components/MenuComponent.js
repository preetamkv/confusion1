import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent'

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null
		};
	}

	onDishSelect (dish) {
		this.setState({
			selectedDish: dish
		});
	}

	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div className="col-12 col-md-5 m-1">
					<Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
						<CardImg width = "100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
                	</Card>
				</div>
			);
		});

		if(this.state.selectedDish != null) {
			return (
				<div className="container">
					<div className="row">
						{menu}
					</div>

					<Dishdetail selectedDish={this.state.selectedDish} />
				</div>
			);
		}
		else {
			return (
				<div className="container">
					<div className="row">
						{menu}
					</div>
				</div>
			);
		}
	}

}

export default Menu;