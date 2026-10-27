# simon-roberts.github.io

Personal site: a one-page profile plus a blog. Jekyll, built natively by GitHub
Pages, so there is no build step, no Actions workflow and no local tooling
required.

---

## 1. Put it online (about five minutes)

1. On GitHub, create a **new public repository** named exactly
   `<your-username>.github.io`. For the username `simon-roberts` that is
   `simon-roberts.github.io`. The name has to match or Pages will not serve it
   at the root domain.
2. Upload the contents of this folder to the repository, either by dragging the
   files into the GitHub web uploader or with git:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**. Under "Build and deployment", set
   **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Wait a minute or two. The site appears at `https://<your-username>.github.io`.

Every push to `main` rebuilds and republishes automatically.

---

## 2. The five files you will actually edit

| File | What is in it |
|---|---|
| `_config.yml` | Your name, role, email, LinkedIn, resume PDF path, site URL |
| `_data/home.yml` | Homepage intro, About paragraphs, contact line |
| `_data/experience.yml` | Roles, grouped into tiers |
| `_data/projects.yml` | Anonymised case studies and their tags |
| `_data/education.yml` | Education, technical skills, sectors |

Nothing in `_layouts/`, `_includes/` or `index.html` needs touching to change
content. The YAML files drive the page.

**Before you publish:** the three posts in `_posts/` are drafts written from
your topic list. Each opens with an HTML comment saying so. Read them, make them
yours, and delete the comment.

Also worth doing once: the case studies come from your firm CV, which was
written for client circulation. A public website is a different audience, so it
is worth a check with whoever handles risk or communications at the firm before
it goes live.

### Adding a role

`_data/experience.yml` is a list of groups, rendered top to bottom. A group with
`compact: true` gets the quieter one-line treatment.

```yaml
groups:
  - items:                                    # first group, no heading
      - dates: "January 2025 to present"
        title: Consultant
        org: Oliver Wyman
        location: Toronto
        notes:
          - First bullet.
          - Second bullet.

  - sublabel: Earlier roles                   # heading above this group
    compact: true
    items:
      - dates: "May 2022 to August 2022"
        title: Management Consultant, Co-op
        org: KPMG
        location: Vancouver
        summary: >-
          One sentence.
```

To promote a role, move it into the first group and swap `summary:` for a
`notes:` list. To add a new section later, such as personal projects, copy a
group block and give it a new `sublabel`. `dates:` and `location:` are both
optional, and leaving `dates` out collapses the date column for that row.

### Adding a case study

```yaml
- client: A Class I railroad          # masked descriptor, never a name
  employer: Oliver Wyman              # optional, e.g. "Personal project"
  title: What the engagement was
  summary: >-
    Two or three sentences on the problem and your approach.
  outcome: >-
    What changed, with a number if you can share one. Omit if there isn't one.
  tags: [Python, SQL, Network modelling]
```

Tags are free text, so whatever you write appears on the card.

---

## 3. Writing a blog post

Create a file in `_posts/` named `YYYY-MM-DD-some-title.md`:

```markdown
---
title: "Your title here"
subtitle: "One line that shows in the archive list and in link previews."
date: 2026-09-14
---

Your post, in Markdown. `##` for section headings, `>` for pull quotes,
`-` for bullets, `**bold**`, `*italic*`.
```

Commit and push. The post appears on `/blog/` and the three newest show on the
homepage. The filename becomes the URL, so keep it lowercase and hyphenated.

To draft without publishing, add `published: false` to the front matter.

---

## 4. Swapping the headshot

Replace `assets/img/headshot.jpg` with your own photo, keeping the filename.
Square, at least 640 by 640, and it will be cropped to a circle. To run without
a photo, delete the `headshot:` line in `_config.yml` and the portrait
disappears.

---

## 5. Things worth knowing

- **Dark mode** follows the visitor's system setting, and the toggle in the
  header overrides it. The choice is remembered in their browser.
- **Print.** `Cmd/Ctrl-P` on the homepage produces a clean resume, with
  navigation, buttons and the footer stripped out automatically.
- **The accent colour** is `--accent` at the top of `assets/css/style.css`,
  defined twice, once for light and once for dark. Change those two values and
  the whole site reskins. The favicon in `assets/img/favicon.svg` has the same
  colour hard-coded.
- **RSS** is generated at `/feed.xml` and a sitemap at `/sitemap.xml`.
- **A custom domain** later: add a `CNAME` file containing just the domain, set
  `url:` in `_config.yml` to match, and point DNS at GitHub Pages.

### Running it locally (optional)

Only needed if you want to preview before pushing. Requires Ruby.

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

If you would rather not install Ruby, pushing to a branch and checking the live
site works fine too.
