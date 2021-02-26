import React, { Component } from 'react';
import Transformer from '../Components/Transformer';


class TransformersSection extends Component {

  
  
  render() {
    
   const createCards = () => this.props.transformers.map(transformer => {
      return <Transformer key={transformer.id} transformer={transformer} />
    })

    return (
      <section className = "transformers-section">
        
          {createCards()}
        
      </section>
    );
  }
}

export default TransformersSection;

