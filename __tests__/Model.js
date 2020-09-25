import { Model } from '../src/model';

class TestClassNoAttributes extends Model {}

describe('Model', () => {
  it('Nullable attributes should be null if class extending Model contains no attributes', () => {
    const testClass = new TestClassNoAttributes();

    const getUri = testClass.getUri;
    const postUri = testClass.postUri;
    const putUri = testClass.putUri;
    const deleteUri = testClass.deleteUri;
    const patchUri = testClass.patchUri;
    const apiUriOverride = testClass.apiUriOverride;
    const syncInterval = testClass.syncInterval;
    const syncAfterTimeElapsed = testClass.syncAfterTimeElapsed;

    expect(getUri).toBe(null);
    expect(postUri).toBe(null);
    expect(putUri).toBe(null);
    expect(deleteUri).toBe(null);
    expect(patchUri).toBe(null);
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
