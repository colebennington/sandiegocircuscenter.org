# AWS SES Setup Guide

## Step 1: Create AWS SES Configuration

### 1.1 AWS Console Setup
1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Choose your region (e.g., us-east-1)
3. Navigate to "Verified identities"
4. Click "Create identity"

### 1.2 Verify Email Addresses
**From Email (sending address):**
- Add: `noreply@sandiegocircuscenter.org`
- Verify through email confirmation

**To Email (receiving address):**
- Add: `info@sandiegocircuscenter.org` 
- Verify through email confirmation

### 1.3 Request Production Access (if needed)
- If sending to non-verified emails, request production access
- Go to "Account dashboard" → "Request production access"
- Fill out form with business use case

## Step 2: Create IAM User for SES

### 2.1 Create IAM User
1. Go to [IAM Console](https://console.aws.amazon.com/iam/)
2. Click "Users" → "Create user"
3. Username: `circus-landing-ses`
4. Select "Programmatic access"

### 2.2 Attach SES Policy
Create custom policy or use AmazonSESFullAccess:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
            ],
            "Resource": "*"
        }
    ]
}
```

### 2.3 Save Credentials
- Access Key ID
- Secret Access Key

## Step 3: Environment Variables

Create `.env.local` file in your project root:

```bash
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_here

# Email Configuration
SES_FROM_EMAIL=noreply@sandiegocircuscenter.org
SES_TO_EMAIL=info@sandiegocircuscenter.org

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Step 4: Test the Setup

### 4.1 Local Testing
```bash
npm run dev
```
Navigate to `http://localhost:3000` and test the form.

### 4.2 Deployment Testing
After deploying to Vercel/Netlify, add environment variables in your hosting platform's dashboard.

## Step 5: Deployment Environment Variables

### Vercel
1. Go to project dashboard
2. Settings → Environment Variables
3. Add all variables from `.env.local`

### Netlify
1. Go to site dashboard
2. Site settings → Environment variables
3. Add all variables from `.env.local`

## Troubleshooting

### Common Issues

**Email not sending:**
- Check AWS region matches environment variable
- Verify both from/to emails in SES console
- Check CloudWatch logs for API errors

**Authentication errors:**
- Verify IAM user has SES permissions
- Check access key ID and secret key are correct
- Ensure no extra spaces in environment variables

**Rate limiting:**
- In SES sandbox: limited to 200 emails/day, 1 email/second
- Request production access for higher limits

### Monitoring
- Check AWS CloudWatch for SES metrics
- Monitor bounce/complaint rates
- Set up SNS notifications for bounces

## Security Best Practices

1. **Use least privilege IAM policy**
2. **Rotate access keys regularly**
3. **Monitor usage in CloudWatch**
4. **Set up billing alerts**
5. **Use verified domains instead of individual emails**

## Cost Optimization

- SES pricing: $0.10 per 1,000 emails
- Free tier: 62,000 emails/month for first 12 months
- Monitor usage to avoid unexpected charges

## Support

If you need help:
1. Check AWS SES documentation
2. Review CloudWatch logs
3. Test with AWS CLI: `aws ses send-email`
4. Contact AWS support if needed
