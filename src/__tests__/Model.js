import { Model } from '../src/model';

class TestClassNoAttributes extends Model {}

describe('Model', () => {
  it('Nullable attributes should be null if class extending Model contains no attributes', () => {
    const testClass = new TestClassNoAttributes();

    const getURL = testClass.getURL;
    const postURL = testClass.postURL;
    const putURL = testClass.putURL;
    const deleteURL = testClass.deleteURL;
    const patchURL = testClass.patchURL;
    const apiUriOverride = testClass.apiUriOverride;
    const syncInterval = testClass.syncInterval;
    const syncAfterTimeElapsed = testClass.syncAfterTimeElapsed;

    expect(getURL).toBe(null);
    expect(postURL).toBe(null);
    expect(putURL).toBe(null);
    expect(deleteURL).toBe(null);
    expect(patchURL).toBe(null);
    expect(apiUriOverride).toBe(null);
    expect(syncInterval).toBe(null);
    expect(syncAfterTimeElapsed).toBe(null);
  });
});

describe('Model', () => {
  it('Non-nullable attributes that are missing from class extending Model should be default value', () => {
    const testClass = new TestClassNoAttributes();

    const nullableParams = testClass.nullableParams;
    const persistData = testClass.persistData;
    const preferStore = testClass.preferStore;
    const progressiveLoading = testClass.progressiveLoading;

    expect(nullableParams).toBe(false);
    expect(persistData).toBe(true);
    expect(preferStore).toBe(false);
    expect(progressiveLoading).toBe(false);
  });
});
