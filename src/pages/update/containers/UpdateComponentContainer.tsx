import { connect } from 'react-redux';
import { fetchComponent, updateComponent } from '../actions/componentUpdateActions';
import UpdateComponent from '../../../components/UpdateComponent';
import {RootState} from "../../../misc/store";

const mapStateToProps = (state: RootState) => ({
    loading: state.updateComponent.loading,
    component: state.updateComponent.component,
    error: state.updateComponent.error,
});

const mapDispatchToProps = {
    fetchComponent,
    updateComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);
