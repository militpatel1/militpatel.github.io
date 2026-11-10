document.getElementById('yr').textContent = new Date().getFullYear();
// Show the résumé preview only if assets/resume.pdf exists (avoids a broken link).
fetch('assets/resume.pdf', { method: 'HEAD' }).then(function (r) {
  if (r.ok) {
    document.getElementById('resume-ok').hidden = false;
    document.getElementById('resume-missing').hidden = true;
  }
}).catch(function () {});
