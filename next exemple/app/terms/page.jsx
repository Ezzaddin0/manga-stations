import React from 'react'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service',
}

export default function page() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <section className="space-y-4">
        <p>
          Welcome to Manga Site. By accessing or using our services, you agree to be bound by the following terms and conditions. Please read these terms carefully before using our website.
        </p>

        <h2 className="text-2xl font-semibold">User Conduct</h2>
        <p>
          You agree to use our website and services only for lawful purposes. You are prohibited from using the site to violate any local, national, or international laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <p>
          All content, logos, and images on Manga Site are the property of their respective owners and are protected by copyright laws. Unauthorized use of any content is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold">Account Registration</h2>
        <p>
          When creating an account, you must provide accurate and complete information. You are responsible for keeping your login credentials secure, and you agree to notify us immediately of any unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-semibold">Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the site at any time, without notice, if you violate these terms or engage in any activity that is harmful to the site or its users.
        </p>

        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p>
          Manga Site will not be liable for any damages or losses resulting from the use of our website. You use our services at your own risk.
        </p>

        <h2 className="text-2xl font-semibold">Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Please check this page periodically to ensure you are aware of any changes.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at support@mangasite.com.
        </p>
      </section>
    </main>
  )
}
