import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser,getUsers } from "./actions/userActions";

function App(props) {
  const onUpdateUser = () => {
    // props.dispatch(updateUser("New TommyXYZ"));
   props.onUpdateUser("New TommyXYZ01");
    
  };
  console.log("App Comp=>", props);
  return (
    <div className="App">
      <h1>App Component</h1>
      <h2>{props.user}</h2>
      <button onClick={onUpdateUser}>Change The Name</button>
      <button onClick={()=>{props.onGetUsers();}}>Change The Name From API</button>
    </div>
  );
}
const mapStateToProps = (state,props) => ({
  user: state.user,
});

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers:getUsers
};

/*const mergeProps=(propsFromState,propsFromDispatch,ownProps) =>{
  console.log("propsFromState:",propsFromState);
  console.log("propsFromDispatch:",propsFromDispatch);
  console.log("ownProps:",ownProps);
  return {}
}*/

// export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);
export default connect(mapStateToProps,mapDispatchToProps)(App);
