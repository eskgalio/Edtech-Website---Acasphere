const express = require('express');
const router = express.Router();
const repositoryController = require('../controller/repositoryController');
const multer = require('multer');
const path = require('path');
const debug = require('debug')('app:repository');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    debug('🟡 [MULTER] File upload destination: %s', './uploads');
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    debug('🟡 [MULTER] Uploading file: %s', file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/', (req, res, next) => {
  debug('🟡 [REPOSITORY-ROUTE] Fetching all repositories');
  next();
}, repositoryController.getRepositories);

router.post('/', upload.single('file'), (req, res, next) => {
  debug('🟡 [REPOSITORY-ROUTE] Received file upload request, file details: %O', req.file);
  debug('🟡 [REPOSITORY-ROUTE] Received repository data: %O', req.body);
  next();
}, repositoryController.addRepository);

router.post('/:repositoryId/comment', (req, res, next) => {
  debug('🟡 [REPOSITORY-ROUTE] Adding comment to repository %s', req.params.repositoryId);
  debug('🟡 [REPOSITORY-ROUTE] Comment data: %O', req.body);
  next();
}, repositoryController.addComment);

module.exports = router;
