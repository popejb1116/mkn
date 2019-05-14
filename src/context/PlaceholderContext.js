import React, { Component } from 'react'

const PlaceholderContext = React.createContext()

class PlaceholderProvider extends Component {

   state = {
      home_ligitation: 1
   }

   handleOpacityChange = () => {
      console.log('hOC')
      
      this.setState({
         home_ligitation: 0
      })
   }

   render() {
      return (
         <PlaceholderContext.Provider value={{
            placeholderOpacities: this.state,
            handleOpacityChange: this.handleOpacityChange
         }}>
            {this.props.children}
         </PlaceholderContext.Provider>
      )
   }
}

export { PlaceholderContext, PlaceholderProvider }