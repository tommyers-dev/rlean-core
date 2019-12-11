# @react-ent/core

The purpose of this package is to remove the boilerplate code that becomes unruly when working in enterprise level React applications. This package handles the state, storage, middleware, API calls, and suggests structure and implementation in the Web app. There is no need for smart components or dumb components, only functional components. All global state objects have classes that extend the model class. Model provides a number of attributes that tells this package how to handle the behavior of that object, and the state for that object can be managed by invoking any of the package's functions and custom hooks: useGet, save, remove, removeAll, post, put, patch, and del.

## Getting Started

### Installing

It's recommended that you fork the [boilerplate template](https://github.com/tommyers-dev/react_ent_boilerplate) rather than starting with a new installation, but if you'd prefer to install in an existing project using your preferred structure, follow these steps:

`npm i @react-ent/core --save`

Create **models** and **utilities** folders somewhere in your app. In the [boilerplate template](https://github.com/tommyers-dev/react_ent_boilerplate), that's located at **lib/models** and **lib/utilities**. Make sure each of these folder contain an index.js file to export all models and utilities.

Add a configuration file that will be used when initializing the @react-ent/core package. In the [boilerplate template](https://github.com/tommyers-dev/react_ent_boilerplate), that's located at **config/reactEnt.js**.

Example configuration:

> Note: logToConsole is set to true for the example. A better approach would be to set it to something like `logToConsole: process.env.REACT_APP_ENV !== 'production'` so your global state is not visible to your end users in the console.  
> Also, getToken() needs to handle token refreshes for your application. This is something I'd like to address in the future.

```js
import * as models from 'lib/models';
import * as utilities from 'lib/utilities';
import { getToken } from 'config';

export const reactEnt = {
  models: models,
  utilities: utilities,
  api: {
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    uri: process.env.REACT_APP_API_URI
  },
  logToConsole: true
};
```

In the index.js file at the root of the project, include the following imports:

```js
import { ReactEnt, StateProvider } from '@react-ent/core';
import { reactEnt as config } from 'config';
```

Initialize the @react-ent/core package:

```js
ReactEnt.init(config);
```

And wrap the App component in the StateProvider:

```js
ReactDom.render(
  <StateProvider>
    <App />
  </StateProvider>
);
```

That's it! Now you can start using @react-ent/core functions within the project. For a working example of the configuration above, please refer to the [boilerplate template](https://github.com/tommyers-dev/react_ent_boilerplate) on github.

### Recommended structure

Please see the [boilerplate template](https://github.com/tommyers-dev/react_ent_boilerplate) project on github for a working example of the recommened structure.

## Using Model and its functions and attributes

This is an example of a model that doesn't get populated from an API call.

```js
import { Model } from '@react-ent/core';

export class DemoModel extends Model {
  get initialState() {
    return {
      demoModel: null
    };
  }

  get types() {
    return {
      SET_DEMO_MODEL: 'SET_DEMO_MODEL'
    };
  }

  reducer(state, action) {
    switch (action.type) {
      case this.types.SET_DEMO_MODEL:
        return {
          ...state,
          ...action.demoModel
        };

      default:
        return state;
    }
  }

  async updateState(demoModel, type) {
    return {
      type: this.types.SET_DEMO_MODEL,
      demoModel
    };
  }
}
```

To populate this model from an API call, include the following attribute:

```js
get getPath() {
	return '/SomeApiPath';
}
```

If this API call includes path params, use the following syntax:

```js
get getPath() {
	return '/SomeApiPath/:id';
}
```

If query string params will be used, don't include the params in the getPath attribute. The query string params will be built out for you based on what is provided as params when using the useGet custom hook.

### Model Attributes

The following attributes are required for all classes extending Model.

```js
get initialState() {
	demoModel: null
}

get types() {
	SET_DEMO_MODEL: 'SET_DEMO_MODEL'
}
```

The following attributes are optional for all classes extending Model.

getPath is the path that will be used when the model is passed as param in useGet.

```js
get getPath() {
	return null;
}
```

postPath is the path that will be used when the model instance is passed in post.

```js
get postPath() {
	return null;
}
```

putPath is the path that will be used when the model instance is passed in put.

```js
get putPath() {
	return null;
}
```

deletePath is the path that will be used when the model instance is passed in del.

```js
get deletePath() {
	return null;
}
```

patchPath is the path that will be used when the model instance is passed in patch.

```js
get patchPath() {
	return null;
}
```

nullableParams is false by default. If an optional param is not needed by the web app, simply omit it. the purpose of this attribute is to prevent unnecessary calls to the API before the param objects have been initialized. This is available as an override in case null is a valid value for a param. This cannot be set for individual params, but rather at the model level.

```js
get nullableParams() {
	return false;
}
```

If apiUriOverride is set, the api call will use the apiUriOverride path instead of the path provided by the config.

```js
get apiUriOverride() {
	return null;
}
```

If persistData is false, data isn't stored to storage. Api is called every time. This will override preferStore (because there's no store). This is true by default.

```js
get persistData() {
	return true;
}
```

If preferStore is true, it will rely on storage instead of calling the API repeatedly. This will override progressiveLoading.

```js
get preferStore() {
	return false;
}
```

If progressiveLoading is true, it will return data in storage while the API retrieves the updated values from the database and will do a deepCompare to check for changes. If there are changes, it will dispatch an action to update the object.

```js
get progressiveLoading() {
	return false;
}
```

If syncInterval set, will create a timer that will re-sync the data. Should be in milliseconds.

```js
get syncInterval() {
	return null;
}
```

If syncAfterTimeElapsed is set, it will make a call to the API after a certain amount of time (in milliseconds) has elapsed. If the time has not elapsed, it will use the store. This will not cause the data to refresh has soon as the time has elapsed, but new component renders will trigger a new API call.

```js
get syncAfterTimeElapsed() {
	return null;
}
```

### Model Functions

The functions are required and include reducer and updateState. The updateState function is your action. This is what will be called to update your object in state. Type is not needed if there is only one type in your model.

```js
reducer(state, action) {
	switch (action.type) {
		case this.types.SET_DEMO_MODEL:
			return {
				...state,
				...action.demoModel
			};

		default:
			return state;
	}
}

async updateState(demoModel, type) {
	return {
		type: this.types.SET_DEMO_MODEL,
		demoModel
	};
}
```

If using the optional type to update a part of the object in state instead of the entire object, just use a switch statement in updateState like in the reducer, and pass the type as a parameter in useGet, save, remove, post, put, patch, and del.

## Using Utility and its attributes

Utility is a similar base class as Model, but it's used if your class will not have a value maintained in state. All attributes are optional.

### Utility attributes

postPath is the path that will be used when the model instance is passed in post.

```js
get postPath() {
	return null;
}
```

putPath is the path that will be used when the model instance is passed in put.

```js
get putPath() {
	return null;
}
```

deletePath is the path that will be used when the model instance is passed in del.

```js
get deletePath() {
	return null;
}
```

patchPath is the path that will be used when the model instance is passed in patch.

```js
get patchPath() {
	return null;
}
```

nullableParams is false by default. If an optional param is not needed by the web app, simply omit it. the purpose of this attribute is to prevent unnecessary calls to the API before the param objects have been initialized. This is available as an override in case null is a valid value for a param. This cannot be set for individual params, but rather at the model level.

```js
get nullableParams() {
	return false;
}
```

If set, the api call will use the apiUriOverride path instead of the path provided by the config.

```js
get apiUriOverride() {
	return null;
}
```

## Custom hooks and functions

### useStateValue

Use the useStateValue custom hook to access global state and/or the dispatch function.

```js
import { useStateValue } from '@react-ent/core';

const [{ stateObject, anotherStateObject }, dispatch] = useStateValue();
```

### useGet

The useGet custom hook is what populates all of your state objects based on whatever attributes are set in your model, and can be called from any component that relies on that state object. A dependency will be created for the param values, so if the params change, the custom hook will fire again. If no params are set, the custom hook will fire only once. useGet also takes an optional type param. Note that the component is wrapped in React Memo, as all components using state values should be. This package uses Context API under the hood and this will prevent components from re-rendering unnecessarily.

> Note: this also relies on @react-ent/utils to check that ID of someStateValue exists before attempting to use the value. This approach also assumes that demoModel cannot be null, and that the initial state value is null, but an empty value from the API is a valid value.

```js
import React, { memo } from 'react';
import { useStateValue, useGet } from '@react-ent/core';
import { Spinner } from 'some-ui-library';
import { DemoModel } from 'lib/models';

export const MyReactComponent = memo(() => {
	const [{ demoModel, someStateValue, isLoading }] = useStateValue();

	const id = get(someStateValue, 'id', null);
	useGet(new DemoModel(), { id: id });

	if (!demoModel || isLoading.demoModel) {
		return <Spinner />
	}

	return (
		// some component dependent on demoModel
	)
});
```

In this case, if the getPath attribute looks like this and the value of id is 1:

```js
getPath() {
	return '/SomeApiPath/:id';
}
```

The call will look like: (uri-from-config)/SomeApiPath/1

If the getPath looks like this and the value of id is 1:

```js
getPath() {
	return '/SomeApiPath';
}
```

The call will look like: (uri-from-config)/SomeApiPath?id=1

### post

The post function is an asynchronous function used to post against the API, and takes model, params, and an optional dispatch function. If dispatch is included, the function assumes that we're getting an updated object back from the api (like the object featuring an auto-increment ID), so it will update the state object for that model with the response data. If this is unintended, do not include the dispatch function.

```js
import { useStateValue, post } from '@react-ent/core';
import { DemoModel } from 'lib/models';

const [, dispatch] = useStateValue();

const function updateDb = async () => {
	await post(new DemoModel(), { value: 'test' }, dispatch);
}
```

Or, if the ID is being set as a GUID in the web app and no updated value in the response is expected:

```js
import { useStateValue, post } from '@react-ent/core';
import { uuid } from '@react-ent/utils';
import { DemoModel } from 'lib/models';

const [, dispatch] = useStateValue();

const function updateDb = async () => {
	await post(new DemoModel(), { id: uuid(), value: 'test' });
}
```

### patch, put, & del

The patch, put, and del functions are all asynchronous functions that work similarly to the post function, accept there is no expectation of an updated object in the response and therefore no option to pass in the dispatch function. Each of these functions take a model instance and param object and are used to make a patch, put, and delete against the API.

### save

The save function is an asynchronous function that is used when saving a state value, and takes an instance of the model being updated, the new value, the dispatch function made available from the useStateValue custom hook, and an optional type. Saving a value will update state and storage if the persistData attribute is 'true' on the model (the default setting).

```js
import { useStateValue, save } from '@react-ent/core';
import { DemoModel } from 'lib/models'

const [, dispatch] = useStateValue();

const function buttonClicked = async newValue => {
	await save(new DemoModel(), newValue, dispatch);
}
```

### remove

The remove function is an asynchronous function that is used to remove an object from state and storage if applicable, and takes an instance of the model being updated, the dispatch function made available from the useStateValue custom hook, and an optional type.

```js
import { useStateValue, remove } from '@react-ent/core';
import { DemoModel } from 'lib/models'

const [, dispatch] = useStateValue();

const function removeValue = async () => {
	await remove(new DemoModel(), dispatch);
}
```

### removeAll

The removeAll function is an asynchronous function that is used to clear all storage data.

## Built-in models

### IsLoading

IsLoading is a model that is included by default if there are models that make calls against an API to populate one or more objects in state. This can be leveraged to render loading animations.

```js
import { useStateValue } from '@react-ent/core';
import { Spinner } from 'some-ui-library';
import { DemoModel } from 'lib/models'

export const function MyReactComponent = () => {
	const [{ demoModel, isLoading }] = useStateValue();

	if (isLoading.demoModel) {
		return <Spinner />
	}

	return (
		// component dependent on demoModel
	)
}
```

### LastUpdated

LastUpdated is a model that is include by default if there are models that make calls against the API to populate one or more objects in state. This state object is used by the syncAfterTimeElapsed model attribute, but is also useful for debugging.

## Tips

- Wrap your functional components in [React memo](https://reactjs.org/docs/react-api.html#reactmemo). This package uses Context API for state management. Using [React memo](https://reactjs.org/docs/react-api.html#reactmemo) will prevent your components from re-rendering unnecessarily when there are state changes that your components don't care about.
- Make sure models and utilities are included in the export files in the lib/models and lib/utilities folder. If they are not all exported from the index.js files in each of those folders, those objects will not work.

## Coming soon

- Webhook integration.
- Better logging and error handling support.
- The ability to create custom API handlers to make API management more flexible, such as adding GraphQL support. If this goes well, I'll look into implementing custom handlers for other areas like storage.
- CLI tool to generate models for you, possibly one that can read a swagger.json file.
