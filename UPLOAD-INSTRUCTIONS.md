# Publishing the Baseline Tennis preview

Repository: [ronvillela/baseline-tennis-preview](https://github.com/ronvillela/baseline-tennis-preview)

Live preview: [Baseline Tennis](https://ronvillela.github.io/baseline-tennis-preview/)

1. Obtain approval for the current batch of changes.
2. Fetch `origin/main` and reconcile any new remote work without overwriting it.
3. Run the checks in [README.md](README.md) and review the site on mobile and desktop.
4. Review the diff; stage only intended website, media, tests and documentation files. Do not upload credentials or local preview wrappers.
5. Commit with a clear description, then push the approved commit to `main`. Never force-push.
6. Confirm GitHub Pages reports a successful build for that commit.
7. Open the live site, refresh if needed, and check navigation, updated sections and booking placeholders. A `?release=COMMIT` URL helps distinguish versions, but shared styles also need their own cache version when changed.

Keep the approved logo/media folders. Old ZIP exports may predate the current repository and should not be used to replace it.

The preview remains blocked from search indexing. Payment and scheduling activation and migration to GoDaddy are separate launch tasks. See the README for the current setup and pending decisions.
