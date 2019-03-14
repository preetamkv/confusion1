import React, { Component } from 'react';
import Menu from './MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect (dishID) {
    this.setState({
      selectedDish: dishID
    });
  }

  render() {
    
    if(this.state.selectedDish == null) {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
          onClick={(dishID) => this.onDishSelect(dishID)} />
        <Footer />
      </div>
    );}
    else {
      return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
          onClick={(dishID) => this.onDishSelect(dishID)} />
        <Dishdetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );}
  }
}

export default Main;
