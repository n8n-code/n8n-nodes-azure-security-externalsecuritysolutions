import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecurityExternalsecuritysolutions implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Security Externalsecuritysolutions',
                name: 'N8nDevAzureSecurityExternalsecuritysolutions',
                icon: { light: 'file:./azure-security-externalsecuritysolutions.png', dark: 'file:./azure-security-externalsecuritysolutions.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Security Center API specification',
                defaults: { name: 'Azure Security Externalsecuritysolutions' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSecurityExternalsecuritysolutionsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
