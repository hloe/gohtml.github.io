import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import WorksItem from './WorksItem';

function SelectCategory(props) {
  const categories = ['All', 'React', 'Web Pages', 'Emails'];
  
  return (
    <ul className="works-menu works__menu">
    {categories.map(function(category, index) {
      return(
        <li 
          key={index}
          className={category === props.selectedCategory ? 'works-menu__item works-menu__item_active' : 'works-menu__item'}
          onClick={props.onSelect.bind(null, category)}
        >
          {category}
        </li>
      );
    })}
    </ul>
  );
}

function WorksList(props) {
  let results;
  
  if (props.worksObject.selectedCategory === 'All') {
    return (
      <div 
        className="wrapper-works works__content container container__no-paddings"
      >
        {props.worksObject.data.map(function(item, index) {
          return <WorksItem item={item} key={index} />
        })}
      </div>
    );
  } else {
    return(
      <div 
        className="wrapper-works works__content container container__no-paddings"
      >
        {props.worksObject.data.filter(function(item) {
          return item.category === props.worksObject.selectedCategory;
          }).map(function(item, index) {
            return <WorksItem item={item} key={index} />
        })}
      </div>
    );
  }
  
  return null; 
}

class Works extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: null,
      errorMessage: '',
      selectedCategory: 'All'
    };
    
    this.getWorks = this.getWorks.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }
  
  componentDidMount() {
    this.getWorks();
  }
  
  updateCategory(category) {
    this.setState(function() {
      return {
        selectedCategory: category
      }
    });
  }
  
  getWorks() {
    axios.get('https://api.myjson.com/bins/pwmnt')
      .then(function (response) {
        return response.data.works;            
      })
      .then(function (data) {
        this.setState(function() {
          return {
            data: data
          }
        });
      }.bind(this))
      .catch(function (error) {  
        console.log(error);
        this.setState(function() {
          return {
            errorMessage: this.errorMessage()
          }
        });
      }.bind(this));  
  }
  
  errorMessage() {
    return(
      <div className="section__content wrapper-works">
        Sorry, works are not available at the moment.
      </div>
    );
  }
  
  render() {
    return(
      <section className="works">
        <div className="wrapper-light">
          <header className="works__header container">
            <h2 className="works__title">Portfolio</h2>
            <SelectCategory
              selectedCategory={this.state.selectedCategory}
              onSelect={this.updateCategory}
            />
          </header>
        </div>
         {!this.state.data && !this.state.errorMessage 
          ? <Loading />
          : <WorksList worksObject={this.state} />  
        }
        {this.state.errorMessage}
      </section>

    );
  }
}

export default Works;
