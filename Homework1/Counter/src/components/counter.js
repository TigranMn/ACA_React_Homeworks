import React from "react";

class Counter extends React.Component {
   constructor() {
      super()
      this.storage = this.getStorageInfo()
      this.state = {
         count: this.storage.count || 0,
         max : this.storage.max || 10,
         min : this.storage.min || 0,
         step : this.storage.step ||  1,
      }
      
   }

   componentDidUpdate() {
      let storageCount = window.localStorage.getItem('count')
      if(!storageCount) {
         window.localStorage.setItem('count',JSON.stringify({'count': this.state.count}))
      } else {
         let storageItem = JSON.parse(storageCount)
         storageItem.count = this.state.count
         storageItem.max = this.state.max
         storageItem.min = this.state.min
         storageItem.step = this.state.step
         localStorage.setItem('count',JSON.stringify(storageItem))
      }
   }
   getStorageInfo = () => {
      let info = window.localStorage.getItem('count')
      return JSON.parse(info)
   }
   handleAdd = (step) => { 
      this.setState({
         count: this.state.count + step > this.state.max ? +this.state.max : this.state.count + step
      })
   }

   handleSub = (step) => {
      this.setState({
         count: this.state.count - step < this.state.min ? +this.state.min : this.state.count - step
      })
   }
   handleReset = () => {
      this.setState({
         count: 0,
      })

   }
   render() {
      return (
         <div className="container">
           <div className="inputsContainer">
             <div>
               <label htmlFor="max">Max value</label>
               <input id="max" type="number" name="maxValue" defaultValue={this.state.max}
                      onChange = {(e) => this.setState({max:e.target.value || 10}) } />
             </div>
             <div>
               <label htmlFor="min">Min Value</label>
               <input id="min" type="number" name="minValue" defaultValue={this.state.min}
                      onChange = {(e) => this.setState({min:e.target.value || 0}) } /> 
             </div>
             <div>
               <label htmlFor="step">Step</label>
               <input id="step" type="number" name="step" defaultValue={this.state.step}
                      onChange = {(e) => this.setState({step: e.target.value || 1}) } /> 
             </div>
           </div>
           <button onClick={() => { this.handleSub(+this.state.step)}} disabled = {this.state.count ==  this.state.min}>-</button>
           <div>Count: {this.state.count <= this.state.max && this.state.count >= this.state.min ? this.state.count : this.state.min} </div>
           <button onClick={() => { this.handleAdd(+this.state.step)}} disabled = {this.state.count == this.state.max}>+</button>
           <div className="resetBtnContainer">
             <button onClick={this.handleReset}>Reset</button>
      </div>
         </div>
       );
   }
}

export default Counter