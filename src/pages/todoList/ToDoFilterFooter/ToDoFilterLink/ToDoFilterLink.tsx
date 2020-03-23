import {connect} from "react-redux";
import {setVisibilityFilter} from "../../../../redux/actions/todo/visiable-action";
import ToDoLink from "./ToDoLink/ToDoLink";

const mapStateToProps = (state, ownProps: {filter: any}) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoLink);
