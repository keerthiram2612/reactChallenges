class MyApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"keerthana"
        }
    }
    render(){
        return(
            <div>
                <Navbar name={this.state.name}/>
            </div>
        )
    }
}
class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Hello,my name is:{this.props.name}</h1>
            </div>
        )
    }
}