import React,{Component} from 'react';
import Header from './Header.js';
class App extends Component{
	render()
	{
		let subscribers=[
  {
    id:1,
    name:"Ashish",
    phone:9876543210
  },
  {
    id:2,
    name:"Thakur",
    phone:9876543210
  }
];
		 return (
		 	<div>
		 	<Header />
		 	<div className="component-body-container">
		 	<button className="custom-btn add-btn">Add</button>
		 	<div className="grid-container heading-container">
		 	<span className="grid-item name-heading">Name</span>
		 	<span className="grid-item phone-heading">Phone</span>
		 	
		 	</div>
		 	{
         subscribers.map(function(sub)
         {
           return <div key={sub.id} className="grid-container">
             <span className="grid-item">{sub.name}</span>
             <span className="grid-item">{sub.phone}</span>
             <span className="grid-item action-btn-container">
               <button className="custom-btn delete-btn">Delete</button>

             </span>
             </div>
         })
       }
		 	</div>
		 	</div>

		 	 );
		 	 }
}
export default App;