# Milit Patel – Portfolio

A static site (HTML, CSS, JavaScript). No build step, no paid services.

## Before you publish: check your résumé
Your current résumé PDF shows your **phone number and email**. A public site and a public repository expose that file to everyone. Make a public version without your phone number (and anything else you don’t want shared), then save it as `assets/resume.pdf`. Until that file exists, the Résumé section shows a short note instead of a broken link.

## 1. Create the repository and upload the files
1. Sign in at github.com as `militpatel1`.
2. Click **+ → New repository**. Name it `militpatel`, choose **Public**, and click **Create repository**.
3. Click **uploading an existing file**, drag in everything inside this folder (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`), and click **Commit changes**. Make sure `index.html` sits at the top level of the repository.

## 2. Turn on GitHub Pages
**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**

## 3. Your site address
`https://militpatel1.github.io/militpatel/`

For a project repository, the repository name becomes part of the URL path. It is not its own domain. If you want the shorter `https://militpatel1.github.io/`, name the repository `militpatel1.github.io` instead.

## 4. Check deployment and troubleshoot
- Open the **Actions** tab. The “pages build and deployment” run should show a green check. Allow a few minutes the first time.
- **Site missing (404):** confirm `index.html` is at the repository root, Pages is set to `main` / root, and the repository is public (or your plan supports private Pages).
- **Images missing:** file names are case-sensitive and must match exactly, for example `assets/images/profile.jpg`. If you use PNG or WebP, change the extension in `index.html`.
- **Résumé not showing:** the file must be exactly `assets/resume.pdf`.
- Hard-refresh (Ctrl/Cmd + Shift + R) after updating.

## 5. Update later
Open a file on GitHub, click the pencil icon, edit, and commit. To replace an image or résumé, open its folder, choose **Add file → Upload files**, and upload a file with the same name.

## Image files
| File | Appears in |
|---|---|
| `assets/images/profile.jpg` | Hero portrait (4:5 works best) |
| `assets/images/college.jpg` | Education section |
| `assets/images/project-1.jpg` | E-bike project card |
| `assets/images/project-2.jpg` | Robotics card |

Each image appears only once its file exists, so nothing breaks while you gather them. Use photos you own or that are licensed for reuse.

## 6. Custom domain (optional)
If you own a domain, follow GitHub’s official guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 7. Privacy
GitHub Pages sites are public, and a public repository also exposes every source file and your résumé. Only upload what you’re comfortable sharing.
