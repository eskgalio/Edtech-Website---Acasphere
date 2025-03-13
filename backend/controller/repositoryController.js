const debug = require('debug');
const Repository = require('../models/Repository');
const path = require('path');
const repoDebug = debug('app:repository');

exports.getRepositories = async (req, res) => {
  try {
    repoDebug('🟡 [GET REPOSITORIES] Fetching repositories...'); // Log fetching action
    const repositories = await Repository.find();
    repoDebug('🟢 [GET REPOSITORIES] Repositories fetched: %O', repositories); // Log fetched repositories
    res.json(repositories);
  } catch (err) {
    repoDebug('🔴 [GET REPOSITORIES] Error fetching repositories: %s', err.message); // Log error message
    res.status(500).send('Server error');
  }
};

exports.addRepository = async (req, res) => {
  try {
    const { title, description,useremail } = req.body;
    console.log('came to controller',req.body);
    console.log('email in controller',useremail);
    repoDebug('🟡 [ADD REPOSITORY] Received data: %O', { title, description, useremail }); // Log incoming data
    repoDebug('🟡 [ADD REPOSITORY] Received email: %s', useremail); // Log email
    const filePath = req.file.path;
    const newRepository = new Repository({
      title,
      description,
      useremail,
      filePath,
    });
    await newRepository.save();
    repoDebug('🟢 [ADD REPOSITORY] Repository added: %O', newRepository); // Log successfully added repository
    res.json(newRepository);
  } catch (err) {
    repoDebug('🔴 [ADD REPOSITORY] Error adding repository: %s', err.message); // Log error details
    res.status(500).send('Server error');
  }
};

exports.addComment = async (req, res) => {
  const { repositoryId } = req.params;
  const { user, text } = req.body;
  repoDebug('🟡 [ADD COMMENT] Adding comment to repository: %s', repositoryId); // Log repository ID for comment addition
  try {
    const repository = await Repository.findById(repositoryId);
    repository.comments.push({ user, text });
    await repository.save();
    repoDebug('🟢 [ADD COMMENT] Comment added to repository: %O', repository); // Log updated repository with new comment
    res.json(repository);
  } catch (err) {
    repoDebug('🔴 [ADD COMMENT] Error adding comment: %s', err.message); // Log error details
    res.status(500).send('Server error');
  }
};
