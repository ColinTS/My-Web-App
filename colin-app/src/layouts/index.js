import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ScrollEvent from 'react-onscroll';

import './index.css'

const headerStyle = {
      background: 'grey',
      marginBottom: '1.45rem',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: '99'
}



const Header = () => (

  <div className='header'
    style={headerStyle}
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

class TemplateWrapper extends Component {
  constructor(props) {
        super(props);
 
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
    }
 
    handleScrollCallback() {
        console.log("A scroll event occurred!");
    }

  modHeader = () => {
    headerStyle.background = 'white'
    console.log('scroll')
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
      <Header />
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
