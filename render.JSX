const apple = function(){
   return(
    <div>
<li>Apples</li>
<li>Blueberries</li>
<li>Strawberries</li>
<li>Bananas</li>
    </div>
   )
}

class TypesOfFood extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id = "root">
            <apple/>
            </div>
        )
    }
}
ReactDOM.render(<TypesOfFood/>,document.getElementById("root"));