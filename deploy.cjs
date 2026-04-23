require('dotenv').config({ path: '.env.local' });

const FtpDeploy = require('ftp-deploy');

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: process.env.FTP_REMOTE_ROOT || '/public_html',
  include: ['*', '**/*'],
  exclude: ['dist/**/*.map', 'node_modules/**', 'src/**', '.git/**', '.vscode/**'],
  deleteRemote: false,
  forcePasv: true,
};

const ftpDeploy = new FtpDeploy();

ftpDeploy.deploy(config)
  .then(() => console.log('Deploy realizado com sucesso!'))
  .catch(err => {
    console.error('Erro no deploy:', err);
    process.exit(1);
  });