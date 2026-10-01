# Uploading the Baseline Tennis Update to GitHub

Repository: `ronvillela/baseline-tennis-preview`

## Safest browser method

1. Sign in to GitHub and open the `baseline-tennis-preview` repository.
2. Download `baseline-tennis-update.zip` from ChatGPT and unzip it on your Mac.
3. Open the extracted `baseline-tennis-update` folder.
4. In GitHub, stay on the **Code** tab and confirm the branch selector says **main**.
5. Click **Add file** and choose **Upload files**.
6. Drag all files and folders from inside `baseline-tennis-update` into the GitHub upload area. Do not drag the outer folder itself.
7. Keep the repository's existing `assets/logos` folder. The update uses those approved logo files.
8. In the commit message, enter: `Add rates, programs, clinics and booking structure`.
9. Select **Commit directly to the main branch** and click **Commit changes**.
10. Wait for GitHub Pages to redeploy, then refresh the preview site. A hard refresh may be needed: **Command + Shift + R** on a Mac.

## Confirm these pages after publishing

- Home page and mobile menu
- Private Lessons
- Sparring Sessions
- Semi-Private Lessons
- Group Clinics
- Tennis 101
- Tennis 201
- About
- Booking
- Contact form
- Policies and FAQ

## Booking service later

Open `assets/js/booking-config.js`. Near the top, paste each tested HTTPS booking URL from the chosen provider between the quotation marks in `bookingLinks`. One update there changes the matching buttons throughout the site.

## Important preview setting

The preview remains blocked from Google indexing. Do not remove `noindex`, `nofollow`, or the blocking `robots.txt` until the production domain is ready.
