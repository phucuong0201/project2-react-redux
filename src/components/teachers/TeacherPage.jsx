import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as teacherActions from '../../actions/teacherActions';

class TeacherPage extends React.Component {
    render() {
        const {teachers} = this.props;
        return (
            <div>
                <h1>Teacher List</h1>
                {teachers.map((teacher, index) => <div key={index}>{teacher.name}</div> )}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        teachers: state.teachers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(teacherActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPage);