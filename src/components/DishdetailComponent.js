import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

	renderDish(dish) {
		if(dish!=null) {
			return (
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle> {dish.name} </CardTitle>
						<CardText> {dish.description} </CardText>
					</CardBody>
				</Card>
			);
		}
		else {
			return(
				<div></div>
			);
		}
	}

	renderComments(comments) {
		if(comments != null) {
			const _comment = comments.map((comment) => {
				return (
					<div>
						<li key={comment.id}>
							<p>{comment.comment}</p>
							<p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
						</li>
					</div>
				);
			});
			return (
				<div>
					<h4> Comments</h4>
					{_comment}
				</div>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}

	render() {
		return (
			<div class="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.selectedDish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						<ul className="list-unstyled">
							{this.renderComments(this.props.selectedDish.comments)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Dishdetail;