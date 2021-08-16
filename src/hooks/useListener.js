import React, { useEffect, useRef } from 'react';
import { deepCopy } from '@rlean/utils';
import { useGet } from 'index';

export default function useListener(options, listener) {}

/**
 * import {useListener} from '@rlean/core';
 *
 * useListener(() => {
 *  // listener code goes here
 * }, []);
 *
 */

useListener({ entity: SomeEntity, dependencies: [] }, () => {
  //
});
