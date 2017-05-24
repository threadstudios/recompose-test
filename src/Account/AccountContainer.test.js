import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import testApp from '../redux/reducers'
import {successHandler, errorHandler} from '../redux/actions';
import AccountContainer from './AccountContainer';
import Account from './Account';
import Loading from '../Loading/Loading';
import ErrorComp from '../Error/Error';

const store = createStore(testApp);
const container = mount(<Provider store={store}><AccountContainer /></Provider>);

it('should mount without error', (done) => {
    let loading = container.find(Loading);
    expect(loading.length).toBe(1);
    done();
});

it('should show an account component if given the correct data', (done) => {
    store.dispatch(successHandler());
    let account = container.find(Account);
    expect(account.length).toBe(1);
    done();
});

it('should show an error component if given a bad response', (done) => {
    store.dispatch(errorHandler());
    let error = container.find(ErrorComp);
    expect(error.length).toBe(1);
    done();
})

it('should show an error component if given a bad response - with extra props', (done) => {
    store.dispatch(errorHandler());
    let error = container.find(ErrorComp);
    expect(error.length).toBe(1);
    expect(error.prop('errorMessage')).toBe('We are going to need a bigger boat.')
    done();
})
