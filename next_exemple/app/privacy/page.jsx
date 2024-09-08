import React from 'react'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy',
}

export default function page() {
  return (
    <main className="container mx-auto py-10 px-4">
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
    <section className="space-y-4">
      <p>
        Welcome to Manga Site. We are committed to protecting your privacy and ensuring that any personal information you provide is safeguarded and only used in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold">Information We Collect</h2>
      <p>
        We collect certain information when you visit our site such as your email address, username, and device information to provide a personalized experience.
      </p>

      <h2 className="text-2xl font-semibold">Use of Information</h2>
      <p>
        The information we collect is used solely to improve user experience and provide you with the services you need from the site.
      </p>

      <h2 className="text-2xl font-semibold">Data Security</h2>
      <p>
        We take appropriate measures to ensure the security of your personal data. We use encryption and other security methods to keep your data safe.
      </p>

      <h2 className="text-2xl font-semibold">Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Please check this page periodically to ensure you are aware of any changes.
      </p>

      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at support@mangasite.com.
      </p>
    </section>
    </main>
    )
}
