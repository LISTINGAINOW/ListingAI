export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a0a0a0]">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Stop Writing <span className="gradient-text">Listing Descriptions</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            You became an agent to sell homes—not to write copy.
          </p>
          <a
            href="https://paypal.me/joshuafeuer/25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
          >
            Order Now — $25 per Listing
          </a>
          <p className="mt-6 text-gray-500">Used by 200+ agents across the US.</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Truth</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            You put it off. You stare at the screen. You type &quot;stunning&quot; and &quot;must‑see&quot; for the hundredth time because your brain is fried and you have five more listings to get up before EOD.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Writing descriptions isn’t your job. But it takes up your evening anyway.
          </p>
          <div className="bg-[#1a1a1a] border-l-4 border-purple-500 pl-6 py-4 my-8">
            <p className="text-2xl font-bold text-white">
              What if it took <span className="gradient-text">24 hours</span> instead of 3 hours?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Listing AI</h2>
          <p className="text-xl text-gray-300 mb-6">
            Professional listing descriptions, written by AI and reviewed by humans. You send the property details. We send back a description that sounds like <em className="text-white">you</em>—not a robot.
          </p>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-800/50">
            <p className="text-2xl font-bold text-white">
              No templates. No generic copy. No &quot;stunning&quot; for the 101st time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl gradient-border">
              <div className="text-4xl font-bold text-white mb-4 gradient-text">1.</div>
              <h3 className="text-2xl font-bold text-white mb-4">Send Your Details</h3>
              <p className="text-gray-400">
                Drop in the MLS sheet, property photos, or a quick voice memo with the highlights. Doesn’t need to be polished—just the facts.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl gradient-border">
              <div className="text-4xl font-bold text-white mb-4 gradient-text">2.</div>
              <h3 className="text-2xl font-bold text-white mb-4">We Write It</h3>
              <p className="text-gray-400">
                Our AI crafts a description tailored to that specific property and your brand voice. A human reviews it before it ever reaches you.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl gradient-border">
              <div className="text-4xl font-bold text-white mb-4 gradient-text">3.</div>
              <h3 className="text-2xl font-bold text-white mb-4">You Review & Post</h3>
              <p className="text-gray-400">
                You get a polished description in 24 hours. Tweak it if you want, or post it as‑is. Done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing</h2>
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-10 rounded-3xl border border-purple-800/50 inline-block">
            <div className="text-6xl font-bold text-white mb-2">$25</div>
            <div className="text-2xl text-gray-300 mb-6">per listing description</div>
            <p className="text-xl text-gray-400 mb-8">Turnaround: 24 hours</p>
            <div className="text-lg text-gray-400">
              <strong className="text-white">Bulk discount:</strong> 10+ listings/month → $20 each
            </div>
            <p className="mt-8 text-gray-500">No subscription. No minimums. Pay only when you need one.</p>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="px-6 py-20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Before & After</h2>
          
          {/* Example 1 */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-red-900/50">
              <h3 className="text-2xl font-bold text-red-400 mb-6">What You’re Writing Now</h3>
              <blockquote className="text-xl italic text-gray-400 border-l-4 border-red-500 pl-6 py-4">
                &ldquo;Beautiful 3 bed 2 bath home in great location. Updated kitchen with granite counters. Large backyard. Close to schools and shopping. Must see!&rdquo;
              </blockquote>
              <p className="mt-6 text-gray-500">
                <strong className="text-white">Problem:</strong> Every listing sounds like this. Buyers scroll past.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-green-900/50">
              <h3 className="text-2xl font-bold text-green-400 mb-6">What Listing AI Writes</h3>
              <blockquote className="text-xl italic text-gray-300 border-l-4 border-green-500 pl-6 py-4">
                &ldquo;This 3‑bedroom Craftsman sits on a quiet cul‑de‑sac, walking distance from Lincoln Elementary and the Sunday farmer’s market. The kitchen was redone in 2022—quartz counters, soft‑close cabinets, and a layout that actually works for entertaining. The backyard is the real draw: mature oak trees, a flagstone patio, and enough space for a play structure or a fire pit setup. Tucked away, but two minutes from downtown.&rdquo;
              </blockquote>
              <p className="mt-6 text-gray-500">
                <strong className="text-white">Difference:</strong> Specific. Honest. Makes someone <em>want</em> to see it.
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-red-900/50">
              <h3 className="text-2xl font-bold text-red-400 mb-6">The &ldquo;Fine, I’ll Write It&rdquo; Version</h3>
              <blockquote className="text-xl italic text-gray-400 border-l-4 border-red-500 pl-6 py-4">
                &ldquo;Spacious condo in downtown. Modern finishes. Great views. Amenities include pool and gym.&rdquo;
              </blockquote>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-green-900/50">
              <h3 className="text-2xl font-bold text-green-400 mb-6">The Listing AI Version</h3>
              <blockquote className="text-xl italic text-gray-300 border-l-4 border-green-500 pl-6 py-4">
                &ldquo;A corner unit on the 12th floor with unobstructed western views—you get sunsets over the skyline, not the neighbor’s balcony. The kitchen was updated last year with gas range and actual cabinet space (rare for downtown). Building amenities include a rooftop pool, 24‑hour gym, and a doorman who actually remembers residents’ names. Walkable to everything: coffee, transit, and the new Whole Foods opening next quarter.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">FAQ</h2>
          <div className="space-y-8">
            {[
              {
                q: '“Will it sound like me?”',
                a: 'Yes. We adapt to your style. Send us one listing description you wrote and liked—we’ll match that tone. Prefer short and punchy? Long and detailed? We adjust.',
              },
              {
                q: '“What if I don’t like it?”',
                a: 'We’ll revise it once at no charge. Most descriptions are approved on the first round, but if we miss the mark, we fix it.',
              },
              {
                q: '“How do I send you the info?”',
                a: 'Email, text, or a simple form. Send the MLS link, a voice memo, or bullet points—we’ll extract what we need.',
              },
              {
                q: '“Can you match my brokerage’s brand voice?”',
                a: 'Yes. If your brokerage has a specific style guide or tone, we can align with it. Just let us know up front.',
              },
              {
                q: '“What’s included in the $25?”',
                a: 'One full listing description (typically 100‑150 words), optimized for MLS and Zillow. Includes one revision if needed.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl gradient-border">
                <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Reclaim Your Evenings?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            You didn’t get into real estate to write marketing copy. You got into it to close deals.
            <br />
            <strong className="text-white">Let us handle the descriptions. You handle the clients.</strong>
          </p>
          <a
            href="https://paypal.me/joshuafeuer/25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 text-2xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-glow"
          >
            Order Now — $25 per Listing
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Questions?</h3>
          <p className="text-lg text-gray-400 mb-4">
            Text us at <strong className="text-white">(555) 123‑4567</strong> or email{' '}
            <a href="mailto:hello@listingai.com" className="text-blue-400 hover:underline">
              hello@listingai.com
            </a>
          </p>
          <p className="text-gray-500">
            We respond within 2 hours during business hours (PST).
          </p>
          <div className="mt-10 pt-8 border-t border-gray-900 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Listing AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}