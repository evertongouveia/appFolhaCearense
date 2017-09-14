angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url
.constant('WORDPRESS_API_URL', 'https://www.folhacearense.com.br/wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/v2.0/docs/android-generating-a-gcm-push-notification-key
.constant('GOOGLE_PROJECT_NUMBER', '1835848630')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/phonegap-sdk-installation#2-add-required-code
.constant('ONESIGNAL_APP_ID', '665decf4-72d1-4687-bc5d-9d70bb11204f')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark
.constant('IONIC_APP_COLOR', 'positive')

// Change Posts page template to cards, cards2, list
.constant('POSTS_TEMPLATE', 'cards')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'br.com.folhacearense')
.constant('IOS_APP_ID', '<my_app_id>')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'contato@folhacearense.com.br')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', 'app2@myapp.com')

// Replace with phone number for send SMS
.constant('SMS_PHONE_NUMBER', '<SMS_PHONE_NUMBER>');
