const CurrentDate = (props) =>{
    return(
        <div>
            <p>The current date is:{props.date}</p>
        </div>
    );
};
class Calendar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
         <div>
            <CurrentDate date = {Date()}/>
         </div>
        )
    }
}