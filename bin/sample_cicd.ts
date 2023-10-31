#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleCicdStack } from '../lib/sample_cicd-stack';

const app = new cdk.App();
new SampleCicdStack(app, 'SampleCicdStack', {
  env: { account: '862165548342', region: 'us-east-1'},
});