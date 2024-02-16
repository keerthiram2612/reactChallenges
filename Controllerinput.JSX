class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input : " "
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input:"event.target.value"
        })
    }
    render(){
        return(
            <div>
                <input></input>
                <h1>Controller input:{this.state.input}</h1>
            </div>
        )
    }

}