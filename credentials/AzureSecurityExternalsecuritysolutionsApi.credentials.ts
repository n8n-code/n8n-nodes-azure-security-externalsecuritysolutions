import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityExternalsecuritysolutionsApi implements ICredentialType {
        name = 'N8nDevAzureSecurityExternalsecuritysolutionsApi';

        displayName = 'Azure Security Externalsecuritysolutions API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityExternalsecuritysolutions/azure-security-externalsecuritysolutions.png', dark: 'file:../nodes/AzureSecurityExternalsecuritysolutions/azure-security-externalsecuritysolutions.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Externalsecuritysolutions API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
