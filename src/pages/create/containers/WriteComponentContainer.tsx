import { connect } from 'react-redux';
import { createComponent } from '../actions/componentCreateActions';
import WriteComponent from '../../../components/WriteComponent';

const mapStateToProps = (state: any) => ({
    loading: state.createComponent.loading,
    component: state.createComponent.component,
    error: state.createComponent.error,
});

const mapDispatchToProps = {
    createComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteComponent);
