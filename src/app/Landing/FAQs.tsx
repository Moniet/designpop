import React from "react";
import Accordion from "./Accordion";
import { FaStripe } from "react-icons/fa";
import { pricing } from "@/prices";

const FAQs = () => {
  return (
    <section id="faqs">
      <div className="pb-8">
        <h2 className="text-3xl xl:text-4xl text-center mt-5 font-semibold mb-16 [text-wrap:balance]">
          Got Questions? We&#39;ve Got Answers
        </h2>
        <div className="space-y-4">
          {" "}
          <Accordion title="What's included in each package?">
            {" "}
            <ul className="list-disc pl-2">
              <li>
                <strong className="-ml-2">
                  Landing Page Design ({pricing.landingPage})
                </strong>
              </li>
              <li className="ml-4">Custom design tailored to your brand </li>
              <li className="ml-4">Hi-fi design delivered in 48 hours</li>
              <li className="ml-4">Mobile-responsive design</li>
              <li className="ml-4">Design files delivered as Figma files </li>
              <li className="ml-4">2 rounds of revisions</li>
              <li>
                <strong className="mt-3 -ml-2 block">
                  Simple MVP ({pricing.simpleMVP})
                </strong>
              </li>
              <li className="ml-4">Basic functionality</li>
              <li className="ml-4">Receive design in 48 hours</li>
              <li className="ml-4">2-3 core features </li>
              <li className="ml-4">2 weeks delivery</li>
              <li className="ml-4">3 months support</li>
              <li>
                <strong className="mt-3 -ml-2 block">
                  Complex MVP ({pricing.complexMVP})
                </strong>
              </li>
              <li className="ml-4">Advanced functionality</li>
              <li className="ml-4">Receive design in 72 hours</li>
              <li className="ml-4">4-6 core features</li>
              <li className="ml-4">4-6 week delivery</li>
              <li className="ml-4">6 months support (extendable to 1 year)</li>
              <li>
                <strong className="mt-3 -ml-2 block">
                  Subscription ({pricing.subscription})
                </strong>
              </li>
              <li className="ml-4">
                Ideal for ongoing Design Engineering work
              </li>
              <li className="ml-4">1 Design request per week</li>
              <li className="ml-4">Unlimited development requests</li>
              <li className="ml-4">
                Flexible: Pause or cancel based your needs
              </li>
              <li className="ml-4">Designs delivered in 48 hours</li>
              <li className="ml-4">
                Features developed within 1-4 weeks or as needed
              </li>
            </ul>
          </Accordion>{" "}
          <Accordion title="Will I receive regular updates?">
            {" "}
            <p className="text-base">
              Yes! For web & mobile apps, we will provide live previews where
              you can view the updates as we make changes. We are also punctual
              with publishing our progress on Notion & Slack to keep you
              informed throughout the process.
            </p>
          </Accordion>
          <Accordion title="What is your tech stack?">
            {" "}
            <ul className="list-disc pl-2">
              <li>
                <b>We use modern, industry-standard technologies including:</b>{" "}
              </li>
              <li>• Next.js</li>
              <li>• React.js</li>
              <li>• Hono.js / Express.js</li>
              <li>• Node.js</li>
              <li>• PostgreSQL</li>
              <li>• DrizzleORM</li>
              <li className="mt-4">
                <b>Customizing your tech-stack:</b>
              </li>
              <li>
                We are happy to integrate any 3rd party libraries or APIs on
                request (OpenAI, Anthropic, D3.js, Shadcn, etc.). We stick to
                the Node.js and React.js ecosystems due to the large community
                and availability of open-source solutions.
              </li>
            </ul>
          </Accordion>{" "}
          <Accordion title="Can I opt for design only?">
            {" "}
            <ul className="list-disc pl-2">
              <li>
                <b>
                  We offer design-only services for landing pages at $790, which
                  includes:
                </b>
              </li>
              <li className="ml-4 mt-4">
                Custom design tailored to your brand{" "}
              </li>
              <li className="ml-4">
                One full landing page design (+$199 per extra page)
              </li>
              <li className="ml-4">48-hour delivery</li>
              <li className="ml-4">Mobile-responsive layouts</li>
              <li className="ml-4">2 rounds of revisions</li>
              <li className="ml-4">Complete Figma file</li>
              <li className="ml-4">Convert to Framer: +$499 (optional)</li>
            </ul>
          </Accordion>{" "}
          <Accordion title="What's your payment structure?">
            {" "}
            <ul className="list-disc pl-2">
              <li className="-ml-2">
                <b>We typically require:</b>
              </li>
              <li className="ml-4">50% upfront to begin work </li>
              <li className="ml-4">
                50% upon completion For MVP projects, we can arrange
                milestone-based payments.{" "}
              </li>
              <li className="mt-5 text-sm">
                <p>
                  <b>Note:</b> Our payments are done securely through{" "}
                  <a
                    href="https://stripe.com"
                    className="h-1 inline-block overflow-visible"
                  >
                    <FaStripe className="text-purple-500 text-3xl md:text-4xl  inline-block sm:ml-1 skew-x-5" />
                    .
                  </a>
                </p>
                <p>
                  You will receive payment links which can be used to complete
                  the payments.
                </p>
              </li>
            </ul>
          </Accordion>{" "}
          <Accordion title="Will you maintain the app after delivery?">
            {" "}
            <ul className="pl-2 list-disc">
              <li className="mt-4">
                <b>Yes! Support is included in all packages:</b>
              </li>
              <li className="ml-4">Simple MVP includes 3 months support </li>
              <li className="ml-4">Complex MVP includes 6 months support</li>
              <li className="ml-4">
                <span className="text-zinc-700">Extended support</span> packages
                are available after the initial period costing{" "}
                <span className="text-zinc-700">{pricing.maintenance}</span> for
                each 3 month extension.
              </li>
              <li className="mt-4">
                <b>Support covers</b>
              </li>
              <li className="ml-4"> Bug fixes </li>
              <li className="ml-4"> Minor updates </li>
              <li className="ml-4"> Technical assistance </li>
            </ul>
          </Accordion>{" "}
          <Accordion title="How do we get started?">
            {" "}
            <p>
              <b>The process is simple:</b>
            </p>
            <ol className="list-decimal pl-5">
              <li>Schedule a consultation</li>
              <li>Receive a proposal</li>
              <li>Sign contract</li>
              <li>Make initial payment (50% upfront)</li>
              <li>Begin project</li>
            </ol>
            <p className="mt-5">
              <b>We can typically start:</b>
            </p>
            <ul className="list-disc pl-5">
              <li>Landing Pages: Within 24-48 hours</li>
              <li>MVPs: Within one week of contract signing</li>
            </ul>
          </Accordion>{" "}
          <Accordion title="Do I own the source code?">
            {" "}
            Yes, upon final payment, you receive full ownership of all source
            code and design files.{" "}
          </Accordion>{" "}
          <Accordion title="Can I get support for longer?">
            <span className="text-zinc-700">
              Yes! We provide extended support
            </span>{" "}
            packages even after the initial period; costing{" "}
            <span className="text-zinc-700">{pricing.maintenance}</span> for
            each 3 month extension.
          </Accordion>{" "}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
