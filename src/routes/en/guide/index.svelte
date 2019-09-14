<script>
  import { scrollTo } from "../../../scroll.js";

  const content = [
    { id: "#first", name: "Map" },
    { id: "#second", name: "Nature" },
    { id: "#third", name: "Locations" },
    { id: "#fourth", name: "Restaurants" },
    { id: "#fifth", name: "Hotels" },
    { id: "#sixth", name: "Interesting" },
  ];
</script>

<svelte:head>
  <title>GUIDE</title>
  <meta
    name="Description"
    content="There are a lot of interesting and cool places in Sukhum, where you can look at our culture and history, eat and get the rest. You need the guide. Let's take a look"
  />
  <meta itemprop="name" content="GUIDE" />
  <meta
    itemprop="description"
    content="There are a lot of interesting and cool places in Sukhum, where you can look at our culture and history, eat and get the rest. You need the guide. Let's take a look"
  />
  <meta property="og:url" content="https://cyxym.now.sh/en/guide" />
  <meta property="og:title" content="GUIDE" />
  <meta
    property="og:description"
    content="There are a lot of interesting and cool places in Sukhum, where you can look at our culture and history, eat and get the rest. You need the guide. Let's take a look"
  />
  <meta name="twitter:url" content="https://cyxym.now.sh/en/guide" />
  <meta name="twitter:title" content="GUIDE" />
  <meta
    name="twitter:description"
    content="There are a lot of interesting and cool places in Sukhum, where you can look at our culture and history, eat and get the rest. You need the guide. Let's take a look"
  />
  <meta name="apple-mobile-web-app-title" content="GUIDE" />
</svelte:head>

<h1>GUIDE</h1>
<figure>
  <img src="images/guide-main.jpg" alt="Beautiful Sukhum" />
