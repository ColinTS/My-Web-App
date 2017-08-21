import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ScrollEvent from 'react-onscroll';

import './index.css'

class Header extends Component {
  
  render(){
    return(
      <div className='header'
    style={{
      background: `${this.props.headerColor}`,
      marginBottom: '1.45rem',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: '99'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1160,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Gatsby
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>  
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </h2>
    </div>
  </div>
    )
  }
}

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: 'grey'
    }

    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }
 
    handleScrollCallback() {
        this.setState({
          headerColor: 'white'
        })
        console.log("A scroll event occurred!");
    }

  render(){
    return(
      <div >
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header 
        headerColor={this.state.headerColor}
      />
      <div 
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {this.props.children()}
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        
      </div>
    </div>
    )
  }
}
  

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
