class MyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Visibility:false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
      toggleVisibility(){
            this.setState (state=>({
              Visibility:!state.Visibility
            }))
        }
            render(){
                if(this.Visibility){
                    return(
                        <div>
                    <button onClick = {this.toggleVisibility}Click me></button>
                    <h1>Now you see me!</h1>
                    </div>
                    )
                }
                else{
                    return(
                        <div>
                            <button onClick = {this.toggleVisibility}>Click me</button>
                        </div>
                    )
                }
                
            }
       
   
    
}