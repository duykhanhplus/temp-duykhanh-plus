export const getEnvs = () => {
    try {
        return new Function("return this")().process.env || {};
    } catch (e) {
        /* handle error */
        return {};
    }
};