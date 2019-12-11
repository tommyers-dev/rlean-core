import 'regenerator-runtime/runtime';
import { formatPath } from '../../src/_internal/request';
import { methods } from '../../src/_internal/methods';

describe('formatPath', () => {
  it('formatPath should return correct path when using path params', () => {
    const payload = {
      query: {
        id: 1
      },
      path: '/api/TestApiPath/:id'
    };

    const expected = '/api/TestApiPath/1';
    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toMatch(expected);
  });
});

describe('formatPath', () => {
  it('formatPath should return correct path when using query params', () => {
    const payload = {
      query: {
        id: 1
      },
      path: '/api/TestApiPath'
    };

    const expected = '/api/TestApiPath?id=1';
    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toMatch(expected);
  });
});

describe('formatPath', () => {
  it('formatPath should return correct path when using param and query params', () => {
    const payload = {
      query: {
        id: 1,
        value: 'test'
      },
      path: '/api/TestApiPath/:id'
    };

    const expected = '/api/TestApiPath/1?value=test';
    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toMatch(expected);
  });
});

describe('formatPath', () => {
  it('formatPath should return correct path when using multiple query params', () => {
    const payload = {
      query: {
        id: 1,
        value: 'test'
      },
      path: '/api/TestApiPath'
    };

    const expected = '/api/TestApiPath?id=1&value=test';
    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toMatch(expected);
  });
});

describe('formatPath', () => {
  it('formatPath should return correct path when using multiple path params', () => {
    const payload = {
      query: {
        id: 1,
        value: 'test'
      },
      path: '/api/TestApiPath/:id/:value'
    };

    const expected = '/api/TestApiPath/1/test';
    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toMatch(expected);
  });
});

describe('formatPath', () => {
  it('path should be falsy if nullableParams is false and path params are null', () => {
    const payload = {
      query: {
        id: null
      },
      path: '/api/TestApiPath/:id'
    };

    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toBeFalsy();
  });
});

describe('formatPath', () => {
  it('path should be falsy if nullableParams is false and query params are null', () => {
    const payload = {
      query: {
        id: null
      },
      path: '/api/TestApiPath'
    };

    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toBeFalsy();
  });
});

describe('formatPath', () => {
  it('path should be falsy if nullableParams is false and some params are null', () => {
    const payload = {
      query: {
        id: 1,
        value: null
      },
      path: '/api/TestApiPath'
    };

    const received = formatPath(payload.path, payload.query, null, methods.GET, null);

    expect(received).toBeFalsy();
  });
});

describe('formatPath', () => {
  it('path should not include params if only payloadBody is initialized', () => {
    const payload = {
      body: {
        id: 1,
        value: 'test'
      },
      path: '/api/TestApiPath'
    };

    const received = formatPath(payload.path, null, payload.body, methods.POST, false);
    const expected = '/api/TestApiPath';

    expect(received).toMatch(expected);
  });
});
