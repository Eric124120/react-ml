/**
 * Created by huangchengwen on 16/12/26.
 */

const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;

const rootRouter = [
	{
		path: '/',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoList').default)
			}, 'DemoList')
		}
	}, {
		path: '/button',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/button').default)
			}, 'DemoButton')
		}
	}, {
		path: '/actionsheet',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoActionSheet').default)
			}, 'DemoActionsheet')
		}
	}, {
		path: '/checkbox',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoCheckbox').default)
			}, 'DemoCheckbox')
		}
	}, {
		path: '/flex',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoFlex').default)
			}, 'DemoFlex')
		}
	}, {
		path: '/form',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoForm').default)
			}, 'DemoForm')
		}
	}, {
		path: '/modal',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoModal').default)
			}, 'DemoModal')
		}
	}, {
		path: '/search',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoSearch').default)
			}, 'DemoSearch')
		}
	}, {
		path: '/switch',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoSwitch').default)
			}, 'DemoSwitch')
		}
	}, {
		path: '/toast',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoToast').default)
			}, 'DemoToast')
		}
	}, {
		path: '/tab',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoTab').default)
			}, 'DemoTab')
		}
	}

]

ReactDOM.render(
	(
		<Router history={hashHistory} routes={ rootRouter }></Router>
	),
	document.getElementById('app')
);
