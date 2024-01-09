const Child = function(){
    return(
        <div>Iam the child</div>
    );
};
class Parent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Child/>
            </div>
        )
    }
}