</figure>
<nav>
  {#each content as item}
  <button href="{item.id}" on:click="{scrollTo}">{item.name}</button>
  {/each}
</nav>
<h2 id="first">Map</h2>
<figure>
  <img src="images/guide-1.jpg" alt="Map of the Sukhum" loading="lazy" />
  <figcaption>Map of the Sukhum</figcaption>
</figure>
<h2 id="second">Nature</h2>
<h3>Flowers</h3>
<figure>
  <img
    src="images/guide-2.jpg"
    alt="Nature of the Sukhum: red flowers"
    loading="lazy"
  />
  <img
    src="images/guide-3.jpg"
    alt="Nature of the Sukhum: white flowers"
    loading="lazy"
  />
  <figcaption>Flowers (Photogrpaher: Lana Amichba)</figcaption>
</figure>
<p>
  The nature of the city of Sukhumi is beautiful: many flowers of different
  shapes and colors, trees, mountains, sea. There is so much vegetation because
  the climate is good: the air in winter is warm, because the Caucasus mountains
  are kept from bad weather and snowfalls, and in summer it is cool, because the
  wind blows from the sea. You don't have to go to gardens and parks to see
  flowers - they are everywhere in the streets.
</p>
<h3>Sunset</h3>
<figure>
  <img
    src="images/guide-4.jpg"
    alt="Nature of the Sukhum: sea and sunset"
    loading="lazy"
  />
  <img src="images/guide-5.jpg" alt="Nature of Sukhum: sunset" loading="lazy" />
  <figcaption>Sunset (Photogrpaher: Lana Amichba)</figcaption>
</figure>
<p>
  Sunsets decorate vegetation and add colors to it. The best way to do that is
  to go to the beach and enjoy the sunsets. In the summer from 19:30 the sun
  sets and looks beautiful both in clear and cloudy weather.
</p>
<h2 id="third">Locations</h2>
<p>
  Sukhumi is a tourist city. It is comfortable for active and passive
  recreation: there are historical and cultural places like the Museum of Combat
  Glory or dramatic theatres, natural places in the city - a botanical garden -
  and outside it - a nut grove, and also places to stop - we have a lot of
  hotels.
</p>
<figure>
  <img
    src="images/guide-6.jpg"
    alt="Abkhazian Dramatic theatre"
    loading="lazy"
  />
  <figcaption>Abkhazian Dramatic theatre</figcaption>
</figure>
<figure>
  <img src="images/guide-7.jpg" alt="Russian Dramatic theatre" loading="lazy" />
  <figcaption>Russian Dramatic theatre</figcaption>
</figure>
<h2 id="fourth">Restaurants</h2>
<p>
  Sukhum has restaurants for every taste: with Abkhazian cuisine, American
  fastfood, Japanese food and mixed, closed and open with the view on sea.
</p>
<h3>Nartaa</h3>
<figure>
  <img src="images/guide-8.jpg" alt="Nartaa" loading="lazy" />
  <figcaption>Nartaa</figcaption>
</figure>
<p>
  Nartaa is a restaurant with local cuisine. It looks similar to the Abkhazian
  big courtyard from national literature tales — it gives a ffeling of buind in
  an Abkhazian welcoming family. Nartaa has an open space with a blowing wind,
  or closed places, to hide from the rain.
</p>
<p>
  The main food is khachapur-boat, mamalyga, meat and salads. Cooks in Naarta
  are cooking other food, that looks more familiar to tourists, like a pizza,
  but the point is in local cuisine.
</p>
<h3>Country Chicken</h3>
<figure>
  <img src="images/guide-9.jpg" alt="Country Chicken" loading="lazy" />
  <figcaption>Country Chicken</figcaption>
</figure>
<p>
  Country Chicken is a replace for Macdonalds and KFC, favorite place of younger
  people — they are going to other places, but always return to Country Chicken.
  The facility is decorated in the Australian style with geographic places,
  pictures of Australia and other attributes.
</p>
<p>
  Free WiFi, familiar fastfood, which is often better than in other popular
  analogs. American cuisine with a bit of Abkhazia.
</p>
<h2 id="fifth">Hotels</h2>
<p>
  There are a lot of places to stay: local people rent out their flats, hotel
  rooms, cottages and houses. People meet tourists with Abkhazian hospitality.
  We have all — cheap flats and luxury hotels.
</p>
<h3>Leon</h3>
<figure>
  <img src="images/guide-10.jpg" alt="Hotel-restaurant Leon" loading="lazy" />
  <figcaption>Hotel-restaurant Leon</figcaption>
</figure>
<p>
  Leon is about economy or luxury room. Building looks beautiful, no shame to
  take a picture and have a parking area. Next to the hotel there is a
  restaurant, where are a lot of lounges with different design even in Japanese
  style.
</p>
<h3>Ritsa</h3>
<figure>
  <img src="images/guide-11.jpg" alt="Hotel Ritsa" loading="lazy" />
  <figcaption>Hotel Ritsa</figcaption>
</figure>
<p>
  Ritsa is a long story hotel. Sukhum was a very famous place because of Ritsa.
  Famous people from Russia and entire world loved to stay here. They came here
  once and came back later every year.
</p>
<h3>Atrium-Victoriya</h3>
<figure>
  <img src="images/guide-12.jpg" alt="Atrium-Victoriya" loading="lazy" />
  <figcaption>Atrium-Victoriya</figcaption>
</figure>
<p>
  Atrium-Victoriya is located 400 mrtrts from the Sukhum's bay and nearn to
  city's center. Which means that most of the properties are a 15-minute walk
  away. Advantage of Atrium-Victoria is a conference lounge, where entrepreneurs
  and investors are having their meetings and presentations.
</p>
<p>
  You can book the room from Booking and TripAdvisor.
</p>
<h2 id="sixth">Interesting</h2>
<h3>Embankment colonnade</h3>
<figure>
  <img src="images/guide-13.jpg" alt="Paintings on colonnade" loading="lazy" />
  <figcaption>Paintings on colonnade</figcaption>
</figure>
<p>
  Colonnade is an architectural particularity of the Sukhum. Once all Sukhum's
  artists decided to exhibit their paintings here and now colonnade is a free
  exhibition under the sky. If you like painting, you can buy it. Most of works
  is a still lifes and embakment paintings, but you can also find abstractions
  and portraits.
</p>
<h3>Abkhazian state museum</h3>
<figure>
  <img src="images/guide-14.jpg" alt="Dolmen" loading="lazy" />
  <figcaption>Dolmen</figcaption>
</figure>
<p>
  More than 60 dolmens have been found in Abkhazia and one of them is located in
  this museum. Dolmens is a stone houses from five slabs. A lot of legends are
  related to dolmens. They have been built in III-II millennia BC.
</p>
<p>
  There are fossils, which depict ancient nature of Abkhazia and culture items
  of people, who lived here BC and AC, in museum. It becomes clear what people
  were doing then and how they evolved.
</p>
<h3>Sukhum botanical garden</h3>
<figure>
  <img src="images/guide-15.jpg" alt="Botanical garden" loading="lazy" />
  <figcaption>Botanical garden</figcaption>
</figure>
<p>
  If you have already learned about the cuisine, culture and history, it's time
  to go to the botanical garden. In the garden you can walk on your own, or you
  can get a ticket with the excursion. There is vegetation from Australia, South
  and North America, Africa, Europe and Asia.
</p>
<h3>Monkey nursery</h3>
<figure>
  <img src="images/guide-16.jpg" alt="Monkey nursery" loading="lazy" />
  <figcaption>Monkey nursery</figcaption>
</figure>
<p>
  We're going to continue the tour of nature — now the fauna — a monkey nursery.
  To get to the nursery you need to pass the top of a mountain Trapeze on a
  ladder. It was created in the late 20s of the last century for scientific
  purposes. Scientists wanted to investigate the life of monkeys in the climatic
  conditions of Sukhum and Abkhazia. Monkeys got used to it well, so the nursery
  became open for visitors. There are 300 monkeys here.
</p>
