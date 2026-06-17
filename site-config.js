/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          LUMIÈRE JEWELLERS — IMAGE & CONTENT CONFIG         ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  This is the ONE file to edit when swapping photos or       ║
 * ║  updating copy. No admin panel needed.                      ║
 * ║                                                             ║
 * ║  HOW TO CHANGE A PHOTO:                                     ║
 * ║  Option A — Use a local file:                               ║
 * ║    1. Drop the image into the /images/ folder               ║
 * ║    2. Replace the URL below with: 'images/your-file.jpg'   ║
 * ║                                                             ║
 * ║  Option B — Use an online image:                            ║
 * ║    Replace the URL with any https:// image link             ║
 * ║                                                             ║
 * ║  Then save this file — the website picks it up instantly.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * NOTE: index.html and blog.html both load this file.
 * Images are applied automatically on page load.
 */

window.SITE = {

  // ── STORE DETAILS ────────────────────────────────────────────
  name:     'Lumière',
  tagline:  'Bespoke Fine Jewellers',
  address:  '1 Jewellers Row, London, EC1N 0XX',
  phone:    '+44 (0) 000 000 0000',
  email:    'hello@lumierejewellers.com',
  founded:  '1987',

  // ── HERO SLIDER ──────────────────────────────────────────────
  // Three slides shown in the homepage hero carousel
  hero: [
    {
      // SLIDE 1 IMAGE — recommend landscape, at least 1800×1000px
      image: 'https://images.unsplash.com/photo-1613396968513-87720ee8420c?w=1800&h=1000&fit=crop&q=85',
      eyebrow: 'New Collection 2025',
      title:   'Where Art<br>Meets <em>Jewellery</em>',
      desc:    'Handcrafted pieces of rare distinction, born from generations of mastery.',
      btn:     'Explore Collection',
      link:    '#categories'
    },
    {
      // SLIDE 2 IMAGE
      image: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=1800&h=1000&fit=crop&q=85',
      eyebrow: 'Signature Necklaces',
      title:   'From Concept<br>to <em>Creation</em>',
      desc:    'Every necklace we craft tells a story. Begin yours with a private consultation.',
      btn:     'Bespoke Design',
      link:    '#bespoke'
    },
    {
      // SLIDE 3 IMAGE
      image: 'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=1800&h=1000&fit=crop&q=85',
      eyebrow: 'The Ring Edit',
      title:   'Crafted to<br>Last <em>Forever</em>',
      desc:    'Our rings are more than jewellery — they are heirlooms set in precious metal.',
      btn:     'View Rings',
      link:    '#categories'
    }
  ],

  // ── CATEGORY CARD IMAGES ─────────────────────────────────────
  // These appear in the "Shop by Category" grid
  categories: {
    rings:     'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=600&h=1000&fit=crop&q=80',
    necklaces: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=600&h=500&fit=crop&q=80',
    bracelets: 'https://images.unsplash.com/photo-1723361656145-b481be3f9e05?w=600&h=500&fit=crop&q=80',
    earrings:  'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=600&h=500&fit=crop&q=80',
    bespoke:   'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=600&h=500&fit=crop&q=80',
  },

  // ── DETAIL PAGE HERO IMAGES ───────────────────────────────────
  // Full-width banner shown when a customer clicks into a category
  detailHero: {
    rings:     'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=1600&h=700&fit=crop&q=85',
    necklaces: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=1600&h=700&fit=crop&q=85',
    earrings:  'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=1600&h=700&fit=crop&q=85',
    bracelets: 'https://images.unsplash.com/photo-1723361656145-b481be3f9e05?w=1600&h=700&fit=crop&q=85',
    bespoke:   'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=1600&h=700&fit=crop&q=85',
  },

  // ── DETAIL PAGE GALLERY (3 images per category) ───────────────
  detailGallery: {
    rings: [
      'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1705854937134-dd130d90df5d?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587947330318-88fcd9055420?w=500&h=660&fit=crop&q=80',
    ],
    necklaces: [
      'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1704957205144-299bbf127891?w=500&h=660&fit=crop&q=80',
    ],
    earrings: [
      'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1721722299233-5f8c6e751e0a?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1735480165389-cb621e7d6756?w=500&h=660&fit=crop&q=80',
    ],
    bracelets: [
      'https://images.unsplash.com/photo-1723361656145-b481be3f9e05?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1702476320482-0736c4b962f5?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613396968513-87720ee8420c?w=500&h=660&fit=crop&q=80',
    ],
    bespoke: [
      'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=500&h=660&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=500&h=660&fit=crop&q=80',
    ],
  },

  // ── FEATURED PIECES (showcase section) ───────────────────────
  showcase: [
    {
      image:    'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=700&h=900&fit=crop&q=80',
      tag:      'Diamond',
      name:     'The Aurora Pendant',
      category: 'necklaces'  // which detail overlay to open on click
    },
    {
      image:    'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=700&h=900&fit=crop&q=80',
      tag:      '18ct Gold',
      name:     'Celestia Band',
      category: 'rings'
    },
    {
      image:    'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=700&h=900&fit=crop&q=80',
      tag:      'Sapphire',
      name:     'Soleil Earrings',
      category: 'earrings'
    },
  ],

  // ── ABOUT SECTION IMAGE ───────────────────────────────────────
  // Left-hand image in the "Our Story" section
  aboutImage: 'https://images.unsplash.com/photo-1613396968513-87720ee8420c?w=900&h=1100&fit=crop&q=85',

  // ── VISIT / STORE IMAGE ───────────────────────────────────────
  // Left-hand image in the "Visit the Atelier" section
  storeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=900&fit=crop&q=85',

  // ── MEGA MENU PREVIEW IMAGES ──────────────────────────────────
  megaImages: {
    jewellery: 'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=350&h=280&fit=crop&q=80',
    bespoke:   'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=300&h=260&fit=crop&q=80',
  },

};
