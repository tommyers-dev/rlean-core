# @rlean/core

The purpose of this package is to remove the boilerplate code that becomes unruly when working in enterprise level React applications. This package handles the state, storage, middleware, API calls, and suggests structure and implementation in the Web app. There is no need for smart components or dumb components, only functional components. All global state objects have classes that extend the model class. Model provides a number of attributes that tells this package how to handle the behavior of that object, and the state for that object can be managed by invoking any of the package's custom hooks and functions: useGet, usePost, usePut, usePatch, useDelete, useSave, useRemove, and removeAll.

## Getting Started

### Installing

It's recommended that you fork the [boilerplate template](https://github.com/tommyers-dev/rlean_boilerplate) rather than starting with a new installation, but if you'd prefer to install in an existing project using your preferred structure, follow these steps:

`npm i @rlean/core --save`

Create **models** and **utilities** folders somewhere in your app. In the [boilerplate template](https://github.com/tommyers-dev/rlean_boilerplate), that's located at **lib/models** and **lib/utilities**. Make sure each of these folder contain an index.js file to export all models and utilities.

Add a configuration file that will be used when initializing the @rlean/core package. In the [boilerplate template](https://github.com/tommyers-dev/rlean_boilerplate), that's located at **config/rLean.js**.

Example configuration:

> Note: logToConsole is set to true for the example. A better approach would be to set it to something like `logToConsole: process.env.REACT_APP_ENV !== 'production'` so your global state is not visible to your end users in the console.  
> Also, getToken() needs to handle token refreshes for your application. This is something I'd like to address in the future.

```js
import * as models from 'lib/models';
import * as utilities from 'lib/utilities';
import { getToken } from 'config';

export const rLean = {
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
import { RLean, StateProvider } from '@rlean/core';
import { rLean as config } from 'config';
```

Initialize the @rlean/core package:

```js
RLean.init(config);
```

And wrap the App component in the StateProvider:

```js
ReactDom.render(
  <StateProvider>
    <App />
  </StateProvider>
);
```

That's it! Now you can start using @rlean/core functions within the project. For a working example of the configuration above, please refer to the [boilerplate template](https://github.com/tommyers-dev/rlean_boilerplate) on github.

### Recommended structure

Please see the [boilerplate template](https://github.com/tommyers-dev/rlean_boilerplate) project on github for a working example of the recommened structure.

## Adapters

This framework uses Axios for API calls and localForage for storage by default. These can be overridden by including your own custom adapters in lib/adapters and including these in your configuration file:

```js
import * as models from 'lib/models';
import * as utilities from 'lib/utilities';
import { ApiAdapter, StorageAdapter } from 'lib/adapters';
import { getToken } from 'config';

export const rLean = {
  models: models,
  utilities: utilities,
  api: {
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    uri: process.env.REACT_APP_API_URI,
    adapter: ApiAdapter
  },
  storage: {
    adapter: StorageAdapter
  },
  logToConsole: true
};
```

An API adapter should have the following structure. Any unnecessary methods can be omitted.

```js
class ApiAdapter {
  async get(apiPayload) {
    const { url } = apiPayload;
    // return fetch
  }

  async post(apiPayload) {
    const { url, data } = apiPayload;
    // return fetch
  }

  async put(apiPayload) {
    const { url, data } = apiPayload;
    // return fetch
  }

  async patch(apiPayload) {
    const { url, data } = apiPayload;
    // return fetch
  }

  async del(apiPayload) {
    const { url, data } = apiPayload;
    // return fetch
  }
}

export default new AxiosAdapter();
```

A storage adapter should have the following structure. All functions are required.

```js
class StorageAdapter {
  async set(key, value) {
    if (!key || value === undefined) {
      throw new Error('Key or value cannot be undefined');
    }

    // setItem
  }

  async get(key) {
    if (!key) throw new Error('Must supply a key in get');

    // return getItem
  }

  async clear() {
    // clear
  }

  async remove(key) {
    if (!key) throw new Error('Must supply a key in remove');

    // removeItem
  }
}

export default new StorageAdapter();
```

## Using Model and its functions and attributes

This is an example of a model that doesn't get populated from an API call. initialState, types, reducer, and updateState can be omitted and the following will be autogenerated by rlean/core.

```js
import { Model } from '@rlean/core';

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

These are the default functions if they are omitted. The updateState function is your action. This is what will be called to update your object in state. Type is not needed if there is only one type in your model.

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

## Custom hooks and functions

### useStateValue

Use the useStateValue custom hook to access global state and/or the dispatch function.

```js
import { useStateValue } from '@rlean/core';

const [{ stateObject, anotherStateObject }, dispatch] = useStateValue();
```

### useGet

The useGet custom hook is what populates all of your state objects based on whatever attributes are set in your model, and can be called from any component that relies on that state object. A dependency will be created for the param values, so if the params change, the custom hook will fire again. If no params are set, the custom hook will fire only once. useGet also takes an optional callback param that will be provided with the state value set in the custom hook, as well as the response if an API call is made. Note that the component is wrapped in React Memo, as all components using state values should be. This package uses Context API under the hood and this will prevent components from re-rendering unnecessarily.

> Note: this also relies on @rlean/utils to check that ID of someStateValue exists before attempting to use the value. This approach also assumes that demoModel cannot be null, and that the initial state value is null, but an empty value from the API is a valid value.

```js
import React, { memo } from 'react';
import { useStateValue, useGet } from '@rlean/core';
import { getValue } from '@rlean/utils';
import { Spinner } from 'some-ui-library';
import { DemoModel } from 'lib/models';

export const MyReactComponent = memo(() => {
	const [{ demoModel, someStateValue, isLoading }] = useStateValue();

	const id = getValue(someStateValue, 'id', null);
  useGet({ model: DemoModel, params: { id: id } });

	if (!demoModel || isLoading.demoModel) {
		return <Spinner />
	}

	return (
		// some component dependent on demoModel
	)
});
```

An example of useGet using the optional callback:

```js
useGet(
  {
    model: DemoModel,
    params: {
      id: id
    }
  },
  (value, response) => {
    if (response.status !== 200) {
      // handle error
    }
    if (value) {
      // Do something with the value. Note that storage is handled for you and the value should be accessed using the getStateValue hook if possible.
    }
  }
);
```

It's also possible to use the useGet hook in this way:

```js
import React, { memo } from 'react';
import { useStateValue, useGet } from '@rlean/core';
import { getValue } from '@rlean/utils';
import { Spinner } from 'some-ui-library';
import { DemoModel } from 'lib/models';

export const MyReactComponent = memo(() => {
  const [{ demoModel, someStateValue, isLoading }] = useStateValue();
  const [get] = useGet();

	const id = getValue(someStateValue, 'id', null);

  if (id) {
    get({ model: DemoModel, params: { id: id } });
  }

	if (!demoModel || isLoading.demoModel) {
		return <Spinner />
	}

	return (
		// some component dependent on demoModel
	)
});
```

If the getPath attribute looks like this and the value of id is 1:

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

### usePost

The usePost hook is used to post against the API and takes an options object and an optional callback function.

```js
import { useStateValue, usePost } from '@rlean/core';
import { DemoModel } from 'lib/models';

const [post] = usePost();

const function updateDb = async () => {
	await post({ model: DemoModel, body: { value: 'value' } } );
}
```

Or...

```js
import { useStateValue, usePost } from '@rlean/core';
import { DemoModel } from 'lib/models';

const [post] = usePost();

const function updateDb = async () => {
	await post(
    {
      model: DemoModel,
      body: {
        value: 'value'
      }
    },
    response => {
      if (response) {
        // handle response
      }
    });
}
```

### usePatch, usePut, & useDelete

The usePatch, usePut, and useDelete hooks work similarly to the usePost hook and have the same syntax.

### options

The options that are available for use with useGet are **model** and **params**. The options that are available for usePost, usePatch, usePut, and useDelete are **model**, **body**, **save**, and **type**. The options available for useSave are **model**, **value**, and **type**. The **save** option is false by default. If set to true, the response data will override the state object and store object if persistData is set to true on the model.

### useSave

The useSave hook is used when saving a state value, and takes an options object that includes the model being updated and the new value, and an optional type. Saving a value will update state and storage if the persistData attribute is 'true' on the model (the default setting).

```js
import { useStateValue, useSave } from '@rlean/core';
import { DemoModel } from 'lib/models'

const [save] = useSave();

const function buttonClicked = async newValue => {
  await save({ model: DemoModel, value: newValue })
}
```

### useRemove

The useRemove hook is used to remove an object from state and storage if applicable, and takes an options object that includes the model being updated and an optional type.

```js
import { useStateValue, useRemove } from '@rlean/core';
import { DemoModel } from 'lib/models'

const [remove] = useRemove();

const function removeValue = async () => {
	await remove({ model: DemoModel });
}
```

### removeAll

The removeAll function is an asynchronous function that is used to clear all storage data.

## Built-in models

### IsLoading

IsLoading is a model that is included by default if there are models that make calls against an API to populate one or more objects in state. This can be leveraged to render loading animations.

```js
import { useStateValue } from '@rlean/core';
import { Spinner } from 'some-ui-library';
import { DemoModel } from 'lib/models'

export const function MyReactComponent = () => {
	const [{ demoModel, isLoading }] = useStateValue();

	if (isLoading.demoModel) {
		return <Spinner />
	}

	return (
		{/* component dependent on demoModel */}
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
- CLI tool to generate models for you, possibly one that can read a swagger.json file.
