import { Model } from '../src/Model';

class TestClassNoAttributes extends Model {}

describe('Model', () => {
  it('Nullable attributes should be null if class extending Model contains no attributes', () => {
    const testClass = new TestClassNoAttributes();

    const getPath = testClass.getPath;
    const postPath = testClass.postPath;
    const putPath = testClass.putPath;
    const deletePath = testClass.deletePath;
    const patchPath = testClass.patchPath;
    const apiUriOverride = testClass.apiUriOverride;
    const syncInterval = testClass.syncInterval;
    const syncAfterTimeElapsed = testClass.syncAfterTimeElapsed;

    expect(getPath).toBe(null);
    expect(postPath).toBe(null);
    expect(putPath).toBe(null);
    expect(deletePath).toBe(null);
    expect(patchPath).toBe(null);
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
