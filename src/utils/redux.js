const Redux = require('redux');

module.exports = {
  combineReducers: function( reducers ) {
    return Redux.combineReducers( reducers )
  },
  createUtil: function createUtil(moduleName) {
    defineAction = function (actionName) {
      return moduleName +"/"+ actionName;
    }
    createAction = function(type) {
      return function actionCreator(payload) {
        const action = {
          type: type
        };
        if (payload != null) {
          action.payload = payload;
        }
        return action;
      };
    }
    createReducer = function(cases, defaultState) {
      defaultState = defaultState || {};
      return function reducer(state, action) {
        action = action || {};
        if (state === undefined) {
          return defaultState;
        }
        for (var caseName in cases) {
          if (action.type === caseName) {
            return cases[caseName](state, action);
          }
        }
        return state;
      };
    }

    return {
      defineAction: defineAction,
      createAction: createAction,
      createReducer: createReducer
    }
  }
};
