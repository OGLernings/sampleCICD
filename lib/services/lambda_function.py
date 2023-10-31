import json
import os
def lambda_handler(event, context):
    message = 'Hello, Good Morning!!' 
    return { 
        'message' : message
    }