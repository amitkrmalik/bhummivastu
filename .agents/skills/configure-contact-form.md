# Configure the contact form

`src/components/ui/Form.astro` intentionally renders markup without choosing a submission backend. Configure a backend only when the task explicitly asks for it.

- For Netlify Forms, add `name`, `method="POST"`, `data-netlify="true"`, and the hidden `form-name` field.
- For an external provider, use its public endpoint and never place API secrets in Astro markup or committed files.
- Test the deployed form, not only `astro dev`.
