<h1 align="center">
  <br>
  <img src="https://github.com/chyke007/bff-nodejs/blob/master/architecture/bff-architecture.png" alt="BFF Architecture Flow" width="700"/>
  <br>
  BFF NodeJs
  <br>
</h1>

<h4 align="center"><a href="#" target="_blank">BFF NodeJs,</a> is a sample Backends For Frontends project built with Nodejs and AWS Lambda.</h4>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p align="center">
 <a href="#folder-structure">Folder Structure</a> •
  <a href="#services-used">Services Used</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#you-may-also-like">Related</a> •
  <a href="#license">License</a>
</p>

## Folder Structure

This project contains source code for a serverless that can be deployed using the serverless framework. It also contains frontend code built using Next.js that can also be easily deployed or run locally. Also added are the architecture diagrams for the project.

- [architecture](https://github.com/chyke007/bff-nodejs/tree/master/architecture) - Contains architectural diagram and workflows for the application
- [functions](https://github.com/chyke007/facial-vote/tree/master/functions) - Lambda code for the application

## Services Used

The following are the AWS services explicitly used

- AWS Lambda
- Amazon API Gateway
- AWS IAM

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) v16+ (which comes with [npm](http://npmjs.com)) installed on your computer. Also create an account with AWS, install the AWS CLI in locally, create an IAM user and add this user to AWS CLI as a profile. This profile user should have necessary permissions to deploy the app to AWS. Next, add required credentials to the .env file created from the command below. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/chyke007/bff-nodejs.git

# Go into the repository
$ cd bff-nodejs

# Deploy project
$ npm i serverless -g
$ serverless deploy

# Remove resources
$ sls remove

```

## Architecture

### Backends For Frontends Flow

<img src="https://github.com/chyke007/bff-nodejs/blob/master/architecture/bff-architecture.png" alt="BFF Architecture Flow" width="700" />

## Documentation

You can find a talk that explains the project [here](https://www.codementor.io/events/client-first-architecture-backend-for-frontend-i9ee89y6yh)

## You may also like...

- [YumFood](https://github.com/chyke007/yum-food) - An online food ordering application
- [TrackIt](https://github.com/chyke007/whatsapp-group-bot) - A WhatsApp messages tracker
- [FacialVote](https://github.com/chyke007/facial-vote) - A Serverless Facial Recognition voting application built entirely using AWS services

## License

MIT

---

> [chibuikenwa.com](https://www.chibuikenwa.com) &nbsp;&middot;&nbsp;
> GitHub [@chyke007](https://github.com/chyke007) &nbsp;&middot;&nbsp;
> LinkedIn [@chibuikenwachukwu](https://linkedin.com/in/chibuikenwachukwu)
