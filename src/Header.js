import React from  'react';
import './Header.css';
//const Header=function(){
	//const headerStyle={
    //    textAlign:'center',
    //    padding:20,
    //    background:'#000',
    //    color:'#fff',
    //    textTransform:'uppercase'
    //};
     const Header=function(props)
    {
    return(
    //    <div style={headerStyle}>
        <div className="header">
             {/*Phone Directory*/}
            {props.heading}
        </div>
    )
}

export default Header; 