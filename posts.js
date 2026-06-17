/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         LUMIÈRE JEWELLERS — JOURNAL / BLOG POSTS            ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  To add a new post:                                         ║
 * ║    1. Copy one of the entries below                         ║
 * ║    2. Paste it at the TOP of the array (newest first)       ║
 * ║    3. Fill in the fields and save                           ║
 * ║                                                             ║
 * ║  Fields:                                                    ║
 * ║    id       — unique slug, no spaces (used in URL)          ║
 * ║    title    — post headline                                  ║
 * ║    date     — YYYY-MM-DD format                             ║
 * ║    category — e.g. 'Collections', 'Guides', 'Craftsmanship' ║
 * ║    excerpt  — short teaser shown on the blog index          ║
 * ║    image    — landscape image, ideally 800×500px            ║
 * ║    content  — full HTML content of the post                  ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

window.POSTS = [

  // ── NEWEST POST FIRST ────────────────────────────────────────

  {
    id:       'spring-collection-2025',
    title:    'Introducing Our Spring Collection 2025',
    date:     '2025-03-15',
    category: 'Collections',
    excerpt:  'This spring we unveil a collection that celebrates the eternal dance between light and gold — pieces that move with the wearer through every moment.',
    image:    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop&q=80',
    content:  `
      <p>This spring, we are unveiling a collection that celebrates the eternal dance between light and gold. Each piece has been thoughtfully designed to reflect the way morning light catches on a faceted edge — fleeting, perfect, and impossible to ignore.</p>
      <p>From delicate pavé diamond bands to bold statement necklaces, the Spring 2025 Collection speaks to those who appreciate the finer things in life. We worked closely with our master goldsmiths over eighteen months to develop the proportions and finishes that define this range.</p>
      <p>The collection is available exclusively in our London atelier. Book a private viewing to explore the full range in person.</p>
    `
  },

  {
    id:       'art-of-bespoke',
    title:    'The Art of Bespoke: Creating Something Truly Yours',
    date:     '2025-02-10',
    category: 'Craftsmanship',
    excerpt:  'What does it mean to commission a bespoke piece? We take you behind the scenes — from the first sketch to the final setting of the last stone.',
    image:    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=500&fit=crop&q=80',
    content:  `
      <p>What does it mean to commission a piece of bespoke jewellery? It means beginning with a conversation — about who you are, what you love, and the moment you wish to mark.</p>
      <p>At Lumière, every bespoke commission begins the same way: with a private consultation where we listen before we sketch, and sketch before we create. Our design team will walk you through gemstone options, metal choices, and proportion studies until the concept feels entirely right.</p>
      <p>From first conversation to final delivery, a typical bespoke commission takes between eight and sixteen weeks. Every stage — the wax model, the setting, the final polish — is shared with you along the way. The result is not just a piece of jewellery. It is something made for one person alone.</p>
    `
  },

  {
    id:       'diamond-guide',
    title:    'A Complete Guide to Choosing Your Diamond',
    date:     '2025-01-20',
    category: 'Guides',
    excerpt:  'Cut, colour, clarity, carat — the four pillars of every diamond selection. Here is how we approach the 4 Cs with every client who walks through our door.',
    image:    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=500&fit=crop&q=80',
    content:  `
      <p>Choosing a diamond is one of the most significant decisions many people make. The 4 Cs — cut, colour, clarity, and carat — provide the foundation, but understanding how they interact takes experience and guidance.</p>
      <p><strong>Cut</strong> is the most important C. A perfectly cut diamond returns light to the eye with exceptional brilliance. We always prioritise cut above all else. A slightly smaller diamond with an excellent cut will outshine a larger stone with a mediocre one.</p>
      <p><strong>Colour</strong> is graded on a scale from D (colourless) to Z. For white metals — platinum and white gold — we recommend D to G. For yellow or rose gold, you can go further down the scale and the warmth of the metal masks any tint beautifully.</p>
      <p><strong>Clarity</strong> refers to inclusions within the stone. Most inclusions are invisible to the naked eye. We typically guide clients toward VS1 or VS2 clarity, which offers excellent value without compromise.</p>
      <p><strong>Carat</strong> is weight, not size. A well-cut one-carat diamond will appear larger than a poorly cut 1.2-carat stone. Always prioritise the other three Cs first.</p>
      <p>Visit us for a private consultation and we will guide you through every step of the selection process.</p>
    `
  },

  {
    id:       'care-guide-gold',
    title:    'How to Care for Your Gold Jewellery',
    date:     '2024-12-05',
    category: 'Guides',
    excerpt:  'Fine jewellery is made to last a lifetime — with the right care. Our goldsmiths share their professional tips for keeping your pieces as beautiful as the day you received them.',
    image:    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop&q=80',
    content:  `
      <p>Fine gold jewellery is extraordinarily durable — but it rewards a little care. Here are the habits our goldsmiths recommend to every client.</p>
      <p><strong>Remove before activity.</strong> Gold is a soft metal. Remove your pieces before exercise, swimming, or any manual work. Chlorine in pools is particularly damaging to gold alloys over time.</p>
      <p><strong>Store separately.</strong> Gold scratches against other metals and stones. Keep each piece in its own soft pouch or compartment.</p>
      <p><strong>Clean gently at home.</strong> A bowl of warm water, a drop of washing-up liquid, and a soft toothbrush is all you need. Rinse under clean water and pat dry with a lint-free cloth.</p>
      <p><strong>Professional service.</strong> We recommend bringing your pieces in for a professional clean and check once a year. We will inspect every claw and setting, re-polish the metal, and ensure every stone is secure — at no charge for pieces purchased with us.</p>
    `
  },

];
