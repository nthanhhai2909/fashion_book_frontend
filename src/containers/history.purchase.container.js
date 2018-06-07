import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from "../actions/user.action";
import HistoryPurchase from '../components/purchase.history/purchase.history'
class HistoryPurchaseContainer extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.props.actions.auth()
    }
    render() {
        return(
            <div>
                <HistoryPurchase
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({

  });
  
  const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(userActions, dispatch),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(HistoryPurchaseContainer);