# 🔍 ️Scholarship Explorer

## Tracking & Marketing Attribution
To track scholarship submissions via Google Tag Manager (GTM), we first need to install the GTM container snippet in the app. On submission, we’ll push a custom `dataLayer` event named `scholarship_application`, including useful parameters like the scholarship title and any UTM data. In GTM, we'll configure a `trigger` to listen for this event and create a `tag` to forward it to an analytics service like GA4.
