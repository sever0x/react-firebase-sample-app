import { connect } from 'react-redux';
import ReadComponents from '../../../components/ReadComponents';
import {RootState} from "../../../misc/store";
import {fetchComponents} from "../actions/componentReadActions";

const mapStateToProps = (state: RootState) => ({
    loading: state.readComponents.loading,
    components: state.readComponents.components,
    error: state.readComponents.error,
});

const mapDispatchToProps = {
    fetchComponents,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadComponents);
