const sampleResponse = [
  {
    id: 43,
    date: "2021-06-08T07:37:45",
    date_gmt: "2021-06-08T07:37:45",
    guid: {
      rendered: "https://photodir.zack.cat/?post_type=photo&#038;p=43",
    },
    modified: "2021-06-08T07:37:45",
    modified_gmt: "2021-06-08T07:37:45",
    slug: "56560bf1d6",
    status: "publish",
    type: "photo",
    link: "https://photodir.zack.cat/photo/56560bf1d6/",
    title: { rendered: "56560bf1d6" },
    content: {
      rendered: "<p>Lupinus polyphyllus (aka Washington lupine)</p>\n",
      protected: false,
    },
    author: 3606,
    featured_media: 44,
    template: "",
    meta: { spay_email: "" },
    "photo-categories": [8],
    "photo-colors": [15, 36],
    "photo-orientations": [24],
    "photo-tags": [35, 28],
    _links: {
      self: [{ href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/43" }],
      collection: [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos" },
      ],
      about: [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/types/photo" },
      ],
      author: [
        {
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/users/3606",
        },
      ],
      "version-history": [
        {
          count: 1,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/43/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 45,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/43/revisions/45",
        },
      ],
      "wp:featuredmedia": [
        {
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/media/44",
        },
      ],
      "wp:attachment": [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/media?parent=43" },
      ],
      "wp:term": [
        {
          taxonomy: "photo_category",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-categories?post=43",
        },
        {
          taxonomy: "photo_color",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-colors?post=43",
        },
        {
          taxonomy: "photo_orientation",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-orientations?post=43",
        },
        {
          taxonomy: "photo_tag",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-tags?post=43",
        },
      ],
      curies: [
        { name: "wp", href: "https://api.fake.com/{rel}", templated: true },
      ],
    },
  },
  {
    id: 39,
    date: "2021-05-28T07:00:43",
    date_gmt: "2021-05-28T07:00:43",
    guid: {
      rendered: "https://photodir.zack.cat/?post_type=photo&#038;p=39",
    },
    modified: "2021-06-08T07:36:05",
    modified_gmt: "2021-06-08T07:36:05",
    slug: "97060b0951",
    status: "publish",
    type: "photo",
    link: "https://photodir.zack.cat/photo/97060b0951/",
    title: { rendered: "97060b0951" },
    content: {
      rendered: "<p>Crescent moon, pine trees, and mountains.</p>\n",
      protected: false,
    },
    author: 3606,
    featured_media: 40,
    template: "",
    meta: { spay_email: "" },
    "photo-categories": [8],
    "photo-colors": [16],
    "photo-orientations": [23],
    "photo-tags": [27, 32, 34, 33, 26, 31],
    _links: {
      self: [{ href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/39" }],
      collection: [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos" },
      ],
      about: [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/types/photo" },
      ],
      author: [
        {
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/users/3606",
        },
      ],
      "version-history": [
        {
          count: 1,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/39/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 41,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photos/39/revisions/41",
        },
      ],
      "wp:featuredmedia": [
        {
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/media/40",
        },
      ],
      "wp:attachment": [
        { href: "https://photodir.zack.cat/api/wp-json/wp/v2/media?parent=39" },
      ],
      "wp:term": [
        {
          taxonomy: "photo_category",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-categories?post=39",
        },
        {
          taxonomy: "photo_color",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-colors?post=39",
        },
        {
          taxonomy: "photo_orientation",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-orientations?post=39",
        },
        {
          taxonomy: "photo_tag",
          embeddable: true,
          href: "https://photodir.zack.cat/api/wp-json/wp/v2/photo-tags?post=39",
        },
      ],
      curies: [
        { name: "wp", href: "https://api.fake.com/{rel}", templated: true },
      ],
    },
  },
];

export default function (req, res) {
  res.setHeader("x-wp-total", 2);
  res.setHeader("x-wp-totalpages", 1);
  res.json(sampleResponse);
}
