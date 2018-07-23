/* ==========================================================================
   Settings for project environment.
   Used by JavaScript gulp build process and JavaScript test configuration.
   ========================================================================== */

/**
 * Environment variable mappings in JavaScript from the project root .env file.
 */
const envvars = {
 /* eslint-disable no-process-env */
 GH_PROD_BRANCH: process.env.GH_PROD_BRANCH,
 GH_DEV_BRANCH: process.env.GH_DEV_BRANCH,
 GH_TOKEN: process.env.GH_TOKEN,
 CONTINUOUS_INTEGRATION: process.env.CONTINUOUS_INTEGRATION
 /* eslint-enable no-process-env */
};


module.exports = {
  envvars
};
