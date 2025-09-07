# Deployment Issues Fix Guide

## Issue 1: Frontend API URL Configuration

### Problem
The frontend is incorrectly concatenating URLs, resulting in:
```
https://open-source-issue-tracker-client.vercel.app/open-source-issue-tracker-server.vercel.app/api/...
```

### Solution
1. **Set Environment Variable in Vercel Dashboard:**
   - Go to your Vercel project dashboard for the **frontend** (open-source-issue-tracker-client)
   - Navigate to Settings → Environment Variables
   - Add the following variable:
     ```
     NEXT_PUBLIC_API_BASE_URL = https://open-source-issue-tracker-server.vercel.app
     ```
   - **IMPORTANT:** Include `https://` at the beginning!
   - Deploy the changes

2. **Local Development:**
   - The `.env.local` file has been created with the correct configuration
   - Run `npm run dev` to test locally

## Issue 2: MongoDB Atlas IP Whitelist

### Problem
Vercel uses dynamic IP addresses that change with each deployment, making it impossible to whitelist specific IPs for MongoDB Atlas.

### Solutions (Choose One)

#### Option A: Allow Access from Anywhere (Quick Fix - Less Secure)
1. Go to MongoDB Atlas Dashboard
2. Navigate to Network Access
3. Click "Add IP Address"
4. Add this IP address: `0.0.0.0/0`
5. Add a comment: "Allow access from anywhere (Vercel deployment)"
6. Click "Confirm"

**Security Note:** This allows connections from any IP. Ensure you have:
- Strong database credentials
- Database user with minimal required permissions
- Connection string uses authentication

#### Option B: Use MongoDB Atlas Vercel Integration (Recommended)
1. Install the MongoDB Atlas integration in Vercel:
   - Go to https://vercel.com/integrations/mongodbatlas
   - Click "Add Integration"
   - Follow the setup wizard
   - This automatically handles IP whitelisting

#### Option C: Use Static IP Service (Most Secure)
1. Use a service like QuotaGuard Static or Fixie that provides static IPs
2. Configure your backend to route MongoDB connections through the static IP proxy
3. Whitelist only those static IPs in MongoDB Atlas

### Backend Environment Variables
Ensure your **backend** project on Vercel has these environment variables set:
```
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

## Verification Steps

1. **Check Frontend API Calls:**
   - Open browser DevTools → Network tab
   - API calls should go to: `https://open-source-issue-tracker-server.vercel.app/api/...`
   - NOT to: `https://open-source-issue-tracker-client.vercel.app/open-source-issue-tracker-server.vercel.app/...`

2. **Check Backend MongoDB Connection:**
   - Check Vercel Function logs for your backend
   - Should show successful database connection
   - No more "MongooseServerSelectionError"

## Quick Checklist

### Frontend (open-source-issue-tracker-client)
- [ ] Environment variable `NEXT_PUBLIC_API_BASE_URL` set in Vercel dashboard
- [ ] Value includes `https://` protocol
- [ ] Redeployed after setting environment variable

### Backend (open-source-issue-tracker-server)
- [ ] MongoDB Atlas IP whitelist configured (0.0.0.0/0 or Vercel Integration)
- [ ] `MONGODB_URI` environment variable set in Vercel dashboard
- [ ] Database credentials are correct
- [ ] Redeployed after changes

## Common Mistakes to Avoid
1. ❌ Don't forget `https://` in the API URL
2. ❌ Don't use relative paths for cross-domain API calls
3. ❌ Don't hardcode credentials in your code
4. ❌ Don't forget to redeploy after changing environment variables

## Testing
After making these changes:
1. Clear browser cache
2. Test API endpoints directly in browser
3. Check network requests in DevTools
4. Monitor Vercel Function logs for errors

## Need Help?
If issues persist:
1. Check Vercel Function logs for detailed error messages
2. Verify MongoDB connection string format
3. Ensure MongoDB Atlas cluster is running (not paused)
4. Check if database user has correct permissions
