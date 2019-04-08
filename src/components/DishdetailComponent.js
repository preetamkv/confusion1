import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
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

function RenderComments({comments}) {
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
				<h4> Comments</h4>cd
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

const Dishdetail = (props) => {
	if(props.selectedDish != null) {
	return (
		<div class="container">

			<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.selectedDish.name}</h3>
                    <hr />
                </div>                
            </div>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish = {props.selectedDish} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<ul className="list-unstyled">
						<RenderComments comments = {props.comments} />
					</ul>
				</div>
			</div>
		</div>
	);}
}

export default Dishdetail;