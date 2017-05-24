import { connect } from 'react-redux';
import Account from './Account';
import ErrorDisplay from '../Error/Error';
import Loading from '../Loading/Loading';
import { editAccount, requestWithSuccess, requestWithError } from '../redux/actions/';
import { branch, renderComponent, mapProps, compose, lifecycle, withProps } from 'recompose';

const mapStateToProps = (state, ownProps) => {
  return state.account;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountClick: () => {
      dispatch(editAccount({id : 'Boo'}))
    },
    loadWithSuccess: () => {
      dispatch(requestWithSuccess(dispatch));
    },
    loadWithError: () => {
      dispatch(requestWithError(dispatch));
    }
  }
}

const withLoadingComponent = branch(
  props => props.loading,
  renderComponent(Loading)
);

const withErrorComponent = branch(
  props => props.error,
  compose(
    withProps({errorMessage : 'We are going to need a bigger boat.'}),
    renderComponent(ErrorDisplay)
  )
)

const withFetcher = branch(
  props => !props.accountReference,
  lifecycle({
    componentDidMount() {
      this.props.loadWithSuccess()
    }
  })
)

const mapAEMProps = (props) => {
  const mappedProps = {AEM : {}};
  for(let prop in props) {
    if(prop.substr(0, 3) === 'aem'){
      mappedProps.AEM[prop.substring(3)] = props[prop];
    } else {
      mappedProps[prop] = props[prop];
    }
  }
  return mappedProps;
}

const AccountContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  mapProps(mapAEMProps), // Maps our AEM props nicely
  withLoadingComponent, // Displays the loading component if we are loading
  withErrorComponent, // Displays the error component if we have an error
  withFetcher // Fetches our data initially if it is not populated
)(Account)

export default AccountContainer;