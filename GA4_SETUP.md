# Google Analytics 4 Setup Guide

## Quick Setup Instructions

### 1. Create Google Analytics 4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account or use existing one
3. Create a new GA4 property for `inhumanresources.ai`
4. Get your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Update Jekyll Configuration
1. Open `_config.yml`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```yaml
   google_analytics: "G-YOUR-ACTUAL-ID"
   ```

### 3. Verify Installation
- Deploy to GitHub Pages
- Visit your site
- Check Google Analytics Real-time reports
- Should see visits within a few minutes

## Custom Tracking Features

The site includes several HR-PRIME themed tracking events:

### Automatic Tracking
- **Page Views**: All pages tracked automatically
- **Episode Views**: When users read episodes
- **Portal Access**: Employee portal visits
- **Policy Views**: Corporate policy page visits

### Interactive Tracking
- **Button Clicks**: All buttons tracked with labels
- **Navigation**: Menu clicks tracked
- **Logo Clicks**: Brand interaction tracking
- **Scroll Depth**: 25%, 50%, 75%, 90% milestones
- **Time on Page**: Engagement duration tracking

### HR-PRIME Special Events
- **Productivity Scans**: Satirical "background monitoring"
- **Konami Code**: Secret message activation
- **Policy Generation**: Random policy creation
- **Brad Detection**: Suspicious activity patterns

## Privacy Compliance

The tracking setup includes:
- **IP Anonymization**: Enabled by default
- **Secure Cookies**: SameSite=None;Secure flags
- **Production Only**: Only tracks on live site, not development

## Custom Dimensions (Optional)

For advanced tracking, set up these custom dimensions in GA4:
- **dimension1**: `page_type` (episode, policy, portal, etc.)
- **dimension2**: `episode_number` (1, 2, 3, etc.)

## Viewing Your Data

Key reports to monitor:
- **Real-time**: See current visitors
- **Pages and screens**: Most popular content
- **Events**: All the custom HR-PRIME interactions
- **Engagement**: Time spent, scroll depth
- **Demographics**: Visitor insights

Remember: All tracking data will help you understand which HR-PRIME episodes and content resonate most with your audience! 📊