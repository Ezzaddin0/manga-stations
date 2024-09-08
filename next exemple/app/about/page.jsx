import React from 'react'
import Link from 'next/link'
import ImageAbout from '@/public/images/about.webp'
import Image from 'next/image'
import { title } from 'process'

export const metadata = {
  title: 'About',
  description: 'About Manga Stations',
}

export default function page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best Manga on the Web
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Manga Stations is your one-stop destination for the latest and greatest Manga titles. Immerse yourself in
                    a world of captivating stories and vibrant illustrations.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/mangas" className="inline-flex h-10 items-center justify-center rounded-md bg-red-400 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    Explore Manga
                    </Link>
                    {/* <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    Subscribe to Newsletter
                    </Link> */}
                </div>
                </div>
                <Image src={ImageAbout} width="550" height="550" alt="Manga Hero" className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" />
            </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Discover the Best Manga on Manga Stations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Manga Stations offers a vast library of Manga titles, ranging from classic series to the latest releases.
                    Explore our personalized recommendations, engage with our vibrant community, and immerse yourself in
                    the captivating world of Manga.
                </p>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Vast Library</h3>
                    <p className="text-sm text-muted-foreground">
                    Explore our extensive collection of Manga titles, spanning a wide range of genres and styles.
                    </p>
                </div>
                <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Personalized Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                    Our advanced algorithms suggest Manga titles tailored to your preferences and reading history.
                    </p>
                </div>
                <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Vibrant Community</h3>
                    <p className="text-sm text-muted-foreground">
                    Connect with fellow Manga enthusiasts, discuss your favorite series, and share your insights.
                    </p>
                </div>
                <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Seamless Reading Experience</h3>
                    <p className="text-sm text-muted-foreground">
                    Enjoy a user-friendly interface and intuitive navigation to immerse yourself in your Manga reading
                    experience.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Next Manga Obsession</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Manga Stations offers a comprehensive library, personalized recommendations, and a vibrant community to
                  help you find your next favorite series.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <LibraryIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Extensive Manga Library</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore our vast collection of manga series, from classic to the latest releases.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <LinkIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Personalized Recommendations</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get tailored manga recommendations based on your reading history and preferences.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <GroupIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Vibrant Community</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow manga enthusiasts, discuss your favorite series, and stay up-to-date on the latest
                  news.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <NewspaperIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Manga News Feed</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep track of the latest manga releases, announcements, and industry updates.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <BookmarkIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Bookmark Favorites</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Save your favorite manga series and easily pick up where you left off.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {/* <MailsIcon className="h-6 w-6 text-primary" /> */}
                  <h3 className="text-lg font-bold">Manga Release Notifications</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get notified when your favorite manga series release new chapters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Manga Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Become a part of our vibrant Manga community and unlock a world of captivating stories, engaging
                    discussions, and personalized recommendations.
                </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    Sign Up
                </Link> */}
                <Link
                    href="/mangas"
                    className="inline-flex h-10 items-center justify-center text-white rounded-md bg-red-400 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-red-500 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    Explore Manga
                </Link>
                </div>
            </div>
            </div>
        </section>
        </main>
    </div>
    )
}