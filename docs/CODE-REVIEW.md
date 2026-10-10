# Code review — October 9, 2026

## Scope and release state

Fetched GitHub main at `822cecc` before reviewing. Local HEAD also contained the previously saved documentation-only checkpoint `c732279`; no website changes were ahead of GitHub. The user approved publishing this cleanup on October 9, 2026 (cleanup commit `15423a8`). Older review entries below are historical.

## Findings and cleanup

- **Maintainability:** 13 pages repeated the same 16,227-character base stylesheet and 2,231-character navigation script. Extracted these into `assets/css/base.css` and `assets/js/navigation.js`, preserving load order and existing responsive rules. Formatted the extracted CSS and page-specific CSS for readability. Added comments for file ownership, cascade order, responsive sections, menu state, keyboard behavior and FAQ behavior.
- **Dead code:** removed unused `main.css`, `main.js`, and the unused `BaselineTennis` configuration alias. The legacy script contained an obsolete contact-form booking destination. All removed material is recoverable in Git history.
- **Accessibility:** FAQ buttons now identify their answer panels with `aria-controls`; panels identify their questions with `aria-labelledby`. Existing expand/collapse behavior remains intact.
- **Regression prevention:** the static checker now detects duplicate attributes, missing/repeated shared scripts/styles, incorrect booking/config and stylesheet order, and absent/duplicate social sharing metadata.
- **Documentation:** corrected stylesheet load-order annotations and README ownership/conventions. Existing business content and booking placeholders were preserved.

The combined HTML payload decreased from 393,803 to 159,367 bytes (59.5%) by moving repeated code into reusable files. This measures HTML size, not a measured page-speed improvement; shared assets still need their initial download.

## Verification

- All 13 pages pass `python3 scripts/check-site.py`; all booking routing cases pass `node --test tests/booking.test.cjs`; `git diff --check` passes.
- Compared each page’s original inline CSS with its extracted base plus page-specific rules: rule sequence/content match after excluding whitespace/comments. No relative `url()` references required rebasing.
- Browser checks across all 13 pages at 440px: shared CSS loads, navigation loads once, menu opens, no horizontal overflow. No console errors captured during this pass.
- All 13 pages also checked for horizontal overflow at 320px and 768px; none found.
- Homepage at 1280px: two-column dropdown and hidden mobile action bar verified. Mobile Programs disclosure, Escape closing/returning focus, section link closure/heading focus, and FAQ single-answer expansion verified.
- Simple repository pattern scan found no Stripe secret-key, GitHub-token or private-key markers. This is not a comprehensive secrets/security audit.

## Remaining limits and launch dependencies

This is a scoped code-quality and regression review, not formal HTML/CSS validation, accessibility certification or exhaustive Safari/iPhone testing. Page-specific CSS and repeated static header/footer markup remain; shared CSS still contains older foundation rules intentionally overridden by later styles. A template/build-system migration or deeper selector pruning should be a separate reviewed change rather than risk approved styling in this pass.

Real booking, capacity, payment verification, notifications, policies and customer profiles remain pending Acuity/Stripe setup and end-to-end testing. The preview still blocks indexing. The coach PDF has not been regenerated.

---

# Code review — October 2, 2026

Reviewed the repository against published homepage revision `290491f`. The local and remote histories matched before this review.

## Results

- All 13 HTML pages passed the static link, asset, anchor, unique-ID, image-alt-attribute, accessibility-reference, language and viewport checks.
- Inline event handlers, inline scripts and all four external JavaScript files passed Node syntax checks. Structured JSON and sitemap XML parsed successfully.
- Existing booking tests passed for six service keys, HTTPS provider links, empty configuration, invalid links and unknown keys.
- `git diff --check` passed.
- No site behavior or approved visual layout was changed during this documentation review.

## Corrections made

Replaced outdated README and upload instructions that described an old ZIP and a removed contact form. Added current file ownership, local preview steps, coding conventions, booking limitations, launch tasks and a reusable static-site checker.

## Maintenance notes and limits

- Inline CSS and repeated navigation scripts remain across pages. Consolidation would improve maintenance but is intentionally deferred to a separate reviewed refactor.
- Legacy `assets/css/main.css` and `assets/js/main.js` are unused by current pages. The legacy script still contains an obsolete contact-form destination; do not re-enable it. Active booking uses `booking.js`.
- Automated checks are not a full HTML/CSS validator, accessibility certification, security audit or exhaustive device test. Alt-attribute presence does not validate the quality of its wording. Remote services and email delivery were not tested.
- Scheduling, payment verification, automatic emails and real confirmations are not implemented; placeholders are intentional.
- Final policies, program details, reviews and factual credentials require coach approval. The current draft must be reviewed before production; no policy decisions were made in this audit.
- Preview SEO remains intentionally disabled. Production domain references need verification before launch.
- The previously exported coach PDF has not been refreshed for this review or the latest visual refinements.

## Local modernization verification — October 4, 2026

- All 13 pages passed static checks; booking tests and whitespace checks passed.
- Browser checks at 440px confirmed menu open/close, scrolling when Programs expands, Escape returning focus to the hamburger, and section navigation closing the menu.
- At 1280px the menu uses two columns and the mobile action bar is hidden. At 320px the document had no horizontal overflow and the floating bar stayed within the viewport.
- Reduced-motion emulation confirmed zero transition duration and no transform on menu links. Test emulation was reset afterward.
- Fixed section-link focus timing: native fragment navigation previously overrode heading focus; focus now moves after navigation. Verified focus lands on locations-heading.
- No browser console errors were captured during the initial menu interaction checks. This is a scoped regression review, not exhaustive browser/device certification.
- Changes remain local and unpublished pending the user’s release approval.


## Maintainability cleanup — October 9, 2026 (local, not published)

- Consolidated the mobile action block repeated on 14 pages into actions.css. Removed obsolete dimensions already superseded by the floating-bar styles; retained the existing column proportions and type sizes.
- Separated scheduler-shell.css from demo-only scheduler.css; Acuity now loads only its shared shell and embed presentation.
- Removed unused booking-selection messaging and the unused email configuration property. Preserved HTTPS validation and fallback routing for all six services; adjusted routing tests accordingly.
- Reused the demo currency formatter and cached connected-scheduler DOM references. No appointment, price, capacity, payment, or provider setting changed.
- Added static checks preventing demo-only assets from being loaded on the connected booking page.

Verification: all 14 pages pass static checks, booking routing tests pass, and git diff --check passes. Browser checks: mobile booking page has no horizontal overflow, floating bar remains 64px high, menu opens/closes, and the Acuity semi-private selector loads; desktop hides the mobile action bar.

Repeated static header/footer HTML remains intentional for a build-free GitHub Pages site; removing it safely requires a separate template/build decision. This is not a complete standards/accessibility certification or an exhaustive browser audit. Acuity internals are provider-owned. Existing scheduler integration and documentation edits remain uncommitted; no GitHub upload performed.
