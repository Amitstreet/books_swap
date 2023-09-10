
function Content() {
  return (
    <>
      {/* Blog Article */}
      <div className="mx-auto ">
        <div className="">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                Announcing a free plan for small teams
              </h2>
              <p className="text-lg text-slate-900 dark:text-gray-200">
                At preline, our mission has always been focused on bringing
                openness and transparency to the design process. We've always
                believed that by providing a space where designers can share
                ongoing work not only empowers them to make better products, it
                also helps them grow.
              </p>
            </div>
            <p className="text-lg text-slate-900 dark:text-gray-200">
              We're proud to be a part of creating a more open culture and to
              continue building a product that supports this vision.
            </p>
            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure>
            <p className="text-lg text-slate-900 dark:text-gray-200">
              As we've grown, we've seen how Preline has helped companies such
              as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their
              designers closer together to create amazing things. We've also
              learned that when the culture of sharing is brought in earlier,
              the better teams adapt and communicate with one another.
            </p>
            <p className="text-lg text-slate-900 dark:text-gray-200">
              That's why we are excited to share that we now have a{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                free version of Preline
              </a>
              , which will allow individual designers, startups and other small
              teams a chance to create a culture of openness early on.
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-slate-900 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-slate-900 dark:text-gray-200">
                Nicole Grazioso
              </p>
            </blockquote>
            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
                Bringing the culture of sharing to everyone
              </h3>
              <p className="text-lg text-slate-900 dark:text-gray-200">
                We know the power of sharing is real, and we want to create an
                opportunity for everyone to try Preline and explore how
                transformative open communication can be. Now you can have a
                team of one or two designers and unlimited spectators (think
                PMs, management, marketing, etc.) share work and explore the
                design process earlier.
              </p>
            </div>
            <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-slate-900 dark:text-gray-200">
              <li className="pl-2">
                Preline allows us to collaborate in real time and is a really
                great way for leadership on the team to stay up-to-date with
                what everybody is working on,"{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  said
                </a>{" "}
                Stewart Scott-Curran, Intercom's Director of Brand Design.
              </li>
              <li className="pl-2">
                Preline opened a new way of sharing. It's a persistent way for
                everyone to see and absorb each other's work," said David Scott,
                Creative Director at{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Eventbrite
                </a>
                .
              </li>
            </ul>
            <p className="text-lg text-slate-900 dark:text-gray-200">
              Small teams and individual designers need a space where they can
              watch the design process unfold, both for themselves and for the
              people they work with – no matter if it's a fellow designer,
              product manager, developer or client. Preline allows you to invite
              more people into the process, creating a central place for
              conversation around design. As those teams grow, transparency and
              collaboration becomes integrated in how they communicate and work
              together.
            </p>
            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Plan
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Web development
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Free
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Team
              </a>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
      
    </>
  );
}

export default Content;
