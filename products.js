/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         LUMIÈRE JEWELLERS — PRODUCT CATALOGUE               ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  To add a new product:                                      ║
 * ║    1. Find the correct category array below                 ║
 * ║    2. Copy an existing entry and paste at the TOP           ║
 * ║    3. Fill in the fields and save                           ║
 * ║                                                             ║
 * ║  Fields:                                                    ║
 * ║    id       — unique slug (e.g. 'my-ring-1')                ║
 * ║    name     — product name                                   ║
 * ║    price    — display price (e.g. '£450' or 'From £800')    ║
 * ║    material — metal (18ct Gold / White Gold / Rose Gold /   ║
 * ║               Platinum)                                     ║
 * ║    stone    — gemstone (Diamond / Sapphire / Ruby /         ║
 * ║               Emerald / Pearl / None)                       ║
 * ║    image    — URL to product image                          ║
 * ║    desc     — one-line description shown on the card        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

window.PRODUCTS = {

  // ── RINGS ────────────────────────────────────────────────────
  rings: [
    {
      id: 'r1',
      name: 'The Aurora Ring',
      price: '£450',
      material: 'White Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?q=900&h=1100&fit=crop&q=85',
      desc: 'A whisper-thin pavé band, set with F-colour round brilliants.'
    },
    {
      id: 'r2',
      name: 'Celestia Solitaire',
      price: '£1,250',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1705854937134-dd130d90df5d?w=600&h=600&fit=crop&q=80',
      desc: 'Classic four-claw solitaire with precision-cut round brilliant diamond.'
    },
    {
      id: 'r3',
      name: 'Lumière Band',
      price: '£620',
      material: '18ct Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1709150485687-b5ed84fd776c?w=600&h=600&fit=crop&q=80',
      desc: 'Sculpted 18ct yellow gold, burnished to a perfect mirror finish.'
    },
    {
      id: 'r4',
      name: 'Solstice Ring',
      price: '£890',
      material: 'Rose Gold',
      stone: 'Sapphire',
      image: 'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=600&h=600&fit=crop&q=80',
      desc: 'Oval sapphire cradled in blush rose gold with a diamond halo.'
    },
    {
      id: 'r5',
      name: 'Eclipse Band',
      price: '£340',
      material: 'White Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1706196612848-0cd22cb6231e?w=600&h=600&fit=crop&q=80',
      desc: 'Sleek knife-edge band in polished 18ct white gold.'
    },
    {
      id: 'r6',
      name: 'Dusk Trilogy',
      price: '£1,450',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1587947330318-88fcd9055420?w=600&h=600&fit=crop&q=80',
      desc: 'Three graduating diamonds in a shared-claw platinum setting.'
    },
    {
      id: 'r7',
      name: 'Rose Eternity',
      price: '£780',
      material: 'Rose Gold',
      stone: 'Ruby',
      image: 'https://images.unsplash.com/photo-1613396968513-87720ee8420c?w=600&h=600&fit=crop&q=80',
      desc: 'Channel-set rubies encircle the full band in warm rose gold.'
    },
    {
      id: 'r8',
      name: 'Meridian Ring',
      price: '£560',
      material: '18ct Gold',
      stone: 'Emerald',
      image: 'https://images.unsplash.com/photo-1719924998065-0c60e329ef58?w=600&h=600&fit=crop&q=80',
      desc: 'Vintage-inspired emerald cut stone set in warm 18ct yellow gold.'
    },
  ],

  // ── NECKLACES ────────────────────────────────────────────────
  necklaces: [
    {
      id: 'n1',
      name: 'The Aurora Pendant',
      price: '£680',
      material: 'White Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=600&h=600&fit=crop&q=80',
      desc: 'Floating diamond in a geometric white gold open setting.'
    },
    {
      id: 'n2',
      name: 'Pearl Étoile',
      price: '£420',
      material: '18ct Gold',
      stone: 'Pearl',
      image: 'https://images.unsplash.com/photo-1704957205144-299bbf127891?w=600&h=600&fit=crop&q=80',
      desc: 'South Sea pearl drop pendant on a delicate 18ct yellow gold chain.'
    },
    {
      id: 'n3',
      name: 'Stella Chain',
      price: '£390',
      material: 'Platinum',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=600&h=600&fit=crop&q=80',
      desc: 'Fine platinum trace chain, 45cm, with lobster clasp closure.'
    },
    {
      id: 'n4',
      name: 'Soleil Collar',
      price: '£1,100',
      material: '18ct Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1702476320482-0736c4b962f5?w=600&h=600&fit=crop&q=80',
      desc: 'Statement collar in warm 18ct gold with pavé diamond nodes.'
    },
    {
      id: 'n5',
      name: 'Iris Drop',
      price: '£520',
      material: 'White Gold',
      stone: 'Sapphire',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop&q=80',
      desc: 'Oval sapphire drop on a delicate 18ct white gold chain, 42cm.'
    },
    {
      id: 'n6',
      name: 'Crescent Pendant',
      price: '£310',
      material: 'Rose Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1719861837593-91dbdd0ed5a0?w=600&h=600&fit=crop&q=80',
      desc: 'Crescent moon charm in hand-brushed 18ct rose gold.'
    },
    {
      id: 'n7',
      name: 'Lune Rivière',
      price: '£2,200',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1719861837567-be44d2754d7e?w=600&h=600&fit=crop&q=80',
      desc: 'Graduated diamond rivière necklace, 1.8ct total weight, in platinum.'
    },
    {
      id: 'n8',
      name: 'Garden Pendant',
      price: '£445',
      material: '18ct Gold',
      stone: 'Emerald',
      image: 'https://images.unsplash.com/photo-1719861837626-c97f80462525?w=600&h=600&fit=crop&q=80',
      desc: 'Oval emerald in a floral 18ct gold surround, on a fine chain.'
    },
  ],

  // ── EARRINGS ─────────────────────────────────────────────────
  earrings: [
    {
      id: 'e1',
      name: 'Soleil Studs',
      price: '£380',
      material: 'White Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1723361656146-f201d215c49c?w=600&h=600&fit=crop&q=80',
      desc: 'Classic diamond studs in 18ct white gold, VS1 clarity, 0.5ct each.'
    },
    {
      id: 'e2',
      name: 'Cascade Drops',
      price: '£650',
      material: '18ct Gold',
      stone: 'Sapphire',
      image: 'https://images.unsplash.com/photo-1596213411964-ee96819a396c?w=600&h=600&fit=crop&q=80',
      desc: 'Graduated sapphire drops with round brilliant diamond accents.'
    },
    {
      id: 'e3',
      name: 'Eclipse Hoops',
      price: '£420',
      material: 'Rose Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1721722299233-5f8c6e751e0a?w=600&h=600&fit=crop&q=80',
      desc: 'Sleek oval hoops in 18ct rose gold, 30mm diameter.'
    },
    {
      id: 'e4',
      name: 'Dusk Chandelier',
      price: '£990',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1735480165389-cb621e7d6756?w=600&h=600&fit=crop&q=80',
      desc: 'Cascading chandelier earrings with round brilliant diamond cluster.'
    },
    {
      id: 'e5',
      name: 'Pearl Drops',
      price: '£310',
      material: '18ct Gold',
      stone: 'Pearl',
      image: 'https://images.unsplash.com/photo-1704957205144-299bbf127891?w=600&h=600&fit=crop&q=80',
      desc: 'Akoya pearl drop earrings with 18ct yellow gold fittings.'
    },
    {
      id: 'e6',
      name: 'Lumière Huggies',
      price: '£280',
      material: 'White Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1728063976181-03fe683338c1?w=600&h=600&fit=crop&q=80',
      desc: 'Miniature hoop earrings in polished 18ct white gold, 12mm.'
    },
    {
      id: 'e7',
      name: 'Star Studs',
      price: '£440',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1630019925419-5fc53b4a52cf?w=600&h=600&fit=crop&q=80',
      desc: 'Star-cut diamonds in rub-over bezel settings, 0.3ct each.'
    },
    {
      id: 'e8',
      name: 'Leaf Drops',
      price: '£520',
      material: '18ct Gold',
      stone: 'Emerald',
      image: 'https://images.unsplash.com/photo-1723361656145-b481be3f9e05?w=600&h=600&fit=crop&q=80',
      desc: 'Delicate leaf-shaped earrings set with pear-cut emeralds.'
    },
  ],

  // ── BRACELETS ────────────────────────────────────────────────
  bracelets: [
    {
      id: 'b1',
      name: 'Tennis Bracelet',
      price: '£1,800',
      material: 'White Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1723361656145-b481be3f9e05?w=600&h=600&fit=crop&q=80',
      desc: 'Classic four-claw tennis bracelet set with 3ct total diamond weight.'
    },
    {
      id: 'b2',
      name: 'Gold Bangle',
      price: '£480',
      material: '18ct Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1702476320482-0736c4b962f5?w=600&h=600&fit=crop&q=80',
      desc: 'Solid 18ct yellow gold bangle, 6mm width, polished finish.'
    },
    {
      id: 'b3',
      name: 'Sapphire Line',
      price: '£920',
      material: 'Platinum',
      stone: 'Sapphire',
      image: 'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=600&h=600&fit=crop&q=80',
      desc: 'Alternating sapphires and diamonds in a platinum line bracelet, 18cm.'
    },
    {
      id: 'b4',
      name: 'Rose Chain',
      price: '£360',
      material: 'Rose Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=600&h=600&fit=crop&q=80',
      desc: 'Fine trace Belcher chain in 18ct rose gold, 19cm with T-bar clasp.'
    },
    {
      id: 'b5',
      name: 'Charm Bangle',
      price: '£640',
      material: '18ct Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1587947330318-88fcd9055420?w=600&h=600&fit=crop&q=80',
      desc: 'Full pavé diamond bangle in 18ct gold with three floating star charms.'
    },
    {
      id: 'b6',
      name: 'Emerald Cuff',
      price: '£1,100',
      material: 'Platinum',
      stone: 'Emerald',
      image: 'https://images.unsplash.com/photo-1709150485687-b5ed84fd776c?w=600&h=600&fit=crop&q=80',
      desc: 'Open-ended cuff in platinum set with a single row of oval emeralds.'
    },
    {
      id: 'b7',
      name: 'Diamond Bangle',
      price: '£1,400',
      material: 'White Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1705854937134-dd130d90df5d?w=600&h=600&fit=crop&q=80',
      desc: 'Full-set pavé diamond bangle in 18ct white gold, 4mm.'
    },
    {
      id: 'b8',
      name: 'Ruby Bar',
      price: '£540',
      material: '18ct Gold',
      stone: 'Ruby',
      image: 'https://images.unsplash.com/photo-1613396968513-87720ee8420c?w=600&h=600&fit=crop&q=80',
      desc: 'Bar bracelet in 18ct yellow gold featuring a single bezel-set ruby.'
    },
  ],

  // ── BESPOKE ──────────────────────────────────────────────────
  bespoke: [
    {
      id: 'bs1',
      name: 'Heirloom Ring',
      price: 'From £800',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1653785481935-9bdf2184228e?w=600&h=600&fit=crop&q=80',
      desc: 'Reimagine a treasured stone in a new bespoke setting of your design.'
    },
    {
      id: 'bs2',
      name: 'Anniversary Band',
      price: 'From £650',
      material: '18ct Gold',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1726507367666-08c5f025bdf6?w=600&h=600&fit=crop&q=80',
      desc: 'Engrave a date, a word, or a meaning — hand-finished in gold.'
    },
    {
      id: 'bs3',
      name: 'Engagement Ring',
      price: 'From £1,200',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1705854937134-dd130d90df5d?w=600&h=600&fit=crop&q=80',
      desc: 'Your vision of the perfect proposal ring, realised by our goldsmiths.'
    },
    {
      id: 'bs4',
      name: 'Portrait Locket',
      price: 'From £550',
      material: '18ct Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1614146424692-384e5fbf4dd4?w=600&h=600&fit=crop&q=80',
      desc: 'Hand-engraved locket with space for two miniature framed portraits.'
    },
    {
      id: 'bs5',
      name: 'Birthstone Suite',
      price: 'From £420',
      material: 'Rose Gold',
      stone: 'Various',
      image: 'https://images.unsplash.com/photo-1704957205144-299bbf127891?w=600&h=600&fit=crop&q=80',
      desc: 'A set of matching pieces featuring one birthstone per family member.'
    },
    {
      id: 'bs6',
      name: 'Signet Ring',
      price: 'From £480',
      material: '18ct Gold',
      stone: 'None',
      image: 'https://images.unsplash.com/photo-1719924998065-0c60e329ef58?w=600&h=600&fit=crop&q=80',
      desc: 'Hand-engraved family crest or monogram on a classic flat-top signet.'
    },
    {
      id: 'bs7',
      name: 'Wedding Set',
      price: 'From £1,800',
      material: 'Platinum',
      stone: 'Diamond',
      image: 'https://images.unsplash.com/photo-1587947330318-88fcd9055420?w=600&h=600&fit=crop&q=80',
      desc: 'Matched engagement and wedding band designed and crafted together.'
    },
    {
      id: 'bs8',
      name: 'Memorial Pendant',
      price: 'From £600',
      material: 'White Gold',
      stone: 'Pearl',
      image: 'https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=600&h=600&fit=crop&q=80',
      desc: 'Incorporating ashes or a lock of hair into a lasting keepsake piece.'
    },
  ],

};
