import {
  incrementCounter,
  loadCount,
  saveCount,
  Action,
  Store,
} from '@notifications-stack/client-state';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { CounterComponent, ICounterProps } from '../components';

export type CounterOwnProps = {
  label: string;
  store?: Store.Sample;
};

const mapStateToProps = (state: Store.Sample) => ({
  counter: state['@notifications-stack/counter'],
  isSaving: state['@notifications-stack/isSaving'],
  isLoading: state['@notifications-stack/isLoading'],
  error: state['@notifications-stack/error'],
});

const mapDispatchToProps = (dispatch: Function) => ({
  increment: (n: number) =>
    dispatch(incrementCounter(n)),
  load: () =>
    dispatch(loadCount(null)),
  save: (value: number) =>
    dispatch(saveCount({ value })),
});

// const stateProps = mapStateToProps;
// const dispatchProps = returntypeof(mapDispatchToProps);
// type StateProps = typeof stateProps;
// type DispatchProps = typeof dispatchProps;

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
export const Counter: React.ComponentClass<CounterOwnProps> =
connect<any, any, CounterOwnProps>(mapStateToProps, mapDispatchToProps)(CounterComponent);

