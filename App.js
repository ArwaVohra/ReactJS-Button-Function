import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num : 50
        }
    }
    add(props){
        this.setState({num : this.state.num +1})
        console.log('+ button was clicked')
    }

    sub(props){
        this.setState({num : this.state.num -1})
        console.log('- button was clicked')
    }
    render(){
        return(
            <div>
            <div>
                CLICK ON '+' to Increase count of given number OR click on '-' to decrease the count :
            </div>
            {this.state.num}<br/>
            <input type="button" value = "+" onClick={this.add.bind(this)}/>
            <input type ="button" value="-" onClick={this.sub.bind(this)}/>
            </div>
            
        )
    }
}
export default App;