import React, { Component } from 'react'

const PlaceholderContext = React.createContext()

class PlaceholderProvider extends Component {

   state = {
      home_ligitation: 1,
      contracts: 1,
      hr_consulting: 1,
      ee_law: 1
   }

   handleOpacityChange = (e, imgRef) => {
      // AS EACH UNIQUE PHOTO IS LOADED IT'S PLACEHOLDER OPACITY IS PERMANENTLY SET TO 1
      // BEING THE PHOTO IS NOW CACHED ON THE DEVICE, I THINK THAT'S WHY
      this.setState({
         [imgRef]: 0
      })
   }

   render() {
      return (
         <PlaceholderContext.Provider value={{
            placeholderOpacities: this.state,
            handleOpacityChange: (e, imgRef) => this.handleOpacityChange(e, imgRef)
         }}>
            {this.props.children}
         </PlaceholderContext.Provider>
      )
   }
}

export { PlaceholderContext, PlaceholderProvider }