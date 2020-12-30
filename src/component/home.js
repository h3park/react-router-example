import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {name: "hr"}
        console.log('1 - constructor')
    }

    static getDerivedStateFromProps(){
        console.log('2 - getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('4 - componentDidMount')
    }

    componentWillUnmount(){
        console.log('x - componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('x - shouldComponentUpdate')
	    console.log(this.state) //hr
	    console.log(nextState) //HR

	    if(this.state.name === 'HR'){
		    return false
	    }
	    return true
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('x - componentDidUpdate');
        console.log(prevState) //hr
        console.log(this.state) //HR
    }

    render(){
        console.log('3 - render')
        return(
            <div>
                <p>{this.state.name}</p> <br/>
                <button onClick={()=>this.setState({name: 'HR'})}>To UpperCase</button>
            </div>
        );
    }
}
export default Home;
  