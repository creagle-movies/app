/* eslint-disable prefer-promise-reject-errors */

/**
 * Makes a promise cancellable
 * @param {Promise} promise - The Promise
 * Usage: makeCancellable(new Promise(resolve => resolve('Promise Resolved!')))
 */
export const makeCancellable = (promise) => {
    let hasCancelled = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise
            .then(val => (
                hasCancelled
                    ? reject({ isCancelled: true })
                    : resolve(val)));
        promise
            .catch(error => (
                hasCancelled
                    ? reject({ isCancelled: true })
                    : reject(error)));
    });

    return {
        promise: wrappedPromise,
        cancel () {
            hasCancelled = true;
        },
    };
};
