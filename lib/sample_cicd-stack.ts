import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import {OCStage} from './stage-stack';
import {ManualApprovalStep} from 'aws-cdk-lib/pipelines';

export class SampleCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
  
  const demoCICD = new CodePipeline(this, 'demoPipeline', {
       	synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('OGLernings/sampleCICD', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
	pipelineName: 'sampleCICDPipeline'
    });
  const devStage = demoCICD.addStage(new OCStage(this, 'dev',{
	env: { account: '862165548342', region: 'us-east-1'},
   	}));
   
  devStage.addPost(new ManualApprovalStep('Manual Approval before production'));
   
const prodStage = demoCICD.addStage(new OCStage(this, 'prod',{
	env: { account: '862165548342', region: 'us-east-1'},
   	}));  
  }
}
