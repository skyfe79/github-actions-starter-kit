const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const myToken = core.getInput('github-token');
    const octokit = github.getOctokit(myToken);

    // implement awesome github actions!
    
  } catch (error) {
    core.setFailed(error.message);
  }
})();