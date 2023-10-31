import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {infraStack} from './infra-stack';

    export class OCStage extends cdk.Stage {
      constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
        super(scope, stageName, props);
    const demoInfra = new infraStack(this, 'infraLogicalID',stageName);
      }
    }



