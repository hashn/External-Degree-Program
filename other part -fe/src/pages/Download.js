import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
    import { ComponentToPrint } from './ComponentToPrint';
export class Download extends Component {
    
  
          render() {
              return (
              <div>
                  <ReactToPrint
                  trigger={() => {
                      return <a href="#">Print this out!</a>;
                  }}
                  content={() => this.componentRef}
                  />
                  <ComponentToPrint ref={el => (this.componentRef = el)} />
              </div>
              );
          }
}

export default Download
