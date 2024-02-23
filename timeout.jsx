class MyComponents extends  React.Component{
 constructor(props){
    super(props)
    this.state={
        activateUsers:" "
    }
 }
 componentDidMount(){
    setTimeout(()=>{
        this.setState({
            activateUsers:2612
        })
    },2500);
 }
 render(){
    return(
        <div>
            <h1>Activate User:{this.state.activateUsers}</h1>
        </div>
    )
 }
}